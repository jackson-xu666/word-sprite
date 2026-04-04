/**
 * 单词精灵 - 主应用逻辑
 * 核心特色：养精灵 + 间隔重复 + 趣味挑战
 */
const App = (() => {
    // ===== 数据状态 =====
    const STORAGE_KEY = 'word_sprite_data';
    let state = loadState();

    // 精灵进化表
    const PET_EVOLUTION = {
        fire: ['🥚', '🐣', '🐤', '🐦', '🦅', '🐉'],
        water: ['🥚', '🐣', '🐟', '🐠', '🐬', '🐋'],
        leaf:  ['🥚', '🐣', '🐛', '🦋', '🦚', '🦄']
    };
    const PET_NAMES = {
        fire: ['小火苗', '火焰鸟', '烈焰龙'],
        water: ['小水滴', '小锦鲤', '海洋之心'],
        leaf:  ['小嫩芽', '花蝴蝶', '森林精灵']
    };
    const MOODS = ['开心极了！', '状态不错~', '心情还好', '有点无聊...', '想你了！快来学习吧'];

    // 成就系统
    const ACHIEVEMENTS = [
        { id: 'first', emoji: '🌟', name: '初出茅庐', desc: '学完第一个词', check: s => s.totalLearned >= 1 },
        { id: 'ten', emoji: '🎯', name: '小有所成', desc: '学会10个词', check: s => s.totalLearned >= 10 },
        { id: 'fifty', emoji: '🏅', name: '词汇达人', desc: '学会50个词', check: s => s.totalLearned >= 50 },
        { id: 'hundred', emoji: '👑', name: '百词斩', desc: '学会100个词', check: s => s.totalLearned >= 100 },
        { id: 'streak3', emoji: '🔥', name: '三天小灶', desc: '连续学习3天', check: s => s.streak >= 3 },
        { id: 'streak7', emoji: '💪', name: '坚持不懈', desc: '连续学习7天', check: s => s.streak >= 7 },
        { id: 'streak30', emoji: '🏆', name: '习惯养成', desc: '连续学习30天', check: s => s.streak >= 30 },
        { id: 'perfect', emoji: '💯', name: '全对达人', desc: '复习全对一次', check: s => s.perfectReviews >= 1 },
        { id: 'fast', emoji: '⚡', name: '闪电手', desc: '挑战赛得分>50', check: s => s.bestChallengeScore >= 50 },
        { id: 'master', emoji: '🎓', name: '单词大师', desc: '掌握50个词', check: s => s.masteredCount >= 50 },
        { id: 'energy', emoji: '⚡', name: '能量满满', desc: '累计获得100能量', check: s => s.totalEnergy >= 100 },
        { id: 'egg', emoji: '🥚', name: '破壳而出', desc: '精灵孵化', check: s => s.petLevel >= 1 },
    ];

    // ===== 状态管理 =====
    function defaultState() {
        return {
            userName: '',
            grade: 4,
            textbook: 'PEP_4上',
            petType: null,
            petLevel: 0,
            petExp: 0,
            energy: 0,
            totalEnergy: 0,
            streak: 0,
            lastStudyDate: null,
            words: {},
            totalLearned: 0,
            masteredCount: 0,
            perfectReviews: 0,
            bestChallengeScore: 0,
            achievements: [],
            dailyStats: {},
            dailyGoal: 10,
            dailyLearned: 0,
            todayKey: getTodayKey(),
            setupDone: false,
        };
    }

    function loadState() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                // 迁移老数据：如果没有 textbook 字段，根据 grade 生成默认教材
                if (!parsed.textbook && parsed.grade) {
                    parsed.textbook = `PEP_${parsed.grade}上`;
                }
                return { ...defaultState(), ...parsed };
            }
        } catch (e) {}
        return defaultState();
    }

    function saveState() {
        state.todayKey = getTodayKey();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function getTodayKey() {
        return new Date().toISOString().split('T')[0];
    }

    // ===== 间隔重复算法 (SM-2变体) =====
    function calculateNextReview(wordState, quality) {
        let { ease = 2.5, interval = 0, repetitions = 0 } = wordState;

        if (quality < 3) {
            repetitions = 0;
            interval = 1;
        } else {
            if (repetitions === 0) interval = 1;
            else if (repetitions === 1) interval = 3;
            else interval = Math.round(interval * ease);
            repetitions++;
        }

        ease = Math.max(1.3, ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));

        const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000;

        return {
            ...wordState,
            ease,
            interval,
            repetitions,
            nextReview,
            lastReview: Date.now(),
        };
    }

    function getWordState(word) {
        const key = `${state.textbook}_${word}`;
        return state.words[key] || {
            word,
            status: 'new',
            ease: 2.5,
            interval: 0,
            repetitions: 0,
            nextReview: 0,
            lastReview: 0,
        };
    }

    // ===== 单词获取 =====
    function getWordsForTextbook() {
        const book = WORD_DB[state.textbook];
        if (!book) return [];
        // 返回所有单元的词汇合并
        const allWords = [];
        for (const unit of Object.values(book.units)) {
            allWords.push(...unit.words);
        }
        return allWords;
    }

    function getNewWords() {
        const words = getWordsForTextbook();
        return words.filter(w => {
            const ws = getWordState(w.word);
            return ws.status === 'new';
        });
    }

    function getReviewWords() {
        const now = Date.now();
        const words = getWordsForTextbook();
        return words.filter(w => {
            const ws = getWordState(w.word);
            return ws.status !== 'new' && ws.nextReview <= now;
        });
    }

    // ===== 侧边栏管理 =====
    function updateSidebar() {
        // 更新侧边栏用户信息
        const sidebarAvatar = document.getElementById('sidebar-avatar');
        const sidebarUsername = document.getElementById('sidebar-username');
        if (sidebarAvatar) sidebarAvatar.textContent = getPetEmoji();
        if (sidebarUsername) sidebarUsername.textContent = state.userName || '未设置';
    }

    function highlightNav(screenId) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.screen === screenId) {
                item.classList.add('active');
            }
        });
    }

    // ===== 屏幕管理 =====
    function showScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const screen = document.getElementById(id);
        if (screen) screen.classList.add('active');

        // 设置模式下隐藏侧边栏
        const setupScreens = ['splash-screen', 'name-screen', 'egg-screen', 'textbook-screen'];
        if (setupScreens.includes(id)) {
            document.body.classList.add('setup-mode');
        } else {
            document.body.classList.remove('setup-mode');
        }

        // 更新侧边栏高亮
        highlightNav(id);
        updateSidebar();

        // 屏幕切换时更新数据
        if (id === 'home-screen') updateHome();
        if (id === 'stats-screen') updateStats();
        if (id === 'wordbook-screen') {
            renderUnitTabs();
            renderWordbook();
        }
        if (id === 'profile-screen') updateProfile();
    }

    // ===== 应用启动 =====
    function start() {
        if (!state.setupDone) {
            showScreen('name-screen');
        } else {
            checkStreak();
            showScreen('home-screen');
        }
    }

    function setName() {
        const name = document.getElementById('user-name').value.trim();
        if (!name) {
            document.getElementById('user-name').style.borderColor = '#E74C3C';
            return;
        }
        state.userName = name;
        saveState();
        document.getElementById('egg-greeting').textContent = `${name}，选一只精灵蛋吧！`;
        showScreen('egg-screen');
    }

    function choosePet(type) {
        state.petType = type;
        saveState();

        const eggEl = document.querySelector('.pet-emoji');
        if (eggEl) eggEl.style.animation = 'hatch 0.8s ease';

        // 选完精灵后进入教材选择
        showScreen('textbook-screen');
    }

    function selectTextbook(textbook) {
        state.textbook = textbook;
        const book = WORD_DB[textbook];
        if (book) state.grade = book.grade;
        state.setupDone = true;
        saveState();
        showScreen('home-screen');
    }

    // ===== 今日推荐单词 =====
    let _dailyWord = null;

    function getDailyWord() {
        const allWords = getWordsForTextbook();
        if (allWords.length === 0) return null;
        // 基于日期生成稳定的索引
        const today = getTodayKey();
        let hash = 0;
        for (let i = 0; i < today.length; i++) {
            hash = ((hash << 5) - hash) + today.charCodeAt(i);
            hash |= 0;
        }
        const idx = Math.abs(hash) % allWords.length;
        return allWords[idx];
    }

    function renderDailyWord() {
        const word = getDailyWord();
        if (!word) return;
        _dailyWord = word;

        document.getElementById('daily-word-emoji').textContent = word.emoji;
        document.getElementById('daily-word-en').textContent = word.word;
        document.getElementById('daily-word-cn').textContent = word.meaning;

        const ws = getWordState(word.word);
        const statusEl = document.getElementById('daily-word-status');
        if (ws.status === 'mastered') {
            statusEl.textContent = '已掌握';
            statusEl.className = 'daily-word-status mastered-word';
        } else if (ws.status === 'learning') {
            statusEl.textContent = '学习中';
            statusEl.className = 'daily-word-status learning-word';
        } else {
            statusEl.textContent = '新发现';
            statusEl.className = 'daily-word-status new-word';
        }
    }

    function speakDailyWord() {
        if (_dailyWord && 'speechSynthesis' in window) {
            const u = new SpeechSynthesisUtterance(_dailyWord.word);
            u.lang = 'en-US';
            u.rate = 0.8;
            speechSynthesis.speak(u);
        }
    }

    // ===== 精灵互动 =====
    const PET_REACTIONS = {
        feed: ['好饱好饱~', '真好吃！', '吃饱了有力气学习！', '谢谢投喂~'],
        pet: ['好舒服~', '嘻嘻~', '还要还要！', '最喜欢你了！'],
        play: ['好开心！', '再来一次！', '太好玩了~', '冲冲冲！'],
    };

    function interactPet(action) {
        if (state.energy < 3) {
            const el = document.getElementById('pet-reaction-text');
            el.textContent = '💤 能量不足，快去学习吧！';
            el.style.color = '#E67E22';
            return;
        }

        state.energy -= 3;
        saveState();
        document.getElementById('energy-count').textContent = state.energy;

        const reactions = PET_REACTIONS[action] || PET_REACTIONS.play;
        const reaction = reactions[Math.floor(Math.random() * reactions.length)];
        const el = document.getElementById('pet-reaction-text');
        el.textContent = reaction;
        el.style.color = '';

        // 精灵动画反馈
        const petEl = document.getElementById('pet-emoji');
        petEl.style.animation = 'none';
        petEl.offsetHeight; // 触发重排
        petEl.style.animation = action === 'feed' ? 'bounce 0.6s ease' :
                                action === 'pet' ? 'pulse 0.6s ease' : 'hatch 0.6s ease';
        setTimeout(() => {
            petEl.style.animation = 'wobble 4s ease-in-out infinite';
        }, 700);
    }

    // ===== 最近成就 =====
    function renderRecentAchievements() {
        const container = document.getElementById('achievement-list');
        container.innerHTML = '';

        if (state.achievements.length === 0) {
            container.innerHTML = '<div class="achievement-empty">继续学习解锁成就吧~</div>';
            return;
        }

        // 取最近3个成就
        const recent = state.achievements.slice(-3).reverse();
        recent.forEach(id => {
            const ach = ACHIEVEMENTS.find(a => a.id === id);
            if (!ach) return;
            const row = document.createElement('div');
            row.className = 'achievement-row';
            row.innerHTML = `
                <span class="ach-r-emoji">${ach.emoji}</span>
                <span class="ach-r-name">${ach.name}</span>
                <span class="ach-r-tag">已解锁</span>
            `;
            container.appendChild(row);
        });
    }

    // ===== 精灵系统 =====
    function getPetEmoji() {
        if (!state.petType) return '🥚';
        const evolutions = PET_EVOLUTION[state.petType];
        const idx = Math.min(state.petLevel, evolutions.length - 1);
        return evolutions[idx];
    }

    function getPetName() {
        if (!state.petType) return '精灵蛋';
        const names = PET_NAMES[state.petType];
        const nameIdx = Math.min(Math.floor(state.petLevel / 2), names.length - 1);
        return names[nameIdx];
    }

    function getPetMood() {
        const daysSince = state.lastStudyDate ?
            Math.floor((Date.now() - new Date(state.lastStudyDate).getTime()) / 86400000) : 999;
        if (daysSince === 0) return MOODS[0];
        if (daysSince === 1) return MOODS[2];
        if (daysSince >= 2) return MOODS[4];
        return MOODS[1];
    }

    function addExp(amount) {
        state.petExp += amount;
        state.totalEnergy += amount;
        state.energy += amount;

        const newLevel = Math.floor(state.petExp / 50);
        if (newLevel > state.petLevel) {
            state.petLevel = newLevel;
            showCelebration('levelup');
        }

        saveState();
    }

    // ===== 连续天数 =====
    function checkStreak() {
        const today = getTodayKey();
        if (state.lastStudyDate === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayKey = yesterday.toISOString().split('T')[0];

        if (state.lastStudyDate === yesterdayKey) {
            // 连续
        } else if (state.lastStudyDate !== today) {
            state.streak = 0;
            state.dailyLearned = 0;
        }

        if (state.todayKey !== today) {
            state.todayKey = today;
            state.dailyLearned = 0;
        }

        saveState();
    }

    function markStudyToday() {
        const today = getTodayKey();
        if (state.lastStudyDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yk = yesterday.toISOString().split('T')[0];
            state.streak = (state.lastStudyDate === yk) ? state.streak + 1 : 1;
            state.lastStudyDate = today;
        }
    }

    // ===== 首页更新 =====
    function updateHome() {
        document.getElementById('home-user-name').textContent = state.userName || '小朋友';
        document.getElementById('home-streak').textContent = `🔥 ${state.streak}天`;

        // 显示当前教材信息
        const book = WORD_DB[state.textbook];
        const textbookTag = document.getElementById('home-textbook-tag');
        if (textbookTag && book) {
            textbookTag.textContent = `📖 ${book.name}`;
        }

        // 精灵
        document.getElementById('pet-emoji').textContent = getPetEmoji();
        document.getElementById('pet-name-tag').textContent = getPetName();
        document.getElementById('pet-mood').textContent = getPetMood();

        // 经验条
        const level = state.petLevel + 1;
        const expInLevel = state.petExp % 50;
        document.getElementById('exp-bar').style.width = `${(expInLevel / 50) * 100}%`;
        document.getElementById('exp-text').textContent = `Lv.${level}`;
        document.getElementById('energy-count').textContent = state.energy;

        // 按钮计数
        const newWords = getNewWords();
        const reviewWords = getReviewWords();
        document.getElementById('new-word-count').textContent = `${newWords.length}个新词`;
        document.getElementById('review-count').textContent = `${reviewWords.length}个待复习`;
        document.getElementById('total-words').textContent = `已学${state.totalLearned}词`;

        // 今日目标
        const progress = Math.min(state.dailyLearned / state.dailyGoal, 1);
        document.getElementById('goal-fill').style.width = `${progress * 100}%`;
        document.getElementById('goal-text').textContent = `${state.dailyLearned}/${state.dailyGoal} 词`;

        // 快速统计
        updateQuickStats();

        // 今日推荐单词
        renderDailyWord();

        // 最近成就
        renderRecentAchievements();

        checkAchievements();
    }

    function updateQuickStats() {
        const qsLearned = document.getElementById('qs-learned');
        const qsMastered = document.getElementById('qs-mastered');
        const qsStreak = document.getElementById('qs-streak');
        const qsAccuracy = document.getElementById('qs-accuracy');

        if (qsLearned) qsLearned.textContent = state.totalLearned;
        if (qsMastered) qsMastered.textContent = state.masteredCount;
        if (qsStreak) qsStreak.textContent = state.streak;

        let totalCorrect = 0, totalAttempts = 0;
        Object.values(state.dailyStats).forEach(d => {
            totalCorrect += d.correct || 0;
            totalAttempts += d.total || 0;
        });
        const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
        if (qsAccuracy) qsAccuracy.textContent = `${accuracy}%`;
    }

    // ===== 学习模式 =====
    let learnQueue = [];
    let learnIndex = 0;

    function startLearn() {
        const newWords = getNewWords();
        if (newWords.length === 0) {
            alert('今天的新词都学完啦！去复习吧~');
            return;
        }

        learnQueue = shuffle(newWords).slice(0, 5);
        learnIndex = 0;
        renderLearnProgress();
        showLearnCard();
        showScreen('learn-screen');
    }

    function renderLearnProgress() {
        const container = document.getElementById('learn-progress');
        container.innerHTML = '';
        for (let i = 0; i < learnQueue.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'progress-dot' +
                (i < learnIndex ? ' done' : '') +
                (i === learnIndex ? ' current' : '');
            container.appendChild(dot);
        }
    }

    function showLearnCard() {
        if (learnIndex >= learnQueue.length) {
            finishLearn();
            return;
        }

        const word = learnQueue[learnIndex];
        document.getElementById('learn-word').textContent = word.word;
        document.getElementById('learn-phonetic').textContent = word.phonetic;
        document.getElementById('learn-meaning').classList.add('hidden');
        document.getElementById('learn-example').classList.add('hidden');
        document.getElementById('learn-image-hint').classList.add('hidden');
        document.getElementById('btn-show-answer').classList.remove('hidden');
        document.getElementById('rate-buttons').classList.add('hidden');

        renderLearnProgress();
    }

    function showAnswer() {
        const word = learnQueue[learnIndex];
        document.getElementById('learn-meaning').textContent = word.meaning;
        document.getElementById('learn-meaning').classList.remove('hidden');
        document.getElementById('learn-example').innerHTML = word.example;
        document.getElementById('learn-example').classList.remove('hidden');
        document.getElementById('learn-image-hint').textContent = word.emoji;
        document.getElementById('learn-image-hint').classList.remove('hidden');

        document.getElementById('btn-show-answer').classList.add('hidden');
        document.getElementById('rate-buttons').classList.remove('hidden');

        speakWord();
    }

    function rateWord(quality) {
        const word = learnQueue[learnIndex];
        const key = `${state.textbook}_${word.word}`;
        let ws = getWordState(word.word);

        ws = calculateNextReview(ws, quality);
        ws.status = quality >= 3 ? 'learning' : 'new';
        state.words[key] = ws;

        if (ws.status === 'learning') {
            state.totalLearned++;
            state.dailyLearned++;
            addExp(5);
            markStudyToday();

            const today = getTodayKey();
            if (!state.dailyStats[today]) state.dailyStats[today] = { learned: 0, reviewed: 0, correct: 0, total: 0 };
            state.dailyStats[today].learned++;
        }

        saveState();
        learnIndex++;
        showLearnCard();
    }

    function finishLearn() {
        const learned = learnQueue.length;
        showCelebration('learn', { count: learned });
    }

    function speakWord() {
        const word = learnIndex < learnQueue.length ? learnQueue[learnIndex].word : '';
        if (word && 'speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    }

    // ===== 复习模式 =====
    let reviewQueue = [];
    let reviewIndex = 0;
    let reviewCorrect = 0;

    function startReview() {
        const reviewWords = getReviewWords();
        if (reviewWords.length === 0) {
            const allLearned = getWordsForTextbook().filter(w => {
                const ws = getWordState(w.word);
                return ws.status !== 'new';
            });
            if (allLearned.length === 0) {
                alert('还没有学过的词哦，先去学新词吧！');
                return;
            }
            reviewQueue = shuffle(allLearned).slice(0, 10);
        } else {
            reviewQueue = shuffle(reviewWords).slice(0, 10);
        }

        reviewIndex = 0;
        reviewCorrect = 0;
        showScreen('review-screen');
        showReviewQuestion();
    }

    function showReviewQuestion() {
        if (reviewIndex >= reviewQueue.length) {
            finishReview();
            return;
        }

        const word = reviewQueue[reviewIndex];
        document.getElementById('review-counter').textContent = `${reviewIndex + 1}/${reviewQueue.length}`;
        document.getElementById('review-feedback').classList.add('hidden');
        document.getElementById('review-card').classList.remove('hidden');

        const isEnToCn = Math.random() > 0.3;
        const allWords = getWordsForTextbook();

        if (isEnToCn) {
            document.getElementById('review-question').textContent = `"${word.word}" 是什么意思？`;
            const options = generateOptions(word, allWords, 'meaning');
            renderOptions(options, word.meaning);
        } else {
            document.getElementById('review-question').textContent = `"${word.meaning}" 的英文是？`;
            const options = generateOptions(word, allWords, 'word');
            renderOptions(options, word.word);
        }
    }

    function generateOptions(correct, allWords, field) {
        const options = [{ text: correct[field], correct: true }];
        const others = allWords.filter(w => w.word !== correct.word);
        const shuffled = shuffle(others).slice(0, 3);
        shuffled.forEach(w => options.push({ text: w[field], correct: false }));
        return shuffle(options);
    }

    function renderOptions(options, correctAnswer) {
        const container = document.getElementById('review-options');
        container.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'review-option';
            btn.textContent = opt.text;
            btn.onclick = () => checkReviewAnswer(btn, opt.correct, correctAnswer);
            container.appendChild(btn);
        });
    }

    function checkReviewAnswer(btn, isCorrect, correctAnswer) {
        document.querySelectorAll('.review-option').forEach(b => {
            b.onclick = null;
            if (b.textContent === correctAnswer) b.classList.add('correct');
        });

        if (isCorrect) {
            btn.classList.add('correct');
            reviewCorrect++;
        } else {
            btn.classList.add('wrong');
        }

        const word = reviewQueue[reviewIndex];
        const key = `${state.textbook}_${word.word}`;
        let ws = getWordState(word.word);
        ws = calculateNextReview(ws, isCorrect ? 5 : 1);

        if (ws.repetitions >= 3 && ws.interval >= 7) {
            ws.status = 'mastered';
            state.masteredCount++;
        }

        state.words[key] = ws;

        const today = getTodayKey();
        if (!state.dailyStats[today]) state.dailyStats[today] = { learned: 0, reviewed: 0, correct: 0, total: 0 };
        state.dailyStats[today].reviewed++;
        state.dailyStats[today].total++;
        if (isCorrect) state.dailyStats[today].correct++;

        state.dailyLearned++;
        addExp(isCorrect ? 3 : 1);
        markStudyToday();
        saveState();

        setTimeout(() => {
            document.getElementById('review-card').classList.add('hidden');
            const feedback = document.getElementById('review-feedback');
            feedback.classList.remove('hidden');
            document.getElementById('feedback-icon').textContent = isCorrect ? '✅' : '❌';
            document.getElementById('feedback-text').textContent = isCorrect ?
                '太棒了！回答正确！' : `正确答案是: ${correctAnswer}`;
        }, 600);
    }

    function nextReview() {
        reviewIndex++;
        showReviewQuestion();
    }

    function finishReview() {
        const accuracy = Math.round((reviewCorrect / reviewQueue.length) * 100);
        if (accuracy === 100) {
            state.perfectReviews = (state.perfectReviews || 0) + 1;
        }
        saveState();
        showCelebration('review', { correct: reviewCorrect, total: reviewQueue.length, accuracy });
    }

    // ===== 拼写挑战 =====
    let challengeWord = null;
    let challengeInput = [];
    let challengeTimer = null;
    let challengeScore = 0;
    let challengeTimeLeft = 60;

    function startChallenge() {
        const learnedWords = getWordsForTextbook().filter(w => {
            const ws = getWordState(w.word);
            return ws.status !== 'new';
        });

        if (learnedWords.length < 4) {
            alert('至少学会4个单词才能参加挑战赛哦！');
            return;
        }

        challengeScore = 0;
        challengeTimeLeft = 60;
        showScreen('spell-screen');
        updateChallengeTimer();
        nextChallengeWord();

        challengeTimer = setInterval(() => {
            challengeTimeLeft--;
            updateChallengeTimer();
            if (challengeTimeLeft <= 0) {
                clearInterval(challengeTimer);
                finishChallenge();
            }
        }, 1000);
    }

    function updateChallengeTimer() {
        const timerEl = document.getElementById('challenge-timer');
        timerEl.textContent = `⏱ ${challengeTimeLeft}s`;
        timerEl.style.color = challengeTimeLeft <= 10 ? '#E74C3C' : '#2C3E50';
    }

    function nextChallengeWord() {
        const learnedWords = getWordsForTextbook().filter(w => {
            const ws = getWordState(w.word);
            return ws.status !== 'new';
        });
        challengeWord = learnedWords[Math.floor(Math.random() * learnedWords.length)];
        challengeInput = [];

        document.getElementById('spell-meaning').textContent = `${challengeWord.emoji} ${challengeWord.meaning}`;
        document.getElementById('spell-feedback').classList.add('hidden');

        const inputsEl = document.getElementById('spell-inputs');
        inputsEl.innerHTML = '';
        for (let i = 0; i < challengeWord.word.length; i++) {
            const div = document.createElement('div');
            div.className = 'spell-letter';
            div.id = `letter-${i}`;
            inputsEl.appendChild(div);
        }

        renderKeyboard();
    }

    function renderKeyboard() {
        const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const container = document.getElementById('keyboard-keys');
        container.innerHTML = '';
        keys.forEach(k => {
            const btn = document.createElement('button');
            btn.className = 'key-btn';
            btn.textContent = k;
            btn.onclick = () => typeLetter(k.toLowerCase());
            container.appendChild(btn);
        });
        const del = document.createElement('button');
        del.className = 'key-btn';
        del.textContent = '←';
        del.style.width = '60px';
        del.style.background = '#FFE0E0';
        del.onclick = () => deleteLetter();
        container.appendChild(del);
    }

    function typeLetter(letter) {
        if (!challengeWord || challengeInput.length >= challengeWord.word.length) return;
        challengeInput.push(letter);
        const idx = challengeInput.length - 1;
        const el = document.getElementById(`letter-${idx}`);
        if (el) {
            el.textContent = letter;
            el.classList.add('filled');
        }

        if (challengeInput.length === challengeWord.word.length) {
            checkSpelling();
        }
    }

    function deleteLetter() {
        if (challengeInput.length === 0) return;
        challengeInput.pop();
        const el = document.getElementById(`letter-${challengeInput.length}`);
        if (el) {
            el.textContent = '';
            el.classList.remove('filled', 'correct', 'wrong');
        }
    }

    function checkSpelling() {
        const answer = challengeInput.join('');
        const correct = answer === challengeWord.word.toLowerCase();

        for (let i = 0; i < challengeWord.word.length; i++) {
            const el = document.getElementById(`letter-${i}`);
            if (el) {
                el.classList.add(correct ? 'correct' : 'wrong');
            }
        }

        const feedback = document.getElementById('spell-feedback');
        feedback.classList.remove('hidden');
        feedback.textContent = correct ? '✅ 正确！' : `❌ 答案是: ${challengeWord.word}`;
        feedback.style.color = correct ? '#2ECC71' : '#E74C3C';

        if (correct) {
            challengeScore += 10;
            addExp(2);
            markStudyToday();
        }

        setTimeout(() => {
            if (challengeTimeLeft > 0) nextChallengeWord();
        }, 1000);
    }

    function finishChallenge() {
        clearInterval(challengeTimer);
        if (challengeScore > state.bestChallengeScore) {
            state.bestChallengeScore = challengeScore;
        }
        saveState();
        showCelebration('challenge', { score: challengeScore });
    }

    // ===== 单词本 =====
    let currentFilter = 'all';
    let currentUnit = 'all';

    function renderWordbook(filter, unitFilter) {
        if (filter) currentFilter = filter;
        if (unitFilter !== undefined) currentUnit = unitFilter;

        document.querySelectorAll('.filter-tabs .tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.filter-tabs .tab').forEach(t => {
            if (t.textContent.includes(
                currentFilter === 'all' ? '全部' :
                currentFilter === 'mastered' ? '已掌握' :
                currentFilter === 'learning' ? '学习中' : '未学习'
            )) t.classList.add('active');
        });

        const list = document.getElementById('wordbook-list');
        list.innerHTML = '';

        const book = WORD_DB[state.textbook];
        if (!book) return;

        // 收集词汇，支持按单元筛选
        let allWords = [];
        if (currentUnit === 'all') {
            for (const unit of Object.values(book.units)) {
                for (const w of unit.words) {
                    allWords.push({ ...w, unitName: unit.name });
                }
            }
        } else {
            const unit = book.units[currentUnit];
            if (unit) {
                for (const w of unit.words) {
                    allWords.push({ ...w, unitName: unit.name });
                }
            }
        }

        const filtered = allWords.filter(w => {
            const ws = getWordState(w.word);
            if (currentFilter === 'all') return true;
            return ws.status === currentFilter;
        });

        if (filtered.length === 0) {
            list.innerHTML = '<div style="text-align:center;padding:40px;color:#7F8C8D;grid-column:1/-1;">暂无单词</div>';
            return;
        }

        filtered.forEach(w => {
            const ws = getWordState(w.word);
            const item = document.createElement('div');
            item.className = 'wordbook-item';
            item.innerHTML = `
                <div>
                    <div class="wb-word">${w.emoji} ${w.word}</div>
                    <div class="wb-meaning">${w.phonetic} ${w.meaning}</div>
                    <div class="wb-unit">${w.unitName || ''}</div>
                </div>
                <span class="wb-status ${ws.status}">${
                    ws.status === 'new' ? '未学' :
                    ws.status === 'mastered' ? '已掌握' : '学习中'
                }</span>
            `;
            item.onclick = () => {
                if ('speechSynthesis' in window) {
                    const u = new SpeechSynthesisUtterance(w.word);
                    u.lang = 'en-US';
                    u.rate = 0.8;
                    speechSynthesis.speak(u);
                }
            };
            list.appendChild(item);
        });
    }

    function filterWords(filter) {
        renderWordbook(filter);
    }

    function renderUnitTabs() {
        const container = document.getElementById('unit-tabs');
        if (!container) return;
        container.innerHTML = '';

        // "全部单元" 按钮
        const allBtn = document.createElement('button');
        allBtn.className = 'tab' + (currentUnit === 'all' ? ' active' : '');
        allBtn.textContent = '全部单元';
        allBtn.onclick = () => filterByUnit('all');
        container.appendChild(allBtn);

        const book = WORD_DB[state.textbook];
        if (!book) return;

        for (const [uid, unit] of Object.entries(book.units)) {
            const btn = document.createElement('button');
            btn.className = 'tab' + (currentUnit === String(uid) ? ' active' : '');
            btn.textContent = unit.name;
            btn.onclick = () => filterByUnit(uid);
            container.appendChild(btn);
        }
    }

    function filterByUnit(unit) {
        currentUnit = String(unit);
        document.querySelectorAll('.unit-tabs .tab').forEach(t => {
            t.classList.toggle('active', t.dataset.unit === String(unit));
        });
        renderWordbook();
    }

    function switchVersion(version) {
        // 教材选择屏切换版本
        document.querySelectorAll('#textbook-screen .version-tab').forEach(t => t.classList.remove('active'));
        const versionLabels = { PEP: '人教', WYS: '外研', YL: '译林', BNU: '北师大', MJ: '闽教' };
        document.querySelectorAll('#textbook-screen .version-tab').forEach(t => {
            if (t.textContent.includes(versionLabels[version] || version)) t.classList.add('active');
        });
        document.getElementById('version-PEP')?.classList.toggle('hidden', version !== 'PEP');
        document.getElementById('version-WYS')?.classList.toggle('hidden', version !== 'WYS');
        document.getElementById('version-YL')?.classList.toggle('hidden', version !== 'YL');
        document.getElementById('version-BNU')?.classList.toggle('hidden', version !== 'BNU');
        document.getElementById('version-MJ')?.classList.toggle('hidden', version !== 'MJ');
    }

    function switchVersionProfile(version) {
        // 个人页切换版本
        document.querySelectorAll('#profile-version-tabs .version-tab').forEach(t => t.classList.remove('active'));
        const versionLabels = { PEP: '人教', WYS: '外研', YL: '译林', BNU: '北师大', MJ: '闽教' };
        document.querySelectorAll('#profile-version-tabs .version-tab').forEach(t => {
            if (t.textContent.includes(versionLabels[version] || version)) t.classList.add('active');
        });
        document.getElementById('profile-version-PEP')?.classList.toggle('hidden', version !== 'PEP');
        document.getElementById('profile-version-WYS')?.classList.toggle('hidden', version !== 'WYS');
        document.getElementById('profile-version-YL')?.classList.toggle('hidden', version !== 'YL');
        document.getElementById('profile-version-BNU')?.classList.toggle('hidden', version !== 'BNU');
        document.getElementById('profile-version-MJ')?.classList.toggle('hidden', version !== 'MJ');
    }

    function filterByUnit(unit) {
        currentUnit = unit;
        // 更新单元 tab 状态
        document.querySelectorAll('.unit-tabs .tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.unit-tabs .tab').forEach(t => {
            if (t.dataset.unit === String(unit)) t.classList.add('active');
        });
        renderWordbook();
    }

    // ===== 统计页面 =====
    function updateStats() {
        document.getElementById('stat-total').textContent = state.totalLearned;
        document.getElementById('stat-mastered').textContent = state.masteredCount;
        document.getElementById('stat-streak').textContent = state.streak;

        let totalCorrect = 0, totalAttempts = 0;
        Object.values(state.dailyStats).forEach(d => {
            totalCorrect += d.correct || 0;
            totalAttempts += d.total || 0;
        });
        const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
        document.getElementById('stat-accuracy').textContent = `${accuracy}%`;

        renderWeeklyChart();
        renderAchievements();
    }

    function renderWeeklyChart() {
        const chart = document.getElementById('weekly-chart');
        chart.innerHTML = '';

        const days = [];
        const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const key = d.toISOString().split('T')[0];
            const stats = state.dailyStats[key] || { learned: 0, reviewed: 0 };
            days.push({
                label: dayNames[d.getDay()],
                count: stats.learned + stats.reviewed
            });
        }

        const maxCount = Math.max(...days.map(d => d.count), 1);

        days.forEach(d => {
            const wrapper = document.createElement('div');
            wrapper.className = 'chart-bar-wrapper';
            const height = Math.max((d.count / maxCount) * 100, 4);
            wrapper.innerHTML = `
                <div class="chart-bar" style="height:${height}px"></div>
                <span class="chart-label">${d.label}</span>
            `;
            chart.appendChild(wrapper);
        });
    }

    function renderAchievements() {
        const container = document.getElementById('achievements');
        container.innerHTML = '';

        const statsForCheck = {
            ...state,
            totalLearned: state.totalLearned,
            masteredCount: state.masteredCount,
            totalEnergy: state.totalEnergy,
        };

        ACHIEVEMENTS.forEach(ach => {
            const unlocked = ach.check(statsForCheck);
            const div = document.createElement('div');
            div.className = 'achievement' + (unlocked ? '' : ' locked');
            div.innerHTML = `
                <span class="ach-emoji">${ach.emoji}</span>
                <span class="ach-name">${ach.name}</span>
            `;
            div.title = ach.desc;
            container.appendChild(div);
        });
    }

    function checkAchievements() {
        const newAch = [];
        ACHIEVEMENTS.forEach(ach => {
            if (!state.achievements.includes(ach.id) && ach.check(state)) {
                newAch.push(ach);
                state.achievements.push(ach.id);
            }
        });
        saveState();
        return newAch;
    }

    // ===== 个人页面 =====
    function updateProfile() {
        document.getElementById('profile-avatar').textContent = getPetEmoji();
        document.getElementById('profile-name').textContent = state.userName;
        document.getElementById('profile-level').textContent = `Lv.${state.petLevel + 1}`;

        // 更新教材选择按钮状态
        document.querySelectorAll('.textbook-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.textbook === state.textbook);
        });

        // 显示当前教材进度
        const book = WORD_DB[state.textbook];
        if (book) {
            const allWords = [];
            for (const unit of Object.values(book.units)) {
                allWords.push(...unit.words);
            }
            const learnedCount = allWords.filter(w => {
                const ws = getWordState(w.word);
                return ws.status !== 'new';
            }).length;
            const progressEl = document.getElementById('textbook-progress');
            if (progressEl) {
                progressEl.textContent = `${book.name} — 已学 ${learnedCount}/${allWords.length} 词`;
            }
        }
    }

    function setTextbook(textbook) {
        state.textbook = textbook;
        // 同步更新 grade 字段
        const book = WORD_DB[textbook];
        if (book) state.grade = book.grade;
        saveState();
        updateProfile();
        updateHome();
    }

    function resetData() {
        if (confirm('确定要重置所有进度吗？这不可恢复！')) {
            localStorage.removeItem(STORAGE_KEY);
            state = defaultState();
            showScreen('splash-screen');
        }
    }

    // ===== 庆祝 =====
    function showCelebration(type, data = {}) {
        let emoji = '🎉', title = '太棒了！', details = '', petReaction = '🥳';

        switch (type) {
            case 'learn':
                emoji = '📖';
                title = '学习完成！';
                details = `学会了 ${data.count} 个新词！`;
                petReaction = getPetEmoji();
                break;
            case 'review':
                emoji = data.accuracy === 100 ? '💯' : '✅';
                title = data.accuracy === 100 ? '完美通关！' : '复习完成！';
                details = `正确率: ${data.accuracy}% (${data.correct}/${data.total})`;
                petReaction = data.accuracy >= 80 ? '🥳' : '💪';
                break;
            case 'challenge':
                emoji = '🏆';
                title = '挑战结束！';
                details = `得分: ${data.score} 分`;
                petReaction = data.score >= 50 ? '🦸' : '😊';
                break;
            case 'levelup':
                emoji = '✨';
                title = '精灵升级了！';
                details = `${getPetName()} 成长到了 Lv.${state.petLevel + 1}`;
                petReaction = getPetEmoji();
                break;
        }

        document.getElementById('celebrate-emoji').textContent = emoji;
        document.getElementById('celebrate-title').textContent = title;
        document.getElementById('celebrate-details').innerHTML = details;
        document.getElementById('pet-reaction').textContent = petReaction;

        showScreen('celebration-screen');
    }

    // ===== 工具函数 =====
    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // ===== 键盘快捷键支持 =====
    document.addEventListener('keydown', (e) => {
        // 拼写挑战中支持物理键盘
        const spellScreen = document.getElementById('spell-screen');
        if (spellScreen && spellScreen.classList.contains('active')) {
            if (e.key === 'Backspace') {
                e.preventDefault();
                deleteLetter();
            } else if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
                typeLetter(e.key.toLowerCase());
            }
        }
    });

    // ===== 暴露公共API =====
    return {
        start,
        setName,
        choosePet,
        selectTextbook,
        showScreen,
        startLearn,
        showAnswer,
        rateWord,
        speakWord,
        startReview,
        nextReview,
        startChallenge,
        filterWords,
        filterByUnit,
        switchVersion,
        switchVersionProfile,
        setTextbook,
        setGrade: setTextbook, // 向后兼容
        resetData,
        interactPet,
        speakDailyWord,
    };
})();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    App.start();
});

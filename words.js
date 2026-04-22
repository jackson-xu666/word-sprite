/**
 * 蛋小灵 V5 - 小学英语词库
 * 按教材+上下册+单元组织
 * 数据来源：国家中小学智慧教育平台 smartedu.cn
 */
const WORD_DB = {
    "RJY_3上": {
        "name": "三年级上册（人教版·一年级起点）",
        "grade": 3,
        "semester": "上",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    {
                        "word": "my",
                        "phonetic": "/maɪ/",
                        "meaning": "我的",
                        "example": "<em>My</em> name is Tom.",
                        "emoji": "🙋"
                    },
                    {
                        "word": "your",
                        "phonetic": "/jɔː(r)/",
                        "meaning": "你的",
                        "example": "What's <em>your</em> name?",
                        "emoji": "👉"
                    },
                    {
                        "word": "name",
                        "phonetic": "/neɪm/",
                        "meaning": "名字；姓名",
                        "example": "My <em>name</em> is Lily.",
                        "emoji": "📛"
                    },
                    {
                        "word": "new",
                        "phonetic": "/njuː/",
                        "meaning": "新的；新来的",
                        "example": "I have a <em>new</em> friend.",
                        "emoji": "✨"
                    },
                    {
                        "word": "year",
                        "phonetic": "/jɪə(r)/",
                        "meaning": "年；岁数",
                        "example": "I am six <em>years</em> old.",
                        "emoji": "📅"
                    },
                    {
                        "word": "old",
                        "phonetic": "/əʊld/",
                        "meaning": "……岁的；年老的",
                        "example": "How <em>old</em> are you?",
                        "emoji": "🎂"
                    },
                    {
                        "word": "how old",
                        "phonetic": "/haʊ əʊld/",
                        "meaning": "（年龄）多大",
                        "example": "<em>How old</em> are you?",
                        "emoji": "❓"
                    },
                    {
                        "word": "class",
                        "phonetic": "/klɑːs/",
                        "meaning": "班级",
                        "example": "I am in <em>Class</em> 1.",
                        "emoji": "🏫"
                    },
                    {
                        "word": "grade",
                        "phonetic": "/ɡreɪd/",
                        "meaning": "年级",
                        "example": "I am in <em>Grade</em> 3.",
                        "emoji": "📚"
                    },
                    {
                        "word": "age",
                        "phonetic": "/eɪdʒ/",
                        "meaning": "年龄",
                        "example": "What <em>age</em> are you?",
                        "emoji": "🔢"
                    },
                    {
                        "word": "dear",
                        "phonetic": "/dɪə(r)/",
                        "meaning": "亲爱的（用于书信中，表示客气）",
                        "example": "<em>Dear</em> friend...",
                        "emoji": "💌"
                    },
                    {
                        "word": "help",
                        "phonetic": "/help/",
                        "meaning": "帮助",
                        "example": "I can <em>help</em> you.",
                        "emoji": "🆘"
                    },
                    {
                        "word": "bad",
                        "phonetic": "/bæd/",
                        "meaning": "坏的；糟糕",
                        "example": "That is <em>bad</em>!",
                        "emoji": "👎"
                    },
                    {
                        "word": "bite",
                        "phonetic": "/baɪt/",
                        "meaning": "咬",
                        "example": "Don't <em>bite</em> your tongue!",
                        "emoji": "😬"
                    },
                    {
                        "word": "tongue",
                        "phonetic": "/tʌŋ/",
                        "meaning": "舌头",
                        "example": "Stick out your <em>tongue</em>.",
                        "emoji": "👅"
                    },
                    {
                        "word": "kick",
                        "phonetic": "/kɪk/",
                        "meaning": "踢",
                        "example": "Don't <em>kick</em> the ball inside.",
                        "emoji": "⚽"
                    },
                    {
                        "word": "morning",
                        "phonetic": "/ˈmɔːnɪŋ/",
                        "meaning": "早晨",
                        "example": "Good <em>morning</em>!",
                        "emoji": "🌅"
                    },
                    {
                        "word": "afternoon",
                        "phonetic": "/ˌɑːftəˈnuːn/",
                        "meaning": "下午",
                        "example": "Good <em>afternoon</em>!",
                        "emoji": "☀️"
                    },
                    {
                        "word": "summary",
                        "phonetic": "/ˈsʌməri/",
                        "meaning": "总结，摘要",
                        "example": "Let's write a <em>summary</em>.",
                        "emoji": "📝"
                    },
                    {
                        "word": "face",
                        "phonetic": "/feɪs/",
                        "meaning": "脸",
                        "example": "Look at my <em>face</em>.",
                        "emoji": "😊"
                    },
                    {
                        "word": "eye",
                        "phonetic": "/aɪ/",
                        "meaning": "眼睛",
                        "example": "I have two <em>eyes</em>.",
                        "emoji": "👁️"
                    },
                    {
                        "word": "nose",
                        "phonetic": "/nəʊz/",
                        "meaning": "鼻子",
                        "example": "Touch your <em>nose</em>.",
                        "emoji": "👃"
                    },
                    {
                        "word": "mouth",
                        "phonetic": "/maʊθ/",
                        "meaning": "嘴巴",
                        "example": "Open your <em>mouth</em>.",
                        "emoji": "👄"
                    },
                    {
                        "word": "ear",
                        "phonetic": "/ɪə(r)/",
                        "meaning": "耳朵",
                        "example": "I have two <em>ears</em>.",
                        "emoji": "👂"
                    }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    {
                        "word": "body",
                        "phonetic": "/ˈbɒdi/",
                        "meaning": "身体",
                        "example": "This is my <em>body</em>.",
                        "emoji": "🧍"
                    },
                    {
                        "word": "head",
                        "phonetic": "/hed/",
                        "meaning": "头",
                        "example": "Touch your <em>head</em>.",
                        "emoji": "👤"
                    },
                    {
                        "word": "hair",
                        "phonetic": "/heə(r)/",
                        "meaning": "头发",
                        "example": "She has long <em>hair</em>.",
                        "emoji": "💇"
                    },
                    {
                        "word": "arm",
                        "phonetic": "/ɑːm/",
                        "meaning": "胳膊",
                        "example": "Wave your <em>arms</em>.",
                        "emoji": "💪"
                    },
                    {
                        "word": "hand",
                        "phonetic": "/hænd/",
                        "meaning": "手",
                        "example": "Clap your <em>hands</em>.",
                        "emoji": "✋"
                    },
                    {
                        "word": "leg",
                        "phonetic": "/leɡ/",
                        "meaning": "腿",
                        "example": "I have two <em>legs</em>.",
                        "emoji": "🦵"
                    },
                    {
                        "word": "foot",
                        "phonetic": "/fʊt/",
                        "meaning": "脚（复数feet）",
                        "example": "Stamp your <em>foot</em>.",
                        "emoji": "🦶"
                    },
                    {
                        "word": "the matter",
                        "phonetic": "/ðə ˈmætə(r)/",
                        "meaning": "麻烦事，困难；毛病",
                        "example": "What's <em>the matter</em>?",
                        "emoji": "❓"
                    },
                    {
                        "word": "hurt",
                        "phonetic": "/hɜːt/",
                        "meaning": "疼痛；弄疼",
                        "example": "My leg <em>hurts</em>.",
                        "emoji": "🤕"
                    }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    {
                        "word": "bread",
                        "phonetic": "/bred/",
                        "meaning": "面包",
                        "example": "Have some <em>bread</em>.",
                        "emoji": "🍞"
                    },
                    {
                        "word": "cake",
                        "phonetic": "/keɪk/",
                        "meaning": "蛋糕",
                        "example": "I like <em>cake</em>.",
                        "emoji": "🎂"
                    },
                    {
                        "word": "fruit",
                        "phonetic": "/fruːt/",
                        "meaning": "水果",
                        "example": "I like <em>fruit</em>.",
                        "emoji": "🍎"
                    },
                    {
                        "word": "ice cream",
                        "phonetic": "/aɪs kriːm/",
                        "meaning": "冰淇淋",
                        "example": "I want an <em>ice cream</em>.",
                        "emoji": "🍦"
                    },
                    {
                        "word": "potato",
                        "phonetic": "/pəˈteɪtəʊ/",
                        "meaning": "土豆",
                        "example": "I like <em>potatoes</em>.",
                        "emoji": "🥔"
                    },
                    {
                        "word": "tomato",
                        "phonetic": "/təˈmɑːtəʊ/",
                        "meaning": "西红柿",
                        "example": "The <em>tomato</em> is red.",
                        "emoji": "🍅"
                    },
                    {
                        "word": "meat",
                        "phonetic": "/miːt/",
                        "meaning": "肉",
                        "example": "I like <em>meat</em>.",
                        "emoji": "🥩"
                    },
                    {
                        "word": "for",
                        "phonetic": "/fɔː(r)/",
                        "meaning": "当作，作为",
                        "example": "This is <em>for</em> you.",
                        "emoji": "🎁"
                    },
                    {
                        "word": "shopping list",
                        "phonetic": "/ˈʃɒpɪŋ lɪst/",
                        "meaning": "购物单",
                        "example": "Let's make a <em>shopping list</em>.",
                        "emoji": "📝"
                    },
                    {
                        "word": "cola",
                        "phonetic": "/ˈkəʊlə/",
                        "meaning": "可乐",
                        "example": "I'd like a <em>cola</em>.",
                        "emoji": "🥤"
                    },
                    {
                        "word": "buy",
                        "phonetic": "/baɪ/",
                        "meaning": "买",
                        "example": "Let's <em>buy</em> some fruit.",
                        "emoji": "🛒"
                    },
                    {
                        "word": "rice",
                        "phonetic": "/raɪs/",
                        "meaning": "米饭；米",
                        "example": "Have some <em>rice</em>.",
                        "emoji": "🍚"
                    },
                    {
                        "word": "noodles",
                        "phonetic": "/ˈnuːdlz/",
                        "meaning": "面条",
                        "example": "I like <em>noodles</em>.",
                        "emoji": "🍜"
                    },
                    {
                        "word": "vegetables",
                        "phonetic": "/ˈvedʒtəblz/",
                        "meaning": "蔬菜",
                        "example": "Eat your <em>vegetables</em>.",
                        "emoji": "🥦"
                    },
                    {
                        "word": "fish",
                        "phonetic": "/fɪʃ/",
                        "meaning": "鱼肉",
                        "example": "I like <em>fish</em>.",
                        "emoji": "🐟"
                    },
                    {
                        "word": "chicken",
                        "phonetic": "/ˈtʃɪkɪn/",
                        "meaning": "鸡肉",
                        "example": "I like <em>chicken</em>.",
                        "emoji": "🍗"
                    },
                    {
                        "word": "egg",
                        "phonetic": "/eɡ/",
                        "meaning": "鸡蛋",
                        "example": "I eat an <em>egg</em>.",
                        "emoji": "🥚"
                    }
                ]
            },
            "4": {
                "name": "Unit 4",
                "words": [
                    {
                        "word": "duck",
                        "phonetic": "/dʌk/",
                        "meaning": "鸭子",
                        "example": "Look at the <em>duck</em>.",
                        "emoji": "🦆"
                    },
                    {
                        "word": "chicken",
                        "phonetic": "/ˈtʃɪkɪn/",
                        "meaning": "小鸡",
                        "example": "The <em>chicken</em> is small.",
                        "emoji": "🐔"
                    },
                    {
                        "word": "rabbit",
                        "phonetic": "/ˈræbɪt/",
                        "meaning": "兔子",
                        "example": "The <em>rabbit</em> is white.",
                        "emoji": "🐰"
                    },
                    {
                        "word": "pet",
                        "phonetic": "/pet/",
                        "meaning": "宠物",
                        "example": "I have a <em>pet</em>.",
                        "emoji": "🐾"
                    },
                    {
                        "word": "snake",
                        "phonetic": "/sneɪk/",
                        "meaning": "蛇",
                        "example": "The <em>snake</em> is long.",
                        "emoji": "🐍"
                    },
                    {
                        "word": "turtle",
                        "phonetic": "/ˈtɜːtl/",
                        "meaning": "海龟",
                        "example": "The <em>turtle</em> is slow.",
                        "emoji": "🐢"
                    },
                    {
                        "word": "small",
                        "phonetic": "/smɔːl/",
                        "meaning": "小的",
                        "example": "The bird is <em>small</em>.",
                        "emoji": "🐣"
                    },
                    {
                        "word": "long",
                        "phonetic": "/lɒŋ/",
                        "meaning": "长的",
                        "example": "The snake is <em>long</em>.",
                        "emoji": "📏"
                    },
                    {
                        "word": "look for",
                        "phonetic": "/lʊk fɔː(r)/",
                        "meaning": "寻找",
                        "example": "I <em>look for</em> my cat.",
                        "emoji": "🔍"
                    },
                    {
                        "word": "tail",
                        "phonetic": "/teɪl/",
                        "meaning": "尾巴",
                        "example": "The dog has a long <em>tail</em>.",
                        "emoji": "🐶"
                    },
                    {
                        "word": "dance",
                        "phonetic": "/dɑːns/",
                        "meaning": "跳舞",
                        "example": "I like to <em>dance</em>.",
                        "emoji": "💃"
                    },
                    {
                        "word": "cat",
                        "phonetic": "/kæt/",
                        "meaning": "猫",
                        "example": "I have a <em>cat</em>.",
                        "emoji": "🐱"
                    },
                    {
                        "word": "dog",
                        "phonetic": "/dɒɡ/",
                        "meaning": "狗",
                        "example": "The <em>dog</em> is cute.",
                        "emoji": "🐶"
                    },
                    {
                        "word": "bird",
                        "phonetic": "/bɜːd/",
                        "meaning": "鸟",
                        "example": "The <em>bird</em> can fly.",
                        "emoji": "🐦"
                    },
                    {
                        "word": "fish",
                        "phonetic": "/fɪʃ/",
                        "meaning": "鱼",
                        "example": "The <em>fish</em> can swim.",
                        "emoji": "🐟"
                    },
                    {
                        "word": "monkey",
                        "phonetic": "/ˈmʌŋki/",
                        "meaning": "猴子",
                        "example": "The <em>monkey</em> is funny.",
                        "emoji": "🐵"
                    },
                    {
                        "word": "tiger",
                        "phonetic": "/ˈtaɪɡə(r)/",
                        "meaning": "老虎",
                        "example": "The <em>tiger</em> is strong.",
                        "emoji": "🐯"
                    },
                    {
                        "word": "big",
                        "phonetic": "/bɪɡ/",
                        "meaning": "大的",
                        "example": "The elephant is <em>big</em>.",
                        "emoji": "🐘"
                    },
                    {
                        "word": "short",
                        "phonetic": "/ʃɔːt/",
                        "meaning": "短的",
                        "example": "The tail is <em>short</em>.",
                        "emoji": "📏"
                    }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    {
                        "word": "cap",
                        "phonetic": "/kæp/",
                        "meaning": "帽子",
                        "example": "Put on your <em>cap</em>.",
                        "emoji": "🧢"
                    },
                    {
                        "word": "coat",
                        "phonetic": "/kəʊt/",
                        "meaning": "大衣",
                        "example": "Wear your <em>coat</em>.",
                        "emoji": "🧥"
                    },
                    {
                        "word": "shoes",
                        "phonetic": "/ʃuːz/",
                        "meaning": "鞋",
                        "example": "Put on your <em>shoes</em>.",
                        "emoji": "👟"
                    },
                    {
                        "word": "sweater",
                        "phonetic": "/ˈswetə(r)/",
                        "meaning": "毛衣",
                        "example": "I like my <em>sweater</em>.",
                        "emoji": "🧶"
                    },
                    {
                        "word": "jacket",
                        "phonetic": "/ˈdʒækɪt/",
                        "meaning": "夹克衫",
                        "example": "This is my <em>jacket</em>.",
                        "emoji": "🧥"
                    },
                    {
                        "word": "gloves",
                        "phonetic": "/ɡlʌvz/",
                        "meaning": "手套",
                        "example": "Wear your <em>gloves</em>.",
                        "emoji": "🧤"
                    },
                    {
                        "word": "trousers",
                        "phonetic": "/ˈtraʊzəz/",
                        "meaning": "裤子",
                        "example": "I like these <em>trousers</em>.",
                        "emoji": "👖"
                    },
                    {
                        "word": "should",
                        "phonetic": "/ʃʊd/",
                        "meaning": "应该",
                        "example": "You <em>should</em> wear a coat.",
                        "emoji": "👉"
                    },
                    {
                        "word": "wear",
                        "phonetic": "/weə(r)/",
                        "meaning": "穿",
                        "example": "What do you <em>wear</em>?",
                        "emoji": "👔"
                    },
                    {
                        "word": "week",
                        "phonetic": "/wiːk/",
                        "meaning": "星期",
                        "example": "See you next <em>week</em>.",
                        "emoji": "📅"
                    },
                    {
                        "word": "soon",
                        "phonetic": "/suːn/",
                        "meaning": "不久，很快",
                        "example": "See you <em>soon</em>!",
                        "emoji": "⏳"
                    },
                    {
                        "word": "look forward to",
                        "phonetic": "/lʊk ˈfɔːwəd tuː/",
                        "meaning": "盼望，期待",
                        "example": "I <em>look forward to</em> the party.",
                        "emoji": "🤩"
                    },
                    {
                        "word": "T-shirt",
                        "phonetic": "/ˈtiː ʃɜːt/",
                        "meaning": "T恤衫",
                        "example": "I wear a <em>T-shirt</em>.",
                        "emoji": "👕"
                    },
                    {
                        "word": "shorts",
                        "phonetic": "/ʃɔːts/",
                        "meaning": "短裤",
                        "example": "I wear <em>shorts</em> in summer.",
                        "emoji": "🩳"
                    },
                    {
                        "word": "socks",
                        "phonetic": "/sɒks/",
                        "meaning": "短袜",
                        "example": "Put on your <em>socks</em>.",
                        "emoji": "🧦"
                    },
                    {
                        "word": "skirt",
                        "phonetic": "/skɜːt/",
                        "meaning": "裙子",
                        "example": "She wears a <em>skirt</em>.",
                        "emoji": "👗"
                    },
                    {
                        "word": "dress",
                        "phonetic": "/dres/",
                        "meaning": "连衣裙；套裙",
                        "example": "I like this <em>dress</em>.",
                        "emoji": "👗"
                    },
                    {
                        "word": "shirt",
                        "phonetic": "/ʃɜːt/",
                        "meaning": "衬衫",
                        "example": "He wears a <em>shirt</em>.",
                        "emoji": "👔"
                    }
                ]
            },
            "6": {
                "name": "Unit 6",
                "words": [
                    {
                        "word": "January",
                        "phonetic": "/ˈdʒænjuəri/",
                        "meaning": "一月",
                        "example": "<em>January</em> is the first month.",
                        "emoji": "1️⃣"
                    },
                    {
                        "word": "February",
                        "phonetic": "/ˈfebruəri/",
                        "meaning": "二月",
                        "example": "<em>February</em> is short.",
                        "emoji": "2️⃣"
                    },
                    {
                        "word": "March",
                        "phonetic": "/mɑːtʃ/",
                        "meaning": "三月",
                        "example": "Tree Day is in <em>March</em>.",
                        "emoji": "3️⃣"
                    },
                    {
                        "word": "April",
                        "phonetic": "/ˈeɪprəl/",
                        "meaning": "四月",
                        "example": "<em>April</em> is a spring month.",
                        "emoji": "4️⃣"
                    },
                    {
                        "word": "May",
                        "phonetic": "/meɪ/",
                        "meaning": "五月",
                        "example": "<em>May</em> is warm.",
                        "emoji": "5️⃣"
                    },
                    {
                        "word": "June",
                        "phonetic": "/dʒuːn/",
                        "meaning": "六月",
                        "example": "Children's Day is in <em>June</em>.",
                        "emoji": "6️⃣"
                    },
                    {
                        "word": "July",
                        "phonetic": "/dʒuˈlaɪ/",
                        "meaning": "七月",
                        "example": "<em>July</em> is hot.",
                        "emoji": "7️⃣"
                    },
                    {
                        "word": "August",
                        "phonetic": "/ˈɔːɡəst/",
                        "meaning": "八月",
                        "example": "<em>August</em> is summer.",
                        "emoji": "8️⃣"
                    },
                    {
                        "word": "September",
                        "phonetic": "/sepˈtembə(r)/",
                        "meaning": "九月",
                        "example": "School starts in <em>September</em>.",
                        "emoji": "9️⃣"
                    },
                    {
                        "word": "October",
                        "phonetic": "/ɒkˈtəʊbə(r)/",
                        "meaning": "十月",
                        "example": "<em>October</em> is cool.",
                        "emoji": "🔟"
                    },
                    {
                        "word": "November",
                        "phonetic": "/nəʊˈvembə(r)/",
                        "meaning": "十一月",
                        "example": "<em>November</em> is autumn.",
                        "emoji": "🍂"
                    },
                    {
                        "word": "December",
                        "phonetic": "/dɪˈsembə(r)/",
                        "meaning": "十二月",
                        "example": "Christmas is in <em>December</em>.",
                        "emoji": "❄️"
                    },
                    {
                        "word": "birthday",
                        "phonetic": "/ˈbɜːθdeɪ/",
                        "meaning": "生日",
                        "example": "Happy <em>birthday</em>!",
                        "emoji": "🎂"
                    },
                    {
                        "word": "first",
                        "phonetic": "/fɜːst/",
                        "meaning": "第一",
                        "example": "January is the <em>first</em> month.",
                        "emoji": "🥇"
                    },
                    {
                        "word": "party",
                        "phonetic": "/ˈpɑːti/",
                        "meaning": "聚会",
                        "example": "Let's have a <em>party</em>!",
                        "emoji": "🎉"
                    },
                    {
                        "word": "delicious",
                        "phonetic": "/dɪˈlɪʃəs/",
                        "meaning": "美味的",
                        "example": "The cake is <em>delicious</em>.",
                        "emoji": "😋"
                    }
                ]
            }
        }
    },
    "PEP_3下": {
        "name": "三年级下册（人教版PEP·三年级起点）",
        "grade": 3,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    { "word": "where", "phonetic": "/weə(r)/", "meaning": "在哪里；到哪里", "example": "<em>Where</em> are you from?", "emoji": "❓" },
                    { "word": "from", "phonetic": "/frɒm/", "meaning": "（表示来源）来自，从……来", "example": "I'm <em>from</em> China.", "emoji": "📍" },
                    { "word": "about", "phonetic": "/əˈbaʊt/", "meaning": "关于；大约", "example": "Tell me <em>about</em> yourself.", "emoji": "💬" },
                    { "word": "today", "phonetic": "/təˈdeɪ/", "meaning": "今天", "example": "<em>Today</em> is Monday.", "emoji": "📅" },
                    { "word": "teacher", "phonetic": "/ˈtiːtʃə(r)/", "meaning": "教师", "example": "She is my <em>teacher</em>.", "emoji": "👩‍🏫" },
                    { "word": "student", "phonetic": "/ˈstjuːdnt/", "meaning": "学生", "example": "I am a <em>student</em>.", "emoji": "🎓" },
                    { "word": "after", "phonetic": "/ˈɑːftə(r)/", "meaning": "在……后面", "example": "<em>After</em> school, I play.", "emoji": "⏪" },
                    { "word": "who", "phonetic": "/huː/", "meaning": "谁；什么人", "example": "<em>Who</em> is she?", "emoji": "🤔" },
                    { "word": "girl", "phonetic": "/ɡɜːl/", "meaning": "女孩", "example": "The <em>girl</em> is my friend.", "emoji": "👧" },
                    { "word": "neighbour", "phonetic": "/ˈneɪbə(r)/", "meaning": "邻居", "example": "She is my <em>neighbour</em>.", "emoji": "🏠" },
                    { "word": "boy", "phonetic": "/bɔɪ/", "meaning": "男孩", "example": "The <em>boy</em> is tall.", "emoji": "👦" },
                    { "word": "woman", "phonetic": "/ˈwʊmən/", "meaning": "成年女子；妇女", "example": "The <em>woman</em> is kind.", "emoji": "👩" },
                    { "word": "man", "phonetic": "/mæn/", "meaning": "成年男子；男人", "example": "The <em>man</em> is tall.", "emoji": "👨" },
                    { "word": "Mr", "phonetic": "/ˈmɪstə(r)/", "meaning": "先生", "example": "<em>Mr</em> Jones is funny.", "emoji": "👔" },
                    { "word": "classmate", "phonetic": "/ˈklɑːsmeɪt/", "meaning": "同班同学", "example": "Tom is my <em>classmate</em>.", "emoji": "🤝" },
                    { "word": "he", "phonetic": "/hiː/", "meaning": "他", "example": "<em>He</em> is my friend.", "emoji": "👦" },
                    { "word": "also", "phonetic": "/ˈɔːlsəʊ/", "meaning": "也", "example": "I <em>also</em> like apples.", "emoji": "➕" },
                    { "word": "English", "phonetic": "/ˈɪŋɡlɪʃ/", "meaning": "英语的；英语", "example": "I like <em>English</em> class.", "emoji": "🇬🇧" },
                    { "word": "she", "phonetic": "/ʃiː/", "meaning": "她", "example": "<em>She</em> is my teacher.", "emoji": "👧" },
                    { "word": "very", "phonetic": "/ˈveri/", "meaning": "很；非常；十分", "example": "Thank you <em>very</em> much.", "emoji": "💯" },
                    { "word": "UK", "phonetic": "/juːˈkeɪ/", "meaning": "英国", "example": "I'm from the <em>UK</em>.", "emoji": "🇬🇧" },
                    { "word": "China", "phonetic": "/ˈtʃaɪnə/", "meaning": "中国", "example": "I'm from <em>China</em>.", "emoji": "🇨🇳" },
                    { "word": "Canada", "phonetic": "/ˈkænədə/", "meaning": "加拿大", "example": "He is from <em>Canada</em>.", "emoji": "🇨🇦" },
                    { "word": "USA", "phonetic": "/ˌjuː es ˈeɪ/", "meaning": "美国", "example": "She is from the <em>USA</em>.", "emoji": "🇺🇸" }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    { "word": "has", "phonetic": "/hæz/", "meaning": "具有（某种外表、特性或特征）", "example": "She <em>has</em> long hair.", "emoji": "💁" },
                    { "word": "long", "phonetic": "/lɒŋ/", "meaning": "长的", "example": "It has a <em>long</em> tail.", "emoji": "📏" },
                    { "word": "body", "phonetic": "/ˈbɒdi/", "meaning": "身体", "example": "Touch your <em>body</em>.", "emoji": "🧍" },
                    { "word": "short", "phonetic": "/ʃɔːt/", "meaning": "短的；个子矮的", "example": "He is <em>short</em>.", "emoji": "📐" },
                    { "word": "leg", "phonetic": "/leɡ/", "meaning": "腿", "example": "It has four <em>legs</em>.", "emoji": "🦵" },
                    { "word": "right", "phonetic": "/raɪt/", "meaning": "准确，确切，恰当", "example": "That's <em>right</em>!", "emoji": "✅" },
                    { "word": "fat", "phonetic": "/fæt/", "meaning": "肥的；肥胖的", "example": "The cat is <em>fat</em>.", "emoji": "🐱" },
                    { "word": "thin", "phonetic": "/θɪn/", "meaning": "瘦的", "example": "She is <em>thin</em>.", "emoji": "🍃" },
                    { "word": "slow", "phonetic": "/sləʊ/", "meaning": "缓慢的；慢的", "example": "The turtle is <em>slow</em>.", "emoji": "🐢" },
                    { "word": "love", "phonetic": "/lʌv/", "meaning": "喜爱；爱", "example": "I <em>love</em> my family.", "emoji": "❤️" },
                    { "word": "tail", "phonetic": "/teɪl/", "meaning": "尾；尾巴", "example": "The dog wags its <em>tail</em>.", "emoji": "🐕" },
                    { "word": "her", "phonetic": "/hɜː(r)/", "meaning": "她；她的", "example": "<em>Her</em> name is Lily.", "emoji": "👧" },
                    { "word": "gift", "phonetic": "/ɡɪft/", "meaning": "礼物", "example": "This is a <em>gift</em> for you.", "emoji": "🎁" },
                    { "word": "picture", "phonetic": "/ˈpɪktʃə(r)/", "meaning": "图画；绘画", "example": "Draw a <em>picture</em>.", "emoji": "🖼️" },
                    { "word": "card", "phonetic": "/kɑːd/", "meaning": "贺卡；卡片", "example": "Make a <em>card</em>.", "emoji": "🃏" },
                    { "word": "sing", "phonetic": "/sɪŋ/", "meaning": "唱（歌）；演唱", "example": "Let's <em>sing</em> a song.", "emoji": "🎤" },
                    { "word": "dance", "phonetic": "/dɑːns/", "meaning": "跳舞", "example": "I like to <em>dance</em>.", "emoji": "💃" },
                    { "word": "talk", "phonetic": "/tɔːk/", "meaning": "说话；讲话；谈话", "example": "Let's <em>talk</em> about it.", "emoji": "🗣️" },
                    { "word": "face", "phonetic": "/feɪs/", "meaning": "脸；面孔", "example": "Touch your <em>face</em>.", "emoji": "😊" },
                    { "word": "all", "phonetic": "/ɔːl/", "meaning": "所有；全部", "example": "<em>All</em> the children are here.", "emoji": "💯" },
                    { "word": "song", "phonetic": "/sɒŋ/", "meaning": "歌；歌曲", "example": "Sing a <em>song</em>.", "emoji": "🎵" },
                    { "word": "or", "phonetic": "/ɔː(r)/", "meaning": "或；或者；还是", "example": "Big <em>or</em> small?", "emoji": "🔀" },
                    { "word": "so", "phonetic": "/səʊ/", "meaning": "这么，那么", "example": "It's <em>so</em> big!", "emoji": "😲" },
                    { "word": "much", "phonetic": "/mʌtʃ/", "meaning": "许多；大量", "example": "Thank you <em>much</em>.", "emoji": "📦" }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    { "word": "eraser", "phonetic": "/ɪˈreɪzə(r)/", "meaning": "橡皮", "example": "I have an <em>eraser</em>.", "emoji": "🧽" },
                    { "word": "find", "phonetic": "/faɪnd/", "meaning": "找到；找回", "example": "I can't <em>find</em> my pen.", "emoji": "🔍" },
                    { "word": "ruler", "phonetic": "/ˈruːlə(r)/", "meaning": "直尺", "example": "This is a <em>ruler</em>.", "emoji": "📏" },
                    { "word": "pen", "phonetic": "/pen/", "meaning": "钢笔", "example": "Give me a <em>pen</em>.", "emoji": "🖊️" },
                    { "word": "pencil", "phonetic": "/ˈpensl/", "meaning": "铅笔", "example": "I have a <em>pencil</em>.", "emoji": "✏️" },
                    { "word": "book", "phonetic": "/bʊk/", "meaning": "书；书籍", "example": "Open your <em>book</em>.", "emoji": "📖" },
                    { "word": "bag", "phonetic": "/bæɡ/", "meaning": "包；袋", "example": "Put it in your <em>bag</em>.", "emoji": "🎒" },
                    { "word": "paper", "phonetic": "/ˈpeɪpə(r)/", "meaning": "纸", "example": "Give me some <em>paper</em>.", "emoji": "📄" },
                    { "word": "these", "phonetic": "/ðiːz/", "meaning": "这些", "example": "<em>These</em> are my books.", "emoji": "👉" },
                    { "word": "see", "phonetic": "/siː/", "meaning": "看见", "example": "I can <em>see</em> a bird.", "emoji": "👀" },
                    { "word": "smell", "phonetic": "/smel/", "meaning": "闻（气味）", "example": "I can <em>smell</em> the flowers.", "emoji": "👃" },
                    { "word": "taste", "phonetic": "/teɪst/", "meaning": "尝（味道）", "example": "<em>Taste</em> the apple.", "emoji": "👅" },
                    { "word": "hear", "phonetic": "/hɪə(r)/", "meaning": "听见；听到", "example": "I can <em>hear</em> a bird.", "emoji": "👂" },
                    { "word": "touch", "phonetic": "/tʌtʃ/", "meaning": "触摸；碰", "example": "<em>Touch</em> your nose.", "emoji": "🖐️" },
                    { "word": "nose", "phonetic": "/nəʊz/", "meaning": "鼻；鼻子", "example": "Touch your <em>nose</em>.", "emoji": "👃" },
                    { "word": "tongue", "phonetic": "/tʌŋ/", "meaning": "舌；舌头", "example": "Stick out your <em>tongue</em>.", "emoji": "👅" },
                    { "word": "class", "phonetic": "/klɑːs/", "meaning": "课；班级", "example": "We have <em>class</em> now.", "emoji": "🏫" },
                    { "word": "in class", "phonetic": "/ɪn klɑːs/", "meaning": "在课堂上", "example": "Don't talk <em>in class</em>.", "emoji": "📚" },
                    { "word": "computer", "phonetic": "/kəmˈpjuːtə(r)/", "meaning": "计算机；电脑", "example": "I use a <em>computer</em>.", "emoji": "💻" },
                    { "word": "learn", "phonetic": "/lɜːn/", "meaning": "学；学习", "example": "Let's <em>learn</em> English.", "emoji": "📝" }
                ]
            },
            "4": {
                "name": "Unit 4",
                "words": [
                    { "word": "breakfast", "phonetic": "/ˈbrekfəst/", "meaning": "早餐；早饭", "example": "I have <em>breakfast</em> at 7.", "emoji": "🌅" },
                    { "word": "time", "phonetic": "/taɪm/", "meaning": "时间", "example": "What <em>time</em> is it?", "emoji": "⏰" },
                    { "word": "bread", "phonetic": "/bred/", "meaning": "面包", "example": "I like <em>bread</em>.", "emoji": "🍞" },
                    { "word": "egg", "phonetic": "/eɡ/", "meaning": "蛋；鸡蛋", "example": "I eat an <em>egg</em>.", "emoji": "🥚" },
                    { "word": "milk", "phonetic": "/mɪlk/", "meaning": "（牛或羊等的）奶", "example": "I drink <em>milk</em>.", "emoji": "🥛" },
                    { "word": "noodle", "phonetic": "/ˈnuːdl/", "meaning": "面条", "example": "I like <em>noodles</em>.", "emoji": "🍜" },
                    { "word": "juice", "phonetic": "/dʒuːs/", "meaning": "果汁", "example": "I like <em>juice</em>.", "emoji": "🧃" },
                    { "word": "rice", "phonetic": "/raɪs/", "meaning": "大米", "example": "I eat <em>rice</em> every day.", "emoji": "🍚" },
                    { "word": "meat", "phonetic": "/miːt/", "meaning": "肉", "example": "I don't like <em>meat</em>.", "emoji": "🥩" },
                    { "word": "vegetable", "phonetic": "/ˈvedʒtəbl/", "meaning": "蔬菜", "example": "Eat your <em>vegetables</em>.", "emoji": "🥬" },
                    { "word": "healthy", "phonetic": "/ˈhelθi/", "meaning": "健康的", "example": "It's <em>healthy</em> food.", "emoji": "💪" },
                    { "word": "plate", "phonetic": "/pleɪt/", "meaning": "盘子", "example": "Put it on the <em>plate</em>.", "emoji": "🍽️" },
                    { "word": "soup", "phonetic": "/suːp/", "meaning": "汤", "example": "The <em>soup</em> is hot.", "emoji": "🍲" },
                    { "word": "fruit", "phonetic": "/fruːt/", "meaning": "水果", "example": "I like <em>fruit</em>.", "emoji": "🍎" },
                    { "word": "colourful", "phonetic": "/ˈkʌləfl/", "meaning": "五彩缤纷的", "example": "The garden is <em>colourful</em>.", "emoji": "🌈" },
                    { "word": "candy", "phonetic": "/ˈkændi/", "meaning": "糖果", "example": "I like <em>candy</em>.", "emoji": "🍬" },
                    { "word": "yummy", "phonetic": "/ˈjʌmi/", "meaning": "很好吃的", "example": "The cake is <em>yummy</em>!", "emoji": "😋" }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    { "word": "boat", "phonetic": "/bəʊt/", "meaning": "小船；舟", "example": "I have a toy <em>boat</em>.", "emoji": "⛵" },
                    { "word": "cool", "phonetic": "/kuːl/", "meaning": "酷的，绝妙的", "example": "That's <em>cool</em>!", "emoji": "😎" },
                    { "word": "keep", "phonetic": "/kiːp/", "meaning": "保有；留着", "example": "<em>Keep</em> your room tidy.", "emoji": "✊" },
                    { "word": "at", "phonetic": "/æt/", "meaning": "在（某处）", "example": "I'm <em>at</em> home.", "emoji": "📌" },
                    { "word": "home", "phonetic": "/həʊm/", "meaning": "家；住所", "example": "Welcome to my <em>home</em>.", "emoji": "🏠" },
                    { "word": "ball", "phonetic": "/bɔːl/", "meaning": "球", "example": "Bounce the <em>ball</em>.", "emoji": "⚽" },
                    { "word": "doll", "phonetic": "/dɒl/", "meaning": "玩偶；玩具娃娃", "example": "She has a <em>doll</em>.", "emoji": "🧸" },
                    { "word": "car", "phonetic": "/kɑː(r)/", "meaning": "小汽车；轿车", "example": "I have a toy <em>car</em>.", "emoji": "🚗" },
                    { "word": "on", "phonetic": "/ɒn/", "meaning": "在……上", "example": "The book is <em>on</em> the desk.", "emoji": "⬆️" },
                    { "word": "shelf", "phonetic": "/ʃelf/", "meaning": "架子", "example": "Put it on the <em>shelf</em>.", "emoji": "📚" },
                    { "word": "in", "phonetic": "/ɪn/", "meaning": "在……内；在……中", "example": "The cat is <em>in</em> the box.", "emoji": "📥" },
                    { "word": "box", "phonetic": "/bɒks/", "meaning": "盒子", "example": "Open the <em>box</em>.", "emoji": "📦" },
                    { "word": "cap", "phonetic": "/kæp/", "meaning": "帽子", "example": "Put on your <em>cap</em>.", "emoji": "🧢" },
                    { "word": "map", "phonetic": "/mæp/", "meaning": "地图", "example": "Look at the <em>map</em>.", "emoji": "🗺️" },
                    { "word": "under", "phonetic": "/ˈʌndə(r)/", "meaning": "在……下面", "example": "The cat is <em>under</em> the desk.", "emoji": "⬇️" },
                    { "word": "still", "phonetic": "/stɪl/", "meaning": "还是；仍然", "example": "I <em>still</em> like it.", "emoji": "🔄" },
                    { "word": "put", "phonetic": "/pʊt/", "meaning": "放；安置", "example": "<em>Put</em> it on the desk.", "emoji": "📥" }
                ]
            },
            "6": {
                "name": "Unit 6",
                "words": [
                    { "word": "fifteen", "phonetic": "/ˌfɪfˈtiːn/", "meaning": "十五", "example": "I am <em>fifteen</em> years old.", "emoji": "🔢" },
                    { "word": "twelve", "phonetic": "/twelv/", "meaning": "十二", "example": "There are <em>twelve</em> months.", "emoji": "🔢" },
                    { "word": "fourteen", "phonetic": "/ˌfɔːˈtiːn/", "meaning": "十四", "example": "I am <em>fourteen</em>.", "emoji": "🔢" },
                    { "word": "thirteen", "phonetic": "/ˌθɜːˈtiːn/", "meaning": "十三", "example": "I am <em>thirteen</em>.", "emoji": "🔢" },
                    { "word": "eleven", "phonetic": "/ɪˈlevn/", "meaning": "十一", "example": "I am <em>eleven</em>.", "emoji": "🔢" },
                    { "word": "twenty", "phonetic": "/ˈtwenti/", "meaning": "二十", "example": "I can count to <em>twenty</em>.", "emoji": "🔢" },
                    { "word": "seventeen", "phonetic": "/ˌsevnˈtiːn/", "meaning": "十七", "example": "I am <em>seventeen</em>.", "emoji": "🔢" },
                    { "word": "sixteen", "phonetic": "/ˌsɪksˈtiːn/", "meaning": "十六", "example": "I am <em>sixteen</em>.", "emoji": "🔢" },
                    { "word": "eighteen", "phonetic": "/ˌeɪˈtiːn/", "meaning": "十八", "example": "I am <em>eighteen</em>.", "emoji": "🔢" },
                    { "word": "nineteen", "phonetic": "/ˌnaɪnˈtiːn/", "meaning": "十九", "example": "I am <em>nineteen</em>.", "emoji": "🔢" },
                    { "word": "piggy bank", "phonetic": "/ˈpɪɡi bæŋk/", "meaning": "猪形储钱罐", "example": "Put coins in the <em>piggy bank</em>.", "emoji": "🐷" },
                    { "word": "pay", "phonetic": "/peɪ/", "meaning": "付费", "example": "I <em>pay</em> for the book.", "emoji": "💳" },
                    { "word": "back", "phonetic": "/bæk/", "meaning": "回到原处", "example": "Let's go <em>back</em>.", "emoji": "⬅️" }
                ]
            }
        }
    },
    "PEP_4下": {
        "name": "四年级下册（人教版PEP·三年级起点）",
        "grade": 4,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    { "word": "sorry", "phonetic": "/ˈsɒri/", "meaning": "对不起", "example": "I'm <em>sorry</em> I'm late.", "emoji": "😔" },
                    { "word": "hurry up", "phonetic": "/ˈhʌri ʌp/", "meaning": "快点；赶快", "example": "<em>Hurry up</em>! We're late.", "emoji": "🏃" },
                    { "word": "late", "phonetic": "/leɪt/", "meaning": "迟到；迟发生", "example": "Don't be <em>late</em>.", "emoji": "⏰" },
                    { "word": "class", "phonetic": "/klɑːs/", "meaning": "课；课程；班；班级", "example": "We have <em>class</em> at 8.", "emoji": "🏫" },
                    { "word": "ready", "phonetic": "/ˈredi/", "meaning": "准备好", "example": "Are you <em>ready</em>?", "emoji": "👌" },
                    { "word": "rule", "phonetic": "/ruːl/", "meaning": "规则；规章", "example": "Follow the <em>rules</em>.", "emoji": "📋" },
                    { "word": "classroom", "phonetic": "/ˈklɑːsruːm/", "meaning": "教室", "example": "This is our <em>classroom</em>.", "emoji": "🏫" },
                    { "word": "turn off", "phonetic": "/tɜːn ɒf/", "meaning": "关掉", "example": "<em>Turn off</em> the light.", "emoji": "💡" },
                    { "word": "light", "phonetic": "/laɪt/", "meaning": "灯；光", "example": "Turn on the <em>light</em>.", "emoji": "💡" },
                    { "word": "blackboard", "phonetic": "/ˈblækbɔːd/", "meaning": "黑板", "example": "Look at the <em>blackboard</em>.", "emoji": "⬛" },
                    { "word": "desk", "phonetic": "/desk/", "meaning": "书桌；办公桌", "example": "Put it on the <em>desk</em>.", "emoji": "🗄️" },
                    { "word": "chair", "phonetic": "/tʃeə(r)/", "meaning": "椅子", "example": "Sit on the <em>chair</em>.", "emoji": "🪑" },
                    { "word": "tidy", "phonetic": "/ˈtaɪdi/", "meaning": "整洁的；整齐的", "example": "Keep your desk <em>tidy</em>.", "emoji": "✨" },
                    { "word": "music", "phonetic": "/ˈmjuːzɪk/", "meaning": "音乐", "example": "I like <em>music</em> class.", "emoji": "🎵" },
                    { "word": "door", "phonetic": "/dɔː(r)/", "meaning": "门", "example": "Close the <em>door</em>.", "emoji": "🚪" },
                    { "word": "window", "phonetic": "/ˈwɪndəʊ/", "meaning": "窗", "example": "Open the <em>window</em>.", "emoji": "🪟" },
                    { "word": "fan", "phonetic": "/fæn/", "meaning": "风扇", "example": "Turn on the <em>fan</em>.", "emoji": "🪭" },
                    { "word": "when", "phonetic": "/wen/", "meaning": "当……时；什么时候", "example": "<em>When</em> do you get up?", "emoji": "🕐" },
                    { "word": "understand", "phonetic": "/ˌʌndəˈstænd/", "meaning": "懂；理解", "example": "I <em>understand</em>.", "emoji": "💡" },
                    { "word": "wall", "phonetic": "/wɔːl/", "meaning": "墙；壁", "example": "Look at the <em>wall</em>.", "emoji": "🧱" },
                    { "word": "newspaper", "phonetic": "/ˈnjuːzpeɪpə(r)/", "meaning": "报纸", "example": "Read the <em>newspaper</em>.", "emoji": "📰" },
                    { "word": "hand out", "phonetic": "/hænd aʊt/", "meaning": "分发", "example": "<em>Hand out</em> the books.", "emoji": "📤" },
                    { "word": "workbook", "phonetic": "/ˈwɜːkbʊk/", "meaning": "练习册；作业本", "example": "Open your <em>workbook</em>.", "emoji": "📓" }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    { "word": "watch", "phonetic": "/wɒtʃ/", "meaning": "看", "example": "I <em>watch</em> TV.", "emoji": "👀" },
                    { "word": "TV", "phonetic": "/ˌtiː ˈviː/", "meaning": "电视", "example": "I watch <em>TV</em> after school.", "emoji": "📺" },
                    { "word": "homework", "phonetic": "/ˈhəʊmwɜːk/", "meaning": "家庭作业", "example": "Do your <em>homework</em>.", "emoji": "📝" },
                    { "word": "first", "phonetic": "/fɜːst/", "meaning": "首先；首次；第一", "example": "<em>First</em>, wash your hands.", "emoji": "1️⃣" },
                    { "word": "wet", "phonetic": "/wet/", "meaning": "湿的；未干的", "example": "The floor is <em>wet</em>.", "emoji": "💧" },
                    { "word": "run", "phonetic": "/rʌn/", "meaning": "跑；奔跑", "example": "Don't <em>run</em> in the hall.", "emoji": "🏃" },
                    { "word": "living room", "phonetic": "/ˈlɪvɪŋ ruːm/", "meaning": "客厅；起居室", "example": "I'm in the <em>living room</em>.", "emoji": "🛋️" },
                    { "word": "safe", "phonetic": "/seɪf/", "meaning": "安全的", "example": "Be <em>safe</em>!", "emoji": "🛡️" },
                    { "word": "word", "phonetic": "/wɜːd/", "meaning": "言语；单词；字", "example": "Read the <em>words</em>.", "emoji": "🔤" },
                    { "word": "wash", "phonetic": "/wɒʃ/", "meaning": "洗", "example": "<em>Wash</em> your hands.", "emoji": "🧼" },
                    { "word": "helpful", "phonetic": "/ˈhelpfl/", "meaning": "有帮助的；有用的", "example": "She is <em>helpful</em>.", "emoji": "🤝" },
                    { "word": "loud", "phonetic": "/laʊd/", "meaning": "说话太大声的；吵闹的", "example": "Don't be <em>loud</em>.", "emoji": "📢" },
                    { "word": "sleep", "phonetic": "/sliːp/", "meaning": "睡觉", "example": "I <em>sleep</em> at 9.", "emoji": "😴" },
                    { "word": "bedroom", "phonetic": "/ˈbedruːm/", "meaning": "卧室", "example": "This is my <em>bedroom</em>.", "emoji": "🛏️" },
                    { "word": "kitchen", "phonetic": "/ˈkɪtʃɪn/", "meaning": "厨房", "example": "Mom is in the <em>kitchen</em>.", "emoji": "🍳" },
                    { "word": "study", "phonetic": "/ˈstʌdi/", "meaning": "书房", "example": "Dad is in the <em>study</em>.", "emoji": "📖" },
                    { "word": "bathroom", "phonetic": "/ˈbɑːθruːm/", "meaning": "浴室；洗手间", "example": "Go to the <em>bathroom</em>.", "emoji": "🚿" },
                    { "word": "think", "phonetic": "/θɪŋk/", "meaning": "想；思考", "example": "I <em>think</em> so.", "emoji": "🤔" },
                    { "word": "work", "phonetic": "/wɜːk/", "meaning": "做（某事）；工作", "example": "I <em>work</em> hard.", "emoji": "💼" },
                    { "word": "hard", "phonetic": "/hɑːd/", "meaning": "努力地；费力地", "example": "Study <em>hard</em>.", "emoji": "💪" },
                    { "word": "follow", "phonetic": "/ˈfɒləʊ/", "meaning": "遵循，听从", "example": "<em>Follow</em> the rules.", "emoji": "👉" },
                    { "word": "feel", "phonetic": "/fiːl/", "meaning": "觉得；感到", "example": "I <em>feel</em> happy.", "emoji": "😊" }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    { "word": "over", "phonetic": "/ˈəʊvə(r)/", "meaning": "结束（的）", "example": "School is <em>over</em>.", "emoji": "🏁" },
                    { "word": "kid", "phonetic": "/kɪd/", "meaning": "小孩", "example": "The <em>kid</em> is cute.", "emoji": "🧒" },
                    { "word": "dinner", "phonetic": "/ˈdɪnə(r)/", "meaning": "正餐", "example": "Let's have <em>dinner</em>.", "emoji": "🍽️" },
                    { "word": "art", "phonetic": "/ɑːt/", "meaning": "美术；艺术", "example": "I like <em>art</em> class.", "emoji": "🎨" },
                    { "word": "lunch", "phonetic": "/lʌntʃ/", "meaning": "午餐", "example": "It's time for <em>lunch</em>.", "emoji": "🥪" },
                    { "word": "maths", "phonetic": "/mæθs/", "meaning": "数学", "example": "I like <em>maths</em>.", "emoji": "🔢" },
                    { "word": "get up", "phonetic": "/ɡet ʌp/", "meaning": "起床", "example": "I <em>get up</em> at 7.", "emoji": "⏰" },
                    { "word": "go to school", "phonetic": "/ɡəʊ tuː skuːl/", "meaning": "上学", "example": "I <em>go to school</em> at 8.", "emoji": "🏫" },
                    { "word": "go home", "phonetic": "/ɡəʊ həʊm/", "meaning": "回家", "example": "I <em>go home</em> at 4.", "emoji": "🏠" },
                    { "word": "go to bed", "phonetic": "/ɡəʊ tuː bed/", "meaning": "上床睡觉", "example": "I <em>go to bed</em> at 9.", "emoji": "🛏️" },
                    { "word": "want", "phonetic": "/wɒnt/", "meaning": "想要", "example": "I <em>want</em> some water.", "emoji": "🙋" },
                    { "word": "clock", "phonetic": "/klɒk/", "meaning": "时钟", "example": "Look at the <em>clock</em>.", "emoji": "🕐" },
                    { "word": "just", "phonetic": "/dʒʌst/", "meaning": "只是；仅仅；正要", "example": "I'm <em>just</em> kidding.", "emoji": "☝️" },
                    { "word": "minute", "phonetic": "/ˈmɪnɪt/", "meaning": "分钟", "example": "Wait a <em>minute</em>.", "emoji": "⏱️" }
                ]
            },
            "4": {
                "name": "Unit 4",
                "words": [
                    { "word": "trousers", "phonetic": "/ˈtraʊzəz/", "meaning": "裤子", "example": "I like these <em>trousers</em>.", "emoji": "👖" },
                    { "word": "pair", "phonetic": "/peə(r)/", "meaning": "一条，一副", "example": "A <em>pair</em> of shoes.", "emoji": "👔" },
                    { "word": "clothes", "phonetic": "/kləʊðz/", "meaning": "衣服；服装", "example": "Put on your <em>clothes</em>.", "emoji": "👗" },
                    { "word": "those", "phonetic": "/ðəʊz/", "meaning": "那些", "example": "<em>Those</em> are nice.", "emoji": "👉" },
                    { "word": "shorts", "phonetic": "/ʃɔːts/", "meaning": "短裤", "example": "I wear <em>shorts</em> in summer.", "emoji": "🩳" },
                    { "word": "jacket", "phonetic": "/ˈdʒækɪt/", "meaning": "夹克衫；短上衣", "example": "Put on your <em>jacket</em>.", "emoji": "🧥" },
                    { "word": "skirt", "phonetic": "/skɜːt/", "meaning": "裙子", "example": "She wears a <em>skirt</em>.", "emoji": "👗" },
                    { "word": "dear", "phonetic": "/dɪə(r)/", "meaning": "亲爱的", "example": "Oh <em>dear</em>!", "emoji": "💝" },
                    { "word": "expensive", "phonetic": "/ɪkˈspensɪv/", "meaning": "昂贵的；价格高的", "example": "It's too <em>expensive</em>.", "emoji": "💰" },
                    { "word": "take", "phonetic": "/teɪk/", "meaning": "买下", "example": "I'll <em>take</em> this one.", "emoji": "🛒" },
                    { "word": "cheap", "phonetic": "/tʃiːp/", "meaning": "便宜的", "example": "It's very <em>cheap</em>.", "emoji": "💵" },
                    { "word": "shoe", "phonetic": "/ʃuː/", "meaning": "鞋", "example": "Put on your <em>shoes</em>.", "emoji": "👟" },
                    { "word": "beautiful", "phonetic": "/ˈbjuːtɪfl/", "meaning": "美丽的", "example": "The dress is <em>beautiful</em>.", "emoji": "🌸" },
                    { "word": "hat", "phonetic": "/hæt/", "meaning": "帽子", "example": "I like this <em>hat</em>.", "emoji": "🎩" },
                    { "word": "sunglasses", "phonetic": "/ˈsʌnɡlɑːsɪz/", "meaning": "太阳镜；墨镜", "example": "I wear <em>sunglasses</em>.", "emoji": "🕶️" },
                    { "word": "free", "phonetic": "/friː/", "meaning": "免费的", "example": "It's <em>free</em>!", "emoji": "🆓" },
                    { "word": "large", "phonetic": "/lɑːdʒ/", "meaning": "大型号的", "example": "I need a <em>large</em> size.", "emoji": "📐" },
                    { "word": "size", "phonetic": "/saɪz/", "meaning": "尺码；号", "example": "What <em>size</em> are you?", "emoji": "📏" },
                    { "word": "list", "phonetic": "/lɪst/", "meaning": "清单；目录", "example": "Make a shopping <em>list</em>.", "emoji": "📋" },
                    { "word": "try on", "phonetic": "/traɪ ɒn/", "meaning": "试穿", "example": "<em>Try on</em> the shirt.", "emoji": "👗" },
                    { "word": "any", "phonetic": "/ˈeni/", "meaning": "任何的；任一的", "example": "Do you have <em>any</em> red ones?", "emoji": "❓" }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    { "word": "cow", "phonetic": "/kaʊ/", "meaning": "奶牛", "example": "The <em>cow</em> is big.", "emoji": "🐄" },
                    { "word": "horse", "phonetic": "/hɔːs/", "meaning": "马", "example": "I like the <em>horse</em>.", "emoji": "🐴" },
                    { "word": "sheep", "phonetic": "/ʃiːp/", "meaning": "羊；绵羊", "example": "The <em>sheep</em> is white.", "emoji": "🐑" },
                    { "word": "pig", "phonetic": "/pɪɡ/", "meaning": "猪", "example": "The <em>pig</em> is pink.", "emoji": "🐷" },
                    { "word": "chicken", "phonetic": "/ˈtʃɪkɪn/", "meaning": "鸡；鸡肉", "example": "We have a <em>chicken</em>.", "emoji": "🐔" },
                    { "word": "tomato", "phonetic": "/təˈmɑːtəʊ/", "meaning": "西红柿", "example": "I like <em>tomatoes</em>.", "emoji": "🍅" },
                    { "word": "bee", "phonetic": "/biː/", "meaning": "蜜蜂", "example": "The <em>bee</em> is on the flower.", "emoji": "🐝" },
                    { "word": "mouse", "phonetic": "/maʊs/", "meaning": "老鼠", "example": "I see a <em>mouse</em>.", "emoji": "🐭" },
                    { "word": "carrot", "phonetic": "/ˈkærət/", "meaning": "胡萝卜", "example": "I like <em>carrots</em>.", "emoji": "🥕" },
                    { "word": "potato", "phonetic": "/pəˈteɪtəʊ/", "meaning": "土豆", "example": "I like <em>potatoes</em>.", "emoji": "🥔" },
                    { "word": "green bean", "phonetic": "/ɡriːn biːn/", "meaning": "青刀豆；四季豆", "example": "I like <em>green beans</em>.", "emoji": "🫘" },
                    { "word": "can", "phonetic": "/kæn/", "meaning": "金属罐", "example": "Open the <em>can</em>.", "emoji": "🥫" },
                    { "word": "a box of", "phonetic": "/ə bɒks ɒv/", "meaning": "一盒，一箱", "example": "I need <em>a box of</em> milk.", "emoji": "📦" }
                ]
            },
            "6": {
                "name": "Unit 6",
                "words": [
                    { "word": "feed", "phonetic": "/fiːd/", "meaning": "给（人或动物）食物；饲养", "example": "<em>Feed</em> the chickens.", "emoji": "🐔" },
                    { "word": "pass", "phonetic": "/pɑːs/", "meaning": "给；递", "example": "<em>Pass</em> me the salt.", "emoji": "🤲" },
                    { "word": "pick", "phonetic": "/pɪk/", "meaning": "采；摘", "example": "<em>Pick</em> the apples.", "emoji": "🍎" },
                    { "word": "milk", "phonetic": "/mɪlk/", "meaning": "挤奶", "example": "We <em>milk</em> the cow.", "emoji": "🐄" },
                    { "word": "knife", "phonetic": "/naɪf/", "meaning": "刀", "example": "Use a <em>knife</em>.", "emoji": "🔪" },
                    { "word": "fork", "phonetic": "/fɔːk/", "meaning": "餐叉", "example": "Use a <em>fork</em>.", "emoji": "🍴" },
                    { "word": "chopstick", "phonetic": "/ˈtʃɒpstɪk/", "meaning": "筷子", "example": "Use <em>chopsticks</em>.", "emoji": "🥢" },
                    { "word": "waste", "phonetic": "/weɪst/", "meaning": "浪费；废品", "example": "Don't <em>waste</em> food.", "emoji": "🚯" },
                    { "word": "food", "phonetic": "/fuːd/", "meaning": "菜肴；食物", "example": "The <em>food</em> is yummy.", "emoji": "🍲" },
                    { "word": "delicious", "phonetic": "/dɪˈlɪʃəs/", "meaning": "美味的；可口的", "example": "The cake is <em>delicious</em>.", "emoji": "😋" },
                    { "word": "clear the table", "phonetic": "/klɪə(r) ðə ˈteɪbl/", "meaning": "收拾餐桌", "example": "Help me <em>clear the table</em>.", "emoji": "🧹" },
                    { "word": "set the table", "phonetic": "/set ðə ˈteɪbl/", "meaning": "摆放餐具", "example": "Let's <em>set the table</em>.", "emoji": "🍽️" },
                    { "word": "bowl", "phonetic": "/bəʊl/", "meaning": "碗", "example": "Use a <em>bowl</em>.", "emoji": "🥣" },
                    { "word": "spoon", "phonetic": "/spuːn/", "meaning": "勺；匙；调羹", "example": "Use a <em>spoon</em>.", "emoji": "🥄" },
                    { "word": "supermarket", "phonetic": "/ˈsuːpəmɑːkɪt/", "meaning": "超市", "example": "Let's go to the <em>supermarket</em>.", "emoji": "🏬" },
                    { "word": "herself", "phonetic": "/hɜːˈself/", "meaning": "她自己", "example": "She did it <em>herself</em>.", "emoji": "👧" },
                    { "word": "week", "phonetic": "/wiːk/", "meaning": "周；星期", "example": "There are 7 days in a <em>week</em>.", "emoji": "📅" },
                    { "word": "salad", "phonetic": "/ˈsæləd/", "meaning": "蔬菜沙拉", "example": "I like <em>salad</em>.", "emoji": "🥗" }
                ]
            }
        }
    },
    "RJY_3下": {
        "name": "三年级下册（人教版·一年级起点）",
        "grade": 3,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1 学习科目",
                "words": [
                    {
                        "word": "Chinese",
                        "phonetic": "/ˌtʃaɪˈniːz/",
                        "meaning": "语文；汉语（的）",
                        "example": "I like <em>Chinese</em> class.",
                        "emoji": "🈶"
                    },
                    {
                        "word": "English",
                        "phonetic": "/ˈɪŋɡlɪʃ/",
                        "meaning": "英语（的）",
                        "example": "I like <em>English</em>.",
                        "emoji": "🇬🇧"
                    },
                    {
                        "word": "science",
                        "phonetic": "/ˈsaɪəns/",
                        "meaning": "科学",
                        "example": "<em>Science</em> is fun.",
                        "emoji": "🔬"
                    },
                    {
                        "word": "PE",
                        "phonetic": "/ˌpiːˈiː/",
                        "meaning": "体育",
                        "example": "We have <em>PE</em> today.",
                        "emoji": "⚽"
                    },
                    {
                        "word": "music",
                        "phonetic": "/ˈmjuːzɪk/",
                        "meaning": "音乐",
                        "example": "I like <em>music</em> class.",
                        "emoji": "🎵"
                    },
                    {
                        "word": "maths",
                        "phonetic": "/mæθs/",
                        "meaning": "数学",
                        "example": "I am good at <em>maths</em>.",
                        "emoji": "🔢"
                    },
                    {
                        "word": "art",
                        "phonetic": "/ɑːt/",
                        "meaning": "美术",
                        "example": "I like <em>art</em>.",
                        "emoji": "🎨"
                    },
                    {
                        "word": "computer class",
                        "phonetic": "/kəmˈpjuːtə klɑːs/",
                        "meaning": "计算机课",
                        "example": "We have <em>computer class</em>.",
                        "emoji": "💻"
                    },
                    {
                        "word": "we",
                        "phonetic": "/wiː/",
                        "meaning": "我们",
                        "example": "<em>We</em> are happy.",
                        "emoji": "👫"
                    },
                    {
                        "word": "that",
                        "phonetic": "/ðæt/",
                        "meaning": "那，那个",
                        "example": "<em>That</em> is a book.",
                        "emoji": "👉"
                    }
                ]
            },
            "2": {
                "name": "Unit 2 校园与教室",
                "words": [
                    {
                        "word": "classroom",
                        "phonetic": "/ˈklɑːsruːm/",
                        "meaning": "教室",
                        "example": "This is our <em>classroom</em>.",
                        "emoji": "🏫"
                    },
                    {
                        "word": "library",
                        "phonetic": "/ˈlaɪbrəri/",
                        "meaning": "图书馆",
                        "example": "I go to the <em>library</em>.",
                        "emoji": "📚"
                    },
                    {
                        "word": "toilet",
                        "phonetic": "/ˈtɔɪlət/",
                        "meaning": "厕所，洗手间",
                        "example": "Where is the <em>toilet</em>?",
                        "emoji": "🚻"
                    },
                    {
                        "word": "playground",
                        "phonetic": "/ˈpleɪɡraʊnd/",
                        "meaning": "操场，运动场",
                        "example": "Let's go to the <em>playground</em>.",
                        "emoji": "🏃"
                    },
                    {
                        "word": "first",
                        "phonetic": "/fɜːst/",
                        "meaning": "第一的",
                        "example": "The <em>first</em> floor.",
                        "emoji": "🥇"
                    },
                    {
                        "word": "second",
                        "phonetic": "/ˈsekənd/",
                        "meaning": "第二的",
                        "example": "The <em>second</em> floor.",
                        "emoji": "🥈"
                    },
                    {
                        "word": "third",
                        "phonetic": "/θɜːd/",
                        "meaning": "第三的",
                        "example": "The <em>third</em> floor.",
                        "emoji": "🥉"
                    },
                    {
                        "word": "floor",
                        "phonetic": "/flɔː(r)/",
                        "meaning": "（楼）层",
                        "example": "Which <em>floor</em>?",
                        "emoji": "🏢"
                    },
                    {
                        "word": "room",
                        "phonetic": "/ruːm/",
                        "meaning": "房间",
                        "example": "This is my <em>room</em>.",
                        "emoji": "🏠"
                    },
                    {
                        "word": "our",
                        "phonetic": "/aʊə(r)/",
                        "meaning": "我们的",
                        "example": "This is <em>our</em> school.",
                        "emoji": "👫"
                    },
                    {
                        "word": "they",
                        "phonetic": "/ðeɪ/",
                        "meaning": "他们",
                        "example": "<em>They</em> are my friends.",
                        "emoji": "👥"
                    },
                    {
                        "word": "chair",
                        "phonetic": "/tʃeə(r)/",
                        "meaning": "椅子",
                        "example": "Sit on the <em>chair</em>.",
                        "emoji": "🪑"
                    },
                    {
                        "word": "desk",
                        "phonetic": "/desk/",
                        "meaning": "书桌；写字台",
                        "example": "The <em>desk</em> is new.",
                        "emoji": "📚"
                    },
                    {
                        "word": "blackboard",
                        "phonetic": "/ˈblækbɔːd/",
                        "meaning": "黑板",
                        "example": "Look at the <em>blackboard</em>.",
                        "emoji": "⬛"
                    }
                ]
            },
            "3": {
                "name": "Unit 3 课余活动",
                "words": [
                    {
                        "word": "after school",
                        "phonetic": "/ˈɑːftə skuːl/",
                        "meaning": "放学后",
                        "example": "What do you do <em>after school</em>?",
                        "emoji": "🎒"
                    },
                    {
                        "word": "play sports",
                        "phonetic": "/pleɪ spɔːts/",
                        "meaning": "做运动",
                        "example": "I <em>play sports</em> after school.",
                        "emoji": "🏅"
                    },
                    {
                        "word": "draw pictures",
                        "phonetic": "/drɔː ˈpɪktʃəz/",
                        "meaning": "画画",
                        "example": "I like to <em>draw pictures</em>.",
                        "emoji": "🎨"
                    },
                    {
                        "word": "play chess",
                        "phonetic": "/pleɪ tʃes/",
                        "meaning": "下棋",
                        "example": "Can you <em>play chess</em>?",
                        "emoji": "♟️"
                    },
                    {
                        "word": "dance",
                        "phonetic": "/dɑːns/",
                        "meaning": "跳舞",
                        "example": "I like to <em>dance</em>.",
                        "emoji": "💃"
                    },
                    {
                        "word": "sing songs",
                        "phonetic": "/sɪŋ sɒŋz/",
                        "meaning": "唱歌",
                        "example": "Let's <em>sing songs</em>.",
                        "emoji": "🎤"
                    },
                    {
                        "word": "read books",
                        "phonetic": "/riːd bʊks/",
                        "meaning": "读书",
                        "example": "I <em>read books</em> every day.",
                        "emoji": "📖"
                    },
                    {
                        "word": "really",
                        "phonetic": "/ˈrɪːəli/",
                        "meaning": "确实",
                        "example": "That is <em>really</em> fun!",
                        "emoji": "😮"
                    },
                    {
                        "word": "tomorrow",
                        "phonetic": "/təˈmɒrəʊ/",
                        "meaning": "明天",
                        "example": "See you <em>tomorrow</em>!",
                        "emoji": "📅"
                    },
                    {
                        "word": "wake up",
                        "phonetic": "/weɪk ʌp/",
                        "meaning": "叫醒",
                        "example": "Please <em>wake up</em> early.",
                        "emoji": "⏰"
                    },
                    {
                        "word": "be back",
                        "phonetic": "/biː bæk/",
                        "meaning": "回来",
                        "example": "I will <em>be back</em> soon.",
                        "emoji": "🔙"
                    },
                    {
                        "word": "play football",
                        "phonetic": "/pleɪ ˈfʊtbɔːl/",
                        "meaning": "踢足球",
                        "example": "Let's <em>play football</em>.",
                        "emoji": "⚽"
                    },
                    {
                        "word": "fly a kite",
                        "phonetic": "/flaɪ ə kaɪt/",
                        "meaning": "放风筝",
                        "example": "Let's <em>fly a kite</em>.",
                        "emoji": "🪁"
                    },
                    {
                        "word": "ride a bike",
                        "phonetic": "/raɪd ə baɪk/",
                        "meaning": "骑自行车",
                        "example": "I can <em>ride a bike</em>.",
                        "emoji": "🚲"
                    },
                    {
                        "word": "swim",
                        "phonetic": "/swɪm/",
                        "meaning": "游泳",
                        "example": "I like to <em>swim</em>.",
                        "emoji": "🏊"
                    },
                    {
                        "word": "make a model plane",
                        "phonetic": "/meɪk ə ˈmɒdl pleɪn/",
                        "meaning": "做飞机模型",
                        "example": "I want to <em>make a model plane</em>.",
                        "emoji": "✈️"
                    },
                    {
                        "word": "make a snowman",
                        "phonetic": "/meɪk ə ˈsnəʊmæn/",
                        "meaning": "堆雪人",
                        "example": "Let's <em>make a snowman</em>.",
                        "emoji": "⛄"
                    }
                ]
            },
            "4": {
                "name": "Unit 4 家庭亲属",
                "words": [
                    {
                        "word": "family",
                        "phonetic": "/ˈfæməli/",
                        "meaning": "家庭",
                        "example": "I love my <em>family</em>.",
                        "emoji": "👨‍👩‍👧"
                    },
                    {
                        "word": "uncle",
                        "phonetic": "/ˈʌŋkl/",
                        "meaning": "姑父；伯父；舅父；叔叔",
                        "example": "My <em>uncle</em> is funny.",
                        "emoji": "🧔"
                    },
                    {
                        "word": "aunt",
                        "phonetic": "/ɑːnt/",
                        "meaning": "姑母；伯母；舅妈；阿姨",
                        "example": "My <em>aunt</em> is kind.",
                        "emoji": "👩"
                    },
                    {
                        "word": "cousin",
                        "phonetic": "/ˈkʌzn/",
                        "meaning": "堂（或表）兄弟；堂（或表）姐妹",
                        "example": "My <em>cousin</em> is fun.",
                        "emoji": "👦"
                    },
                    {
                        "word": "handsome",
                        "phonetic": "/ˈhænsəm/",
                        "meaning": "英俊的",
                        "example": "My uncle is <em>handsome</em>.",
                        "emoji": "😎"
                    },
                    {
                        "word": "beautiful",
                        "phonetic": "/ˈbjuːtɪfl/",
                        "meaning": "美丽的",
                        "example": "My aunt is <em>beautiful</em>.",
                        "emoji": "🌸"
                    },
                    {
                        "word": "lost",
                        "phonetic": "/lɒst/",
                        "meaning": "遗失",
                        "example": "I <em>lost</em> my pen.",
                        "emoji": "😟"
                    },
                    {
                        "word": "water bottle",
                        "phonetic": "/ˈwɔːtə ˈbɒtl/",
                        "meaning": "水瓶",
                        "example": "This is my <em>water bottle</em>.",
                        "emoji": "🍶"
                    },
                    {
                        "word": "know",
                        "phonetic": "/nəʊ/",
                        "meaning": "知道",
                        "example": "I <em>know</em> the answer.",
                        "emoji": "💡"
                    },
                    {
                        "word": "OK",
                        "phonetic": "/ˌəʊˈkeɪ/",
                        "meaning": "好的；行",
                        "example": "That's <em>OK</em>.",
                        "emoji": "👌"
                    },
                    {
                        "word": "much",
                        "phonetic": "/mʌtʃ/",
                        "meaning": "很多地；非常",
                        "example": "Thank you <em>much</em>.",
                        "emoji": "💯"
                    },
                    {
                        "word": "welcome",
                        "phonetic": "/ˈwelkəm/",
                        "meaning": "受欢迎的",
                        "example": "You are <em>welcome</em>.",
                        "emoji": "🤗"
                    },
                    {
                        "word": "grandfather",
                        "phonetic": "/ˈɡrænfɑːðə(r)/",
                        "meaning": "（外）祖父",
                        "example": "My <em>grandfather</em> is old.",
                        "emoji": "👴"
                    },
                    {
                        "word": "grandmother",
                        "phonetic": "/ˈɡrænmʌðə(r)/",
                        "meaning": "（外）祖母",
                        "example": "My <em>grandmother</em> is nice.",
                        "emoji": "👵"
                    },
                    {
                        "word": "father",
                        "phonetic": "/ˈfɑːðə(r)/",
                        "meaning": "父亲；爸爸",
                        "example": "My <em>father</em> is tall.",
                        "emoji": "👨"
                    },
                    {
                        "word": "mother",
                        "phonetic": "/ˈmʌðə(r)/",
                        "meaning": "母亲；妈妈",
                        "example": "My <em>mother</em> is kind.",
                        "emoji": "👩"
                    },
                    {
                        "word": "brother",
                        "phonetic": "/ˈbrʌðə(r)/",
                        "meaning": "兄；弟",
                        "example": "My <em>brother</em> is five.",
                        "emoji": "👦"
                    },
                    {
                        "word": "sister",
                        "phonetic": "/ˈsɪstə(r)/",
                        "meaning": "姐；妹",
                        "example": "My <em>sister</em> is cute.",
                        "emoji": "👧"
                    }
                ]
            },
            "5": {
                "name": "Unit 5 日常行为",
                "words": [
                    {
                        "word": "cooking dinner",
                        "phonetic": "/ˈkʊkɪŋ ˈdɪnə(r)/",
                        "meaning": "正在做饭",
                        "example": "Mum is <em>cooking dinner</em>.",
                        "emoji": "🍳"
                    },
                    {
                        "word": "walking the dog",
                        "phonetic": "/ˈwɔːkɪŋ ðə dɒɡ/",
                        "meaning": "正在遛狗",
                        "example": "Dad is <em>walking the dog</em>.",
                        "emoji": "🐕"
                    },
                    {
                        "word": "watering the plants",
                        "phonetic": "/ˈwɔːtərɪŋ ðə plɑːnts/",
                        "meaning": "正在给植物浇水",
                        "example": "She is <em>watering the plants</em>.",
                        "emoji": "🌱"
                    },
                    {
                        "word": "cleaning the room",
                        "phonetic": "/ˈkliːnɪŋ ðə ruːm/",
                        "meaning": "正在打扫房间",
                        "example": "He is <em>cleaning the room</em>.",
                        "emoji": "🧹"
                    },
                    {
                        "word": "listening to music",
                        "phonetic": "/ˈlɪsnɪŋ tuː ˈmjuːzɪk/",
                        "meaning": "正在听音乐",
                        "example": "I am <em>listening to music</em>.",
                        "emoji": "🎧"
                    },
                    {
                        "word": "watching TV",
                        "phonetic": "/ˈwɒtʃɪŋ ˌtiːˈviː/",
                        "meaning": "正在看电视",
                        "example": "They are <em>watching TV</em>.",
                        "emoji": "📺"
                    },
                    {
                        "word": "feeding the fish",
                        "phonetic": "/ˈfiːdɪŋ ðə fɪʃ/",
                        "meaning": "正在喂鱼",
                        "example": "She is <em>feeding the fish</em>.",
                        "emoji": "🐟"
                    },
                    {
                        "word": "play with",
                        "phonetic": "/pleɪ wɪð/",
                        "meaning": "与……玩耍",
                        "example": "I <em>play with</em> my dog.",
                        "emoji": "🎾"
                    },
                    {
                        "word": "in one hour",
                        "phonetic": "/ɪn wʌn aʊə(r)/",
                        "meaning": "一小时之后",
                        "example": "I will be back <em>in one hour</em>.",
                        "emoji": "⏰"
                    },
                    {
                        "word": "everyone",
                        "phonetic": "/ˈevriwʌn/",
                        "meaning": "每人，人人",
                        "example": "<em>Everyone</em> is happy.",
                        "emoji": "👥"
                    },
                    {
                        "word": "children",
                        "phonetic": "/ˈtʃɪldrən/",
                        "meaning": "孩子们",
                        "example": "The <em>children</em> are playing.",
                        "emoji": "👧"
                    },
                    {
                        "word": "run",
                        "phonetic": "/rʌn/",
                        "meaning": "跑",
                        "example": "I can <em>run</em> fast.",
                        "emoji": "🏃"
                    }
                ]
            },
            "6": {
                "name": "Unit 6 家居空间与物品",
                "words": [
                    {
                        "word": "home",
                        "phonetic": "/həʊm/",
                        "meaning": "家；家庭",
                        "example": "I go <em>home</em>.",
                        "emoji": "🏠"
                    },
                    {
                        "word": "bedroom",
                        "phonetic": "/ˈbedruːm/",
                        "meaning": "卧室",
                        "example": "This is my <em>bedroom</em>.",
                        "emoji": "🛏️"
                    },
                    {
                        "word": "living room",
                        "phonetic": "/ˈlɪvɪŋ ruːm/",
                        "meaning": "客厅",
                        "example": "The <em>living room</em> is big.",
                        "emoji": "🛋️"
                    },
                    {
                        "word": "bathroom",
                        "phonetic": "/ˈbɑːθruːm/",
                        "meaning": "浴室",
                        "example": "Where is the <em>bathroom</em>?",
                        "emoji": "🚿"
                    },
                    {
                        "word": "dining room",
                        "phonetic": "/ˈdaɪnɪŋ ruːm/",
                        "meaning": "餐厅",
                        "example": "We eat in the <em>dining room</em>.",
                        "emoji": "🍽️"
                    },
                    {
                        "word": "study",
                        "phonetic": "/ˈstʌdi/",
                        "meaning": "书房",
                        "example": "Dad is in the <em>study</em>.",
                        "emoji": "📖"
                    },
                    {
                        "word": "kitchen",
                        "phonetic": "/ˈkɪtʃɪn/",
                        "meaning": "厨房",
                        "example": "Mum is in the <em>kitchen</em>.",
                        "emoji": "🍳"
                    },
                    {
                        "word": "for rent",
                        "phonetic": "/fɔː rent/",
                        "meaning": "供出租",
                        "example": "This house is <em>for rent</em>.",
                        "emoji": "🏷️"
                    },
                    {
                        "word": "sofa",
                        "phonetic": "/ˈsəʊfə/",
                        "meaning": "沙发",
                        "example": "Sit on the <em>sofa</em>.",
                        "emoji": "🛋️"
                    },
                    {
                        "word": "light",
                        "phonetic": "/laɪt/",
                        "meaning": "灯；发光体",
                        "example": "Turn on the <em>light</em>.",
                        "emoji": "💡"
                    },
                    {
                        "word": "bed",
                        "phonetic": "/bed/",
                        "meaning": "床；床架；床垫",
                        "example": "I sleep on the <em>bed</em>.",
                        "emoji": "🛏️"
                    },
                    {
                        "word": "door",
                        "phonetic": "/dɔː(r)/",
                        "meaning": "门；出入口",
                        "example": "Close the <em>door</em>.",
                        "emoji": "🚪"
                    },
                    {
                        "word": "box",
                        "phonetic": "/bɒks/",
                        "meaning": "箱子；盒子",
                        "example": "Put it in the <em>box</em>.",
                        "emoji": "📦"
                    }
                ]
            }
        }
    },
    "PEP_5下": {
        "name": "五年级下册（人教版PEP·三年级起点）",
        "grade": 5,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1 日常作息与活动",
                "words": [
                    { "word": "eat breakfast", "phonetic": "/iːt ˈbrekfəst/", "meaning": "吃早饭", "example": "I <em>eat breakfast</em> at 7.", "emoji": "🍳" },
                    { "word": "have ... class", "phonetic": "/hæv klɑːs/", "meaning": "上……课", "example": "I <em>have English class</em> at 9.", "emoji": "🏫" },
                    { "word": "play sports", "phonetic": "/pleɪ spɔːts/", "meaning": "进行体育运动", "example": "I <em>play sports</em> after school.", "emoji": "⚽" },
                    { "word": "exercise", "phonetic": "/ˈeksəsaɪz/", "meaning": "活动；运动", "example": "I <em>exercise</em> every day.", "emoji": "🏃" },
                    { "word": "do morning exercises", "phonetic": "/duː ˈmɔːnɪŋ ˈeksəsaɪzɪz/", "meaning": "做早操", "example": "We <em>do morning exercises</em> at 8.", "emoji": "🤸" },
                    { "word": "eat dinner", "phonetic": "/iːt ˈdɪnə(r)/", "meaning": "吃晚饭", "example": "I <em>eat dinner</em> at 6.", "emoji": "🍽️" },
                    { "word": "clean my room", "phonetic": "/kliːn maɪ ruːm/", "meaning": "打扫我的房间", "example": "I <em>clean my room</em> on weekends.", "emoji": "🧹" },
                    { "word": "go for a walk", "phonetic": "/ɡəʊ fɔːr ə wɔːk/", "meaning": "散步", "example": "Let's <em>go for a walk</em>.", "emoji": "🚶" },
                    { "word": "go shopping", "phonetic": "/ɡəʊ ˈʃɒpɪŋ/", "meaning": "去买东西；购物", "example": "I <em>go shopping</em> on Sundays.", "emoji": "🛍️" },
                    { "word": "take", "phonetic": "/teɪk/", "meaning": "学习；上（课）", "example": "I <em>take</em> a dancing class.", "emoji": "📝" },
                    { "word": "dancing", "phonetic": "/ˈdɑːnsɪŋ/", "meaning": "跳舞；舞蹈", "example": "I like <em>dancing</em>.", "emoji": "💃" },
                    { "word": "take a dancing class", "phonetic": "/teɪk ə ˈdɑːnsɪŋ klɑːs/", "meaning": "上舞蹈课", "example": "I <em>take a dancing class</em> on Saturdays.", "emoji": "💃" },
                    { "word": "when", "phonetic": "/wen/", "meaning": "什么时候；何时", "example": "<em>When</em> do you get up?", "emoji": "🕐" },
                    { "word": "after", "phonetic": "/ˈɑːftə(r)/", "meaning": "在（时间）后", "example": "<em>After</em> school I play.", "emoji": "⏪" },
                    { "word": "start", "phonetic": "/stɑːt/", "meaning": "开始", "example": "Class <em>starts</em> at 8.", "emoji": "▶️" },
                    { "word": "usually", "phonetic": "/ˈjuːʒuəli/", "meaning": "通常地；惯常地", "example": "I <em>usually</em> get up at 7.", "emoji": "🔄" },
                    { "word": "Spain", "phonetic": "/speɪn/", "meaning": "西班牙", "example": "He lives in <em>Spain</em>.", "emoji": "🇪🇸" },
                    { "word": "late", "phonetic": "/leɪt/", "meaning": "晚；迟", "example": "Don't be <em>late</em>.", "emoji": "⏰" },
                    { "word": "a.m.", "phonetic": "/ˌeɪ'em/", "meaning": "午前；上午", "example": "I get up at 7 <em>a.m.</em>", "emoji": "🌅" },
                    { "word": "p.m.", "phonetic": "/ˌpiː'em/", "meaning": "午后；下午", "example": "I go home at 4 <em>p.m.</em>", "emoji": "🌇" },
                    { "word": "why", "phonetic": "/waɪ/", "meaning": "为什么", "example": "<em>Why</em> are you late?", "emoji": "❓" },
                    { "word": "shop", "phonetic": "/ʃɒp/", "meaning": "去买东西；购物", "example": "I <em>shop</em> with my mom.", "emoji": "🛒" },
                    { "word": "work", "phonetic": "/wɜːk/", "meaning": "工作", "example": "My dad <em>works</em> at a school.", "emoji": "💼" },
                    { "word": "last", "phonetic": "/lɑːst/", "meaning": "上一个的；刚过去的", "example": "<em>Last</em> night I watched TV.", "emoji": "⬅️" },
                    { "word": "sound", "phonetic": "/saʊnd/", "meaning": "听起来好像", "example": "That <em>sounds</em> fun!", "emoji": "🔊" },
                    { "word": "also", "phonetic": "/ˈɔːlsəʊ/", "meaning": "还；也", "example": "I <em>also</em> like music.", "emoji": "➕" },
                    { "word": "busy", "phonetic": "/ˈbɪzi/", "meaning": "忙的", "example": "I'm <em>busy</em> today.", "emoji": "😤" },
                    { "word": "need", "phonetic": "/niːd/", "meaning": "需要", "example": "I <em>need</em> a rest.", "emoji": "🙏" },
                    { "word": "play", "phonetic": "/pleɪ/", "meaning": "戏剧；剧本", "example": "We act in a <em>play</em>.", "emoji": "🎭" },
                    { "word": "letter", "phonetic": "/ˈletə(r)/", "meaning": "信", "example": "I write a <em>letter</em>.", "emoji": "✉️" },
                    { "word": "live", "phonetic": "/lɪv/", "meaning": "居住", "example": "I <em>live</em> in China.", "emoji": "🏠" },
                    { "word": "island", "phonetic": "/ˈaɪlənd/", "meaning": "岛", "example": "He lives on an <em>island</em>.", "emoji": "🏝️" },
                    { "word": "always", "phonetic": "/ˈɔːlweɪz/", "meaning": "总是；一直", "example": "I <em>always</em> get up early.", "emoji": "🔁" },
                    { "word": "cave", "phonetic": "/keɪv/", "meaning": "山洞；洞穴", "example": "He lives in a <em>cave</em>.", "emoji": "🕳️" },
                    { "word": "go swimming", "phonetic": "/ɡəʊ ˈswɪmɪŋ/", "meaning": "去游泳", "example": "I <em>go swimming</em> in summer.", "emoji": "🏊" },
                    { "word": "win", "phonetic": "/wɪn/", "meaning": "获胜", "example": "I hope to <em>win</em>!", "emoji": "🏆" }
                ]
            },
            "2": {
                "name": "Unit 2 季节与天气",
                "words": [
                    { "word": "spring", "phonetic": "/sprɪŋ/", "meaning": "春天", "example": "<em>Spring</em> is green.", "emoji": "🌸" },
                    { "word": "summer", "phonetic": "/ˈsʌmə(r)/", "meaning": "夏天", "example": "<em>Summer</em> is hot.", "emoji": "☀️" },
                    { "word": "autumn", "phonetic": "/ˈɔːtəm/", "meaning": "秋天", "example": "<em>Autumn</em> is golden.", "emoji": "🍂" },
                    { "word": "winter", "phonetic": "/ˈwɪntə(r)/", "meaning": "冬天", "example": "<em>Winter</em> is white.", "emoji": "❄️" },
                    { "word": "season", "phonetic": "/ˈsiːzn/", "meaning": "季节", "example": "Which <em>season</em> do you like?", "emoji": "📅" },
                    { "word": "picnic", "phonetic": "/ˈpɪknɪk/", "meaning": "野餐", "example": "Let's have a <em>picnic</em>.", "emoji": "🧺" },
                    { "word": "go on a picnic", "phonetic": "/ɡəʊ ɒn ə ˈpɪknɪk/", "meaning": "去野餐", "example": "We <em>go on a picnic</em> in spring.", "emoji": "🧺" },
                    { "word": "pick", "phonetic": "/pɪk/", "meaning": "摘；采集", "example": "I <em>pick</em> apples.", "emoji": "🍎" },
                    { "word": "pick apples", "phonetic": "/pɪk ˈæplz/", "meaning": "摘苹果", "example": "We <em>pick apples</em> in autumn.", "emoji": "🍎" },
                    { "word": "snowman", "phonetic": "/ˈsnəʊmæn/", "meaning": "雪人", "example": "Let's make a <em>snowman</em>.", "emoji": "⛄" },
                    { "word": "make a snowman", "phonetic": "/meɪk ə ˈsnəʊmæn/", "meaning": "堆雪人", "example": "I <em>make a snowman</em> in winter.", "emoji": "⛄" },
                    { "word": "go swimming", "phonetic": "/ɡəʊ ˈswɪmɪŋ/", "meaning": "去游泳", "example": "I <em>go swimming</em> in summer.", "emoji": "🏊" },
                    { "word": "which", "phonetic": "/wɪtʃ/", "meaning": "哪一个", "example": "<em>Which</em> season do you like?", "emoji": "❓" },
                    { "word": "best", "phonetic": "/best/", "meaning": "最；最高程度地", "example": "I like winter <em>best</em>.", "emoji": "🥇" },
                    { "word": "snow", "phonetic": "/snəʊ/", "meaning": "雪", "example": "I like <em>snow</em>.", "emoji": "🌨️" },
                    { "word": "good job", "phonetic": "/ɡʊd dʒɒb/", "meaning": "做得好", "example": "<em>Good job</em>!", "emoji": "👍" },
                    { "word": "because", "phonetic": "/bɪˈkɒz/", "meaning": "因为", "example": "I like winter <em>because</em> of snow.", "emoji": "💡" },
                    { "word": "vacation", "phonetic": "/vəˈkeɪʃn/", "meaning": "假期", "example": "I like summer <em>vacation</em>.", "emoji": "🏖️" },
                    { "word": "all", "phonetic": "/ɔːl/", "meaning": "全；完全", "example": "I like <em>all</em> the seasons.", "emoji": "💯" },
                    { "word": "pink", "phonetic": "/pɪŋk/", "meaning": "粉色；粉色的", "example": "The flowers are <em>pink</em>.", "emoji": "💗" },
                    { "word": "lovely", "phonetic": "/ˈlʌvli/", "meaning": "可爱的；美丽的", "example": "The flowers are <em>lovely</em>.", "emoji": "😍" },
                    { "word": "leaf", "phonetic": "/liːf/", "meaning": "叶子", "example": "The <em>leaf</em> is yellow.", "emoji": "🍃" },
                    { "word": "fall", "phonetic": "/fɔːl/", "meaning": "落下；【美】秋天", "example": "Leaves <em>fall</em> in autumn.", "emoji": "🍂" },
                    { "word": "paint", "phonetic": "/peɪnt/", "meaning": "用颜料绘画", "example": "I <em>paint</em> a picture.", "emoji": "🎨" }
                ]
            },
            "3": {
                "name": "Unit 3 月份、节日与活动",
                "words": [
                    { "word": "January", "phonetic": "/ˈdʒænjuəri/", "meaning": "一月", "example": "<em>January</em> is the first month.", "emoji": "📅" },
                    { "word": "February", "phonetic": "/ˈfebruəri/", "meaning": "二月", "example": "<em>February</em> is the second month.", "emoji": "📅" },
                    { "word": "March", "phonetic": "/mɑːtʃ/", "meaning": "三月", "example": "Tree Planting Day is in <em>March</em>.", "emoji": "📅" },
                    { "word": "April", "phonetic": "/ˈeɪprəl/", "meaning": "四月", "example": "Easter is in <em>April</em>.", "emoji": "📅" },
                    { "word": "May", "phonetic": "/meɪ/", "meaning": "五月", "example": "May Day is in <em>May</em>.", "emoji": "📅" },
                    { "word": "June", "phonetic": "/dʒuːn/", "meaning": "六月", "example": "Children's Day is in <em>June</em>.", "emoji": "📅" },
                    { "word": "July", "phonetic": "/dʒuˈlaɪ/", "meaning": "七月", "example": "Summer vacation starts in <em>July</em>.", "emoji": "📅" },
                    { "word": "August", "phonetic": "/ˈɔːɡəst/", "meaning": "八月", "example": "<em>August</em> is hot.", "emoji": "📅" },
                    { "word": "September", "phonetic": "/sepˈtembə(r)/", "meaning": "九月", "example": "School starts in <em>September</em>.", "emoji": "📅" },
                    { "word": "October", "phonetic": "/ɒkˈtəʊbə(r)/", "meaning": "十月", "example": "National Day is in <em>October</em>.", "emoji": "📅" },
                    { "word": "November", "phonetic": "/nəʊˈvembə(r)/", "meaning": "十一月", "example": "Thanksgiving is in <em>November</em>.", "emoji": "📅" },
                    { "word": "December", "phonetic": "/dɪˈsembə(r)/", "meaning": "十二月", "example": "Christmas is in <em>December</em>.", "emoji": "📅" },
                    { "word": "few", "phonetic": "/fjuː/", "meaning": "不多；很少", "example": "I have a <em>few</em> friends.", "emoji": "✋" },
                    { "word": "a few", "phonetic": "/ə fjuː/", "meaning": "一些", "example": "I have <em>a few</em> books.", "emoji": "🔢" },
                    { "word": "thing", "phonetic": "/θɪŋ/", "meaning": "事情", "example": "I have many <em>things</em> to do.", "emoji": "📌" },
                    { "word": "meet", "phonetic": "/miːt/", "meaning": "集会；开会", "example": "We have a sports <em>meet</em>.", "emoji": "🤝" },
                    { "word": "sports meet", "phonetic": "/spɔːts miːt/", "meaning": "运动会", "example": "The <em>sports meet</em> is in April.", "emoji": "🏃" },
                    { "word": "trip", "phonetic": "/trɪp/", "meaning": "旅行", "example": "We have a school <em>trip</em>.", "emoji": "✈️" },
                    { "word": "year", "phonetic": "/jɪə(r)/", "meaning": "年", "example": "Happy New <em>Year</em>!", "emoji": "🎉" },
                    { "word": "plant", "phonetic": "/plɑːnt/", "meaning": "种植", "example": "We <em>plant</em> trees in March.", "emoji": "🌱" },
                    { "word": "contest", "phonetic": "/ˈkɒntest/", "meaning": "比赛；竞赛", "example": "I join the singing <em>contest</em>.", "emoji": "🏅" },
                    { "word": "labour", "phonetic": "/ˈleɪbə(r)/", "meaning": "劳动", "example": "<em>Labour</em> Day is in May.", "emoji": "💪" },
                    { "word": "Labour Day", "phonetic": "/ˈleɪbə(r) deɪ/", "meaning": "劳动节", "example": "<em>Labour Day</em> is May 1st.", "emoji": "🛠️" },
                    { "word": "the Great Wall", "phonetic": "/ðə ɡreɪt wɔːl/", "meaning": "长城", "example": "We visit <em>the Great Wall</em>.", "emoji": "🧱" },
                    { "word": "national", "phonetic": "/ˈnæʃnəl/", "meaning": "国家的", "example": "<em>National</em> Day is in October.", "emoji": "🇨🇳" },
                    { "word": "National Day", "phonetic": "/ˈnæʃnəl deɪ/", "meaning": "国庆日", "example": "<em>National Day</em> is October 1st.", "emoji": "🇨🇳" },
                    { "word": "American", "phonetic": "/əˈmerɪkən/", "meaning": "美国的", "example": "They eat turkey on Thanksgiving.", "emoji": "🇺🇸" },
                    { "word": "Thanksgiving", "phonetic": "/ˌθæŋksˈɡɪvɪŋ/", "meaning": "感恩节", "example": "<em>Thanksgiving</em> is in November.", "emoji": "🦃" },
                    { "word": "Christmas", "phonetic": "/ˈkrɪsməs/", "meaning": "圣诞节", "example": "<em>Christmas</em> is in December.", "emoji": "🎄" },
                    { "word": "game", "phonetic": "/ɡeɪm/", "meaning": "游戏", "example": "Let's play a <em>game</em>.", "emoji": "🎮" },
                    { "word": "riddle", "phonetic": "/ˈrɪdl/", "meaning": "谜；谜语", "example": "Can you guess the <em>riddle</em>?", "emoji": "❓" },
                    { "word": "act", "phonetic": "/ækt/", "meaning": "扮演", "example": "Let's <em>act</em> out the story.", "emoji": "🎭" },
                    { "word": "act out", "phonetic": "/ækt aʊt/", "meaning": "把……表演出来", "example": "<em>Act out</em> the dialogue.", "emoji": "🎭" },
                    { "word": "RSVP", "phonetic": "/ˌɑːresviːˈpiː/", "meaning": "请赐复", "example": "Please <em>RSVP</em> by Friday.", "emoji": "📩" },
                    { "word": "by", "phonetic": "/baɪ/", "meaning": "在……之前", "example": "Please reply <em>by</em> March 1st.", "emoji": "⏰" }
                ]
            },
            "4": {
                "name": "Unit 4 序数词与特殊活动",
                "words": [
                    { "word": "first", "phonetic": "/fɜːst/", "meaning": "第一（的）", "example": "January is the <em>first</em> month.", "emoji": "1️⃣" },
                    { "word": "second", "phonetic": "/ˈsekənd/", "meaning": "第二（的）", "example": "February is the <em>second</em> month.", "emoji": "2️⃣" },
                    { "word": "third", "phonetic": "/θɜːd/", "meaning": "第三（的）", "example": "March is the <em>third</em> month.", "emoji": "3️⃣" },
                    { "word": "fourth", "phonetic": "/fɔːθ/", "meaning": "第四（的）", "example": "April is the <em>fourth</em> month.", "emoji": "4️⃣" },
                    { "word": "fifth", "phonetic": "/fɪfθ/", "meaning": "第五（的）", "example": "May is the <em>fifth</em> month.", "emoji": "5️⃣" },
                    { "word": "twelfth", "phonetic": "/twelfθ/", "meaning": "第十二（的）", "example": "December is the <em>twelfth</em> month.", "emoji": "🔢" },
                    { "word": "twentieth", "phonetic": "/ˈtwentiəθ/", "meaning": "第二十（的）", "example": "My birthday is on the <em>twentieth</em>.", "emoji": "🔢" },
                    { "word": "twenty-first", "phonetic": "/ˌtwentiˈfɜːst/", "meaning": "第二十一（的）", "example": "My birthday is <em>twenty-first</em>.", "emoji": "🔢" },
                    { "word": "twenty-third", "phonetic": "/ˌtwentiˈθɜːd/", "meaning": "第二十三（的）", "example": "The holiday is <em>twenty-third</em>.", "emoji": "🔢" },
                    { "word": "thirtieth", "phonetic": "/ˈθɜːtiəθ/", "meaning": "第三十（的）", "example": "My birthday is the <em>thirtieth</em>.", "emoji": "🔢" },
                    { "word": "other", "phonetic": "/ˈʌðə(r)/", "meaning": "其他", "example": "Do you have <em>other</em> plans?", "emoji": "🔄" },
                    { "word": "special", "phonetic": "/ˈspeʃl/", "meaning": "特殊的；特别的", "example": "Today is a <em>special</em> day.", "emoji": "⭐" },
                    { "word": "show", "phonetic": "/ʃəʊ/", "meaning": "展览", "example": "Let's go to the <em>show</em>.", "emoji": "🎪" },
                    { "word": "festival", "phonetic": "/ˈfestɪvl/", "meaning": "节日", "example": "Spring <em>Festival</em> is in January.", "emoji": "🎉" },
                    { "word": "kitten", "phonetic": "/ˈkɪtn/", "meaning": "小猫", "example": "The <em>kitten</em> is cute.", "emoji": "🐱" },
                    { "word": "diary", "phonetic": "/ˈdaɪəri/", "meaning": "日记", "example": "I write a <em>diary</em> every day.", "emoji": "📓" },
                    { "word": "still", "phonetic": "/stɪl/", "meaning": "仍然；依旧；还是", "example": "He <em>still</em> can't walk.", "emoji": "🔄" },
                    { "word": "noise", "phonetic": "/nɔɪz/", "meaning": "声音；响声；噪音", "example": "Don't make a <em>noise</em>.", "emoji": "🔊" },
                    { "word": "fur", "phonetic": "/fɜː(r)/", "meaning": "浓密的软毛", "example": "The cat has soft <em>fur</em>.", "emoji": "🐱" },
                    { "word": "open", "phonetic": "/ˈəʊpən/", "meaning": "开着的", "example": "The door is <em>open</em>.", "emoji": "🚪" },
                    { "word": "walk", "phonetic": "/wɔːk/", "meaning": "行走", "example": "The kitten can <em>walk</em>.", "emoji": "🚶" }
                ]
            },
            "5": {
                "name": "Unit 5 物主代词与动词-ing形式",
                "words": [
                    { "word": "mine", "phonetic": "/maɪn/", "meaning": "我的", "example": "This book is <em>mine</em>.", "emoji": "🙋" },
                    { "word": "yours", "phonetic": "/jɔːz/", "meaning": "你（们）的", "example": "Is this <em>yours</em>?", "emoji": "👉" },
                    { "word": "his", "phonetic": "/hɪz/", "meaning": "他的", "example": "This pen is <em>his</em>.", "emoji": "👦" },
                    { "word": "hers", "phonetic": "/hɜːz/", "meaning": "她的", "example": "The bag is <em>hers</em>.", "emoji": "👧" },
                    { "word": "theirs", "phonetic": "/ðeəz/", "meaning": "他们的；她们的；它们的", "example": "The house is <em>theirs</em>.", "emoji": "👥" },
                    { "word": "ours", "phonetic": "/ˈaʊəz/", "meaning": "我们的", "example": "This classroom is <em>ours</em>.", "emoji": "🤝" },
                    { "word": "climbing", "phonetic": "/ˈklaɪmɪŋ/", "meaning": "（正在）攀登；攀爬", "example": "The cat is <em>climbing</em> the tree.", "emoji": "🧗" },
                    { "word": "eating", "phonetic": "/ˈiːtɪŋ/", "meaning": "（正在）吃", "example": "The dog is <em>eating</em>.", "emoji": "🍽️" },
                    { "word": "playing", "phonetic": "/ˈpleɪɪŋ/", "meaning": "（正在）玩耍", "example": "The children are <em>playing</em>.", "emoji": "🎮" },
                    { "word": "jumping", "phonetic": "/ˈdʒʌmpɪŋ/", "meaning": "（正在）跳", "example": "The rabbit is <em>jumping</em>.", "emoji": "🐇" },
                    { "word": "drinking", "phonetic": "/ˈdrɪŋkɪŋ/", "meaning": "（正在）喝（水）", "example": "The cat is <em>drinking</em> water.", "emoji": "🥤" },
                    { "word": "sleeping", "phonetic": "/ˈsliːpɪŋ/", "meaning": "（正在）睡觉", "example": "The baby is <em>sleeping</em>.", "emoji": "😴" },
                    { "word": "each", "phonetic": "/iːtʃ/", "meaning": "每一；各个", "example": "<em>Each</em> student has a book.", "emoji": "☝️" },
                    { "word": "each other", "phonetic": "/iːtʃ ˈʌðə(r)/", "meaning": "相互", "example": "We help <em>each other</em>.", "emoji": "🤝" },
                    { "word": "excited", "phonetic": "/ɪkˈsaɪtɪd/", "meaning": "兴奋的；激动的", "example": "I'm so <em>excited</em>!", "emoji": "🤩" },
                    { "word": "like", "phonetic": "/laɪk/", "meaning": "像……那样", "example": "She looks <em>like</em> her mom.", "emoji": "👥" }
                ]
            },
            "6": {
                "name": "Unit 6 正在进行的动作与行为规范",
                "words": [
                    { "word": "doing morning exercises", "phonetic": "/ˈduːɪŋ ˈmɔːnɪŋ ˈeksəsaɪzɪz/", "meaning": "（正在）做早操", "example": "They are <em>doing morning exercises</em>.", "emoji": "🤸" },
                    { "word": "having ... class", "phonetic": "/ˈhævɪŋ klɑːs/", "meaning": "（正在）上……课", "example": "We are <em>having English class</em>.", "emoji": "🏫" },
                    { "word": "eating lunch", "phonetic": "/ˈiːtɪŋ lʌntʃ/", "meaning": "（正在）吃午饭", "example": "He is <em>eating lunch</em>.", "emoji": "🍱" },
                    { "word": "reading a book", "phonetic": "/ˈriːdɪŋ ə bʊk/", "meaning": "（正在）看书", "example": "She is <em>reading a book</em>.", "emoji": "📖" },
                    { "word": "listening to music", "phonetic": "/ˈlɪsnɪŋ tuː ˈmjuːzɪk/", "meaning": "（正在）听音乐", "example": "I am <em>listening to music</em>.", "emoji": "🎧" },
                    { "word": "keep", "phonetic": "/kiːp/", "meaning": "保持某种状态", "example": "<em>Keep</em> your desk clean.", "emoji": "✨" },
                    { "word": "keep to the right", "phonetic": "/kiːp tuː ðə raɪt/", "meaning": "靠右", "example": "<em>Keep to the right</em>.", "emoji": "➡️" },
                    { "word": "keep your desk clean", "phonetic": "/kiːp jɔː desk kliːn/", "meaning": "保持你的课桌干净", "example": "<em>Keep your desk clean</em>.", "emoji": "🧹" },
                    { "word": "talk quietly", "phonetic": "/tɔːk ˈkwaɪətli/", "meaning": "小声讲话", "example": "Please <em>talk quietly</em>.", "emoji": "🤫" },
                    { "word": "turn", "phonetic": "/tɜːn/", "meaning": "顺序", "example": "It's your <em>turn</em>.", "emoji": "🔄" },
                    { "word": "take turns", "phonetic": "/teɪk tɜːnz/", "meaning": "按顺序来", "example": "Let's <em>take turns</em>.", "emoji": "🔁" },
                    { "word": "bamboo", "phonetic": "/bæmˈbuː/", "meaning": "竹子", "example": "Pandas eat <em>bamboo</em>.", "emoji": "🎋" },
                    { "word": "its", "phonetic": "/ɪts/", "meaning": "它的", "example": "The dog wags <em>its</em> tail.", "emoji": "🐾" },
                    { "word": "show", "phonetic": "/ʃəʊ/", "meaning": "给人看", "example": "<em>Show</em> me your picture.", "emoji": "👉" },
                    { "word": "anything", "phonetic": "/ˈeniθɪŋ/", "meaning": "任何事物", "example": "Is there <em>anything</em> else?", "emoji": "❓" },
                    { "word": "else", "phonetic": "/els/", "meaning": "另外；其他", "example": "What <em>else</em> do you see?", "emoji": "➡️" },
                    { "word": "exhibition", "phonetic": "/ˌeksɪˈbɪʃn/", "meaning": "展览", "example": "Let's see the <em>exhibition</em>.", "emoji": "🏛️" },
                    { "word": "say", "phonetic": "/seɪ/", "meaning": "说；讲", "example": "What did he <em>say</em>?", "emoji": "🗣️" },
                    { "word": "have a look", "phonetic": "/hæv ə lʊk/", "meaning": "看一看", "example": "Let me <em>have a look</em>.", "emoji": "👀" },
                    { "word": "sushi", "phonetic": "/ˈsuːʃi/", "meaning": "寿司", "example": "I like <em>sushi</em>.", "emoji": "🍣" },
                    { "word": "teach", "phonetic": "/tiːtʃ/", "meaning": "教", "example": "She <em>teaches</em> English.", "emoji": "👩‍🏫" },
                    { "word": "sure", "phonetic": "/ʃʊə(r)/", "meaning": "当然", "example": "— Can I help? — <em>Sure</em>!", "emoji": "👌" },
                    { "word": "Canadian", "phonetic": "/kəˈneɪdiən/", "meaning": "加拿大的", "example": "He is <em>Canadian</em>.", "emoji": "🇨🇦" },
                    { "word": "Spanish", "phonetic": "/ˈspænɪʃ/", "meaning": "西班牙的", "example": "She is <em>Spanish</em>.", "emoji": "🇪🇸" }
                ]
            }
        }
    },
    "RJY_4下": {
        "name": "四年级下册（人教版一年起点）",
        "grade": 4,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1 方位与周边场所",
                "words": [
                    {
                        "word": "across from",
                        "phonetic": "/əˈkrɒs frɒm/",
                        "meaning": "在对面",
                        "example": "The park is <em>across from</em> the school.",
                        "emoji": "🏫"
                    },
                    {
                        "word": "next to",
                        "phonetic": "/nekst tuː/",
                        "meaning": "紧邻",
                        "example": "The library is <em>next to</em> the bank.",
                        "emoji": "📍"
                    },
                    {
                        "word": "between",
                        "phonetic": "/bɪˈtwiːn/",
                        "meaning": "在……之间",
                        "example": "The bank is <em>between</em> the shop and the hospital.",
                        "emoji": "↔️"
                    },
                    {
                        "word": "restaurant",
                        "phonetic": "/ˈrestrɒnt/",
                        "meaning": "餐馆",
                        "example": "Let's eat at the <em>restaurant</em>.",
                        "emoji": "🍽️"
                    },
                    {
                        "word": "post office",
                        "phonetic": "/pəʊst ˈɒfɪs/",
                        "meaning": "邮局",
                        "example": "I need to go to the <em>post office</em>.",
                        "emoji": "📮"
                    },
                    {
                        "word": "bank",
                        "phonetic": "/bæŋk/",
                        "meaning": "银行",
                        "example": "My mum works at the <em>bank</em>.",
                        "emoji": "🏦"
                    },
                    {
                        "word": "grocery",
                        "phonetic": "/ˈɡrəʊsəri/",
                        "meaning": "食品杂货店",
                        "example": "We buy food at the <em>grocery</em>.",
                        "emoji": "🛒"
                    },
                    {
                        "word": "turn left",
                        "phonetic": "/tɜːn left/",
                        "meaning": "向左转",
                        "example": "<em>Turn left</em> at the crossroads.",
                        "emoji": "⬅️"
                    },
                    {
                        "word": "turn right",
                        "phonetic": "/tɜːn raɪt/",
                        "meaning": "向右转",
                        "example": "<em>Turn right</em> at the corner.",
                        "emoji": "➡️"
                    },
                    {
                        "word": "go straight",
                        "phonetic": "/ɡəʊ streɪt/",
                        "meaning": "直行",
                        "example": "<em>Go straight</em> for two blocks.",
                        "emoji": "⬆️"
                    },
                    {
                        "word": "crossroads",
                        "phonetic": "/ˈkrɒsrəʊdz/",
                        "meaning": "十字路口",
                        "example": "Turn left at the <em>crossroads</em>.",
                        "emoji": "✖️"
                    },
                    {
                        "word": "neighbourhood",
                        "phonetic": "/ˈneɪbəhʊd/",
                        "meaning": "街坊；附近",
                        "example": "I like my <em>neighbourhood</em>.",
                        "emoji": "🏘️"
                    },
                    {
                        "word": "send",
                        "phonetic": "/send/",
                        "meaning": "寄；发送",
                        "example": "I want to <em>send</em> a letter.",
                        "emoji": "✉️"
                    },
                    {
                        "word": "get",
                        "phonetic": "/ɡet/",
                        "meaning": "得到",
                        "example": "I <em>get</em> a present every birthday.",
                        "emoji": "🎁"
                    },
                    {
                        "word": "money",
                        "phonetic": "/ˈmʌni/",
                        "meaning": "钱",
                        "example": "I save my <em>money</em> in the bank.",
                        "emoji": "💰"
                    },
                    {
                        "word": "get to",
                        "phonetic": "/ɡet tuː/",
                        "meaning": "到达",
                        "example": "How do you <em>get to</em> school?",
                        "emoji": "🚶"
                    },
                    {
                        "word": "before",
                        "phonetic": "/bɪˈfɔː(r)/",
                        "meaning": "在……之前",
                        "example": "Wash your hands <em>before</em> eating.",
                        "emoji": "⏰"
                    },
                    {
                        "word": "leave",
                        "phonetic": "/liːv/",
                        "meaning": "离开",
                        "example": "It's time to <em>leave</em> home.",
                        "emoji": "👋"
                    },
                    {
                        "word": "toy",
                        "phonetic": "/tɔɪ/",
                        "meaning": "玩具",
                        "example": "I have a new <em>toy</em>.",
                        "emoji": "🧸"
                    },
                    {
                        "word": "hospital",
                        "phonetic": "/ˈhɒspɪtl/",
                        "meaning": "医院",
                        "example": "The <em>hospital</em> is on Main Street.",
                        "emoji": "🏥"
                    },
                    {
                        "word": "bookshop",
                        "phonetic": "/ˈbʊkʃɒp/",
                        "meaning": "书店",
                        "example": "I buy books at the <em>bookshop</em>.",
                        "emoji": "📚"
                    },
                    {
                        "word": "school",
                        "phonetic": "/skuːl/",
                        "meaning": "学校",
                        "example": "I go to <em>school</em> every day.",
                        "emoji": "🏫"
                    },
                    {
                        "word": "supermarket",
                        "phonetic": "/ˈsuːpəmɑːkɪt/",
                        "meaning": "超市",
                        "example": "We buy fruit at the <em>supermarket</em>.",
                        "emoji": "🛒"
                    },
                    {
                        "word": "ball",
                        "phonetic": "/bɔːl/",
                        "meaning": "球",
                        "example": "Let's play with the <em>ball</em>!",
                        "emoji": "⚽"
                    }
                ]
            },
            "2": {
                "name": "Unit 2 城市设施与日常活动",
                "words": [
                    {
                        "word": "city",
                        "phonetic": "/ˈsɪti/",
                        "meaning": "城市",
                        "example": "Beijing is a big <em>city</em>.",
                        "emoji": "🏙️"
                    },
                    {
                        "word": "street",
                        "phonetic": "/striːt/",
                        "meaning": "街道",
                        "example": "My house is on this <em>street</em>.",
                        "emoji": "🛣️"
                    },
                    {
                        "word": "sports centre",
                        "phonetic": "/spɔːts ˈsentə/",
                        "meaning": "体育中心",
                        "example": "We play sports at the <em>sports centre</em>.",
                        "emoji": "🏟️"
                    },
                    {
                        "word": "hotel",
                        "phonetic": "/həʊˈtel/",
                        "meaning": "宾馆",
                        "example": "We stay at a <em>hotel</em> on holiday.",
                        "emoji": "🏨"
                    },
                    {
                        "word": "square",
                        "phonetic": "/skweə(r)/",
                        "meaning": "广场",
                        "example": "We fly kites in the <em>square</em>.",
                        "emoji": "🏟️"
                    },
                    {
                        "word": "buy toys",
                        "phonetic": "/baɪ tɔɪz/",
                        "meaning": "买玩具",
                        "example": "I <em>buy toys</em> at the shop.",
                        "emoji": "🧸"
                    },
                    {
                        "word": "see a film",
                        "phonetic": "/siː ə fɪlm/",
                        "meaning": "看电影",
                        "example": "Let's <em>see a film</em> tonight!",
                        "emoji": "🎬"
                    },
                    {
                        "word": "go boating",
                        "phonetic": "/ɡəʊ ˈbəʊtɪŋ/",
                        "meaning": "去划船",
                        "example": "We <em>go boating</em> on the lake.",
                        "emoji": "🚣"
                    },
                    {
                        "word": "busy",
                        "phonetic": "/ˈbɪzi/",
                        "meaning": "忙碌的",
                        "example": "The <em>busy</em> street has many cars.",
                        "emoji": "🏃"
                    },
                    {
                        "word": "station",
                        "phonetic": "/ˈsteɪʃn/",
                        "meaning": "（车）站",
                        "example": "We wait at the <em>station</em>.",
                        "emoji": "🚉"
                    },
                    {
                        "word": "place",
                        "phonetic": "/pleɪs/",
                        "meaning": "地方",
                        "example": "This is a nice <em>place</em>.",
                        "emoji": "📍"
                    },
                    {
                        "word": "thing",
                        "phonetic": "/θɪŋ/",
                        "meaning": "事；事物",
                        "example": "What a nice <em>thing</em>!",
                        "emoji": "📦"
                    },
                    {
                        "word": "stay",
                        "phonetic": "/steɪ/",
                        "meaning": "停留",
                        "example": "We <em>stay</em> at home on Sunday.",
                        "emoji": "🏠"
                    },
                    {
                        "word": "star",
                        "phonetic": "/stɑː(r)/",
                        "meaning": "星",
                        "example": "I can see a <em>star</em> in the sky.",
                        "emoji": "⭐"
                    },
                    {
                        "word": "king",
                        "phonetic": "/kɪŋ/",
                        "meaning": "国王",
                        "example": "The <em>king</em> lives in the palace.",
                        "emoji": "👑"
                    },
                    {
                        "word": "central",
                        "phonetic": "/ˈsentrəl/",
                        "meaning": "中心的",
                        "example": "The <em>central</em> park is beautiful.",
                        "emoji": "🏙️"
                    },
                    {
                        "word": "take photos",
                        "phonetic": "/teɪk ˈfəʊtəʊz/",
                        "meaning": "照相",
                        "example": "I like to <em>take photos</em> of flowers.",
                        "emoji": "📷"
                    },
                    {
                        "word": "museum",
                        "phonetic": "/mjuˈziːəm/",
                        "meaning": "博物馆",
                        "example": "We visit the <em>museum</em> on weekends.",
                        "emoji": "🏛️"
                    },
                    {
                        "word": "dream",
                        "phonetic": "/driːm/",
                        "meaning": "梦",
                        "example": "I had a good <em>dream</em> last night.",
                        "emoji": "💭"
                    }
                ]
            },
            "3": {
                "name": "Unit 3 旅行、景点与假期",
                "words": [
                    {
                        "word": "sea",
                        "phonetic": "/siː/",
                        "meaning": "海；海洋",
                        "example": "The <em>sea</em> is very blue.",
                        "emoji": "🌊"
                    },
                    {
                        "word": "ski",
                        "phonetic": "/skiː/",
                        "meaning": "滑雪",
                        "example": "We <em>ski</em> in winter.",
                        "emoji": "⛷️"
                    },
                    {
                        "word": "eat seafood",
                        "phonetic": "/iːt ˈsiːfuːd/",
                        "meaning": "吃海鲜",
                        "example": "Let's <em>eat seafood</em> by the sea.",
                        "emoji": "🦐"
                    },
                    {
                        "word": "visit the Mogao Caves",
                        "phonetic": "/ˈvɪzɪt ðə məʊˈɡaʊ keɪvz/",
                        "meaning": "参观莫高窟",
                        "example": "I want to <em>visit the Mogao Caves</em>.",
                        "emoji": "🏜️"
                    },
                    {
                        "word": "West Lake",
                        "phonetic": "/west leɪk/",
                        "meaning": "西湖",
                        "example": "<em>West Lake</em> is in Hangzhou.",
                        "emoji": "🏞️"
                    },
                    {
                        "word": "row a boat",
                        "phonetic": "/rəʊ ə bəʊt/",
                        "meaning": "划船",
                        "example": "We <em>row a boat</em> on the lake.",
                        "emoji": "🚣"
                    },
                    {
                        "word": "the Great Wall",
                        "phonetic": "/ðə ɡreɪt wɔːl/",
                        "meaning": "长城",
                        "example": "<em>The Great Wall</em> is very long.",
                        "emoji": "🧱"
                    },
                    {
                        "word": "take photos",
                        "phonetic": "/teɪk ˈfəʊtəʊz/",
                        "meaning": "照相",
                        "example": "I <em>take photos</em> on holiday.",
                        "emoji": "📷"
                    },
                    {
                        "word": "summer vacation",
                        "phonetic": "/ˈsʌmə vəˈkeɪʃn/",
                        "meaning": "暑假",
                        "example": "I go to the beach in <em>summer vacation</em>.",
                        "emoji": "☀️"
                    },
                    {
                        "word": "travel",
                        "phonetic": "/ˈtrævl/",
                        "meaning": "旅游",
                        "example": "I love to <em>travel</em> with my family.",
                        "emoji": "✈️"
                    }
                ]
            },
            "4": {
                "name": "Unit 4 兴趣爱好",
                "words": [
                    {
                        "word": "reading",
                        "phonetic": "/ˈriːdɪŋ/",
                        "meaning": "读书",
                        "example": "I like <em>reading</em> books.",
                        "emoji": "📖"
                    },
                    {
                        "word": "skateboarding",
                        "phonetic": "/ˈskeɪtbɔːdɪŋ/",
                        "meaning": "玩滑板",
                        "example": "My brother likes <em>skateboarding</em>.",
                        "emoji": "🛹"
                    },
                    {
                        "word": "singing",
                        "phonetic": "/ˈsɪŋɪŋ/",
                        "meaning": "唱歌",
                        "example": "She enjoys <em>singing</em> songs.",
                        "emoji": "🎤"
                    },
                    {
                        "word": "dancing",
                        "phonetic": "/ˈdɑːnsɪŋ/",
                        "meaning": "跳舞",
                        "example": "I love <em>dancing</em> with friends.",
                        "emoji": "💃"
                    },
                    {
                        "word": "doing jigsaw puzzles",
                        "phonetic": "/duːɪŋ ˈdʒɪɡsɒw ˈpʌzlz/",
                        "meaning": "拼拼图",
                        "example": "I like <em>doing jigsaw puzzles</em>.",
                        "emoji": "🧩"
                    },
                    {
                        "word": "making models",
                        "phonetic": "/ˈmeɪkɪŋ ˈmɒdlz/",
                        "meaning": "制作模型",
                        "example": "He is good at <em>making models</em>.",
                        "emoji": "🚁"
                    },
                    {
                        "word": "collecting erasers",
                        "phonetic": "/kəˈlektɪŋ ɪˈreɪzəz/",
                        "meaning": "收集橡皮",
                        "example": "<em>Collecting erasers</em> is my hobby.",
                        "emoji": "🧽"
                    },
                    {
                        "word": "different",
                        "phonetic": "/ˈdɪfrənt/",
                        "meaning": "不同的",
                        "example": "We have <em>different</em> hobbies.",
                        "emoji": "🔀"
                    },
                    {
                        "word": "hobby",
                        "phonetic": "/ˈhɒbi/",
                        "meaning": "爱好",
                        "example": "What is your <em>hobby</em>?",
                        "emoji": "🎯"
                    },
                    {
                        "word": "stamp",
                        "phonetic": "/stæmp/",
                        "meaning": "邮票",
                        "example": "I collect <em>stamps</em> from many countries.",
                        "emoji": "📬"
                    },
                    {
                        "word": "catch",
                        "phonetic": "/kætʃ/",
                        "meaning": "抓住",
                        "example": "Can you <em>catch</em> the ball?",
                        "emoji": "🤲"
                    }
                ]
            },
            "5": {
                "name": "Unit 5 休闲活动与频率表达",
                "words": [
                    {
                        "word": "go for a picnic",
                        "phonetic": "/ɡəʊ fɔːr ə ˈpɪknɪk/",
                        "meaning": "去野餐",
                        "example": "We <em>go for a picnic</em> on Sunday.",
                        "emoji": "🧺"
                    },
                    {
                        "word": "play the violin",
                        "phonetic": "/pleɪ ðə ˌvaɪəˈlɪn/",
                        "meaning": "拉小提琴",
                        "example": "She can <em>play the violin</em> well.",
                        "emoji": "🎻"
                    },
                    {
                        "word": "go skating",
                        "phonetic": "/ɡəʊ ˈskeɪtɪŋ/",
                        "meaning": "去滑冰",
                        "example": "Let's <em>go skating</em> this weekend!",
                        "emoji": "⛸️"
                    },
                    {
                        "word": "go camping",
                        "phonetic": "/ɡəʊ ˈkæmpɪŋ/",
                        "meaning": "去野营",
                        "example": "We <em>go camping</em> in summer.",
                        "emoji": "⛺"
                    },
                    {
                        "word": "do the housework",
                        "phonetic": "/duː ðə ˈhaʊswɜːk/",
                        "meaning": "做家务",
                        "example": "I help mum <em>do the housework</em>.",
                        "emoji": "🧹"
                    },
                    {
                        "word": "free",
                        "phonetic": "/friː/",
                        "meaning": "空闲的",
                        "example": "Are you <em>free</em> this afternoon?",
                        "emoji": "🌴"
                    },
                    {
                        "word": "never",
                        "phonetic": "/ˈnevə(r)/",
                        "meaning": "从不",
                        "example": "I <em>never</em> eat spicy food.",
                        "emoji": "🚫"
                    },
                    {
                        "word": "once a week",
                        "phonetic": "/wʌns ə wiːk/",
                        "meaning": "一周一次",
                        "example": "I swim <em>once a week</em>.",
                        "emoji": "1️⃣"
                    },
                    {
                        "word": "twice a week",
                        "phonetic": "/twaɪs ə wiːk/",
                        "meaning": "一周两次",
                        "example": "I play football <em>twice a week</em>.",
                        "emoji": "2️⃣"
                    },
                    {
                        "word": "three times a week",
                        "phonetic": "/θriː taɪmz ə wiːk/",
                        "meaning": "一周三次",
                        "example": "I study English <em>three times a week</em>.",
                        "emoji": "3️⃣"
                    }
                ]
            },
            "6": {
                "name": "Unit 6 国家、地标与国家特色",
                "words": [
                    {
                        "word": "Canada",
                        "phonetic": "/ˈkænədə/",
                        "meaning": "加拿大",
                        "example": "<em>Canada</em> is a big country.",
                        "emoji": "🇨🇦"
                    },
                    {
                        "word": "Australia",
                        "phonetic": "/ɒˈstreɪliə/",
                        "meaning": "澳大利亚",
                        "example": "Kangaroos live in <em>Australia</em>.",
                        "emoji": "🇦🇺"
                    },
                    {
                        "word": "the UK",
                        "phonetic": "/ðə juː keɪ/",
                        "meaning": "英国",
                        "example": "<em>The UK</em> is in Europe.",
                        "emoji": "🇬🇧"
                    },
                    {
                        "word": "the USA",
                        "phonetic": "/ðə juː es eɪ/",
                        "meaning": "美国",
                        "example": "<em>The USA</em> is a big country.",
                        "emoji": "🇺🇸"
                    },
                    {
                        "word": "China",
                        "phonetic": "/ˈtʃaɪnə/",
                        "meaning": "中国",
                        "example": "<em>China</em> is my country.",
                        "emoji": "🇨🇳"
                    },
                    {
                        "word": "koala",
                        "phonetic": "/kəʊˈɑːlə/",
                        "meaning": "考拉",
                        "example": "The <em>koala</em> is very cute.",
                        "emoji": "🐨"
                    },
                    {
                        "word": "maple leaves",
                        "phonetic": "/ˈmeɪpl liːvz/",
                        "meaning": "枫叶",
                        "example": "I like red <em>maple leaves</em>.",
                        "emoji": "🍁"
                    },
                    {
                        "word": "Big Ben",
                        "phonetic": "/bɪɡ ben/",
                        "meaning": "大本钟",
                        "example": "<em>Big Ben</em> is in London.",
                        "emoji": "🕰️"
                    },
                    {
                        "word": "Disneyland",
                        "phonetic": "/ˈdɪznilænd/",
                        "meaning": "迪斯尼乐园",
                        "example": "I want to visit <em>Disneyland</em>!",
                        "emoji": "🏰"
                    },
                    {
                        "word": "campfire",
                        "phonetic": "/ˈkæmpfaɪə(r)/",
                        "meaning": "篝火",
                        "example": "We sing songs around the <em>campfire</em>.",
                        "emoji": "🔥"
                    },
                    {
                        "word": "cute",
                        "phonetic": "/kjuːt/",
                        "meaning": "可爱的",
                        "example": "The panda is very <em>cute</em>.",
                        "emoji": "🥰"
                    },
                    {
                        "word": "country",
                        "phonetic": "/ˈkʌntri/",
                        "meaning": "国家",
                        "example": "<em>China</em> is a big country.",
                        "emoji": "🌍"
                    },
                    {
                        "word": "pretty",
                        "phonetic": "/ˈprɪti/",
                        "meaning": "漂亮的",
                        "example": "The flowers are <em>pretty</em>.",
                        "emoji": "🌸"
                    }
                ]
            }
        }
    },
    "PEP_6下": {
        "name": "六年级下册（人教版PEP·三年级起点）",
        "grade": 6,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1 形容词比较级与基础名词",
                "words": [
                    { "word": "younger", "phonetic": "/ˈjʌŋɡə(r)/", "meaning": "更年轻的", "example": "You are <em>younger</em> than me.", "emoji": "👶" },
                    { "word": "older", "phonetic": "/ˈəʊldə(r)/", "meaning": "更年长的", "example": "She is <em>older</em> than me.", "emoji": "🧓" },
                    { "word": "taller", "phonetic": "/ˈtɔːlə(r)/", "meaning": "更高的", "example": "He is <em>taller</em> than me.", "emoji": "📏" },
                    { "word": "shorter", "phonetic": "/ˈʃɔːtə(r)/", "meaning": "更矮的；更短的", "example": "I am <em>shorter</em> than you.", "emoji": "📐" },
                    { "word": "longer", "phonetic": "/ˈlɒŋɡə(r)/", "meaning": "更长的", "example": "This ruler is <em>longer</em>.", "emoji": "📏" },
                    { "word": "thinner", "phonetic": "/ˈθɪnə(r)/", "meaning": "更瘦的", "example": "She is <em>thinner</em> than before.", "emoji": "🍃" },
                    { "word": "heavier", "phonetic": "/ˈheviə(r)/", "meaning": "更重的", "example": "The box is <em>heavier</em>.", "emoji": "🏋️" },
                    { "word": "bigger", "phonetic": "/ˈbɪɡə(r)/", "meaning": "更大的", "example": "My room is <em>bigger</em>.", "emoji": "📐" },
                    { "word": "smaller", "phonetic": "/ˈsmɔːlə(r)/", "meaning": "更小的", "example": "This one is <em>smaller</em>.", "emoji": "🔍" },
                    { "word": "stronger", "phonetic": "/ˈstrɒŋɡə(r)/", "meaning": "更强壮的", "example": "He is <em>stronger</em> than me.", "emoji": "💪" },
                    { "word": "dinosaur", "phonetic": "/ˈdaɪnəsɔː(r)/", "meaning": "恐龙", "example": "The <em>dinosaur</em> is very tall.", "emoji": "🦕" },
                    { "word": "hall", "phonetic": "/hɔːl/", "meaning": "大厅", "example": "The <em>hall</em> is very big.", "emoji": "🏛️" },
                    { "word": "metre", "phonetic": "/ˈmiːtə(r)/", "meaning": "米", "example": "It is 2 <em>metres</em> tall.", "emoji": "📏" },
                    { "word": "than", "phonetic": "/ðən/", "meaning": "比", "example": "I am taller <em>than</em> you.", "emoji": "⚖️" },
                    { "word": "both", "phonetic": "/bəʊθ/", "meaning": "两个都", "example": "<em>Both</em> of us like sports.", "emoji": "2️⃣" },
                    { "word": "kilogram", "phonetic": "/ˈkɪləɡræm/", "meaning": "千克；公斤", "example": "It weighs 50 <em>kilograms</em>.", "emoji": "⚖️" },
                    { "word": "countryside", "phonetic": "/ˈkʌntrisaɪd/", "meaning": "乡村", "example": "I go to the <em>countryside</em>.", "emoji": "🌾" },
                    { "word": "lower", "phonetic": "/ˈləʊə(r)/", "meaning": "更低", "example": "The sun is <em>lower</em>.", "emoji": "⬇️" },
                    { "word": "shadow", "phonetic": "/ˈʃædəʊ/", "meaning": "阴影；影子", "example": "Look at my <em>shadow</em>.", "emoji": "👤" },
                    { "word": "smarter", "phonetic": "/ˈsmɑːtə(r)/", "meaning": "更聪明的", "example": "She is <em>smarter</em> than me.", "emoji": "🧠" },
                    { "word": "become", "phonetic": "/bɪˈkʌm/", "meaning": "开始变得；变成", "example": "It <em>becomes</em> warmer.", "emoji": "🦋" }
                ]
            },
            "2": {
                "name": "Unit 2 动词过去式（日常活动）",
                "words": [
                    { "word": "cleaned", "phonetic": "/kliːnd/", "meaning": "打扫（过去式）", "example": "I <em>cleaned</em> my room.", "emoji": "🧹" },
                    { "word": "stayed", "phonetic": "/steɪd/", "meaning": "停留；待（过去式）", "example": "I <em>stayed</em> at home.", "emoji": "🏠" },
                    { "word": "washed", "phonetic": "/wɒʃt/", "meaning": "洗（过去式）", "example": "I <em>washed</em> my clothes.", "emoji": "🧼" },
                    { "word": "watched", "phonetic": "/wɒtʃt/", "meaning": "看（过去式）", "example": "I <em>watched</em> TV.", "emoji": "📺" },
                    { "word": "had", "phonetic": "/hæd/", "meaning": "患病；得病（过去式）", "example": "I <em>had</em> a cold.", "emoji": "🤒" },
                    { "word": "had a cold", "phonetic": "/hæd ə kəʊld/", "meaning": "感冒", "example": "I <em>had a cold</em> yesterday.", "emoji": "🤧" },
                    { "word": "slept", "phonetic": "/slept/", "meaning": "睡觉（过去式）", "example": "I <em>slept</em> all day.", "emoji": "😴" },
                    { "word": "read", "phonetic": "/red/", "meaning": "读（过去式）", "example": "I <em>read</em> a book.", "emoji": "📖" },
                    { "word": "saw", "phonetic": "/sɔː/", "meaning": "看见（过去式）", "example": "I <em>saw</em> a film.", "emoji": "👀" },
                    { "word": "last", "phonetic": "/lɑːst/", "meaning": "最近的；上一个的", "example": "<em>Last</em> weekend I went fishing.", "emoji": "⬅️" },
                    { "word": "yesterday", "phonetic": "/ˈjestədeɪ/", "meaning": "昨天", "example": "I played football <em>yesterday</em>.", "emoji": "📅" },
                    { "word": "before", "phonetic": "/bɪˈfɔː(r)/", "meaning": "在……之前", "example": "Go to bed <em>before</em> 10.", "emoji": "⏰" },
                    { "word": "drank", "phonetic": "/dræŋk/", "meaning": "喝（过去式）", "example": "I <em>drank</em> some juice.", "emoji": "🥤" },
                    { "word": "show", "phonetic": "/ʃəʊ/", "meaning": "演出", "example": "We saw a <em>show</em>.", "emoji": "🎭" },
                    { "word": "magazine", "phonetic": "/ˌmæɡəˈziːn/", "meaning": "杂志", "example": "I read a <em>magazine</em>.", "emoji": "📰" },
                    { "word": "better", "phonetic": "/ˈbetə(r)/", "meaning": "更好的", "example": "I feel <em>better</em> now.", "emoji": "👍" },
                    { "word": "faster", "phonetic": "/ˈfɑːstə(r)/", "meaning": "更快的", "example": "He runs <em>faster</em> than me.", "emoji": "🏃" },
                    { "word": "hotel", "phonetic": "/həʊˈtel/", "meaning": "旅馆", "example": "We stayed in a <em>hotel</em>.", "emoji": "🏨" },
                    { "word": "fixed", "phonetic": "/fɪkst/", "meaning": "修理（过去式）", "example": "He <em>fixed</em> the bike.", "emoji": "🔧" },
                    { "word": "broken", "phonetic": "/ˈbrəʊkən/", "meaning": "破损的", "example": "The lamp is <em>broken</em>.", "emoji": "💔" },
                    { "word": "lamp", "phonetic": "/læmp/", "meaning": "台灯", "example": "Turn on the <em>lamp</em>.", "emoji": "💡" },
                    { "word": "loud", "phonetic": "/laʊd/", "meaning": "喧闹的；大声的", "example": "The music is <em>loud</em>.", "emoji": "📢" },
                    { "word": "enjoy", "phonetic": "/ɪnˈdʒɔɪ/", "meaning": "享受……乐趣；喜爱", "example": "I <em>enjoy</em> the trip.", "emoji": "😊" },
                    { "word": "stay", "phonetic": "/steɪ/", "meaning": "暂住；逗留", "example": "I <em>stay</em> at a hotel.", "emoji": "🏨" }
                ]
            },
            "3": {
                "name": "Unit 3 过去假期活动",
                "words": [
                    { "word": "went", "phonetic": "/went/", "meaning": "去（过去式）", "example": "I <em>went</em> to the park.", "emoji": "🚶" },
                    { "word": "camp", "phonetic": "/kæmp/", "meaning": "野营", "example": "We go to <em>camp</em>.", "emoji": "⛺" },
                    { "word": "went camping", "phonetic": "/went ˈkæmpɪŋ/", "meaning": "野营", "example": "I <em>went camping</em> last summer.", "emoji": "⛺" },
                    { "word": "fish", "phonetic": "/fɪʃ/", "meaning": "钓鱼；捕鱼", "example": "Let's go <em>fish</em>.", "emoji": "🎣" },
                    { "word": "went fishing", "phonetic": "/went ˈfɪʃɪŋ/", "meaning": "去钓鱼", "example": "I <em>went fishing</em> yesterday.", "emoji": "🎣" },
                    { "word": "rode", "phonetic": "/rəʊd/", "meaning": "骑（过去式）", "example": "I <em>rode</em> a horse.", "emoji": "🏇" },
                    { "word": "hurt", "phonetic": "/hɜːt/", "meaning": "受伤（过去式）", "example": "I <em>hurt</em> my foot.", "emoji": "🤕" },
                    { "word": "ate", "phonetic": "/eɪt/", "meaning": "吃（过去式）", "example": "I <em>ate</em> fresh food.", "emoji": "🍽️" },
                    { "word": "took", "phonetic": "/tʊk/", "meaning": "拍照（过去式）", "example": "I <em>took</em> pictures.", "emoji": "📷" },
                    { "word": "took pictures", "phonetic": "/tʊk ˈpɪktʃəz/", "meaning": "照相", "example": "I <em>took pictures</em> of the mountain.", "emoji": "📸" },
                    { "word": "bought", "phonetic": "/bɔːt/", "meaning": "买（过去式）", "example": "I <em>bought</em> a gift.", "emoji": "🛍️" },
                    { "word": "gift", "phonetic": "/ɡɪft/", "meaning": "礼物", "example": "This is a <em>gift</em> for you.", "emoji": "🎁" },
                    { "word": "fell", "phonetic": "/fel/", "meaning": "摔倒（过去式）", "example": "I <em>fell</em> off the bike.", "emoji": "💥" },
                    { "word": "off", "phonetic": "/ɒf/", "meaning": "从（某处）落下", "example": "I fell <em>off</em> the horse.", "emoji": "⬇️" },
                    { "word": "mule", "phonetic": "/mjuːl/", "meaning": "骡子", "example": "He rode a <em>mule</em>.", "emoji": "🐴" },
                    { "word": "Turpan", "phonetic": "/ˈtuəˈpɑːn/", "meaning": "吐鲁番", "example": "We went to <em>Turpan</em>.", "emoji": "🏜️" },
                    { "word": "could", "phonetic": "/kəd/", "meaning": "能（过去式）", "example": "I <em>could</em> swim when I was five.", "emoji": "💪" },
                    { "word": "till", "phonetic": "/tɪl/", "meaning": "直到", "example": "I waited <em>till</em> 5 o'clock.", "emoji": "⏳" },
                    { "word": "beach", "phonetic": "/biːtʃ/", "meaning": "海滩；沙滩", "example": "We played on the <em>beach</em>.", "emoji": "🏖️" },
                    { "word": "basket", "phonetic": "/ˈbɑːskɪt/", "meaning": "篮；筐", "example": "Put it in the <em>basket</em>.", "emoji": "🧺" },
                    { "word": "part", "phonetic": "/pɑːt/", "meaning": "角色", "example": "He played a <em>part</em> in the play.", "emoji": "🎭" },
                    { "word": "licked", "phonetic": "/lɪkt/", "meaning": "舔（过去式）", "example": "The dog <em>licked</em> my face.", "emoji": "🐶" },
                    { "word": "laughed", "phonetic": "/lɑːft/", "meaning": "笑（过去式）", "example": "We <em>laughed</em> a lot.", "emoji": "😂" }
                ]
            },
            "4": {
                "name": "Unit 4 今昔对比与过去能力",
                "words": [
                    { "word": "dining hall", "phonetic": "/ˈdaɪnɪŋ hɔːl/", "meaning": "饭厅", "example": "We eat in the <em>dining hall</em>.", "emoji": "🍽️" },
                    { "word": "grass", "phonetic": "/ɡrɑːs/", "meaning": "草坪", "example": "Don't walk on the <em>grass</em>.", "emoji": "🌿" },
                    { "word": "gym", "phonetic": "/dʒɪm/", "meaning": "体育馆", "example": "We play in the <em>gym</em>.", "emoji": "🏋️" },
                    { "word": "ago", "phonetic": "/əˈɡəʊ/", "meaning": "以前", "example": "I was short five years <em>ago</em>.", "emoji": "⏪" },
                    { "word": "cycling", "phonetic": "/ˈsaɪklɪŋ/", "meaning": "骑自行车运动", "example": "I like <em>cycling</em>.", "emoji": "🚴" },
                    { "word": "go cycling", "phonetic": "/ɡəʊ ˈsaɪklɪŋ/", "meaning": "去骑自行车", "example": "I <em>go cycling</em> every Sunday.", "emoji": "🚴" },
                    { "word": "ice-skate", "phonetic": "/ˈaɪsskeɪt/", "meaning": "滑冰", "example": "I like to <em>ice-skate</em>.", "emoji": "⛸️" },
                    { "word": "badminton", "phonetic": "/ˈbædmɪntən/", "meaning": "羽毛球运动", "example": "I play <em>badminton</em>.", "emoji": "🏸" },
                    { "word": "star", "phonetic": "/stɑː(r)/", "meaning": "星", "example": "Look at the <em>stars</em>.", "emoji": "⭐" },
                    { "word": "easy", "phonetic": "/ˈiːzi/", "meaning": "容易的", "example": "It's <em>easy</em>!", "emoji": "✅" },
                    { "word": "look up", "phonetic": "/lʊk ʌp/", "meaning": "查阅", "example": "<em>Look up</em> the word in the dictionary.", "emoji": "🔍" },
                    { "word": "Internet", "phonetic": "/ˈɪntənet/", "meaning": "互联网", "example": "I use the <em>Internet</em>.", "emoji": "🌐" },
                    { "word": "different", "phonetic": "/ˈdɪfrənt/", "meaning": "不同的", "example": "The school is <em>different</em> now.", "emoji": "≠" },
                    { "word": "active", "phonetic": "/ˈæktɪv/", "meaning": "积极的；活跃的", "example": "She is very <em>active</em>.", "emoji": "🏃" },
                    { "word": "race", "phonetic": "/reɪs/", "meaning": "赛跑", "example": "I won the <em>race</em>.", "emoji": "🏃" },
                    { "word": "nothing", "phonetic": "/ˈnʌθɪŋ/", "meaning": "没有什么", "example": "There is <em>nothing</em> to do.", "emoji": "🚫" },
                    { "word": "thought", "phonetic": "/θɔːt/", "meaning": "想（过去式）", "example": "I <em>thought</em> it was easy.", "emoji": "🤔" },
                    { "word": "felt", "phonetic": "/felt/", "meaning": "感觉（过去式）", "example": "I <em>felt</em> happy.", "emoji": "😊" },
                    { "word": "cheetah", "phonetic": "/ˈtʃiːtə/", "meaning": "猎豹", "example": "The <em>cheetah</em> runs fast.", "emoji": "🐆" },
                    { "word": "trip", "phonetic": "/trɪp/", "meaning": "绊倒", "example": "I <em>tripped</em> over the stone.", "emoji": "🫣" },
                    { "word": "woke", "phonetic": "/wəʊk/", "meaning": "醒（过去式）", "example": "I <em>woke</em> up early.", "emoji": "⏰" },
                    { "word": "dream", "phonetic": "/driːm/", "meaning": "梦", "example": "I had a <em>dream</em>.", "emoji": "💭" }
                ]
            }
        }
    },
    "RJY_5下": {
        "name": "五年级下册（人教版一年起点）",
        "grade": 5,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1 健康与习惯",
                "words": [
                    {
                        "word": "too much",
                        "phonetic": "/tuː mʌtʃ/",
                        "meaning": "太多",
                        "example": "Don't eat <em>too much</em> candy.",
                        "emoji": "🚫"
                    },
                    {
                        "word": "candy",
                        "phonetic": "/ˈkændi/",
                        "meaning": "糖果",
                        "example": "I like eating <em>candy</em>.",
                        "emoji": "🍬"
                    },
                    {
                        "word": "go to bed",
                        "phonetic": "/ɡəʊ tuː bed/",
                        "meaning": "去睡；就寝",
                        "example": "I <em>go to bed</em> at nine.",
                        "emoji": "🛏️"
                    },
                    {
                        "word": "early",
                        "phonetic": "/ˈɜːli/",
                        "meaning": "早",
                        "example": "I get up <em>early</em> every day.",
                        "emoji": "🌅"
                    },
                    {
                        "word": "exercise",
                        "phonetic": "/ˈeksəsaɪz/",
                        "meaning": "锻炼",
                        "example": "We <em>exercise</em> every morning.",
                        "emoji": "🏃"
                    },
                    {
                        "word": "tired",
                        "phonetic": "/taɪəd/",
                        "meaning": "困倦的；疲倦的",
                        "example": "I am <em>tired</em> after running.",
                        "emoji": "😴"
                    },
                    {
                        "word": "drink",
                        "phonetic": "/drɪŋk/",
                        "meaning": "喝；饮",
                        "example": "I <em>drink</em> milk every morning.",
                        "emoji": "🥛"
                    },
                    {
                        "word": "before",
                        "phonetic": "/bɪˈfɔː(r)/",
                        "meaning": "在……之前",
                        "example": "Brush your teeth <em>before</em> bed.",
                        "emoji": "⏰"
                    },
                    {
                        "word": "dirty",
                        "phonetic": "/ˈdɜːti/",
                        "meaning": "肮脏的",
                        "example": "Wash your <em>dirty</em> hands.",
                        "emoji": "🤲"
                    },
                    {
                        "word": "always",
                        "phonetic": "/ˈɔːlweɪz/",
                        "meaning": "总是",
                        "example": "I <em>always</em> do my homework.",
                        "emoji": "💯"
                    },
                    {
                        "word": "stomachache",
                        "phonetic": "/ˈstʌməkeɪk/",
                        "meaning": "胃疼",
                        "example": "I have a <em>stomachache</em>.",
                        "emoji": "🤢"
                    },
                    {
                        "word": "headache",
                        "phonetic": "/ˈhedeɪk/",
                        "meaning": "头疼",
                        "example": "She has a <em>headache</em>.",
                        "emoji": "🤕"
                    },
                    {
                        "word": "toothache",
                        "phonetic": "/ˈtuːθeɪk/",
                        "meaning": "牙疼",
                        "example": "I have a <em>toothache</em>.",
                        "emoji": "🦷"
                    },
                    {
                        "word": "a lot of",
                        "phonetic": "/ə lɒt ɒv/",
                        "meaning": "大量；许多",
                        "example": "I drink <em>a lot of</em> water.",
                        "emoji": "💧"
                    },
                    {
                        "word": "sleepy",
                        "phonetic": "/ˈsliːpi/",
                        "meaning": "困的；欲睡的",
                        "example": "I feel <em>sleepy</em> in class.",
                        "emoji": "😪"
                    },
                    {
                        "word": "subject",
                        "phonetic": "/ˈsʌbdʒɪkt/",
                        "meaning": "学科",
                        "example": "What is your favourite <em>subject</em>?",
                        "emoji": "📚"
                    },
                    {
                        "word": "mark",
                        "phonetic": "/mɑːk/",
                        "meaning": "分数",
                        "example": "I got a good <em>mark</em> in English.",
                        "emoji": "📝"
                    },
                    {
                        "word": "advice",
                        "phonetic": "/ədˈvaɪs/",
                        "meaning": "建议",
                        "example": "Can you give me some <em>advice</em>?",
                        "emoji": "💡"
                    },
                    {
                        "word": "more",
                        "phonetic": "/mɔː(r)/",
                        "meaning": "更多的",
                        "example": "I need <em>more</em> time to finish it.",
                        "emoji": "➕"
                    }
                ]
            },
            "2": {
                "name": "Unit 2 节日与序数词",
                "words": [
                    {
                        "word": "New Year's Day",
                        "phonetic": "/njuː jɪəz deɪ/",
                        "meaning": "新年",
                        "example": "Happy <em>New Year's Day</em>!",
                        "emoji": "🎊"
                    },
                    {
                        "word": "Tree Planting Day",
                        "phonetic": "/triː ˈplɑːntɪŋ deɪ/",
                        "meaning": "植树节",
                        "example": "We plant trees on <em>Tree Planting Day</em>.",
                        "emoji": "🌳"
                    },
                    {
                        "word": "Mother's Day",
                        "phonetic": "/ˈmʌðəz deɪ/",
                        "meaning": "母亲节",
                        "example": "I make a card for <em>Mother's Day</em>.",
                        "emoji": "💐"
                    },
                    {
                        "word": "Children's Day",
                        "phonetic": "/ˈtʃɪldrənz deɪ/",
                        "meaning": "儿童节",
                        "example": "We have a party on <em>Children's Day</em>.",
                        "emoji": "🎈"
                    },
                    {
                        "word": "Father's Day",
                        "phonetic": "/ˈfɑːðəz deɪ/",
                        "meaning": "父亲节",
                        "example": "Happy <em>Father's Day</em>!",
                        "emoji": "👔"
                    },
                    {
                        "word": "Teachers' Day",
                        "phonetic": "/ˈtiːtʃəz deɪ/",
                        "meaning": "教师节",
                        "example": "Happy <em>Teachers' Day</em>!",
                        "emoji": "🌻"
                    },
                    {
                        "word": "National Day",
                        "phonetic": "/ˈnæʃnəl deɪ/",
                        "meaning": "国庆节",
                        "example": "<em>National Day</em> is on October 1st.",
                        "emoji": "🇨🇳"
                    },
                    {
                        "word": "Christmas Day",
                        "phonetic": "/ˈkrɪsməs deɪ/",
                        "meaning": "圣诞节",
                        "example": "Merry <em>Christmas Day</em>!",
                        "emoji": "🎄"
                    },
                    {
                        "word": "birthday",
                        "phonetic": "/ˈbɜːθdeɪ/",
                        "meaning": "生日",
                        "example": "Today is my <em>birthday</em>!",
                        "emoji": "🎂"
                    },
                    {
                        "word": "fifth",
                        "phonetic": "/fɪfθ/",
                        "meaning": "第五",
                        "example": "May is the <em>fifth</em> month.",
                        "emoji": "5️⃣"
                    },
                    {
                        "word": "tenth",
                        "phonetic": "/tenθ/",
                        "meaning": "第十",
                        "example": "October is the <em>tenth</em> month.",
                        "emoji": "🔟"
                    },
                    {
                        "word": "twelfth",
                        "phonetic": "/twelfθ/",
                        "meaning": "第十二",
                        "example": "December is the <em>twelfth</em> month.",
                        "emoji": "1️⃣2️⃣"
                    },
                    {
                        "word": "twenty-fifth",
                        "phonetic": "/ˈtwenti fɪfθ/",
                        "meaning": "第二十五",
                        "example": "Christmas is on the <em>twenty-fifth</em>.",
                        "emoji": "2️⃣5️⃣"
                    },
                    {
                        "word": "plant",
                        "phonetic": "/plɑːnt/",
                        "meaning": "种植",
                        "example": "We <em>plant</em> trees in spring.",
                        "emoji": "🌱"
                    },
                    {
                        "word": "make a poster",
                        "phonetic": "/meɪk ə ˈpəʊstə(r)/",
                        "meaning": "制作海报",
                        "example": "Let's <em>make a poster</em> for the party.",
                        "emoji": "🖼️"
                    },
                    {
                        "word": "celebrate",
                        "phonetic": "/ˈselɪbreɪt/",
                        "meaning": "庆祝",
                        "example": "We <em>celebrate</em> the New Year together.",
                        "emoji": "🎉"
                    },
                    {
                        "word": "have a picnic",
                        "phonetic": "/hæv ə ˈpɪknɪk/",
                        "meaning": "野餐",
                        "example": "We <em>have a picnic</em> in the park.",
                        "emoji": "🧺"
                    },
                    {
                        "word": "office",
                        "phonetic": "/ˈɒfɪs/",
                        "meaning": "办公室",
                        "example": "My dad works in an <em>office</em>.",
                        "emoji": "🏢"
                    },
                    {
                        "word": "together",
                        "phonetic": "/təˈɡeðə(r)/",
                        "meaning": "在一起；共同",
                        "example": "We play <em>together</em> after school.",
                        "emoji": "🤝"
                    },
                    {
                        "word": "special",
                        "phonetic": "/ˈspeʃl/",
                        "meaning": "特殊的；特别的",
                        "example": "Today is a <em>special</em> day.",
                        "emoji": "⭐"
                    }
                ]
            },
            "3": {
                "name": "Unit 3 沟通联系方式",
                "words": [
                    {
                        "word": "send an email",
                        "phonetic": "/send ən ˈiːmeɪl/",
                        "meaning": "发送电子邮件",
                        "example": "I <em>send an email</em> to my friend.",
                        "emoji": "📧"
                    },
                    {
                        "word": "write a letter",
                        "phonetic": "/raɪt ə ˈletə(r)/",
                        "meaning": "写信",
                        "example": "I <em>write a letter</em> to my grandma.",
                        "emoji": "✉️"
                    },
                    {
                        "word": "make a phone call",
                        "phonetic": "/meɪk ə fəʊn kɔːl/",
                        "meaning": "打电话",
                        "example": "I <em>make a phone call</em> to mum.",
                        "emoji": "📞"
                    },
                    {
                        "word": "send a short message",
                        "phonetic": "/send ə ʃɔːt ˈmesɪdʒ/",
                        "meaning": "发送短消息",
                        "example": "I <em>send a short message</em> to Tom.",
                        "emoji": "💬"
                    },
                    {
                        "word": "mail a present",
                        "phonetic": "/meɪl ə ˈpreznt/",
                        "meaning": "邮寄礼物",
                        "example": "I <em>mail a present</em> to my friend.",
                        "emoji": "🎁"
                    },
                    {
                        "word": "make a video call",
                        "phonetic": "/meɪk ə ˈvɪdiəʊ kɔːl/",
                        "meaning": "打视频电话",
                        "example": "I <em>make a video call</em> to Dad.",
                        "emoji": "📹"
                    },
                    {
                        "word": "say",
                        "phonetic": "/seɪ/",
                        "meaning": "说；讲",
                        "example": "What did you <em>say</em>?",
                        "emoji": "💬"
                    },
                    {
                        "word": "make a card",
                        "phonetic": "/meɪk ə kɑːd/",
                        "meaning": "制作卡片",
                        "example": "I <em>make a card</em> for Mum.",
                        "emoji": "🃏"
                    },
                    {
                        "word": "everywhere",
                        "phonetic": "/ˈevriweə(r)/",
                        "meaning": "各处；到处",
                        "example": "Flowers are <em>everywhere</em> in spring.",
                        "emoji": "🌸"
                    },
                    {
                        "word": "flower show",
                        "phonetic": "/ˈflaʊə(r) ʃəʊ/",
                        "meaning": "花展",
                        "example": "We go to the <em>flower show</em> in spring.",
                        "emoji": "🌷"
                    }
                ]
            },
            "4": {
                "name": "Unit 4 过去的日常活动",
                "words": [
                    {
                        "word": "cleaned the window",
                        "phonetic": "/kliːnd ðə ˈwɪndəʊ/",
                        "meaning": "（过去式）擦窗子",
                        "example": "I <em>cleaned the window</em> yesterday.",
                        "emoji": "🪟"
                    },
                    {
                        "word": "watched TV",
                        "phonetic": "/wɒtʃt tiː viː/",
                        "meaning": "（过去式）看电视",
                        "example": "She <em>watched TV</em> last night.",
                        "emoji": "📺"
                    },
                    {
                        "word": "climbed a hill",
                        "phonetic": "/klaɪmd ə hɪl/",
                        "meaning": "（过去式）爬山",
                        "example": "We <em>climbed a hill</em> last weekend.",
                        "emoji": "⛰️"
                    },
                    {
                        "word": "visited grandparents",
                        "phonetic": "/ˈvɪzɪtɪd ˈɡrænpeərənts/",
                        "meaning": "（过去式）看望祖父母",
                        "example": "I <em>visited grandparents</em> on Sunday.",
                        "emoji": "👴"
                    },
                    {
                        "word": "danced",
                        "phonetic": "/dɑːnst/",
                        "meaning": "（dance的过去式）跳舞",
                        "example": "She <em>danced</em> at the party.",
                        "emoji": "💃"
                    },
                    {
                        "word": "jumped rope",
                        "phonetic": "/dʒʌmpt rəʊp/",
                        "meaning": "（过去式）跳绳",
                        "example": "We <em>jumped rope</em> in PE class.",
                        "emoji": "🤸"
                    },
                    {
                        "word": "listened to music",
                        "phonetic": "/ˈlɪsnd tuː ˈmjuːzɪk/",
                        "meaning": "（过去式）听音乐",
                        "example": "He <em>listened to music</em> after school.",
                        "emoji": "🎵"
                    },
                    {
                        "word": "rowed a boat",
                        "phonetic": "/rəʊd ə bəʊt/",
                        "meaning": "（过去式）划船",
                        "example": "We <em>rowed a boat</em> on the lake.",
                        "emoji": "🚣"
                    },
                    {
                        "word": "played computer games",
                        "phonetic": "/pleɪd kəmˈpjuːtə ɡeɪmz/",
                        "meaning": "（过去式）玩电子游戏",
                        "example": "He <em>played computer games</em> yesterday.",
                        "emoji": "🎮"
                    },
                    {
                        "word": "stayed at home",
                        "phonetic": "/steɪd æt həʊm/",
                        "meaning": "（过去式）呆在家里",
                        "example": "I <em>stayed at home</em> last Sunday.",
                        "emoji": "🏠"
                    },
                    {
                        "word": "played the piano",
                        "phonetic": "/pleɪd ðə piˈænəʊ/",
                        "meaning": "（过去式）弹钢琴",
                        "example": "She <em>played the piano</em> beautifully.",
                        "emoji": "🎹"
                    },
                    {
                        "word": "played chess",
                        "phonetic": "/pleɪd tʃes/",
                        "meaning": "（过去式）下棋",
                        "example": "We <em>played chess</em> after dinner.",
                        "emoji": "♟️"
                    },
                    {
                        "word": "washed clothes",
                        "phonetic": "/wɒʃt kləʊðz/",
                        "meaning": "（过去式）洗衣服",
                        "example": "Mum <em>washed clothes</em> this morning.",
                        "emoji": "👕"
                    },
                    {
                        "word": "boring",
                        "phonetic": "/ˈbɔːrɪŋ/",
                        "meaning": "单调的；乏味的",
                        "example": "The film was <em>boring</em>.",
                        "emoji": "😐"
                    },
                    {
                        "word": "badminton",
                        "phonetic": "/ˈbædmɪntən/",
                        "meaning": "羽毛球",
                        "example": "I like playing <em>badminton</em>.",
                        "emoji": "🏸"
                    },
                    {
                        "word": "won",
                        "phonetic": "/wʌn/",
                        "meaning": "（win的过去式）赢；获胜",
                        "example": "Our team <em>won</em> the game!",
                        "emoji": "🏆"
                    }
                ]
            },
            "5": {
                "name": "Unit 5 旅行经历与感受",
                "words": [
                    {
                        "word": "went to the beach",
                        "phonetic": "/went tuː ðə biːtʃ/",
                        "meaning": "（过去式）去海边",
                        "example": "We <em>went to the beach</em> last summer.",
                        "emoji": "🏖️"
                    },
                    {
                        "word": "drank cold drinks",
                        "phonetic": "/dræŋk kəʊld drɪŋks/",
                        "meaning": "（过去式）喝冷饮",
                        "example": "I <em>drank cold drinks</em> in summer.",
                        "emoji": "🥤"
                    },
                    {
                        "word": "swam",
                        "phonetic": "/swæm/",
                        "meaning": "（swim的过去式）游泳",
                        "example": "I <em>swam</em> in the sea.",
                        "emoji": "🏊"
                    },
                    {
                        "word": "ate ice cream",
                        "phonetic": "/eɪt aɪs kriːm/",
                        "meaning": "（过去式）吃冰激凌",
                        "example": "She <em>ate ice cream</em> after dinner.",
                        "emoji": "🍦"
                    },
                    {
                        "word": "the Stone Forest",
                        "phonetic": "/ðə stəʊn fɒrɪst/",
                        "meaning": "石林",
                        "example": "<em>The Stone Forest</em> is in Yunnan.",
                        "emoji": "🪨"
                    },
                    {
                        "word": "bought some gifts",
                        "phonetic": "/bɔːt sʌm ɡɪfts/",
                        "meaning": "（过去式）买些礼物",
                        "example": "I <em>bought some gifts</em> for my friends.",
                        "emoji": "🎁"
                    },
                    {
                        "word": "took photos",
                        "phonetic": "/tʊk ˈfəʊtəʊz/",
                        "meaning": "（过去式）拍照片",
                        "example": "We <em>took photos</em> at the Great Wall.",
                        "emoji": "📷"
                    },
                    {
                        "word": "saw flowers",
                        "phonetic": "/sɔː ˈflaʊəz/",
                        "meaning": "（过去式）赏花",
                        "example": "We <em>saw flowers</em> in the park.",
                        "emoji": "🌸"
                    },
                    {
                        "word": "slept",
                        "phonetic": "/slept/",
                        "meaning": "（sleep的过去式）睡觉",
                        "example": "I <em>slept</em> for ten hours.",
                        "emoji": "😴"
                    },
                    {
                        "word": "delicious",
                        "phonetic": "/dɪˈlɪʃəs/",
                        "meaning": "美味的；可口的",
                        "example": "The food was <em>delicious</em>.",
                        "emoji": "😋"
                    },
                    {
                        "word": "felt happy",
                        "phonetic": "/felt ˈhæpi/",
                        "meaning": "（过去式）觉得高兴",
                        "example": "I <em>felt happy</em> on the trip.",
                        "emoji": "😊"
                    },
                    {
                        "word": "sad",
                        "phonetic": "/sæd/",
                        "meaning": "悲哀的；难过的",
                        "example": "She looks <em>sad</em> today.",
                        "emoji": "😢"
                    },
                    {
                        "word": "left",
                        "phonetic": "/left/",
                        "meaning": "（leave的过去式）离开",
                        "example": "We <em>left</em> home at seven.",
                        "emoji": "🚶"
                    },
                    {
                        "word": "French fries",
                        "phonetic": "/frentʃ fraɪz/",
                        "meaning": "法式炸薯条",
                        "example": "I like eating <em>French fries</em>.",
                        "emoji": "🍟"
                    },
                    {
                        "word": "were",
                        "phonetic": "/wɜː(r)/",
                        "meaning": "（are的过去式）是",
                        "example": "They <em>were</em> very happy.",
                        "emoji": "✅"
                    }
                ]
            },
            "6": {
                "name": "Unit 6 成长历程",
                "words": [
                    {
                        "word": "was born",
                        "phonetic": "/wɒz bɔːn/",
                        "meaning": "（过去式）出生",
                        "example": "I <em>was born</em> in Beijing.",
                        "emoji": "👶"
                    },
                    {
                        "word": "started to speak",
                        "phonetic": "/ˈstɑːtɪd tuː spiːk/",
                        "meaning": "（过去式）开始说话",
                        "example": "She <em>started to speak</em> at one year old.",
                        "emoji": "🗣️"
                    },
                    {
                        "word": "learned to walk",
                        "phonetic": "/lɜːnd tuː wɔːk/",
                        "meaning": "（过去式）学走路",
                        "example": "I <em>learned to walk</em> at one.",
                        "emoji": "🚶"
                    },
                    {
                        "word": "learned to ride a bike",
                        "phonetic": "/lɜːnd tuː raɪd ə baɪk/",
                        "meaning": "（过去式）学骑自行车",
                        "example": "He <em>learned to ride a bike</em> at six.",
                        "emoji": "🚲"
                    },
                    {
                        "word": "went to kindergarten",
                        "phonetic": "/went tuː ˈkɪndəɡɑːtn/",
                        "meaning": "（过去式）上幼儿园",
                        "example": "I <em>went to kindergarten</em> at three.",
                        "emoji": "🏫"
                    },
                    {
                        "word": "went to school",
                        "phonetic": "/went tuː skuːl/",
                        "meaning": "（过去式）上学",
                        "example": "I <em>went to school</em> at six.",
                        "emoji": "🎒"
                    },
                    {
                        "word": "learned to swim",
                        "phonetic": "/lɜːnd tuː swɪm/",
                        "meaning": "（过去式）学游泳",
                        "example": "She <em>learned to swim</em> last summer.",
                        "emoji": "🏊"
                    },
                    {
                        "word": "fifteenth",
                        "phonetic": "/fɪfˈtiːnθ/",
                        "meaning": "第十五",
                        "example": "My birthday is on the <em>fifteenth</em>.",
                        "emoji": "1️⃣5️⃣"
                    },
                    {
                        "word": "started to buy things",
                        "phonetic": "/ˈstɑːtɪd tuː baɪ θɪŋz/",
                        "meaning": "（过去式）开始学买东西",
                        "example": "I <em>started to buy things</em> at seven.",
                        "emoji": "🛒"
                    },
                    {
                        "word": "started to study English",
                        "phonetic": "/ˈstɑːtɪd tuː ˈstʌdi ˈɪŋɡlɪʃ/",
                        "meaning": "（过去式）开始学英语",
                        "example": "I <em>started to study English</em> at eight.",
                        "emoji": "🇬🇧"
                    },
                    {
                        "word": "started to use a computer",
                        "phonetic": "/ˈstɑːtɪd tuː juːz ə kəmˈpjuːtə(r)/",
                        "meaning": "（过去式）开始使用电脑",
                        "example": "He <em>started to use a computer</em> at nine.",
                        "emoji": "💻"
                    },
                    {
                        "word": "all over",
                        "phonetic": "/ɔːl ˈəʊvə(r)/",
                        "meaning": "到处；各处",
                        "example": "I looked <em>all over</em> for my pen.",
                        "emoji": "🔍"
                    },
                    {
                        "word": "out of",
                        "phonetic": "/aʊt ɒv/",
                        "meaning": "离开（某处）",
                        "example": "She walked <em>out of</em> the room.",
                        "emoji": "🚪"
                    },
                    {
                        "word": "into",
                        "phonetic": "/ˈɪntuː/",
                        "meaning": "进入；到……里",
                        "example": "Come <em>into</em> the classroom.",
                        "emoji": "⬇️"
                    },
                    {
                        "word": "chopsticks",
                        "phonetic": "/ˈtʃɒpstɪks/",
                        "meaning": "筷子",
                        "example": "I can use <em>chopsticks</em>.",
                        "emoji": "🥢"
                    },
                    {
                        "word": "wet",
                        "phonetic": "/wet/",
                        "meaning": "湿的，潮湿的",
                        "example": "The ground is <em>wet</em> after rain.",
                        "emoji": "💧"
                    }
                ]
            }
        }
    },
    "RJY_6下": {
        "name": "六年级下册（人教版一年起点）",
        "grade": 6,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    {
                        "word": "live",
                        "phonetic": "/lɪv/",
                        "meaning": "居住；生活",
                        "example": "I <em>live</em> in Beijing.",
                        "emoji": "🏠"
                    },
                    {
                        "word": "quite",
                        "phonetic": "/kwaɪt/",
                        "meaning": "很，相当",
                        "example": "It is <em>quite</em> cold today.",
                        "emoji": "❗"
                    },
                    {
                        "word": "scarf",
                        "phonetic": "/skɑːf/",
                        "meaning": "围巾",
                        "example": "She wears a red <em>scarf</em>.",
                        "emoji": "🧣"
                    },
                    {
                        "word": "airport",
                        "phonetic": "/ˈeəpɔːt/",
                        "meaning": "机场",
                        "example": "We arrived at the <em>airport</em>.",
                        "emoji": "✈️"
                    },
                    {
                        "word": "pupil",
                        "phonetic": "/ˈpjuːpl/",
                        "meaning": "小学生",
                        "example": "I am a <em>pupil</em> in Grade 6.",
                        "emoji": "👦"
                    },
                    {
                        "word": "arrive",
                        "phonetic": "/əˈraɪv/",
                        "meaning": "到达",
                        "example": "We <em>arrive</em> at school at eight.",
                        "emoji": "🛬"
                    },
                    {
                        "word": "meet",
                        "phonetic": "/miːt/",
                        "meaning": "迎接；遇见；会面",
                        "example": "I <em>meet</em> my friend at the gate.",
                        "emoji": "👋"
                    },
                    {
                        "word": "wardrobe",
                        "phonetic": "/ˈwɔːdrəʊb/",
                        "meaning": "衣柜",
                        "example": "My clothes are in the <em>wardrobe</em>.",
                        "emoji": "🗄️"
                    }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    {
                        "word": "show ... around",
                        "phonetic": "/ʃəʊ əˈraʊnd/",
                        "meaning": "带领……参观",
                        "example": "Let me <em>show you around</em> the school.",
                        "emoji": "🗺️"
                    },
                    {
                        "word": "Queen's Park",
                        "phonetic": "/kwiːnz pɑːk/",
                        "meaning": "女王公园",
                        "example": "We visited <em>Queen's Park</em>.",
                        "emoji": "🌳"
                    },
                    {
                        "word": "art gallery",
                        "phonetic": "/ɑːt ˈɡæləri/",
                        "meaning": "画廊；艺术馆",
                        "example": "We saw paintings at the <em>art gallery</em>.",
                        "emoji": "🎨"
                    },
                    {
                        "word": "public library",
                        "phonetic": "/ˈpʌblɪk ˈlaɪbrəri/",
                        "meaning": "公共图书馆",
                        "example": "I borrow books from the <em>public library</em>.",
                        "emoji": "📚"
                    },
                    {
                        "word": "downtown",
                        "phonetic": "/ˌdaʊnˈtaʊn/",
                        "meaning": "闹市区，市中心",
                        "example": "We went shopping <em>downtown</em>.",
                        "emoji": "🏙️"
                    },
                    {
                        "word": "Lake Ontario",
                        "phonetic": "/leɪk ɒnˈteəriəʊ/",
                        "meaning": "安大略湖",
                        "example": "<em>Lake Ontario</em> is very big.",
                        "emoji": "🏞️"
                    },
                    {
                        "word": "stadium",
                        "phonetic": "/ˈsteɪdiəm/",
                        "meaning": "（露天）体育场",
                        "example": "We watched a game at the <em>stadium</em>.",
                        "emoji": "🏟️"
                    }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    {
                        "word": "volunteer",
                        "phonetic": "/ˌvɒlənˈtɪə(r)/",
                        "meaning": "志愿者",
                        "example": "She works as a <em>volunteer</em>.",
                        "emoji": "🤝"
                    },
                    {
                        "word": "sandwich",
                        "phonetic": "/ˈsænwɪtʃ/",
                        "meaning": "三明治",
                        "example": "I eat a <em>sandwich</em> for lunch.",
                        "emoji": "🥪"
                    },
                    {
                        "word": "top",
                        "phonetic": "/tɒp/",
                        "meaning": "上边，上面",
                        "example": "The cat is on <em>top</em> of the box.",
                        "emoji": "⬆️"
                    },
                    {
                        "word": "habit",
                        "phonetic": "/ˈhæbɪt/",
                        "meaning": "习惯",
                        "example": "Reading is a good <em>habit</em>.",
                        "emoji": "📖"
                    },
                    {
                        "word": "idea",
                        "phonetic": "/aɪˈdɪə/",
                        "meaning": "主意，想法；意见",
                        "example": "That's a great <em>idea</em>!",
                        "emoji": "💡"
                    },
                    {
                        "word": "less",
                        "phonetic": "/les/",
                        "meaning": "更少",
                        "example": "Eat <em>less</em> junk food.",
                        "emoji": "📉"
                    },
                    {
                        "word": "at least",
                        "phonetic": "/ət liːst/",
                        "meaning": "至少",
                        "example": "You should drink <em>at least</em> eight glasses of water.",
                        "emoji": "👌"
                    }
                ]
            },
            "4": {
                "name": "Unit 4",
                "words": [
                    {
                        "word": "talk about",
                        "phonetic": "/tɔːk əˈbaʊt/",
                        "meaning": "谈论",
                        "example": "Let's <em>talk about</em> our weekend.",
                        "emoji": "🗣️"
                    },
                    {
                        "word": "hockey",
                        "phonetic": "/ˈhɒki/",
                        "meaning": "曲棍球；冰上曲棍球",
                        "example": "He likes playing <em>hockey</em>.",
                        "emoji": "🏒"
                    },
                    {
                        "word": "together",
                        "phonetic": "/təˈɡeðə(r)/",
                        "meaning": "一起",
                        "example": "We play <em>together</em> after school.",
                        "emoji": "🤝"
                    },
                    {
                        "word": "special",
                        "phonetic": "/ˈspeʃl/",
                        "meaning": "特殊，特别",
                        "example": "Today is a <em>special</em> day.",
                        "emoji": "⭐"
                    },
                    {
                        "word": "beaver",
                        "phonetic": "/ˈbiːvə(r)/",
                        "meaning": "海（河）狸",
                        "example": "The <em>beaver</em> builds a dam.",
                        "emoji": "🦫"
                    },
                    {
                        "word": "raccoon",
                        "phonetic": "/rəˈkuːn/",
                        "meaning": "浣熊",
                        "example": "The <em>raccoon</em> has a black mask.",
                        "emoji": "🦝"
                    },
                    {
                        "word": "moose",
                        "phonetic": "/muːs/",
                        "meaning": "北美麋；驼鹿",
                        "example": "The <em>moose</em> is very tall.",
                        "emoji": "🫎"
                    }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    {
                        "word": "countryside",
                        "phonetic": "/ˈkʌntrisaɪd/",
                        "meaning": "农村，乡下",
                        "example": "My grandma lives in the <em>countryside</em>.",
                        "emoji": "🌾"
                    },
                    {
                        "word": "Thanksgiving",
                        "phonetic": "/ˌθæŋksˈɡɪvɪŋ/",
                        "meaning": "感恩节",
                        "example": "We eat turkey on <em>Thanksgiving</em>.",
                        "emoji": "🦃"
                    },
                    {
                        "word": "roast turkey",
                        "phonetic": "/rəʊst ˈtɜːki/",
                        "meaning": "烤火鸡",
                        "example": "Mum makes <em>roast turkey</em> for dinner.",
                        "emoji": "🍗"
                    },
                    {
                        "word": "squirrel",
                        "phonetic": "/ˈskwɪrəl/",
                        "meaning": "松鼠",
                        "example": "The <em>squirrel</em> climbs the tree.",
                        "emoji": "🐿️"
                    },
                    {
                        "word": "swan",
                        "phonetic": "/swɒn/",
                        "meaning": "天鹅",
                        "example": "The <em>swan</em> swims on the lake.",
                        "emoji": "🦢"
                    },
                    {
                        "word": "wild goose",
                        "phonetic": "/waɪld ɡuːs/",
                        "meaning": "大雁",
                        "example": "A <em>wild goose</em> flies south in autumn.",
                        "emoji": "🪿"
                    },
                    {
                        "word": "frog",
                        "phonetic": "/frɒɡ/",
                        "meaning": "青蛙",
                        "example": "The <em>frog</em> jumps into the water.",
                        "emoji": "🐸"
                    }
                ]
            },
            "6": {
                "name": "Unit 6",
                "words": [
                    {
                        "word": "English-Chinese dictionary",
                        "phonetic": "/ˈɪŋɡlɪʃ tʃaɪˈniːz ˈdɪkʃənri/",
                        "meaning": "英汉词典",
                        "example": "I look up words in the <em>English-Chinese dictionary</em>.",
                        "emoji": "📖"
                    },
                    {
                        "word": "shopping centre",
                        "phonetic": "/ˈʃɒpɪŋ ˈsentə/",
                        "meaning": "购物中心",
                        "example": "We buy clothes at the <em>shopping centre</em>.",
                        "emoji": "🏬"
                    },
                    {
                        "word": "shopping mall",
                        "phonetic": "/ˈʃɒpɪŋ mɔːl/",
                        "meaning": "大型综合商业中心",
                        "example": "The <em>shopping mall</em> is very big.",
                        "emoji": "🏪"
                    },
                    {
                        "word": "amazing",
                        "phonetic": "/əˈmeɪzɪŋ/",
                        "meaning": "惊人的；神奇的",
                        "example": "The magic show was <em>amazing</em>!",
                        "emoji": "🤩"
                    },
                    {
                        "word": "hot pot",
                        "phonetic": "/hɒt pɒt/",
                        "meaning": "火锅",
                        "example": "Let's eat <em>hot pot</em> tonight!",
                        "emoji": "🍲"
                    }
                ]
            }
        }
    }
};

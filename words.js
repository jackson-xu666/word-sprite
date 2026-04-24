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
    },
    "BJ_3下": {
        "name": "三年级下册（北京版）",
        "grade": 3,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1 方位、物品与整理",
                "words": [
                    { "word": "where", "phonetic": "/weə(r)/", "meaning": "哪里；在哪里", "example": "<em>Where</em> is my pen?", "emoji": "❓" },
                    { "word": "in", "phonetic": "/ɪn/", "meaning": "在……内，在……中", "example": "It's <em>in</em> the box.", "emoji": "📥" },
                    { "word": "box", "phonetic": "/bɒks/", "meaning": "盒子；箱子", "example": "Open the <em>box</em>.", "emoji": "📦" },
                    { "word": "cap", "phonetic": "/kæp/", "meaning": "帽子", "example": "Put on your <em>cap</em>.", "emoji": "🧢" },
                    { "word": "on", "phonetic": "/ɒn/", "meaning": "在……上", "example": "The book is <em>on</em> the desk.", "emoji": "⬆️" },
                    { "word": "next to", "phonetic": "/nekst tuː/", "meaning": "旁边，在……近旁", "example": "It's <em>next to</em> the door.", "emoji": "↔️" },
                    { "word": "schoolbag", "phonetic": "/ˈskuːlbæɡ/", "meaning": "书包", "example": "I have a <em>schoolbag</em>.", "emoji": "🎒" },
                    { "word": "ruler", "phonetic": "/ˈruːlə(r)/", "meaning": "尺子", "example": "This is a <em>ruler</em>.", "emoji": "📏" },
                    { "word": "the", "phonetic": "/ðə/", "meaning": "指已提到的人或物", "example": "<em>The</em> book is on the desk.", "emoji": "☝️" },
                    { "word": "my", "phonetic": "/maɪ/", "meaning": "我的", "example": "<em>My</em> bag is blue.", "emoji": "🙋" },
                    { "word": "under", "phonetic": "/ˈʌndə(r)/", "meaning": "在……之下", "example": "The cat is <em>under</em> the desk.", "emoji": "⬇️" },
                    { "word": "English", "phonetic": "/ˈɪŋɡlɪʃ/", "meaning": "英文的；英语", "example": "I like <em>English</em>.", "emoji": "🔤" },
                    { "word": "desk", "phonetic": "/desk/", "meaning": "书桌", "example": "Put it on the <em>desk</em>.", "emoji": "🗄️" },
                    { "word": "clothes", "phonetic": "/kləʊðz/", "meaning": "衣服，衣物", "example": "Put away your <em>clothes</em>.", "emoji": "👗" },
                    { "word": "in order", "phonetic": "/ɪn ˈɔːdə(r)/", "meaning": "整齐，秩序井然", "example": "Keep your room <em>in order</em>.", "emoji": "✨" },
                    { "word": "these", "phonetic": "/ðiːz/", "meaning": "这些", "example": "<em>These</em> are my books.", "emoji": "👉" },
                    { "word": "trousers", "phonetic": "/ˈtraʊzəz/", "meaning": "裤子，长裤", "example": "I like these <em>trousers</em>.", "emoji": "👖" },
                    { "word": "sock", "phonetic": "/sɒk/", "meaning": "短袜", "example": "Where is my <em>sock</em>?", "emoji": "🧦" },
                    { "word": "shorts", "phonetic": "/ʃɔːts/", "meaning": "短裤", "example": "I wear <em>shorts</em> in summer.", "emoji": "🩳" },
                    { "word": "behind", "phonetic": "/bɪˈhaɪnd/", "meaning": "在……之后", "example": "The cat is <em>behind</em> the door.", "emoji": "🔙" },
                    { "word": "pen", "phonetic": "/pen/", "meaning": "钢笔", "example": "Give me a <em>pen</em>.", "emoji": "🖊️" },
                    { "word": "doll", "phonetic": "/dɒl/", "meaning": "洋娃娃；玩偶", "example": "She has a <em>doll</em>.", "emoji": "🧸" },
                    { "word": "Chinese", "phonetic": "/ˌtʃaɪˈniːz/", "meaning": "中国的；中文；中国人", "example": "I like <em>Chinese</em> class.", "emoji": "🈶" },
                    { "word": "tidy", "phonetic": "/ˈtaɪdi/", "meaning": "整理，收拾", "example": "<em>Tidy</em> your room.", "emoji": "✨" }
                ]
            },
            "2": {
                "name": "Unit 2 天气与日常穿搭",
                "words": [
                    { "word": "weather", "phonetic": "/ˈweðə(r)/", "meaning": "天气", "example": "How is the <em>weather</em>?", "emoji": "🌤️" },
                    { "word": "rainy", "phonetic": "/ˈreɪni/", "meaning": "下雨的；多雨的", "example": "It's <em>rainy</em> today.", "emoji": "🌧️" },
                    { "word": "snowy", "phonetic": "/ˈsnəʊi/", "meaning": "下雪的", "example": "It's <em>snowy</em> in winter.", "emoji": "🌨️" },
                    { "word": "windy", "phonetic": "/ˈwɪndi/", "meaning": "有风的", "example": "It's <em>windy</em> today.", "emoji": "💨" },
                    { "word": "cold", "phonetic": "/kəʊld/", "meaning": "冷的", "example": "It's <em>cold</em> in winter.", "emoji": "🥶" },
                    { "word": "snow", "phonetic": "/snəʊ/", "meaning": "雪；下雪", "example": "I like <em>snow</em>.", "emoji": "❄️" },
                    { "word": "sunny", "phonetic": "/ˈsʌni/", "meaning": "晴朗的", "example": "It's <em>sunny</em> today.", "emoji": "☀️" },
                    { "word": "hot", "phonetic": "/hɒt/", "meaning": "热的", "example": "It's <em>hot</em> in summer.", "emoji": "🥵" },
                    { "word": "swim", "phonetic": "/swɪm/", "meaning": "游泳", "example": "I like to <em>swim</em>.", "emoji": "🏊" },
                    { "word": "sea", "phonetic": "/siː/", "meaning": "海，海洋", "example": "I swim in the <em>sea</em>.", "emoji": "🌊" },
                    { "word": "get up", "phonetic": "/ɡet ʌp/", "meaning": "起床", "example": "I <em>get up</em> at 7.", "emoji": "⏰" },
                    { "word": "park", "phonetic": "/pɑːk/", "meaning": "公园", "example": "Let's go to the <em>park</em>.", "emoji": "🌳" },
                    { "word": "OK", "phonetic": "/ˌəʊˈkeɪ/", "meaning": "好的；行；很好", "example": "— Let's go. — <em>OK</em>!", "emoji": "👌" },
                    { "word": "rain", "phonetic": "/reɪn/", "meaning": "雨；下雨", "example": "I don't like <em>rain</em>.", "emoji": "🌧️" },
                    { "word": "kite", "phonetic": "/kaɪt/", "meaning": "风筝", "example": "Let's fly a <em>kite</em>.", "emoji": "🪁" },
                    { "word": "umbrella", "phonetic": "/ʌmˈbrelə/", "meaning": "雨伞", "example": "Take your <em>umbrella</em>.", "emoji": "☂️" },
                    { "word": "be (am/is/are)", "phonetic": "/biː/", "meaning": "是", "example": "I <em>am</em> a student.", "emoji": "✅" },
                    { "word": "wear", "phonetic": "/weə(r)/", "meaning": "穿；戴；佩戴", "example": "I <em>wear</em> a coat.", "emoji": "👔" },
                    { "word": "coat", "phonetic": "/kəʊt/", "meaning": "上衣，外套", "example": "Put on your <em>coat</em>.", "emoji": "🧥" },
                    { "word": "cloudy", "phonetic": "/ˈklaʊdi/", "meaning": "多云的", "example": "It's <em>cloudy</em> today.", "emoji": "☁️" },
                    { "word": "raincoat", "phonetic": "/ˈreɪnkəʊt/", "meaning": "雨衣", "example": "Wear your <em>raincoat</em>.", "emoji": "🧥" }
                ]
            },
            "3": {
                "name": "Unit 3 季节、服饰与户外活动",
                "words": [
                    { "word": "spring", "phonetic": "/sprɪŋ/", "meaning": "春天；春季", "example": "<em>Spring</em> is warm.", "emoji": "🌸" },
                    { "word": "summer", "phonetic": "/ˈsʌmə(r)/", "meaning": "夏天；夏季", "example": "<em>Summer</em> is hot.", "emoji": "☀️" },
                    { "word": "autumn", "phonetic": "/ˈɔːtəm/", "meaning": "秋天；秋季", "example": "<em>Autumn</em> is cool.", "emoji": "🍂" },
                    { "word": "winter", "phonetic": "/ˈwɪntə(r)/", "meaning": "冬天；冬季", "example": "<em>Winter</em> is cold.", "emoji": "❄️" },
                    { "word": "season", "phonetic": "/ˈsiːzn/", "meaning": "季节", "example": "Which <em>season</em> do you like?", "emoji": "📅" },
                    { "word": "year", "phonetic": "/jɪə(r)/", "meaning": "年", "example": "There are four seasons in a <em>year</em>.", "emoji": "📅" },
                    { "word": "warm", "phonetic": "/wɔːm/", "meaning": "温暖的", "example": "Spring is <em>warm</em>.", "emoji": "🌡️" },
                    { "word": "cool", "phonetic": "/kuːl/", "meaning": "凉爽的；冷静的", "example": "Autumn is <em>cool</em>.", "emoji": "🍃" },
                    { "word": "sweater", "phonetic": "/ˈswetə(r)/", "meaning": "毛衣，线衣", "example": "I wear a <em>sweater</em> in winter.", "emoji": "🧶" },
                    { "word": "skirt", "phonetic": "/skɜːt/", "meaning": "裙子", "example": "She wears a <em>skirt</em>.", "emoji": "👗" },
                    { "word": "leaf", "phonetic": "/liːf/", "meaning": "树叶", "example": "The <em>leaf</em> is yellow.", "emoji": "🍃" },
                    { "word": "shirt", "phonetic": "/ʃɜːt/", "meaning": "衬衫，衬衣", "example": "He wears a <em>shirt</em>.", "emoji": "👔" },
                    { "word": "row", "phonetic": "/rəʊ/", "meaning": "划（船）", "example": "Let's <em>row</em> a boat.", "emoji": "🚣" },
                    { "word": "boat", "phonetic": "/bəʊt/", "meaning": "小船", "example": "Let's <em>boat</em> on the lake.", "emoji": "⛵" },
                    { "word": "walk", "phonetic": "/wɔːk/", "meaning": "散步，步行", "example": "Let's take a <em>walk</em>.", "emoji": "🚶" },
                    { "word": "ice", "phonetic": "/aɪs/", "meaning": "冰", "example": "The lake is covered with <em>ice</em>.", "emoji": "🧊" },
                    { "word": "ice-skating", "phonetic": "/ˈaɪsskeɪtɪŋ/", "meaning": "滑冰", "example": "I like <em>ice-skating</em>.", "emoji": "⛸️" },
                    { "word": "for", "phonetic": "/fɔː(r)/", "meaning": "为，为了；给", "example": "This gift is <em>for</em> you.", "emoji": "🎁" },
                    { "word": "climb", "phonetic": "/klaɪm/", "meaning": "爬，攀登", "example": "Let's <em>climb</em> the tree.", "emoji": "🧗" },
                    { "word": "tree", "phonetic": "/triː/", "meaning": "树", "example": "The <em>tree</em> is tall.", "emoji": "🌳" },
                    { "word": "river", "phonetic": "/ˈrɪvə(r)/", "meaning": "河；江", "example": "The <em>river</em> is long.", "emoji": "🏞️" },
                    { "word": "fish", "phonetic": "/fɪʃ/", "meaning": "鱼", "example": "I can see a <em>fish</em>.", "emoji": "🐟" },
                    { "word": "lot", "phonetic": "/lɒt/", "meaning": "许多", "example": "I have a <em>lot</em> of friends.", "emoji": "📦" },
                    { "word": "sleep", "phonetic": "/sliːp/", "meaning": "睡；睡觉", "example": "I <em>sleep</em> at 9.", "emoji": "😴" }
                ]
            },
            "5": {
                "name": "Unit 5 时间、数字与日常作息",
                "words": [
                    { "word": "time", "phonetic": "/taɪm/", "meaning": "时间", "example": "What <em>time</em> is it?", "emoji": "⏰" },
                    { "word": "o'clock", "phonetic": "/əˈklɒk/", "meaning": "……点钟", "example": "It's 7 <em>o'clock</em>.", "emoji": "🕐" },
                    { "word": "up", "phonetic": "/ʌp/", "meaning": "向上；起来", "example": "Get <em>up</em>!", "emoji": "⬆️" },
                    { "word": "twenty", "phonetic": "/ˈtwenti/", "meaning": "二十", "example": "I can count to <em>twenty</em>.", "emoji": "🔢" },
                    { "word": "kid", "phonetic": "/kɪd/", "meaning": "小孩", "example": "The <em>kid</em> is cute.", "emoji": "🧒" },
                    { "word": "classroom", "phonetic": "/ˈklɑːsruːm/", "meaning": "教室", "example": "This is our <em>classroom</em>.", "emoji": "🏫" },
                    { "word": "at", "phonetic": "/æt/", "meaning": "在；于；向", "example": "I get up <em>at</em> 7.", "emoji": "📌" },
                    { "word": "thirty", "phonetic": "/ˈθɜːti/", "meaning": "三十", "example": "I am <em>thirty</em> years old.", "emoji": "🔢" },
                    { "word": "draw", "phonetic": "/drɔː/", "meaning": "画；绘画", "example": "I like to <em>draw</em>.", "emoji": "🎨" },
                    { "word": "art", "phonetic": "/ɑːt/", "meaning": "艺术；美术", "example": "I like <em>art</em> class.", "emoji": "🖼️" },
                    { "word": "forty", "phonetic": "/ˈfɔːti/", "meaning": "四十", "example": "There are <em>forty</em> students.", "emoji": "🔢" },
                    { "word": "hurry", "phonetic": "/ˈhʌri/", "meaning": "匆忙，急忙", "example": "<em>Hurry</em> up!", "emoji": "🏃" },
                    { "word": "half", "phonetic": "/hɑːf/", "meaning": "半，一半", "example": "It's <em>half</em> past 7.", "emoji": "🕐" },
                    { "word": "past", "phonetic": "/pɑːst/", "meaning": "过", "example": "It's ten <em>past</em> eight.", "emoji": "⏰" },
                    { "word": "go", "phonetic": "/ɡəʊ/", "meaning": "走；去", "example": "Let's <em>go</em>!", "emoji": "🏃" },
                    { "word": "birthday", "phonetic": "/ˈbɜːθdeɪ/", "meaning": "生日", "example": "Happy <em>birthday</em>!", "emoji": "🎂" },
                    { "word": "party", "phonetic": "/ˈpɑːti/", "meaning": "聚会，派对", "example": "Come to my <em>party</em>.", "emoji": "🎉" },
                    { "word": "happy", "phonetic": "/ˈhæpi/", "meaning": "高兴的", "example": "I am <em>happy</em>.", "emoji": "😊" },
                    { "word": "hand", "phonetic": "/hænd/", "meaning": "指针；手", "example": "The <em>hand</em> of the clock.", "emoji": "👆" },
                    { "word": "short", "phonetic": "/ʃɔːt/", "meaning": "短的", "example": "The <em>short</em> hand is the hour hand.", "emoji": "📐" },
                    { "word": "wake", "phonetic": "/weɪk/", "meaning": "醒来；唤醒", "example": "<em>Wake</em> up!", "emoji": "⏰" },
                    { "word": "lunch", "phonetic": "/lʌntʃ/", "meaning": "午餐", "example": "It's time for <em>lunch</em>.", "emoji": "🥪" },
                    { "word": "home", "phonetic": "/həʊm/", "meaning": "家；住宅", "example": "Let's go <em>home</em>.", "emoji": "🏠" }
                ]
            },
            "6": {
                "name": "Unit 6 星期、活动与公共场所",
                "words": [
                    { "word": "Monday", "phonetic": "/ˈmʌndeɪ/", "meaning": "星期一", "example": "I have English on <em>Monday</em>.", "emoji": "📅" },
                    { "word": "spacewoman", "phonetic": "/ˈspeɪswʊmən/", "meaning": "女航天员", "example": "She is a <em>spacewoman</em>.", "emoji": "👩‍🚀" },
                    { "word": "day", "phonetic": "/deɪ/", "meaning": "一天，一日", "example": "What <em>day</em> is it today?", "emoji": "📅" },
                    { "word": "Tuesday", "phonetic": "/ˈtjuːzdeɪ/", "meaning": "星期二", "example": "I have PE on <em>Tuesday</em>.", "emoji": "📅" },
                    { "word": "library", "phonetic": "/ˈlaɪbrəri/", "meaning": "图书馆", "example": "I go to the <em>library</em>.", "emoji": "📚" },
                    { "word": "about", "phonetic": "/əˈbaʊt/", "meaning": "关于；大约", "example": "Tell me <em>about</em> your school.", "emoji": "💬" },
                    { "word": "space", "phonetic": "/speɪs/", "meaning": "太空；空间", "example": "I want to go to <em>space</em>.", "emoji": "🚀" },
                    { "word": "when", "phonetic": "/wen/", "meaning": "什么时候；当……时候", "example": "<em>When</em> do you go to school?", "emoji": "🕐" },
                    { "word": "film", "phonetic": "/fɪlm/", "meaning": "电影", "example": "Let's see a <em>film</em>.", "emoji": "🎬" },
                    { "word": "Wednesday", "phonetic": "/ˈwenzdeɪ/", "meaning": "星期三", "example": "I have art on <em>Wednesday</em>.", "emoji": "📅" },
                    { "word": "museum", "phonetic": "/mjuˈziːəm/", "meaning": "博物馆", "example": "Let's go to the <em>museum</em>.", "emoji": "🏛️" },
                    { "word": "Thursday", "phonetic": "/ˈθɜːzdeɪ/", "meaning": "星期四", "example": "I have music on <em>Thursday</em>.", "emoji": "📅" },
                    { "word": "Friday", "phonetic": "/ˈfraɪdeɪ/", "meaning": "星期五", "example": "I like <em>Friday</em>.", "emoji": "📅" },
                    { "word": "always", "phonetic": "/ˈɔːlweɪz/", "meaning": "总是，一直", "example": "I <em>always</em> get up early.", "emoji": "🔁" },
                    { "word": "to", "phonetic": "/tuː/", "meaning": "往，向", "example": "I go <em>to</em> school.", "emoji": "➡️" },
                    { "word": "Saturday", "phonetic": "/ˈsætədeɪ/", "meaning": "星期六", "example": "I play on <em>Saturday</em>.", "emoji": "📅" },
                    { "word": "Sunday", "phonetic": "/ˈsʌndeɪ/", "meaning": "星期日", "example": "I rest on <em>Sunday</em>.", "emoji": "📅" },
                    { "word": "football", "phonetic": "/ˈfʊtbɔːl/", "meaning": "足球", "example": "I like <em>football</em>.", "emoji": "⚽" },
                    { "word": "opera", "phonetic": "/ˈɒprə/", "meaning": "歌剧", "example": "I watch an <em>opera</em>.", "emoji": "🎭" },
                    { "word": "Beijing opera", "phonetic": "/ˈpeɪdʒɪŋ ˈɒprə/", "meaning": "京剧", "example": "Let's watch <em>Beijing opera</em>.", "emoji": "🎭" },
                    { "word": "week", "phonetic": "/wiːk/", "meaning": "星期，周", "example": "There are 7 days in a <em>week</em>.", "emoji": "📅" },
                    { "word": "learn", "phonetic": "/lɜːn/", "meaning": "学习", "example": "I <em>learn</em> English.", "emoji": "📝" },
                    { "word": "also", "phonetic": "/ˈɔːlsəʊ/", "meaning": "也", "example": "I <em>also</em> like music.", "emoji": "➕" },
                    { "word": "not", "phonetic": "/nɒt/", "meaning": "不", "example": "I do <em>not</em> like rainy days.", "emoji": "❌" },
                    { "word": "sport", "phonetic": "/spɔːt/", "meaning": "体育运动", "example": "I like <em>sport</em>.", "emoji": "🏅" }
                ]
            },
            "7": {
                "name": "Unit 7 饮食与健康",
                "words": [
                    { "word": "breakfast", "phonetic": "/ˈbrekfəst/", "meaning": "早餐", "example": "I have <em>breakfast</em> at 7.", "emoji": "🍳" },
                    { "word": "noodles", "phonetic": "/ˈnuːdlz/", "meaning": "面条", "example": "I like <em>noodles</em>.", "emoji": "🍜" },
                    { "word": "bread", "phonetic": "/bred/", "meaning": "面包", "example": "I eat <em>bread</em> for breakfast.", "emoji": "🍞" },
                    { "word": "milk", "phonetic": "/mɪlk/", "meaning": "牛奶", "example": "I drink <em>milk</em>.", "emoji": "🥛" },
                    { "word": "egg", "phonetic": "/eɡ/", "meaning": "鸡蛋", "example": "I eat an <em>egg</em>.", "emoji": "🥚" },
                    { "word": "very", "phonetic": "/ˈveri/", "meaning": "非常，很……", "example": "I am <em>very</em> hungry.", "emoji": "💯" },
                    { "word": "hungry", "phonetic": "/ˈhʌŋɡri/", "meaning": "饥饿的", "example": "I am <em>hungry</em>.", "emoji": "🤤" },
                    { "word": "thirsty", "phonetic": "/ˈθɜːsti/", "meaning": "口渴的", "example": "I am <em>thirsty</em>.", "emoji": "💧" },
                    { "word": "juice", "phonetic": "/dʒuːs/", "meaning": "果汁", "example": "I like <em>juice</em>.", "emoji": "🧃" },
                    { "word": "dinner", "phonetic": "/ˈdɪnə(r)/", "meaning": "晚餐；正餐", "example": "Let's have <em>dinner</em>.", "emoji": "🍽️" },
                    { "word": "piece", "phonetic": "/piːs/", "meaning": "片；块；部分", "example": "A <em>piece</em> of cake.", "emoji": "🍰" },
                    { "word": "picnic", "phonetic": "/ˈpɪknɪk/", "meaning": "野餐", "example": "Let's have a <em>picnic</em>.", "emoji": "🧺" },
                    { "word": "food", "phonetic": "/fuːd/", "meaning": "食物", "example": "The <em>food</em> is yummy.", "emoji": "🍲" },
                    { "word": "drink", "phonetic": "/drɪŋk/", "meaning": "饮料；喝", "example": "I want a <em>drink</em>.", "emoji": "🥤" },
                    { "word": "favourite", "phonetic": "/ˈfeɪvərɪt/", "meaning": "最喜爱的", "example": "My <em>favourite</em> food is rice.", "emoji": "⭐" },
                    { "word": "hot dog", "phonetic": "/hɒt dɒɡ/", "meaning": "热狗", "example": "I like <em>hot dogs</em>.", "emoji": "🌭" },
                    { "word": "chicken", "phonetic": "/ˈtʃɪkɪn/", "meaning": "鸡肉", "example": "I like <em>chicken</em>.", "emoji": "🍗" },
                    { "word": "lovely", "phonetic": "/ˈlʌvli/", "meaning": "可爱的；令人愉快的", "example": "The kitten is <em>lovely</em>.", "emoji": "😍" },
                    { "word": "healthy", "phonetic": "/ˈhelθi/", "meaning": "健康的", "example": "Eat <em>healthy</em> food.", "emoji": "💪" },
                    { "word": "rice", "phonetic": "/raɪs/", "meaning": "大米；米饭", "example": "I eat <em>rice</em> every day.", "emoji": "🍚" },
                    { "word": "water", "phonetic": "/ˈwɔːtə(r)/", "meaning": "水", "example": "I drink <em>water</em>.", "emoji": "💧" },
                    { "word": "meat", "phonetic": "/miːt/", "meaning": "肉", "example": "I don't like <em>meat</em>.", "emoji": "🥩" },
                    { "word": "fruit", "phonetic": "/fruːt/", "meaning": "水果", "example": "I like <em>fruit</em>.", "emoji": "🍎" },
                    { "word": "candy", "phonetic": "/ˈkændi/", "meaning": "糖果", "example": "I like <em>candy</em>.", "emoji": "🍬" }
                ]
            }
        }
    },
    "BJ_4下": {
        "name": "四年级下册（北京版）",
        "grade": 4,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    { "word": "hobby", "phonetic": "/ˈhɒbi/", "meaning": "爱好", "example": "My <em>hobby</em> is reading.", "emoji": "🎯" },
                    { "word": "kind", "phonetic": "/kaɪnd/", "meaning": "种类", "example": "What <em>kind</em> of music?", "emoji": "📂" },
                    { "word": "folk", "phonetic": "/fəʊk/", "meaning": "民间的", "example": "I like <em>folk</em> music.", "emoji": "🎵" },
                    { "word": "club", "phonetic": "/klʌb/", "meaning": "俱乐部", "example": "I join the chess <em>club</em>.", "emoji": " clubhouse" },
                    { "word": "join", "phonetic": "/dʒɔɪn/", "meaning": "参加", "example": "I want to <em>join</em> the club.", "emoji": "🤝" },
                    { "word": "because", "phonetic": "/bɪˈkɒz/", "meaning": "因为", "example": "I like it <em>because</em> it's fun.", "emoji": "💡" },
                    { "word": "science", "phonetic": "/ˈsaɪəns/", "meaning": "科学", "example": "I like <em>science</em>.", "emoji": "🔬" },
                    { "word": "chess", "phonetic": "/tʃes/", "meaning": "国际象棋", "example": "I play <em>chess</em>.", "emoji": "♟️" },
                    { "word": "well", "phonetic": "/wel/", "meaning": "好", "example": "I sing <em>well</em>.", "emoji": "👍" },
                    { "word": "why", "phonetic": "/waɪ/", "meaning": "为什么", "example": "<em>Why</em> do you like it?", "emoji": "❓" },
                    { "word": "fan", "phonetic": "/fæn/", "meaning": "爱好者；迷", "example": "I'm a football <em>fan</em>.", "emoji": "🙌" },
                    { "word": "travel", "phonetic": "/ˈtrævl/", "meaning": "旅行", "example": "I like to <em>travel</em>.", "emoji": "✈️" },
                    { "word": "study", "phonetic": "/ˈstʌdi/", "meaning": "学习；研究", "example": "I <em>study</em> English.", "emoji": "📖" },
                    { "word": "face", "phonetic": "/feɪs/", "meaning": "脸", "example": "Touch your <em>face</em>.", "emoji": "😊" },
                    { "word": "feeling", "phonetic": "/ˈfiːlɪŋ/", "meaning": "情绪；感受", "example": "What's your <em>feeling</em>?", "emoji": "💭" }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    { "word": "throw", "phonetic": "/θrəʊ/", "meaning": "扔；丢弃", "example": "Don't <em>throw</em> things.", "emoji": "🤾" },
                    { "word": "thing", "phonetic": "/θɪŋ/", "meaning": "物品；事情", "example": "What <em>thing</em> is this?", "emoji": "📦" },
                    { "word": "out", "phonetic": "/aʊt/", "meaning": "向外；外面", "example": "Go <em>out</em> and play.", "emoji": "🚪" },
                    { "word": "safe", "phonetic": "/seɪf/", "meaning": "安全的", "example": "Be <em>safe</em>!", "emoji": "🛡️" },
                    { "word": "down", "phonetic": "/daʊn/", "meaning": "向下", "example": "Sit <em>down</em>.", "emoji": "⬇️" },
                    { "word": "stair", "phonetic": "/steə(r)/", "meaning": "楼梯", "example": "Don't run on the <em>stairs</em>.", "emoji": "🪜" },
                    { "word": "skate", "phonetic": "/skeɪt/", "meaning": "滑冰", "example": "I like to <em>skate</em>.", "emoji": "⛸️" },
                    { "word": "fall", "phonetic": "/fɔːl/", "meaning": "落下；摔倒", "example": "Don't <em>fall</em>!", "emoji": "💥" },
                    { "word": "March", "phonetic": "/mɑːtʃ/", "meaning": "三月", "example": "Tree Planting Day is in <em>March</em>.", "emoji": "📅" },
                    { "word": "thin", "phonetic": "/θɪn/", "meaning": "薄的；细的", "example": "The ice is <em>thin</em>.", "emoji": "📄" },
                    { "word": "dangerous", "phonetic": "/ˈdeɪndʒərəs/", "meaning": "危险的", "example": "It's <em>dangerous</em>!", "emoji": "⚠️" },
                    { "word": "board", "phonetic": "/bɔːd/", "meaning": "木板；告示牌", "example": "Look at the <em>board</em>.", "emoji": "📋" },
                    { "word": "lake", "phonetic": "/leɪk/", "meaning": "湖", "example": "The <em>lake</em> is beautiful.", "emoji": "🏞️" },
                    { "word": "careful", "phonetic": "/ˈkeəfl/", "meaning": "小心的", "example": "Be <em>careful</em>!", "emoji": "⚠️" },
                    { "word": "push", "phonetic": "/pʊʃ/", "meaning": "推", "example": "Don't <em>push</em>!", "emoji": "👉" },
                    { "word": "crowd", "phonetic": "/kraʊd/", "meaning": "人群", "example": "Don't go into the <em>crowd</em>.", "emoji": "👥" },
                    { "word": "slowly", "phonetic": "/ˈsləʊli/", "meaning": "缓慢地", "example": "Walk <em>slowly</em>.", "emoji": "🐢" },
                    { "word": "fast", "phonetic": "/fɑːst/", "meaning": "快速地", "example": "Don't run too <em>fast</em>.", "emoji": "⚡" },
                    { "word": "street", "phonetic": "/striːt/", "meaning": "街道", "example": "Cross the <em>street</em> carefully.", "emoji": "🛣️" },
                    { "word": "light", "phonetic": "/laɪt/", "meaning": "灯；光线", "example": "Wait for the green <em>light</em>.", "emoji": "🚦" },
                    { "word": "again", "phonetic": "/əˈɡen/", "meaning": "再次", "example": "Try <em>again</em>!", "emoji": "🔄" }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    { "word": "fun", "phonetic": "/fʌn/", "meaning": "有趣的", "example": "The game is <em>fun</em>.", "emoji": "🎉" },
                    { "word": "game", "phonetic": "/ɡeɪm/", "meaning": "游戏；比赛", "example": "Let's play a <em>game</em>.", "emoji": "🎮" },
                    { "word": "be good at", "phonetic": "/biː ɡʊd æt/", "meaning": "擅长", "example": "I <em>am good at</em> swimming.", "emoji": "💪" },
                    { "word": "seventy", "phonetic": "/ˈsevnti/", "meaning": "七十", "example": "I can count to <em>seventy</em>.", "emoji": "🔢" },
                    { "word": "eighty", "phonetic": "/ˈeɪti/", "meaning": "八十", "example": "There are <em>eighty</em> students.", "emoji": "🔢" },
                    { "word": "ninety", "phonetic": "/ˈnaɪnti/", "meaning": "九十", "example": "Grandpa is <em>ninety</em>.", "emoji": "🔢" },
                    { "word": "tired", "phonetic": "/ˈtaɪəd/", "meaning": "疲惫的", "example": "I am <em>tired</em>.", "emoji": "😮‍💨" },
                    { "word": "win", "phonetic": "/wɪn/", "meaning": "获胜", "example": "I hope to <em>win</em>!", "emoji": "🏆" },
                    { "word": "hundred", "phonetic": "/ˈhʌndrəd/", "meaning": "一百", "example": "I can count to a <em>hundred</em>.", "emoji": "💯" },
                    { "word": "kung fu", "phonetic": "/kʌŋ fuː/", "meaning": "功夫", "example": "I like <em>kung fu</em>.", "emoji": "🥋" },
                    { "word": "leg", "phonetic": "/leɡ/", "meaning": "腿", "example": "My <em>leg</em> hurts.", "emoji": "🦵" },
                    { "word": "hurt", "phonetic": "/hɜːt/", "meaning": "受伤", "example": "I <em>hurt</em> my leg.", "emoji": "🤕" },
                    { "word": "badly", "phonetic": "/ˈbædli/", "meaning": "严重地", "example": "He was <em>badly</em> hurt.", "emoji": "😰" },
                    { "word": "king", "phonetic": "/kɪŋ/", "meaning": "国王", "example": "The <em>king</em> is kind.", "emoji": "👑" },
                    { "word": "visit", "phonetic": "/ˈvɪzɪt/", "meaning": "拜访；参观", "example": "I <em>visit</em> the Great Wall.", "emoji": "🏛️" },
                    { "word": "the Great Wall", "phonetic": "/ðə ɡreɪt wɔːl/", "meaning": "长城", "example": "We visit <em>the Great Wall</em>.", "emoji": "🧱" },
                    { "word": "hero", "phonetic": "/ˈhɪərəʊ/", "meaning": "英雄", "example": "He is a <em>hero</em>.", "emoji": "🦸" },
                    { "word": "him", "phonetic": "/hɪm/", "meaning": "他（宾格）", "example": "I help <em>him</em>.", "emoji": "👦" }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    { "word": "Labour Day", "phonetic": "/ˈleɪbə deɪ/", "meaning": "劳动节", "example": "<em>Labour Day</em> is in May.", "emoji": "🛠️" },
                    { "word": "holiday", "phonetic": "/ˈhɒlədeɪ/", "meaning": "假期；节日", "example": "I like <em>holidays</em>.", "emoji": "🏖️" },
                    { "word": "May", "phonetic": "/meɪ/", "meaning": "五月", "example": "<em>May</em> is the fifth month.", "emoji": "📅" },
                    { "word": "chore", "phonetic": "/tʃɔː(r)/", "meaning": "家务", "example": "I do <em>chores</em> at home.", "emoji": "🧹" },
                    { "word": "the USA", "phonetic": "/ðə ˌjuː es ˈeɪ/", "meaning": "美国", "example": "He is from <em>the USA</em>.", "emoji": "🇺🇸" },
                    { "word": "September", "phonetic": "/sepˈtembə(r)/", "meaning": "九月", "example": "School starts in <em>September</em>.", "emoji": "📅" },
                    { "word": "June", "phonetic": "/dʒuːn/", "meaning": "六月", "example": "Children's Day is in <em>June</em>.", "emoji": "📅" },
                    { "word": "November", "phonetic": "/nəʊˈvembə(r)/", "meaning": "十一月", "example": "<em>November</em> is cold.", "emoji": "📅" },
                    { "word": "Canada", "phonetic": "/ˈkænədə/", "meaning": "加拿大", "example": "She is from <em>Canada</em>.", "emoji": "🇨🇦" },
                    { "word": "often", "phonetic": "/ˈɒfn/", "meaning": "经常", "example": "I <em>often</em> go to the park.", "emoji": "🔄" },
                    { "word": "cinema", "phonetic": "/ˈsɪnəmə/", "meaning": "电影院", "example": "Let's go to the <em>cinema</em>.", "emoji": "🎬" },
                    { "word": "zoo", "phonetic": "/zuː/", "meaning": "动物园", "example": "Let's go to the <em>zoo</em>.", "emoji": "🦁" },
                    { "word": "National Day", "phonetic": "/ˈnæʃnəl deɪ/", "meaning": "国庆节", "example": "<em>National Day</em> is in October.", "emoji": "🇨🇳" },
                    { "word": "October", "phonetic": "/ɒkˈtəʊbə(r)/", "meaning": "十月", "example": "<em>October</em> is my favourite month.", "emoji": "📅" },
                    { "word": "flag", "phonetic": "/flæɡ/", "meaning": "旗；旗帜", "example": "Look at the <em>flag</em>.", "emoji": "🚩" },
                    { "word": "watch", "phonetic": "/wɒtʃ/", "meaning": "看，观看", "example": "I <em>watch</em> TV.", "emoji": "👀" },
                    { "word": "early", "phonetic": "/ˈɜːli/", "meaning": "早的；早期的", "example": "I get up <em>early</em>.", "emoji": "🌅" },
                    { "word": "special", "phonetic": "/ˈspeʃl/", "meaning": "特别的", "example": "It's a <em>special</em> day.", "emoji": "⭐" },
                    { "word": "Water-Splashing Festival", "phonetic": "/ˈwɔːtə splæʃɪŋ ˈfestɪvl/", "meaning": "泼水节", "example": "The <em>Water-Splashing Festival</em> is fun.", "emoji": "💦" },
                    { "word": "April", "phonetic": "/ˈeɪprəl/", "meaning": "四月", "example": "Easter is in <em>April</em>.", "emoji": "📅" },
                    { "word": "Inner Mongolia", "phonetic": "/ˈɪnə mɒŋˈɡəʊliə/", "meaning": "内蒙古", "example": "I visit <em>Inner Mongolia</em>.", "emoji": "🏇" },
                    { "word": "Naadam", "phonetic": "/ˈnɑːdæm/", "meaning": "那达慕", "example": "<em>Naadam</em> is a festival.", "emoji": "🎪" },
                    { "word": "July", "phonetic": "/dʒuˈlaɪ/", "meaning": "七月", "example": "<em>July</em> is hot.", "emoji": "📅" },
                    { "word": "August", "phonetic": "/ˈɔːɡəst/", "meaning": "八月", "example": "<em>August</em> is a summer month.", "emoji": "📅" }
                ]
            },
            "6": {
                "name": "Unit 6",
                "words": [
                    { "word": "grandma", "phonetic": "/ˈɡrænmɑː/", "meaning": "奶奶；（外）祖母", "example": "I visit my <em>grandma</em>.", "emoji": "👵" },
                    { "word": "dear", "phonetic": "/dɪə(r)/", "meaning": "亲爱的", "example": "Oh <em>dear</em>!", "emoji": "💝" },
                    { "word": "TV", "phonetic": "/ˌtiː ˈviː/", "meaning": "电视", "example": "I watch <em>TV</em>.", "emoji": "📺" },
                    { "word": "grandpa", "phonetic": "/ˈɡrænpɑː/", "meaning": "爷爷；（外）祖父", "example": "My <em>grandpa</em> is kind.", "emoji": "👴" },
                    { "word": "plant", "phonetic": "/plɑːnt/", "meaning": "植物；种植", "example": "I <em>plant</em> flowers.", "emoji": "🌱" },
                    { "word": "kitchen", "phonetic": "/ˈkɪtʃɪn/", "meaning": "厨房", "example": "Mom is in the <em>kitchen</em>.", "emoji": "🍳" },
                    { "word": "weekend", "phonetic": "/ˌwiːkˈend/", "meaning": "周末", "example": "I play on the <em>weekend</em>.", "emoji": "📅" },
                    { "word": "people", "phonetic": "/ˈpiːpl/", "meaning": "人们；人", "example": "There are many <em>people</em>.", "emoji": "👥" },
                    { "word": "they", "phonetic": "/ðeɪ/", "meaning": "他（她，它）们", "example": "<em>They</em> are my friends.", "emoji": "👥" },
                    { "word": "sky", "phonetic": "/skaɪ/", "meaning": "天空；天", "example": "Look at the <em>sky</em>.", "emoji": "🌤️" },
                    { "word": "fly", "phonetic": "/flaɪ/", "meaning": "飞；飞行", "example": "Birds can <em>fly</em>.", "emoji": "🕊️" },
                    { "word": "put", "phonetic": "/pʊt/", "meaning": "放；安置", "example": "<em>Put</em> it on the table.", "emoji": "📥" },
                    { "word": "role", "phonetic": "/rəʊl/", "meaning": "角色；作用", "example": "He plays a <em>role</em>.", "emoji": "🎭" },
                    { "word": "paint", "phonetic": "/peɪnt/", "meaning": "把……描绘成", "example": "I <em>paint</em> a picture.", "emoji": "🎨" },
                    { "word": "funny", "phonetic": "/ˈfʌni/", "meaning": "滑稽的；好笑的", "example": "The clown is <em>funny</em>.", "emoji": "😂" },
                    { "word": "brave", "phonetic": "/breɪv/", "meaning": "勇敢的", "example": "He is <em>brave</em>.", "emoji": "🦁" },
                    { "word": "enjoy", "phonetic": "/ɪnˈdʒɔɪ/", "meaning": "喜爱；享受", "example": "I <em>enjoy</em> the weekend.", "emoji": "😊" },
                    { "word": "world", "phonetic": "/wɜːld/", "meaning": "世界", "example": "The <em>world</em> is beautiful.", "emoji": "🌍" },
                    { "word": "woman", "phonetic": "/ˈwʊmən/", "meaning": "成年女子", "example": "The <em>woman</em> is kind.", "emoji": "👩" },
                    { "word": "tea", "phonetic": "/tiː/", "meaning": "茶；茶叶", "example": "I like <em>tea</em>.", "emoji": "🍵" },
                    { "word": "rabbit", "phonetic": "/ˈræbɪt/", "meaning": "兔子", "example": "The <em>rabbit</em> is cute.", "emoji": "🐰" }
                ]
            },
            "7": {
                "name": "Unit 7",
                "words": [
                    { "word": "glad", "phonetic": "/ɡlæd/", "meaning": "高兴的，满意的", "example": "I'm <em>glad</em> to see you.", "emoji": "😊" },
                    { "word": "need", "phonetic": "/niːd/", "meaning": "需要", "example": "I <em>need</em> some water.", "emoji": "🙏" },
                    { "word": "buy", "phonetic": "/baɪ/", "meaning": "买，购买", "example": "I want to <em>buy</em> a book.", "emoji": "🛒" },
                    { "word": "tell", "phonetic": "/tel/", "meaning": "告诉；讲述", "example": "<em>Tell</em> me the way.", "emoji": "🗣️" },
                    { "word": "way", "phonetic": "/weɪ/", "meaning": "路，道路；方法", "example": "Which <em>way</em> is the school?", "emoji": "🗺️" },
                    { "word": "shop", "phonetic": "/ʃɒp/", "meaning": "商店", "example": "I go to the <em>shop</em>.", "emoji": "🏪" },
                    { "word": "near", "phonetic": "/nɪə(r)/", "meaning": "在……附近", "example": "The school is <em>near</em> my home.", "emoji": "📍" },
                    { "word": "front", "phonetic": "/frʌnt/", "meaning": "前面的；前面", "example": "Stand in <em>front</em>.", "emoji": "⬆️" },
                    { "word": "in front of", "phonetic": "/ɪn frʌnt ɒv/", "meaning": "在……前面", "example": "The tree is <em>in front of</em> the house.", "emoji": "🏠" },
                    { "word": "building", "phonetic": "/ˈbɪldɪŋ/", "meaning": "房子", "example": "The <em>building</em> is tall.", "emoji": "🏢" },
                    { "word": "far", "phonetic": "/fɑː(r)/", "meaning": "较远的", "example": "The school is <em>far</em>.", "emoji": "📏" },
                    { "word": "robot", "phonetic": "/ˈrəʊbɒt/", "meaning": "机器人", "example": "The <em>robot</em> is smart.", "emoji": "🤖" },
                    { "word": "know", "phonetic": "/nəʊ/", "meaning": "知道；认识到", "example": "I <em>know</em> the way.", "emoji": "💡" },
                    { "word": "third", "phonetic": "/θɜːd/", "meaning": "第三；第三的", "example": "It's on the <em>third</em> floor.", "emoji": "3️⃣" },
                    { "word": "shelf", "phonetic": "/ʃelf/", "meaning": "架子", "example": "Put it on the <em>shelf</em>.", "emoji": "📚" },
                    { "word": "letter", "phonetic": "/ˈletə(r)/", "meaning": "字母；信", "example": "Write a <em>letter</em>.", "emoji": "✉️" },
                    { "word": "second", "phonetic": "/ˈsekənd/", "meaning": "第二；第二的", "example": "It's on the <em>second</em> floor.", "emoji": "2️⃣" },
                    { "word": "beside", "phonetic": "/bɪˈsaɪd/", "meaning": "在……旁边", "example": "Sit <em>beside</em> me.", "emoji": "↔️" },
                    { "word": "playground", "phonetic": "/ˈpleɪɡraʊnd/", "meaning": "操场；活动场所", "example": "We play in the <em>playground</em>.", "emoji": "游乐" },
                    { "word": "centre", "phonetic": "/ˈsentə(r)/", "meaning": "中心；中央", "example": "The <em>centre</em> of the city.", "emoji": "🎯" },
                    { "word": "smart", "phonetic": "/smɑːt/", "meaning": "智能的；聪明的", "example": "She is <em>smart</em>.", "emoji": "🧠" },
                    { "word": "community", "phonetic": "/kəˈmjuːnəti/", "meaning": "社区", "example": "I live in a nice <em>community</em>.", "emoji": "🏘️" },
                    { "word": "themselves", "phonetic": "/ðəmˈselvz/", "meaning": "他（她，它）们自己", "example": "They did it <em>themselves</em>.", "emoji": "👥" },
                    { "word": "dark", "phonetic": "/dɑːk/", "meaning": "黑暗的", "example": "It's <em>dark</em> outside.", "emoji": "🌑" },
                    { "word": "toilet", "phonetic": "/ˈtɔɪlət/", "meaning": "马桶；卫生间", "example": "Where is the <em>toilet</em>?", "emoji": "🚻" },
                    { "word": "between", "phonetic": "/bɪˈtwiːn/", "meaning": "在……之间", "example": "The park is <em>between</em> the school and the shop.", "emoji": "↔️" },
                    { "word": "supermarket", "phonetic": "/ˈsuːpəmɑːkɪt/", "meaning": "超市", "example": "I go to the <em>supermarket</em>.", "emoji": "🏬" },
                    { "word": "quickly", "phonetic": "/ˈkwɪkli/", "meaning": "快速地", "example": "Run <em>quickly</em>!", "emoji": "⚡" }
                ]
            }
        }
    },
    "BJ_5下": {
        "name": "五年级下册（北京版）",
        "grade": 5,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    { "word": "mess", "phonetic": "/mes/", "meaning": "杂乱，凌乱", "example": "What a <em>mess</em>!", "emoji": "🫣" },
                    { "word": "yesterday", "phonetic": "/ˈjestədeɪ/", "meaning": "昨天", "example": "I was at home <em>yesterday</em>.", "emoji": "📅" },
                    { "word": "whose", "phonetic": "/huːz/", "meaning": "谁的", "example": "<em>Whose</em> bag is this?", "emoji": "❓" },
                    { "word": "living room", "phonetic": "/ˈlɪvɪŋ ruːm/", "meaning": "客厅；起居室", "example": "I'm in the <em>living room</em>.", "emoji": "🛋️" },
                    { "word": "happen", "phonetic": "/ˈhæpən/", "meaning": "发生", "example": "What <em>happened</em>?", "emoji": "❗" },
                    { "word": "wet", "phonetic": "/wet/", "meaning": "弄湿；湿的", "example": "The floor is <em>wet</em>.", "emoji": "💧" },
                    { "word": "forget", "phonetic": "/fəˈɡet/", "meaning": "遗忘；忘记", "example": "Don't <em>forget</em> your homework.", "emoji": "🤔" },
                    { "word": "deal with", "phonetic": "/diːl wɪð/", "meaning": "处理", "example": "Let's <em>deal with</em> the problem.", "emoji": "🔧" },
                    { "word": "bring", "phonetic": "/brɪŋ/", "meaning": "拿来；带到", "example": "<em>Bring</em> your book.", "emoji": "🤲" },
                    { "word": "back", "phonetic": "/bæk/", "meaning": "往回；后面；背部", "example": "Come <em>back</em> soon.", "emoji": "⬅️" },
                    { "word": "list", "phonetic": "/lɪst/", "meaning": "列表，清单", "example": "Make a <em>list</em>.", "emoji": "📋" },
                    { "word": "check", "phonetic": "/tʃek/", "meaning": "检查，核对", "example": "<em>Check</em> your answers.", "emoji": "✅" },
                    { "word": "method", "phonetic": "/ˈmeθəd/", "meaning": "方法", "example": "What's a good <em>method</em>?", "emoji": "💡" },
                    { "word": "word", "phonetic": "/wɜːd/", "meaning": "词汇，单词", "example": "Read the <em>words</em>.", "emoji": "🔤" },
                    { "word": "Ms", "phonetic": "/mɪz/", "meaning": "女士", "example": "<em>Ms</em> Li is our teacher.", "emoji": "👩" },
                    { "word": "card", "phonetic": "/kɑːd/", "meaning": "卡，卡片", "example": "Make a <em>card</em>.", "emoji": "🃏" },
                    { "word": "go over", "phonetic": "/ɡəʊ ˈəʊvə(r)/", "meaning": "温习；重复", "example": "Let's <em>go over</em> the lesson.", "emoji": "📖" },
                    { "word": "free", "phonetic": "/friː/", "meaning": "自由的；免费的", "example": "Are you <em>free</em> tomorrow?", "emoji": "🆓" },
                    { "word": "song", "phonetic": "/sɒŋ/", "meaning": "歌，歌曲", "example": "Sing a <em>song</em>.", "emoji": "🎵" },
                    { "word": "aloud", "phonetic": "/əˈlaʊd/", "meaning": "大声地", "example": "Read <em>aloud</em>.", "emoji": "🗣️" },
                    { "word": "solve", "phonetic": "/sɒlv/", "meaning": "解决；处理", "example": "I can <em>solve</em> the problem.", "emoji": "💡" },
                    { "word": "break", "phonetic": "/breɪk/", "meaning": "打破，打碎；损坏", "example": "Don't <em>break</em> the glass.", "emoji": "💔" },
                    { "word": "afraid", "phonetic": "/əˈfreɪd/", "meaning": "害怕的；担忧的", "example": "Don't be <em>afraid</em>.", "emoji": "😨" },
                    { "word": "close", "phonetic": "/kləʊz/", "meaning": "关闭；合上", "example": "<em>Close</em> the window.", "emoji": "🚪" },
                    { "word": "window", "phonetic": "/ˈwɪndəʊ/", "meaning": "窗户", "example": "Open the <em>window</em>.", "emoji": "🪟" },
                    { "word": "away", "phonetic": "/əˈweɪ/", "meaning": "不在，离开", "example": "He is <em>away</em> today.", "emoji": "🚶" },
                    { "word": "put up", "phonetic": "/pʊt ʌp/", "meaning": "张贴", "example": "<em>Put up</em> the picture.", "emoji": "📌" },
                    { "word": "notice", "phonetic": "/ˈnəʊtɪs/", "meaning": "布告；通知", "example": "Read the <em>notice</em>.", "emoji": "📢" },
                    { "word": "picture", "phonetic": "/ˈpɪktʃə(r)/", "meaning": "照片，图像", "example": "Draw a <em>picture</em>.", "emoji": "🖼️" },
                    { "word": "phone", "phonetic": "/fəʊn/", "meaning": "电话", "example": "Answer the <em>phone</em>.", "emoji": "📞" }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    { "word": "part", "phonetic": "/pɑːt/", "meaning": "部分；器官，部位", "example": "What <em>part</em> is this?", "emoji": "🧩" },
                    { "word": "grass", "phonetic": "/ɡrɑːs/", "meaning": "草，小草；草地", "example": "Don't walk on the <em>grass</em>.", "emoji": "🌿" },
                    { "word": "root", "phonetic": "/ruːt/", "meaning": "根，根茎", "example": "The <em>root</em> is long.", "emoji": "🌱" },
                    { "word": "stem", "phonetic": "/stem/", "meaning": "茎，干", "example": "The <em>stem</em> is green.", "emoji": "🌿" },
                    { "word": "seed", "phonetic": "/siːd/", "meaning": "种子，籽", "example": "Plant the <em>seed</em>.", "emoji": "🌰" },
                    { "word": "ground", "phonetic": "/ɡraʊnd/", "meaning": "地，地面；土地", "example": "Sit on the <em>ground</em>.", "emoji": "🌍" },
                    { "word": "take in", "phonetic": "/teɪk ɪn/", "meaning": "吸收", "example": "Plants <em>take in</em> water.", "emoji": "💧" },
                    { "word": "soil", "phonetic": "/sɔɪl/", "meaning": "泥土，土壤", "example": "Plants grow in <em>soil</em>.", "emoji": "🪴" },
                    { "word": "carry", "phonetic": "/ˈkæri/", "meaning": "运送；传输", "example": "The stem <em>carries</em> water.", "emoji": "🚚" },
                    { "word": "protect", "phonetic": "/prəˈtekt/", "meaning": "保护", "example": "We <em>protect</em> the plants.", "emoji": "🛡️" },
                    { "word": "foot", "phonetic": "/fʊt/", "meaning": "脚，足", "example": "I hurt my <em>foot</em>.", "emoji": "🦶" },
                    { "word": "wind", "phonetic": "/wɪnd/", "meaning": "风", "example": "The <em>wind</em> is strong.", "emoji": "💨" },
                    { "word": "take ... away", "phonetic": "/teɪk əˈweɪ/", "meaning": "把……带走", "example": "Don't <em>take</em> it <em>away</em>.", "emoji": "🚫" },
                    { "word": "stick", "phonetic": "/stɪk/", "meaning": "粘，贴；棍状物", "example": "<em>Stick</em> the paper here.", "emoji": "📎" },
                    { "word": "thick", "phonetic": "/θɪk/", "meaning": "厚的；粗的", "example": "The book is <em>thick</em>.", "emoji": "📚" },
                    { "word": "growth", "phonetic": "/ɡrəʊθ/", "meaning": "成长；生长", "example": "Plants need <em>growth</em>.", "emoji": "📈" },
                    { "word": "bean", "phonetic": "/biːn/", "meaning": "豆，菜豆", "example": "I like <em>beans</em>.", "emoji": "🫘" },
                    { "word": "begin", "phonetic": "/bɪˈɡɪn/", "meaning": "开始，开端", "example": "Let's <em>begin</em>.", "emoji": "▶️" },
                    { "word": "sunlight", "phonetic": "/ˈsʌnlaɪt/", "meaning": "阳光，日光", "example": "Plants need <em>sunlight</em>.", "emoji": "☀️" },
                    { "word": "little by little", "phonetic": "/ˈlɪtl baɪ ˈlɪtl/", "meaning": "逐渐地", "example": "It grows <em>little by little</em>.", "emoji": "🌱" },
                    { "word": "pod", "phonetic": "/pɒd/", "meaning": "豆荚", "example": "The <em>pod</em> is green.", "emoji": "🫛" },
                    { "word": "come out", "phonetic": "/kʌm aʊt/", "meaning": "出来，出现", "example": "The sun <em>comes out</em>.", "emoji": "🌅" }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    { "word": "job", "phonetic": "/dʒɒb/", "meaning": "工作", "example": "What's your <em>job</em>?", "emoji": "💼" },
                    { "word": "cabbage", "phonetic": "/ˈkæbɪdʒ/", "meaning": "卷心菜", "example": "I like <em>cabbage</em>.", "emoji": "🥬" },
                    { "word": "come from", "phonetic": "/kʌm frɒm/", "meaning": "来自", "example": "Where do you <em>come from</em>?", "emoji": "📍" },
                    { "word": "give", "phonetic": "/ɡɪv/", "meaning": "提供；给予", "example": "<em>Give</em> me a pen.", "emoji": "🤲" },
                    { "word": "else", "phonetic": "/els/", "meaning": "其他的；此外", "example": "What <em>else</em> do you want?", "emoji": "➡️" },
                    { "word": "Mother's Day", "phonetic": "/ˈmʌðəz deɪ/", "meaning": "母亲节", "example": "Happy <em>Mother's Day</em>!", "emoji": "👩‍👧" },
                    { "word": "Teachers' Day", "phonetic": "/ˈtiːtʃəz deɪ/", "meaning": "教师节", "example": "Happy <em>Teachers' Day</em>!", "emoji": "👩‍🏫" },
                    { "word": "pear", "phonetic": "/peə(r)/", "meaning": "梨", "example": "I like <em>pears</em>.", "emoji": "🍐" },
                    { "word": "peach", "phonetic": "/piːtʃ/", "meaning": "桃子", "example": "I like <em>peaches</em>.", "emoji": "🍑" },
                    { "word": "wood", "phonetic": "/wʊd/", "meaning": "木材，木料", "example": "The desk is made of <em>wood</em>.", "emoji": "🪵" },
                    { "word": "paper", "phonetic": "/ˈpeɪpə(r)/", "meaning": "纸", "example": "Give me some <em>paper</em>.", "emoji": "📄" },
                    { "word": "table", "phonetic": "/ˈteɪbl/", "meaning": "桌子，餐桌", "example": "Put it on the <em>table</em>.", "emoji": "🍽️" },
                    { "word": "chair", "phonetic": "/tʃeə(r)/", "meaning": "椅子", "example": "Sit on the <em>chair</em>.", "emoji": "🪑" },
                    { "word": "house", "phonetic": "/haʊs/", "meaning": "房子，住宅", "example": "This is my <em>house</em>.", "emoji": "🏠" },
                    { "word": "wash away", "phonetic": "/wɒʃ əˈweɪ/", "meaning": "冲走", "example": "The rain <em>washes away</em> the soil.", "emoji": "🌊" },
                    { "word": "in short", "phonetic": "/ɪn ʃɔːt/", "meaning": "简而言之", "example": "<em>In short</em>, we need to protect plants.", "emoji": "📝" },
                    { "word": "medicine", "phonetic": "/ˈmedsn/", "meaning": "药，药品", "example": "Take the <em>medicine</em>.", "emoji": "💊" },
                    { "word": "balance", "phonetic": "/ˈbæləns/", "meaning": "平衡", "example": "Keep the <em>balance</em>.", "emoji": "⚖️" },
                    { "word": "recycle", "phonetic": "/ˌriːˈsaɪkl/", "meaning": "回收利用", "example": "We <em>recycle</em> paper.", "emoji": "♻️" },
                    { "word": "print", "phonetic": "/prɪnt/", "meaning": "打印；印刷", "example": "<em>Print</em> the paper.", "emoji": "🖨️" },
                    { "word": "step on", "phonetic": "/step ɒn/", "meaning": "踩在……上", "example": "Don't <em>step on</em> the grass.", "emoji": "🦶" }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    { "word": "go shopping", "phonetic": "/ɡəʊ ˈʃɒpɪŋ/", "meaning": "去购物", "example": "I <em>go shopping</em> on weekends.", "emoji": "🛍️" },
                    { "word": "toy", "phonetic": "/tɔɪ/", "meaning": "玩具", "example": "I like this <em>toy</em>.", "emoji": "🧸" },
                    { "word": "quite a few", "phonetic": "/kwaɪt ə fjuː/", "meaning": "不少，很多", "example": "There are <em>quite a few</em> people.", "emoji": "📦" },
                    { "word": "go well with", "phonetic": "/ɡəʊ wel wɪð/", "meaning": "跟……搭配得好", "example": "This <em>goes well with</em> that.", "emoji": "👔" },
                    { "word": "try ... on", "phonetic": "/traɪ ɒn/", "meaning": "试一试", "example": "<em>Try</em> it <em>on</em>.", "emoji": "👗" },
                    { "word": "pair", "phonetic": "/peə(r)/", "meaning": "一双，一对", "example": "A <em>pair</em> of shoes.", "emoji": "👟" },
                    { "word": "shoe", "phonetic": "/ʃuː/", "meaning": "鞋子", "example": "Put on your <em>shoes</em>.", "emoji": "👟" },
                    { "word": "size", "phonetic": "/saɪz/", "meaning": "大小，尺码", "example": "What <em>size</em> do you need?", "emoji": "📏" },
                    { "word": "comfortable", "phonetic": "/ˈkʌmftəbl/", "meaning": "舒适的", "example": "The shoes are <em>comfortable</em>.", "emoji": "😌" },
                    { "word": "off", "phonetic": "/ɒf/", "meaning": "减价；关掉", "example": "50% <em>off</em>!", "emoji": "🏷️" },
                    { "word": "flea market", "phonetic": "/fliː ˈmɑːkɪt/", "meaning": "跳蚤市场", "example": "Let's go to the <em>flea market</em>.", "emoji": "🏪" },
                    { "word": "sell", "phonetic": "/sel/", "meaning": "卖，出售", "example": "I <em>sell</em> old toys.", "emoji": "💰" },
                    { "word": "ago", "phonetic": "/əˈɡəʊ/", "meaning": "之前，以前", "example": "I bought it a week <em>ago</em>.", "emoji": "⏪" },
                    { "word": "white", "phonetic": "/waɪt/", "meaning": "白色；白色的", "example": "I like <em>white</em> shoes.", "emoji": "⚪" },
                    { "word": "shape", "phonetic": "/ʃeɪp/", "meaning": "形状，外形", "example": "What <em>shape</em> is it?", "emoji": "🔷" },
                    { "word": "online", "phonetic": "/ˈɒnlaɪn/", "meaning": "网上的；在网上", "example": "I buy things <em>online</em>.", "emoji": "🌐" },
                    { "word": "choose", "phonetic": "/tʃuːz/", "meaning": "选择", "example": "<em>Choose</em> your favourite.", "emoji": "👆" },
                    { "word": "app", "phonetic": "/æp/", "meaning": "应用程序", "example": "Use this <em>app</em>.", "emoji": "📱" },
                    { "word": "goods", "phonetic": "/ɡʊdz/", "meaning": "货物；商品", "example": "The <em>goods</em> are nice.", "emoji": "📦" },
                    { "word": "decide", "phonetic": "/dɪˈsaɪd/", "meaning": "确定；选定", "example": "I <em>decide</em> to buy this.", "emoji": "✅" },
                    { "word": "address", "phonetic": "/əˈdres/", "meaning": "地址", "example": "What's your <em>address</em>?", "emoji": "📍" },
                    { "word": "pay", "phonetic": "/peɪ/", "meaning": "付款；偿还", "example": "I <em>pay</em> for the book.", "emoji": "💳" }
                ]
            },
            "6": {
                "name": "Unit 6",
                "words": [
                    { "word": "worker", "phonetic": "/ˈwɜːkə(r)/", "meaning": "工人；员工", "example": "My dad is a <em>worker</em>.", "emoji": "👷" },
                    { "word": "pilot", "phonetic": "/ˈpaɪlət/", "meaning": "飞行员", "example": "He is a <em>pilot</em>.", "emoji": "✈️" },
                    { "word": "astronaut", "phonetic": "/ˈæstrənɔːt/", "meaning": "宇航员；航天员", "example": "She is an <em>astronaut</em>.", "emoji": "👨‍🚀" },
                    { "word": "be interested in", "phonetic": "/biː ˈɪntrəstɪd ɪn/", "meaning": "对……感兴趣", "example": "I <em>am interested in</em> science.", "emoji": "🌟" },
                    { "word": "rocket", "phonetic": "/ˈrɒkɪt/", "meaning": "火箭", "example": "The <em>rocket</em> flies fast.", "emoji": "🚀" },
                    { "word": "launch", "phonetic": "/lɔːntʃ/", "meaning": "发射", "example": "They <em>launch</em> the rocket.", "emoji": "🚀" },
                    { "word": "spaceship", "phonetic": "/ˈspeɪsʃɪp/", "meaning": "宇宙飞船", "example": "The <em>spaceship</em> is big.", "emoji": "🛸" },
                    { "word": "research", "phonetic": "/rɪˈsɜːtʃ/", "meaning": "研究；做研究", "example": "He does <em>research</em>.", "emoji": "🔬" },
                    { "word": "writer", "phonetic": "/ˈraɪtə(r)/", "meaning": "作家", "example": "She is a <em>writer</em>.", "emoji": "✍️" },
                    { "word": "future", "phonetic": "/ˈfjuːtʃə(r)/", "meaning": "未来，将来", "example": "I want to be a teacher in the <em>future</em>.", "emoji": "🔮" },
                    { "word": "sick", "phonetic": "/sɪk/", "meaning": "生病的", "example": "He is <em>sick</em>.", "emoji": "🤒" },
                    { "word": "born", "phonetic": "/bɔːn/", "meaning": "出生；天生的", "example": "I was <em>born</em> in Beijing.", "emoji": "👶" },
                    { "word": "fall over", "phonetic": "/fɔːl ˈəʊvə(r)/", "meaning": "跌倒", "example": "Don't <em>fall over</em>.", "emoji": "💥" },
                    { "word": "from then on", "phonetic": "/frɒm ðen ɒn/", "meaning": "从那时起", "example": "<em>From then on</em>, he studied hard.", "emoji": "🔄" },
                    { "word": "come true", "phonetic": "/kʌm truː/", "meaning": "实现", "example": "My dream will <em>come true</em>.", "emoji": "✨" },
                    { "word": "exercise", "phonetic": "/ˈeksəsaɪz/", "meaning": "锻炼；练习", "example": "I <em>exercise</em> every day.", "emoji": "🏃" },
                    { "word": "minute", "phonetic": "/ˈmɪnɪt/", "meaning": "分钟；一会儿", "example": "Wait a <em>minute</em>.", "emoji": "⏱️" },
                    { "word": "take ... lesson", "phonetic": "/teɪk ˈlesn/", "meaning": "上……课程", "example": "I <em>take</em> English <em>lessons</em>.", "emoji": "📚" },
                    { "word": "give up", "phonetic": "/ɡɪv ʌp/", "meaning": "放弃，认输", "example": "Don't <em>give up</em>!", "emoji": "💪" },
                    { "word": "scientist", "phonetic": "/ˈsaɪəntɪst/", "meaning": "科学家", "example": "She is a <em>scientist</em>.", "emoji": "🔬" },
                    { "word": "the Medal of the Republic", "phonetic": "/ðə ˈmedl əv ðə rɪˈpʌblɪk/", "meaning": "共和国勋章", "example": "He got <em>the Medal of the Republic</em>.", "emoji": "🏅" },
                    { "word": "honour", "phonetic": "/ˈɒnə(r)/", "meaning": "荣誉", "example": "It's an <em>honour</em>.", "emoji": "🏆" },
                    { "word": "hybrid rice", "phonetic": "/ˈhaɪbrɪd raɪs/", "meaning": "杂交水稻", "example": "He invented <em>hybrid rice</em>.", "emoji": "🌾" },
                    { "word": "once", "phonetic": "/wʌns/", "meaning": "一次；曾经", "example": "I went there <em>once</em>.", "emoji": "1️⃣" },
                    { "word": "farmer", "phonetic": "/ˈfɑːmə(r)/", "meaning": "农民，农夫", "example": "He is a <em>farmer</em>.", "emoji": "👨‍🌾" },
                    { "word": "invent", "phonetic": "/ɪnˈvent/", "meaning": "发明", "example": "He <em>invented</em> hybrid rice.", "emoji": "💡" },
                    { "word": "output", "phonetic": "/ˈaʊtpʊt/", "meaning": "产量", "example": "The rice <em>output</em> is high.", "emoji": "📊" },
                    { "word": "each", "phonetic": "/iːtʃ/", "meaning": "每个，各", "example": "<em>Each</em> student has a book.", "emoji": "☝️" }
                ]
            },
            "7": {
                "name": "Unit 7",
                "words": [
                    { "word": "square", "phonetic": "/skweə(r)/", "meaning": "广场；正方形", "example": "Tian'anmen <em>Square</em> is big.", "emoji": "⬜" },
                    { "word": "the Summer Palace", "phonetic": "/ðə ˈsʌmə ˈpæləs/", "meaning": "颐和园", "example": "Let's visit <em>the Summer Palace</em>.", "emoji": "🏯" },
                    { "word": "well-kept", "phonetic": "/wel kept/", "meaning": "保存完好的", "example": "The garden is <em>well-kept</em>.", "emoji": "✨" },
                    { "word": "colourful", "phonetic": "/ˈkʌləfl/", "meaning": "五彩缤纷的", "example": "The flowers are <em>colourful</em>.", "emoji": "🌈" },
                    { "word": "international", "phonetic": "/ˌɪntəˈnæʃnəl/", "meaning": "国际的", "example": "It's an <em>international</em> airport.", "emoji": "🌐" },
                    { "word": "airport", "phonetic": "/ˈeəpɔːt/", "meaning": "机场", "example": "We go to the <em>airport</em>.", "emoji": "🛫" },
                    { "word": "modern", "phonetic": "/ˈmɒdn/", "meaning": "现代的", "example": "The city is <em>modern</em>.", "emoji": "🏙️" },
                    { "word": "computer", "phonetic": "/kəmˈpjuːtə(r)/", "meaning": "计算机；电脑", "example": "I use a <em>computer</em>.", "emoji": "💻" },
                    { "word": "subway", "phonetic": "/ˈsʌbweɪ/", "meaning": "地铁", "example": "I take the <em>subway</em>.", "emoji": "🚇" },
                    { "word": "line", "phonetic": "/laɪn/", "meaning": "线，线条；行，排", "example": "Take <em>Line</em> 1.", "emoji": "〰️" },
                    { "word": "its", "phonetic": "/ɪts/", "meaning": "它的", "example": "The city has <em>its</em> history.", "emoji": "🐾" },
                    { "word": "Beijing roast duck", "phonetic": "/ˈbeɪdʒɪŋ rəʊst dʌk/", "meaning": "北京烤鸭", "example": "I like <em>Beijing roast duck</em>.", "emoji": "🦆" },
                    { "word": "hot pot", "phonetic": "/hɒt pɒt/", "meaning": "火锅", "example": "Let's eat <em>hot pot</em>.", "emoji": "🍲" },
                    { "word": "Central Axis", "phonetic": "/ˈsentrəl ˈæksɪs/", "meaning": "中轴线", "example": "The <em>Central Axis</em> of Beijing.", "emoji": "🏛️" },
                    { "word": "Bell and Drum Towers", "phonetic": "/bel ænd drʌm ˈtaʊəz/", "meaning": "钟鼓楼", "example": "The <em>Bell and Drum Towers</em> are famous.", "emoji": "🔔" },
                    { "word": "northern", "phonetic": "/ˈnɔːðən/", "meaning": "北部的；北方的", "example": "Beijing is in the <em>northern</em> part.", "emoji": "🧭" },
                    { "word": "end", "phonetic": "/end/", "meaning": "最后部分；末尾", "example": "The <em>end</em> of the road.", "emoji": "🏁" },
                    { "word": "bird's-eye view", "phonetic": "/ˈbɜːdzaɪ vjuː/", "meaning": "鸟瞰", "example": "We get a <em>bird's-eye view</em>.", "emoji": "🦅" },
                    { "word": "the Palace Museum", "phonetic": "/ðə ˈpæləs mjuˈziːəm/", "meaning": "故宫博物院", "example": "Let's visit <em>the Palace Museum</em>.", "emoji": "🏯" },
                    { "word": "wooden", "phonetic": "/ˈwʊdn/", "meaning": "木质的", "example": "The desk is <em>wooden</em>.", "emoji": "🪵" },
                    { "word": "palace", "phonetic": "/ˈpæləs/", "meaning": "宫殿；大厦", "example": "The <em>palace</em> is beautiful.", "emoji": "🏛️" },
                    { "word": "treasure", "phonetic": "/ˈtreʒə(r)/", "meaning": "财富；财宝", "example": "There are many <em>treasures</em>.", "emoji": "💎" },
                    { "word": "bus", "phonetic": "/bʌs/", "meaning": "公交车，巴士", "example": "I take the <em>bus</em>.", "emoji": "🚌" },
                    { "word": "gate", "phonetic": "/ɡeɪt/", "meaning": "大门；登机口", "example": "Go through the <em>gate</em>.", "emoji": "🚪" },
                    { "word": "Tian'anmen Square Complex", "phonetic": "/ˌtjenˈɑːnmen skweə ˈkɒmpleks/", "meaning": "天安门广场及建筑群", "example": "We visit <em>Tian'anmen Square Complex</em>.", "emoji": "🏛️" },
                    { "word": "southern", "phonetic": "/ˈsʌðən/", "meaning": "南部的；南方的", "example": "The <em>southern</em> part of the city.", "emoji": "🧭" },
                    { "word": "own", "phonetic": "/əʊn/", "meaning": "自己的；拥有", "example": "I have my <em>own</em> room.", "emoji": "🏠" },
                    { "word": "young", "phonetic": "/jʌŋ/", "meaning": "年轻的", "example": "The city is <em>young</em>.", "emoji": "🌱" },
                    { "word": "Bird's Nest", "phonetic": "/bɜːdz nest/", "meaning": "鸟巢", "example": "The <em>Bird's Nest</em> is famous.", "emoji": "🏟️" },
                    { "word": "well-known", "phonetic": "/wel nəʊn/", "meaning": "著名的", "example": "It's <em>well-known</em>.", "emoji": "🌟" },
                    { "word": "hold", "phonetic": "/həʊld/", "meaning": "召开，举行", "example": "They <em>hold</em> the ceremony.", "emoji": "🎪" },
                    { "word": "ceremony", "phonetic": "/ˈserəməni/", "meaning": "仪式；典礼", "example": "The opening <em>ceremony</em> is great.", "emoji": "🎊" }
                ]
            }
        }
    },
    "BJ_6下": {
        "name": "六年级下册（北京版）",
        "grade": 6,
        "semester": "下",
        "units": {
            "1": {
                "name": "Lesson 1",
                "words": [
                    { "word": "a few", "phonetic": "/ə fjuː/", "meaning": "几个，一些", "example": "I have <em>a few</em> friends.", "emoji": "🔢" },
                    { "word": "ground", "phonetic": "/ɡraʊnd/", "meaning": "地，地面", "example": "Sit on the <em>ground</em>.", "emoji": "🌍" },
                    { "word": "use", "phonetic": "/juːz/", "meaning": "使用", "example": "I <em>use</em> a pen.", "emoji": "✏️" },
                    { "word": "cup", "phonetic": "/kʌp/", "meaning": "杯子", "example": "Give me a <em>cup</em> of water.", "emoji": "🥤" }
                ]
            },
            "2": {
                "name": "Lesson 2",
                "words": [
                    { "word": "worried", "phonetic": "/ˈwʌrid/", "meaning": "担忧的", "example": "Don't be <em>worried</em>.", "emoji": "😟" },
                    { "word": "worry", "phonetic": "/ˈwʌri/", "meaning": "忧虑，担心", "example": "Don't <em>worry</em>.", "emoji": "😰" },
                    { "word": "purple", "phonetic": "/ˈpɜːpl/", "meaning": "紫色的", "example": "I like <em>purple</em>.", "emoji": "🟣" },
                    { "word": "desk", "phonetic": "/desk/", "meaning": "书桌", "example": "Put it on the <em>desk</em>.", "emoji": "🗄️" },
                    { "word": "whose", "phonetic": "/huːz/", "meaning": "谁的", "example": "<em>Whose</em> bag is this?", "emoji": "❓" },
                    { "word": "wide", "phonetic": "/waɪd/", "meaning": "宽的", "example": "The road is <em>wide</em>.", "emoji": "↔️" }
                ]
            },
            "3": {
                "name": "Lesson 3",
                "words": [
                    { "word": "little", "phonetic": "/ˈlɪtl/", "meaning": "小的；可爱的", "example": "The <em>little</em> cat is cute.", "emoji": "🐱" },
                    { "word": "police", "phonetic": "/pəˈliːs/", "meaning": "警察", "example": "The <em>police</em> help people.", "emoji": "👮" },
                    { "word": "beautiful", "phonetic": "/ˈbjuːtɪfl/", "meaning": "美丽的；漂亮的", "example": "The flower is <em>beautiful</em>.", "emoji": "🌸" },
                    { "word": "head", "phonetic": "/hed/", "meaning": "头", "example": "Touch your <em>head</em>.", "emoji": "🗣️" },
                    { "word": "only", "phonetic": "/ˈəʊnli/", "meaning": "仅仅", "example": "I have <em>only</em> one pen.", "emoji": "☝️" },
                    { "word": "street", "phonetic": "/striːt/", "meaning": "街，街道", "example": "Cross the <em>street</em>.", "emoji": "🛣️" },
                    { "word": "garden", "phonetic": "/ˈɡɑːdn/", "meaning": "花园；菜园", "example": "The <em>garden</em> is beautiful.", "emoji": "🌺" }
                ]
            },
            "5": {
                "name": "Lesson 5",
                "words": [
                    { "word": "vacation", "phonetic": "/vəˈkeɪʃn/", "meaning": "假期", "example": "I like summer <em>vacation</em>.", "emoji": "🏖️" },
                    { "word": "shoulder", "phonetic": "/ˈʃəʊldə(r)/", "meaning": "肩膀", "example": "Touch your <em>shoulder</em>.", "emoji": "🤷" },
                    { "word": "flower", "phonetic": "/ˈflaʊə(r)/", "meaning": "花", "example": "The <em>flower</em> is red.", "emoji": "🌸" },
                    { "word": "grass", "phonetic": "/ɡrɑːs/", "meaning": "草；草坪", "example": "Don't walk on the <em>grass</em>.", "emoji": "🌿" },
                    { "word": "feed", "phonetic": "/fiːd/", "meaning": "喂养", "example": "<em>Feed</em> the cat.", "emoji": "🐱" }
                ]
            },
            "6": {
                "name": "Lesson 6",
                "words": [
                    { "word": "skirt", "phonetic": "/skɜːt/", "meaning": "裙子", "example": "She wears a <em>skirt</em>.", "emoji": "👗" },
                    { "word": "sock", "phonetic": "/sɒk/", "meaning": "短袜", "example": "Where is my <em>sock</em>?", "emoji": "🧦" },
                    { "word": "crayon", "phonetic": "/ˈkreɪən/", "meaning": "蜡笔", "example": "I draw with a <em>crayon</em>.", "emoji": "🖍️" },
                    { "word": "idea", "phonetic": "/aɪˈdɪə/", "meaning": "主意；想法", "example": "Good <em>idea</em>!", "emoji": "💡" }
                ]
            },
            "7": {
                "name": "Lesson 7",
                "words": [
                    { "word": "nervous", "phonetic": "/ˈnɜːvəs/", "meaning": "紧张不安的", "example": "Don't be <em>nervous</em>.", "emoji": "😰" },
                    { "word": "face", "phonetic": "/feɪs/", "meaning": "脸", "example": "Touch your <em>face</em>.", "emoji": "😊" },
                    { "word": "smile", "phonetic": "/smaɪl/", "meaning": "笑", "example": "<em>Smile</em> please!", "emoji": "😄" },
                    { "word": "student", "phonetic": "/ˈstjuːdnt/", "meaning": "学生", "example": "I am a <em>student</em>.", "emoji": "🎓" }
                ]
            },
            "9": {
                "name": "Lesson 9",
                "words": [
                    { "word": "protect", "phonetic": "/prəˈtekt/", "meaning": "保护", "example": "We <em>protect</em> the earth.", "emoji": "🛡️" },
                    { "word": "stop", "phonetic": "/stɒp/", "meaning": "停止", "example": "<em>Stop</em>!", "emoji": "✋" },
                    { "word": "litter", "phonetic": "/ˈlɪtə(r)/", "meaning": "乱丢垃圾", "example": "Don't <em>litter</em>.", "emoji": "🚯" },
                    { "word": "answer", "phonetic": "/ˈɑːnsə(r)/", "meaning": "回答", "example": "Can you <em>answer</em> the question?", "emoji": "🙋" },
                    { "word": "clean", "phonetic": "/kliːn/", "meaning": "清洁的", "example": "Keep the room <em>clean</em>.", "emoji": "✨" }
                ]
            },
            "10": {
                "name": "Lesson 10",
                "words": [
                    { "word": "print", "phonetic": "/prɪnt/", "meaning": "打印", "example": "<em>Print</em> the paper.", "emoji": "🖨️" },
                    { "word": "OK", "phonetic": "/ˌəʊˈkeɪ/", "meaning": "对；好；行", "example": "— Let's go. — <em>OK</em>!", "emoji": "👌" },
                    { "word": "paper", "phonetic": "/ˈpeɪpə(r)/", "meaning": "纸", "example": "Give me some <em>paper</em>.", "emoji": "📄" },
                    { "word": "save", "phonetic": "/seɪv/", "meaning": "节约", "example": "<em>Save</em> water.", "emoji": "💧" },
                    { "word": "also", "phonetic": "/ˈɔːlsəʊ/", "meaning": "也；同样", "example": "I <em>also</em> like it.", "emoji": "➕" }
                ]
            },
            "11": {
                "name": "Lesson 11",
                "words": [
                    { "word": "tired", "phonetic": "/ˈtaɪəd/", "meaning": "累的，疲劳的", "example": "I am <em>tired</em>.", "emoji": "😮‍💨" },
                    { "word": "thirsty", "phonetic": "/ˈθɜːsti/", "meaning": "渴的", "example": "I am <em>thirsty</em>.", "emoji": "💧" },
                    { "word": "toilet", "phonetic": "/ˈtɔɪlət/", "meaning": "洗手间", "example": "Where is the <em>toilet</em>?", "emoji": "🚻" },
                    { "word": "under", "phonetic": "/ˈʌndə(r)/", "meaning": "在……下面", "example": "The cat is <em>under</em> the desk.", "emoji": "⬇️" },
                    { "word": "friendly", "phonetic": "/ˈfrendli/", "meaning": "友好的", "example": "She is <em>friendly</em>.", "emoji": "🤝" }
                ]
            },
            "13": {
                "name": "Lesson 13",
                "words": [
                    { "word": "stay", "phonetic": "/steɪ/", "meaning": "停留；待", "example": "I <em>stay</em> at home.", "emoji": "🏠" },
                    { "word": "most", "phonetic": "/məʊst/", "meaning": "大部分", "example": "<em>Most</em> students like it.", "emoji": "📊" },
                    { "word": "summer", "phonetic": "/ˈsʌmə(r)/", "meaning": "夏天", "example": "<em>Summer</em> is hot.", "emoji": "☀️" }
                ]
            },
            "14": {
                "name": "Lesson 14",
                "words": [
                    { "word": "weekend", "phonetic": "/ˌwiːkˈend/", "meaning": "周末", "example": "I play on the <em>weekend</em>.", "emoji": "📅" },
                    { "word": "clear", "phonetic": "/klɪə(r)/", "meaning": "清晰的", "example": "The sky is <em>clear</em>.", "emoji": "🌤️" },
                    { "word": "season", "phonetic": "/ˈsiːzn/", "meaning": "季节", "example": "Which <em>season</em> do you like?", "emoji": "📅" },
                    { "word": "Friday", "phonetic": "/ˈfraɪdeɪ/", "meaning": "星期五", "example": "I like <em>Friday</em>.", "emoji": "📅" },
                    { "word": "slow", "phonetic": "/sləʊ/", "meaning": "慢的", "example": "The turtle is <em>slow</em>.", "emoji": "🐢" }
                ]
            },
            "15": {
                "name": "Lesson 15",
                "words": [
                    { "word": "yesterday", "phonetic": "/ˈjestədeɪ/", "meaning": "昨天", "example": "I played <em>yesterday</em>.", "emoji": "📅" },
                    { "word": "nose", "phonetic": "/nəʊz/", "meaning": "鼻子", "example": "Touch your <em>nose</em>.", "emoji": "👃" },
                    { "word": "careful", "phonetic": "/ˈkeəfl/", "meaning": "小心的；仔细的", "example": "Be <em>careful</em>!", "emoji": "⚠️" },
                    { "word": "all", "phonetic": "/ɔːl/", "meaning": "全部地", "example": "I like them <em>all</em>.", "emoji": "💯" },
                    { "word": "ill", "phonetic": "/ɪl/", "meaning": "生病的", "example": "He is <em>ill</em>.", "emoji": "🤒" }
                ]
            },
            "17": {
                "name": "Lesson 17",
                "words": [
                    { "word": "begin", "phonetic": "/bɪˈɡɪn/", "meaning": "开始", "example": "Let's <em>begin</em>.", "emoji": "▶️" },
                    { "word": "fan", "phonetic": "/fæn/", "meaning": "迷，狂热者；扇子", "example": "I'm a big <em>fan</em>.", "emoji": "🙌" },
                    { "word": "large", "phonetic": "/lɑːdʒ/", "meaning": "大的", "example": "The room is <em>large</em>.", "emoji": "📐" },
                    { "word": "invite", "phonetic": "/ɪnˈvaɪt/", "meaning": "邀请", "example": "I <em>invite</em> you to my party.", "emoji": "📩" },
                    { "word": "heavy", "phonetic": "/ˈhevi/", "meaning": "重的", "example": "The box is <em>heavy</em>.", "emoji": "🏋️" }
                ]
            },
            "18": {
                "name": "Lesson 18",
                "words": [
                    { "word": "gym", "phonetic": "/dʒɪm/", "meaning": "健身房", "example": "I go to the <em>gym</em>.", "emoji": "🏋️" },
                    { "word": "classroom", "phonetic": "/ˈklɑːsruːm/", "meaning": "教室", "example": "This is our <em>classroom</em>.", "emoji": "🏫" },
                    { "word": "club", "phonetic": "/klʌb/", "meaning": "俱乐部", "example": "I join the <em>club</em>.", "emoji": " clubhouse" }
                ]
            },
            "19": {
                "name": "Lesson 19",
                "words": [
                    { "word": "behind", "phonetic": "/bɪˈhaɪnd/", "meaning": "在……之后", "example": "The cat is <em>behind</em> the door.", "emoji": "🔙" },
                    { "word": "stand", "phonetic": "/stænd/", "meaning": "站", "example": "<em>Stand</em> up.", "emoji": "🧍" },
                    { "word": "welcome", "phonetic": "/ˈwelkəm/", "meaning": "欢迎", "example": "<em>Welcome</em> to our school.", "emoji": "👋" },
                    { "word": "between", "phonetic": "/bɪˈtwiːn/", "meaning": "在……之间", "example": "The park is <em>between</em> the school and the shop.", "emoji": "↔️" }
                ]
            }
        }
    },
    "BNU_3下": {
        "name": "三年级下册（北师大版）",
        "grade": 3,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    { "word": "Happy Birthday!", "phonetic": "/ˈhæpi ˈbɜːθdeɪ/", "meaning": "生日快乐！", "example": "<em>Happy Birthday!</em>", "emoji": "🎂" },
                    { "word": "How old...?", "phonetic": "/haʊ əʊld/", "meaning": "（某人）几岁了？", "example": "<em>How old</em> are you?", "emoji": "❓" },
                    { "word": "grandpa", "phonetic": "/ˈɡrænpɑː/", "meaning": "爷爷；外公", "example": "My <em>grandpa</em> is kind.", "emoji": "👴" },
                    { "word": "grandma", "phonetic": "/ˈɡrænmɑː/", "meaning": "奶奶；外婆", "example": "My <em>grandma</em> is nice.", "emoji": "👵" },
                    { "word": "one", "phonetic": "/wʌn/", "meaning": "一", "example": "I have <em>one</em> pen.", "emoji": "1️⃣" },
                    { "word": "two", "phonetic": "/tuː/", "meaning": "二", "example": "I have <em>two</em> books.", "emoji": "2️⃣" },
                    { "word": "three", "phonetic": "/θriː/", "meaning": "三", "example": "I have <em>three</em> cats.", "emoji": "3️⃣" },
                    { "word": "four", "phonetic": "/fɔː(r)/", "meaning": "四", "example": "There are <em>four</em> seasons.", "emoji": "4️⃣" },
                    { "word": "five", "phonetic": "/faɪv/", "meaning": "五", "example": "I have <em>five</em> fingers.", "emoji": "5️⃣" },
                    { "word": "six", "phonetic": "/sɪks/", "meaning": "六", "example": "I am <em>six</em> years old.", "emoji": "6️⃣" },
                    { "word": "seven", "phonetic": "/ˈsevn/", "meaning": "七", "example": "I am <em>seven</em>.", "emoji": "7️⃣" },
                    { "word": "eight", "phonetic": "/eɪt/", "meaning": "八", "example": "I am <em>eight</em>.", "emoji": "8️⃣" },
                    { "word": "nine", "phonetic": "/naɪn/", "meaning": "九", "example": "I am <em>nine</em>.", "emoji": "9️⃣" },
                    { "word": "ten", "phonetic": "/ten/", "meaning": "十", "example": "I am <em>ten</em>.", "emoji": "🔟" },
                    { "word": "colour", "phonetic": "/ˈkʌlə(r)/", "meaning": "颜色", "example": "What <em>colour</em> is it?", "emoji": "🎨" },
                    { "word": "red", "phonetic": "/red/", "meaning": "红色", "example": "It's <em>red</em>.", "emoji": "🔴" },
                    { "word": "blue", "phonetic": "/bluː/", "meaning": "蓝色", "example": "The sky is <em>blue</em>.", "emoji": "🔵" },
                    { "word": "yellow", "phonetic": "/ˈjeləʊ/", "meaning": "黄色", "example": "The sun is <em>yellow</em>.", "emoji": "🟡" },
                    { "word": "white", "phonetic": "/waɪt/", "meaning": "白色", "example": "The snow is <em>white</em>.", "emoji": "⚪" },
                    { "word": "black", "phonetic": "/blæk/", "meaning": "黑色", "example": "The cat is <em>black</em>.", "emoji": "⚫" },
                    { "word": "picture book", "phonetic": "/ˈpɪktʃə bʊk/", "meaning": "图画书", "example": "I read a <em>picture book</em>.", "emoji": "📕" },
                    { "word": "play sport", "phonetic": "/pleɪ spɔːt/", "meaning": "做运动", "example": "I <em>play sport</em> after school.", "emoji": "⚽" },
                    { "word": "run", "phonetic": "/rʌn/", "meaning": "跑，奔跑", "example": "I like to <em>run</em>.", "emoji": "🏃" },
                    { "word": "swim", "phonetic": "/swɪm/", "meaning": "游泳", "example": "I like to <em>swim</em>.", "emoji": "🏊" },
                    { "word": "dance", "phonetic": "/dɑːns/", "meaning": "跳舞", "example": "I like to <em>dance</em>.", "emoji": "💃" }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    { "word": "plant flowers", "phonetic": "/plɑːnt ˈflaʊəz/", "meaning": "种花", "example": "I like to <em>plant flowers</em>.", "emoji": "🌻" },
                    { "word": "ride bikes", "phonetic": "/raɪd baɪks/", "meaning": "骑自行车", "example": "I <em>ride bikes</em> on weekends.", "emoji": "🚲" },
                    { "word": "aunt", "phonetic": "/ɑːnt/", "meaning": "姑母，姨母，舅母，伯母", "example": "My <em>aunt</em> is kind.", "emoji": "👩" },
                    { "word": "uncle", "phonetic": "/ˈʌŋkl/", "meaning": "伯父，叔父，舅父，姑父", "example": "My <em>uncle</em> is tall.", "emoji": "👨" },
                    { "word": "cousin", "phonetic": "/ˈkʌzn/", "meaning": "堂（或表）兄弟/姐妹", "example": "I play with my <em>cousin</em>.", "emoji": "👧" },
                    { "word": "she", "phonetic": "/ʃiː/", "meaning": "她", "example": "<em>She</em> is my aunt.", "emoji": "👧" },
                    { "word": "job", "phonetic": "/dʒɒb/", "meaning": "工作，职业", "example": "What's her <em>job</em>?", "emoji": "💼" },
                    { "word": "doctor", "phonetic": "/ˈdɒktə(r)/", "meaning": "医生，大夫", "example": "She is a <em>doctor</em>.", "emoji": "👨‍⚕️" },
                    { "word": "worker", "phonetic": "/ˈwɜːkə(r)/", "meaning": "工人", "example": "He is a <em>worker</em>.", "emoji": "👷" },
                    { "word": "farmer", "phonetic": "/ˈfɑːmə(r)/", "meaning": "农民，农场主", "example": "My uncle is a <em>farmer</em>.", "emoji": "👨‍🌾" },
                    { "word": "driver", "phonetic": "/ˈdraɪvə(r)/", "meaning": "司机，驾驶员", "example": "He is a <em>driver</em>.", "emoji": "🚗" },
                    { "word": "What's wrong?", "phonetic": "/wɒts rɒŋ/", "meaning": "出了什么事？", "example": "<em>What's wrong?</em>", "emoji": "❓" },
                    { "word": "angry", "phonetic": "/ˈæŋɡri/", "meaning": "发怒的，生气的", "example": "Don't be <em>angry</em>.", "emoji": "😠" },
                    { "word": "happy", "phonetic": "/ˈhæpi/", "meaning": "高兴的", "example": "I am <em>happy</em>.", "emoji": "😊" },
                    { "word": "tired", "phonetic": "/ˈtaɪəd/", "meaning": "困倦的，累的", "example": "I am <em>tired</em>.", "emoji": "😮‍💨" },
                    { "word": "sad", "phonetic": "/sæd/", "meaning": "伤心的，难过的", "example": "Don't be <em>sad</em>.", "emoji": "😢" }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    { "word": "farm", "phonetic": "/fɑːm/", "meaning": "农场；养殖场", "example": "I visit a <em>farm</em>.", "emoji": "🌾" },
                    { "word": "animal", "phonetic": "/ˈænɪml/", "meaning": "动物，牲畜", "example": "I like <em>animals</em>.", "emoji": "🐾" },
                    { "word": "chicken", "phonetic": "/ˈtʃɪkɪn/", "meaning": "鸡", "example": "There are <em>chickens</em> on the farm.", "emoji": "🐔" },
                    { "word": "sheep", "phonetic": "/ʃiːp/", "meaning": "羊，绵羊", "example": "The <em>sheep</em> is white.", "emoji": "🐑" },
                    { "word": "horse", "phonetic": "/hɔːs/", "meaning": "马", "example": "I like the <em>horse</em>.", "emoji": "🐴" },
                    { "word": "cow", "phonetic": "/kaʊ/", "meaning": "母牛，奶牛", "example": "The <em>cow</em> is big.", "emoji": "🐄" },
                    { "word": "have a picnic", "phonetic": "/hæv ə ˈpɪknɪk/", "meaning": "野餐", "example": "Let's <em>have a picnic</em>.", "emoji": "🧺" },
                    { "word": "let's", "phonetic": "/lets/", "meaning": "让我们", "example": "<em>Let's</em> go!", "emoji": "👉" },
                    { "word": "go over", "phonetic": "/ɡəʊ ˈəʊvə(r)/", "meaning": "越过，翻过", "example": "We <em>go over</em> the hill.", "emoji": "⛰️" },
                    { "word": "hill", "phonetic": "/hɪl/", "meaning": "小山，小丘", "example": "Let's climb the <em>hill</em>.", "emoji": "⛰️" },
                    { "word": "river", "phonetic": "/ˈrɪvə(r)/", "meaning": "江，河", "example": "The <em>river</em> is long.", "emoji": "🏞️" },
                    { "word": "lake", "phonetic": "/leɪk/", "meaning": "湖，湖泊", "example": "The <em>lake</em> is beautiful.", "emoji": "🏞️" },
                    { "word": "forest", "phonetic": "/ˈfɒrɪst/", "meaning": "森林", "example": "There is a <em>forest</em>.", "emoji": "🌲" },
                    { "word": "spring", "phonetic": "/sprɪŋ/", "meaning": "春天，春季", "example": "<em>Spring</em> is warm.", "emoji": "🌸" },
                    { "word": "summer", "phonetic": "/ˈsʌmə(r)/", "meaning": "夏天，夏季", "example": "<em>Summer</em> is hot.", "emoji": "☀️" },
                    { "word": "autumn", "phonetic": "/ˈɔːtəm/", "meaning": "秋天，秋季", "example": "<em>Autumn</em> is cool.", "emoji": "🍂" },
                    { "word": "winter", "phonetic": "/ˈwɪntə(r)/", "meaning": "冬天，冬季", "example": "<em>Winter</em> is cold.", "emoji": "❄️" },
                    { "word": "favourite", "phonetic": "/ˈfeɪvərɪt/", "meaning": "最喜欢的", "example": "My <em>favourite</em> season is spring.", "emoji": "⭐" },
                    { "word": "season", "phonetic": "/ˈsiːzn/", "meaning": "季节", "example": "Which <em>season</em> do you like?", "emoji": "📅" },
                    { "word": "fly kites", "phonetic": "/flaɪ kaɪts/", "meaning": "放风筝", "example": "Let's <em>fly kites</em>.", "emoji": "🪁" },
                    { "word": "skate", "phonetic": "/skeɪt/", "meaning": "滑冰", "example": "I like to <em>skate</em>.", "emoji": "⛸️" }
                ]
            },
            "4": {
                "name": "Unit 4",
                "words": [
                    { "word": "travel", "phonetic": "/ˈtrævl/", "meaning": "旅行", "example": "I like to <em>travel</em>.", "emoji": "✈️" },
                    { "word": "safe", "phonetic": "/seɪf/", "meaning": "安全的", "example": "Be <em>safe</em>!", "emoji": "🛡️" },
                    { "word": "park", "phonetic": "/pɑːk/", "meaning": "公园", "example": "Let's go to the <em>park</em>.", "emoji": "🌳" },
                    { "word": "by bus", "phonetic": "/baɪ bʌs/", "meaning": "乘公共汽车", "example": "I go to school <em>by bus</em>.", "emoji": "🚌" },
                    { "word": "on foot", "phonetic": "/ɒn fʊt/", "meaning": "步行", "example": "I go to school <em>on foot</em>.", "emoji": "🚶" },
                    { "word": "fast", "phonetic": "/fɑːst/", "meaning": "快的，快速的", "example": "The car is <em>fast</em>.", "emoji": "⚡" },
                    { "word": "on the way", "phonetic": "/ɒn ðə weɪ/", "meaning": "在路上", "example": "I see a tree <em>on the way</em>.", "emoji": "🛤️" },
                    { "word": "we", "phonetic": "/wiː/", "meaning": "我们", "example": "<em>We</em> are friends.", "emoji": "👥" },
                    { "word": "plane", "phonetic": "/pleɪn/", "meaning": "飞机", "example": "I go <em>by plane</em>.", "emoji": "✈️" },
                    { "word": "ship", "phonetic": "/ʃɪp/", "meaning": "大船，海轮", "example": "I go <em>by ship</em>.", "emoji": "🚢" },
                    { "word": "far", "phonetic": "/fɑː(r)/", "meaning": "远的", "example": "The school is <em>far</em>.", "emoji": "📏" },
                    { "word": "close", "phonetic": "/kləʊs/", "meaning": "接近的，靠近的", "example": "The park is <em>close</em>.", "emoji": "📍" },
                    { "word": "Excuse me.", "phonetic": "/ɪkˈskjuːz miː/", "meaning": "劳驾。", "example": "<em>Excuse me.</em> Where is the zoo?", "emoji": "🙋" },
                    { "word": "shop", "phonetic": "/ʃɒp/", "meaning": "商店", "example": "I go to the <em>shop</em>.", "emoji": "🏪" },
                    { "word": "walk down", "phonetic": "/wɔːk daʊn/", "meaning": "沿着走，顺着走", "example": "<em>Walk down</em> the street.", "emoji": "🚶" },
                    { "word": "street", "phonetic": "/striːt/", "meaning": "大街，街道", "example": "Cross the <em>street</em>.", "emoji": "🛣️" },
                    { "word": "turn right", "phonetic": "/tɜːn raɪt/", "meaning": "向右转", "example": "<em>Turn right</em> at the corner.", "emoji": "↩️" },
                    { "word": "left", "phonetic": "/left/", "meaning": "左边；左边的", "example": "<em>Turn left</em>.", "emoji": "↪️" },
                    { "word": "water", "phonetic": "/ˈwɔːtə(r)/", "meaning": "水", "example": "I drink <em>water</em>.", "emoji": "💧" },
                    { "word": "noodle", "phonetic": "/ˈnuːdl/", "meaning": "面条", "example": "I like <em>noodles</em>.", "emoji": "🍜" },
                    { "word": "bread", "phonetic": "/bred/", "meaning": "面包", "example": "I eat <em>bread</em>.", "emoji": "🍞" },
                    { "word": "milk", "phonetic": "/mɪlk/", "meaning": "牛奶", "example": "I drink <em>milk</em>.", "emoji": "🥛" },
                    { "word": "zoo", "phonetic": "/zuː/", "meaning": "动物园", "example": "Let's go to the <em>zoo</em>.", "emoji": "🦁" }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    { "word": "China", "phonetic": "/ˈtʃaɪnə/", "meaning": "中国", "example": "I live in <em>China</em>.", "emoji": "🇨🇳" },
                    { "word": "star", "phonetic": "/stɑː(r)/", "meaning": "星，恒星", "example": "I can see a <em>star</em>.", "emoji": "⭐" },
                    { "word": "sea", "phonetic": "/siː/", "meaning": "海，海洋", "example": "I swim in the <em>sea</em>.", "emoji": "🌊" },
                    { "word": "sky", "phonetic": "/skaɪ/", "meaning": "天，天空", "example": "Look at the <em>sky</em>.", "emoji": "🌤️" },
                    { "word": "green", "phonetic": "/ɡriːn/", "meaning": "绿色的", "example": "The grass is <em>green</em>.", "emoji": "🟢" },
                    { "word": "pink", "phonetic": "/pɪŋk/", "meaning": "粉红色的", "example": "The flower is <em>pink</em>.", "emoji": "💗" },
                    { "word": "food", "phonetic": "/fuːd/", "meaning": "食物", "example": "I like Chinese <em>food</em>.", "emoji": "🍲" },
                    { "word": "some", "phonetic": "/sʌm/", "meaning": "一些", "example": "I want <em>some</em> water.", "emoji": "🔢" },
                    { "word": "meat", "phonetic": "/miːt/", "meaning": "肉", "example": "I like <em>meat</em>.", "emoji": "🥩" },
                    { "word": "Mrs", "phonetic": "/ˈmɪsɪz/", "meaning": "夫人", "example": "<em>Mrs</em> Li is my teacher.", "emoji": "👩" },
                    { "word": "love", "phonetic": "/lʌv/", "meaning": "爱", "example": "I <em>love</em> my family.", "emoji": "❤️" },
                    { "word": "Chinese", "phonetic": "/ˌtʃaɪˈniːz/", "meaning": "中国的；中国人的", "example": "I like <em>Chinese</em> food.", "emoji": "🈶" },
                    { "word": "fish", "phonetic": "/fɪʃ/", "meaning": "鱼", "example": "I like <em>fish</em>.", "emoji": "🐟" },
                    { "word": "hot pot", "phonetic": "/hɒt pɒt/", "meaning": "火锅", "example": "Let's eat <em>hot pot</em>.", "emoji": "🍲" },
                    { "word": "vegetable", "phonetic": "/ˈvedʒtəbl/", "meaning": "蔬菜", "example": "Eat your <em>vegetables</em>.", "emoji": "🥬" },
                    { "word": "great", "phonetic": "/ɡreɪt/", "meaning": "伟大的，杰出的", "example": "China is <em>great</em>.", "emoji": "🌟" },
                    { "word": "city", "phonetic": "/ˈsɪti/", "meaning": "城市，都市", "example": "Beijing is a big <em>city</em>.", "emoji": "🏙️" },
                    { "word": "place", "phonetic": "/pleɪs/", "meaning": "地方，场所", "example": "This is a nice <em>place</em>.", "emoji": "📍" },
                    { "word": "the Great Wall", "phonetic": "/ðə ɡreɪt wɔːl/", "meaning": "长城", "example": "Let's visit <em>the Great Wall</em>.", "emoji": "🧱" },
                    { "word": "lots of", "phonetic": "/lɒts ɒv/", "meaning": "大量，许多", "example": "There are <em>lots of</em> people.", "emoji": "📦" },
                    { "word": "people", "phonetic": "/ˈpiːpl/", "meaning": "人；人们", "example": "There are many <em>people</em>.", "emoji": "👥" }
                ]
            }
        }
    },
    "BNU_4下": {
        "name": "四年级下册（北师大版）",
        "grade": 4,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    { "word": "heavy", "phonetic": "/ˈhevi/", "meaning": "重的", "example": "The box is <em>heavy</em>.", "emoji": "🏋️" },
                    { "word": "tall", "phonetic": "/tɔːl/", "meaning": "高的", "example": "He is <em>tall</em>.", "emoji": "📏" },
                    { "word": "keep off", "phonetic": "/kiːp ɒf/", "meaning": "远离，不靠近", "example": "<em>Keep off</em> the grass.", "emoji": "🚫" },
                    { "word": "grass", "phonetic": "/ɡrɑːs/", "meaning": "草地；草", "example": "Don't walk on the <em>grass</em>.", "emoji": "🌿" },
                    { "word": "brave", "phonetic": "/breɪv/", "meaning": "勇敢的，无畏的", "example": "He is <em>brave</em>.", "emoji": "🦁" },
                    { "word": "anyone", "phonetic": "/ˈeniwʌn/", "meaning": "任何人", "example": "Is <em>anyone</em> there?", "emoji": "❓" },
                    { "word": "funny", "phonetic": "/ˈfʌni/", "meaning": "滑稽的", "example": "The clown is <em>funny</em>.", "emoji": "😂" },
                    { "word": "anything", "phonetic": "/ˈeniθɪŋ/", "meaning": "任何事物", "example": "Is there <em>anything</em> else?", "emoji": "❓" },
                    { "word": "hero", "phonetic": "/ˈhɪərəʊ/", "meaning": "英雄", "example": "He is a <em>hero</em>.", "emoji": "🦸" },
                    { "word": "helpful", "phonetic": "/ˈhelpfl/", "meaning": "乐于助人的", "example": "She is <em>helpful</em>.", "emoji": "🤝" },
                    { "word": "old", "phonetic": "/əʊld/", "meaning": "年老的", "example": "The man is <em>old</em>.", "emoji": "🧓" },
                    { "word": "young", "phonetic": "/jʌŋ/", "meaning": "年轻的，幼小的", "example": "The boy is <em>young</em>.", "emoji": "👶" },
                    { "word": "lovely", "phonetic": "/ˈlʌvli/", "meaning": "友善的，优美的", "example": "The girl is <em>lovely</em>.", "emoji": "😍" },
                    { "word": "from", "phonetic": "/frɒm/", "meaning": "来自", "example": "I'm <em>from</em> China.", "emoji": "📍" },
                    { "word": "France", "phonetic": "/frɑːns/", "meaning": "法国", "example": "He is <em>from France</em>.", "emoji": "🇫🇷" },
                    { "word": "film", "phonetic": "/fɪlm/", "meaning": "电影，影片", "example": "I like the <em>film</em>.", "emoji": "🎬" },
                    { "word": "player", "phonetic": "/ˈpleɪə(r)/", "meaning": "运动员", "example": "He is a football <em>player</em>.", "emoji": "⚽" },
                    { "word": "soup", "phonetic": "/suːp/", "meaning": "汤", "example": "The <em>soup</em> is hot.", "emoji": "🍲" },
                    { "word": "Russia", "phonetic": "/ˈrʌʃə/", "meaning": "俄罗斯", "example": "She is <em>from Russia</em>.", "emoji": "🇷🇺" },
                    { "word": "parent", "phonetic": "/ˈpeərənt/", "meaning": "父亲，母亲", "example": "I love my <em>parents</em>.", "emoji": "👪" },
                    { "word": "mother", "phonetic": "/ˈmʌðə(r)/", "meaning": "母亲，妈妈", "example": "My <em>mother</em> is kind.", "emoji": "👩" },
                    { "word": "war", "phonetic": "/wɔː(r)/", "meaning": "战争", "example": "There was a <em>war</em>.", "emoji": "⚔️" },
                    { "word": "father", "phonetic": "/ˈfɑːðə(r)/", "meaning": "父亲，爸爸", "example": "My <em>father</em> is tall.", "emoji": "👨" },
                    { "word": "stay", "phonetic": "/steɪ/", "meaning": "待，停留", "example": "I <em>stay</em> at home.", "emoji": "🏠" },
                    { "word": "him", "phonetic": "/hɪm/", "meaning": "他", "example": "I help <em>him</em>.", "emoji": "👦" },
                    { "word": "look after", "phonetic": "/lʊk ˈɑːftə(r)/", "meaning": "照看", "example": "I <em>look after</em> my sister.", "emoji": "👶" },
                    { "word": "dear", "phonetic": "/dɪə(r)/", "meaning": "亲爱的", "example": "Oh <em>dear</em>!", "emoji": "💝" },
                    { "word": "girl", "phonetic": "/ɡɜːl/", "meaning": "女儿；女孩", "example": "The <em>girl</em> is lovely.", "emoji": "👧" }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    { "word": "sport", "phonetic": "/spɔːt/", "meaning": "体育运动", "example": "I like <em>sport</em>.", "emoji": "🏅" },
                    { "word": "more", "phonetic": "/mɔː(r)/", "meaning": "更多的", "example": "I need <em>more</em> practice.", "emoji": "➕" },
                    { "word": "race", "phonetic": "/reɪs/", "meaning": "赛跑", "example": "I win the <em>race</em>.", "emoji": "🏃" },
                    { "word": "get up", "phonetic": "/ɡet ʌp/", "meaning": "站起来；起床", "example": "I <em>get up</em> at 7.", "emoji": "⏰" },
                    { "word": "with", "phonetic": "/wɪð/", "meaning": "和，同，跟", "example": "I play <em>with</em> my friends.", "emoji": "🤝" },
                    { "word": "hit back", "phonetic": "/hɪt bæk/", "meaning": "击回，打回", "example": "He <em>hits back</em> the ball.", "emoji": "🏓" },
                    { "word": "wait", "phonetic": "/weɪt/", "meaning": "等待", "example": "<em>Wait</em> for me!", "emoji": "⏳" },
                    { "word": "sleep", "phonetic": "/sliːp/", "meaning": "睡觉", "example": "I <em>sleep</em> at 9.", "emoji": "😴" },
                    { "word": "win", "phonetic": "/wɪn/", "meaning": "获胜，赢", "example": "I hope to <em>win</em>!", "emoji": "🏆" },
                    { "word": "busy", "phonetic": "/ˈbɪzi/", "meaning": "忙碌的", "example": "I am <em>busy</em>.", "emoji": "😤" },
                    { "word": "must", "phonetic": "/mʌst/", "meaning": "必须", "example": "You <em>must</em> study hard.", "emoji": "❗" },
                    { "word": "wear", "phonetic": "/weə(r)/", "meaning": "穿，戴", "example": "I <em>wear</em> a uniform.", "emoji": "👔" },
                    { "word": "go up", "phonetic": "/ɡəʊ ʌp/", "meaning": "上升", "example": "The sun <em>goes up</em>.", "emoji": "⬆️" },
                    { "word": "go down", "phonetic": "/ɡəʊ daʊn/", "meaning": "下降", "example": "The sun <em>goes down</em>.", "emoji": "⬇️" },
                    { "word": "because", "phonetic": "/bɪˈkɒz/", "meaning": "因为", "example": "I like it <em>because</em> it's fun.", "emoji": "💡" }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    { "word": "can", "phonetic": "/kæn/", "meaning": "能，会", "example": "I <em>can</em> swim.", "emoji": "💪" },
                    { "word": "need", "phonetic": "/niːd/", "meaning": "需要", "example": "I <em>need</em> some help.", "emoji": "🙏" },
                    { "word": "drum", "phonetic": "/drʌm/", "meaning": "鼓", "example": "I play the <em>drum</em>.", "emoji": "🥁" },
                    { "word": "ask", "phonetic": "/ɑːsk/", "meaning": "问", "example": "Can I <em>ask</em> you a question?", "emoji": "❓" },
                    { "word": "piano", "phonetic": "/piˈænəʊ/", "meaning": "钢琴", "example": "I play the <em>piano</em>.", "emoji": "🎹" },
                    { "word": "good at", "phonetic": "/ɡʊd æt/", "meaning": "擅长于……的", "example": "I am <em>good at</em> English.", "emoji": "💪" },
                    { "word": "sorry", "phonetic": "/ˈsɒri/", "meaning": "抱歉", "example": "I'm <em>sorry</em>.", "emoji": "😔" },
                    { "word": "cook", "phonetic": "/kʊk/", "meaning": "烹饪", "example": "I can <em>cook</em>.", "emoji": "🍳" },
                    { "word": "watch out", "phonetic": "/wɒtʃ aʊt/", "meaning": "小心", "example": "<em>Watch out</em>!", "emoji": "⚠️" },
                    { "word": "move", "phonetic": "/muːv/", "meaning": "移动", "example": "Don't <em>move</em>.", "emoji": "🏃" },
                    { "word": "again", "phonetic": "/əˈɡen/", "meaning": "再一次，又一次", "example": "Try <em>again</em>!", "emoji": "🔄" },
                    { "word": "give up", "phonetic": "/ɡɪv ʌp/", "meaning": "放弃", "example": "Don't <em>give up</em>!", "emoji": "💪" }
                ]
            },
            "4": {
                "name": "Unit 4",
                "words": [
                    { "word": "minute", "phonetic": "/ˈmɪnɪt/", "meaning": "分钟", "example": "Wait a <em>minute</em>.", "emoji": "⏱️" },
                    { "word": "late", "phonetic": "/leɪt/", "meaning": "晚的，迟到的", "example": "Don't be <em>late</em>.", "emoji": "⏰" },
                    { "word": "What time is it?", "phonetic": "/wɒt taɪm ɪz ɪt/", "meaning": "几点了？", "example": "<em>What time is it?</em>", "emoji": "🕐" },
                    { "word": "time", "phonetic": "/taɪm/", "meaning": "时间", "example": "What <em>time</em> is it?", "emoji": "⏰" },
                    { "word": "exercise", "phonetic": "/ˈeksəsaɪz/", "meaning": "习题，练习", "example": "Do the <em>exercise</em>.", "emoji": "📝" },
                    { "word": "o'clock", "phonetic": "/əˈklɒk/", "meaning": "……点钟", "example": "It's 7 <em>o'clock</em>.", "emoji": "🕐" },
                    { "word": "have lunch", "phonetic": "/hæv lʌntʃ/", "meaning": "吃午餐", "example": "I <em>have lunch</em> at 12.", "emoji": "🥪" },
                    { "word": "do homework", "phonetic": "/duː ˈhəʊmwɜːk/", "meaning": "做家庭作业", "example": "I <em>do homework</em> after school.", "emoji": "📝" },
                    { "word": "make breakfast", "phonetic": "/meɪk ˈbrekfəst/", "meaning": "做早餐", "example": "Mom <em>makes breakfast</em>.", "emoji": "🍳" },
                    { "word": "go to work", "phonetic": "/ɡəʊ tuː wɜːk/", "meaning": "去上班", "example": "Dad <em>goes to work</em> at 8.", "emoji": "💼" },
                    { "word": "have dinner", "phonetic": "/hæv ˈdɪnə(r)/", "meaning": "吃晚饭", "example": "We <em>have dinner</em> at 6.", "emoji": "🍽️" },
                    { "word": "go home", "phonetic": "/ɡəʊ həʊm/", "meaning": "回家", "example": "I <em>go home</em> at 4.", "emoji": "🏠" },
                    { "word": "go to bed", "phonetic": "/ɡəʊ tuː bed/", "meaning": "睡觉，就寝", "example": "I <em>go to bed</em> at 9.", "emoji": "🛏️" },
                    { "word": "save", "phonetic": "/seɪv/", "meaning": "节省，节约", "example": "<em>Save</em> time.", "emoji": "⏰" },
                    { "word": "when", "phonetic": "/wen/", "meaning": "什么时候", "example": "<em>When</em> do you get up?", "emoji": "🕐" },
                    { "word": "dream", "phonetic": "/driːm/", "meaning": "梦", "example": "I have a <em>dream</em>.", "emoji": "💭" },
                    { "word": "hour", "phonetic": "/aʊə(r)/", "meaning": "小时", "example": "There are 60 minutes in an <em>hour</em>.", "emoji": "⏳" }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    { "word": "light rain", "phonetic": "/laɪt reɪn/", "meaning": "小雨", "example": "It's <em>light rain</em>.", "emoji": "🌦️" },
                    { "word": "weather", "phonetic": "/ˈweðə(r)/", "meaning": "天气", "example": "How is the <em>weather</em>?", "emoji": "🌤️" },
                    { "word": "windy", "phonetic": "/ˈwɪndi/", "meaning": "多风的", "example": "It's <em>windy</em>.", "emoji": "💨" },
                    { "word": "sunny", "phonetic": "/ˈsʌni/", "meaning": "阳光充足的", "example": "It's <em>sunny</em>.", "emoji": "☀️" },
                    { "word": "rainy", "phonetic": "/ˈreɪni/", "meaning": "阴雨的", "example": "It's <em>rainy</em>.", "emoji": "🌧️" },
                    { "word": "raincoat", "phonetic": "/ˈreɪnkəʊt/", "meaning": "雨衣", "example": "Wear your <em>raincoat</em>.", "emoji": "🧥" },
                    { "word": "umbrella", "phonetic": "/ʌmˈbrelə/", "meaning": "雨伞", "example": "Take your <em>umbrella</em>.", "emoji": "☂️" },
                    { "word": "snowy", "phonetic": "/ˈsnəʊi/", "meaning": "下雪多的", "example": "It's <em>snowy</em>.", "emoji": "🌨️" },
                    { "word": "cloudy", "phonetic": "/ˈklaʊdi/", "meaning": "多云的，阴天的", "example": "It's <em>cloudy</em>.", "emoji": "☁️" },
                    { "word": "insect", "phonetic": "/ˈɪnsekt/", "meaning": "昆虫", "example": "The <em>insect</em> is small.", "emoji": "🐛" },
                    { "word": "wake up", "phonetic": "/weɪk ʌp/", "meaning": "醒来", "example": "I <em>wake up</em> at 7.", "emoji": "⏰" },
                    { "word": "trousers", "phonetic": "/ˈtraʊzəz/", "meaning": "裤子", "example": "I wear <em>trousers</em>.", "emoji": "👖" },
                    { "word": "warm", "phonetic": "/wɔːm/", "meaning": "暖和的，温暖的", "example": "Spring is <em>warm</em>.", "emoji": "🌡️" },
                    { "word": "hot", "phonetic": "/hɒt/", "meaning": "炎热的", "example": "Summer is <em>hot</em>.", "emoji": "🥵" },
                    { "word": "skirt", "phonetic": "/skɜːt/", "meaning": "裙子", "example": "She wears a <em>skirt</em>.", "emoji": "👗" },
                    { "word": "very", "phonetic": "/ˈveri/", "meaning": "很，非常", "example": "It's <em>very</em> hot.", "emoji": "💯" },
                    { "word": "cool", "phonetic": "/kuːl/", "meaning": "凉快的", "example": "Autumn is <em>cool</em>.", "emoji": "🍃" },
                    { "word": "cold", "phonetic": "/kəʊld/", "meaning": "寒冷的", "example": "Winter is <em>cold</em>.", "emoji": "🥶" },
                    { "word": "begin", "phonetic": "/bɪˈɡɪn/", "meaning": "开始", "example": "Let's <em>begin</em>.", "emoji": "▶️" },
                    { "word": "bring", "phonetic": "/brɪŋ/", "meaning": "带来，带到", "example": "<em>Bring</em> your umbrella.", "emoji": "🤲" },
                    { "word": "bad", "phonetic": "/bæd/", "meaning": "坏的", "example": "The weather is <em>bad</em>.", "emoji": "👎" },
                    { "word": "stand", "phonetic": "/stænd/", "meaning": "站立", "example": "<em>Stand</em> up.", "emoji": "🧍" },
                    { "word": "under", "phonetic": "/ˈʌndə(r)/", "meaning": "在……下面", "example": "The cat is <em>under</em> the tree.", "emoji": "⬇️" },
                    { "word": "tree", "phonetic": "/triː/", "meaning": "树", "example": "The <em>tree</em> is tall.", "emoji": "🌳" },
                    { "word": "heavy rain", "phonetic": "/ˈhevi reɪn/", "meaning": "强降雨", "example": "There is <em>heavy rain</em>.", "emoji": "⛈️" }
                ]
            }
        }
    },
    "BNU_5下": {
        "name": "五年级下册（北师大版）",
        "grade": 5,
        "semester": "下",
        "units": {
            "7": {
                "name": "Unit 7",
                "words": [
                    { "word": "day", "phonetic": "/deɪ/", "meaning": "一天，一日", "example": "What <em>day</em> is it today?", "emoji": "📅" },
                    { "word": "week", "phonetic": "/wiːk/", "meaning": "星期，周", "example": "There are 7 days in a <em>week</em>.", "emoji": "📅" },
                    { "word": "Wednesday", "phonetic": "/ˈwenzdeɪ/", "meaning": "星期三", "example": "I have PE on <em>Wednesday</em>.", "emoji": "📅" },
                    { "word": "Thursday", "phonetic": "/ˈθɜːzdeɪ/", "meaning": "星期四", "example": "I have art on <em>Thursday</em>.", "emoji": "📅" },
                    { "word": "Monday", "phonetic": "/ˈmʌndeɪ/", "meaning": "星期一", "example": "I have English on <em>Monday</em>.", "emoji": "📅" },
                    { "word": "Sunday", "phonetic": "/ˈsʌndeɪ/", "meaning": "星期日", "example": "I rest on <em>Sunday</em>.", "emoji": "📅" },
                    { "word": "Tuesday", "phonetic": "/ˈtjuːzdeɪ/", "meaning": "星期二", "example": "I have maths on <em>Tuesday</em>.", "emoji": "📅" },
                    { "word": "Friday", "phonetic": "/ˈfraɪdeɪ/", "meaning": "星期五", "example": "I like <em>Friday</em>.", "emoji": "📅" },
                    { "word": "Saturday", "phonetic": "/ˈsætədeɪ/", "meaning": "星期六", "example": "I play on <em>Saturday</em>.", "emoji": "📅" },
                    { "word": "today", "phonetic": "/təˈdeɪ/", "meaning": "今天，今日", "example": "<em>Today</em> is Monday.", "emoji": "📅" },
                    { "word": "every", "phonetic": "/ˈevri/", "meaning": "每一个", "example": "I read <em>every</em> day.", "emoji": "🔁" },
                    { "word": "diary", "phonetic": "/ˈdaɪəri/", "meaning": "日记，日记簿", "example": "I write a <em>diary</em>.", "emoji": "📓" },
                    { "word": "remember", "phonetic": "/rɪˈmembə(r)/", "meaning": "记住", "example": "Please <em>remember</em> this.", "emoji": "🧠" },
                    { "word": "all", "phonetic": "/ɔːl/", "meaning": "全部", "example": "I like them <em>all</em>.", "emoji": "💯" },
                    { "word": "tomorrow", "phonetic": "/təˈmɒrəʊ/", "meaning": "明天", "example": "See you <em>tomorrow</em>.", "emoji": "📅" },
                    { "word": "visit", "phonetic": "/ˈvɪzɪt/", "meaning": "拜访，看望", "example": "I <em>visit</em> my grandma.", "emoji": "🏠" },
                    { "word": "watch", "phonetic": "/wɒtʃ/", "meaning": "观看，注视", "example": "I <em>watch</em> TV.", "emoji": "👀" }
                ]
            },
            "8": {
                "name": "Unit 8",
                "words": [
                    { "word": "time", "phonetic": "/taɪm/", "meaning": "时间，钟点", "example": "What <em>time</em> is it?", "emoji": "⏰" },
                    { "word": "o'clock", "phonetic": "/əˈklɒk/", "meaning": "……点钟", "example": "It's 7 <em>o'clock</em>.", "emoji": "🕐" },
                    { "word": "hurry", "phonetic": "/ˈhʌri/", "meaning": "赶紧", "example": "<em>Hurry</em> up!", "emoji": "🏃" },
                    { "word": "early", "phonetic": "/ˈɜːli/", "meaning": "早的", "example": "I get up <em>early</em>.", "emoji": "🌅" },
                    { "word": "late", "phonetic": "/leɪt/", "meaning": "晚的；迟到的", "example": "Don't be <em>late</em>.", "emoji": "⏰" },
                    { "word": "know", "phonetic": "/nəʊ/", "meaning": "知道，了解", "example": "I <em>know</em> the answer.", "emoji": "💡" },
                    { "word": "fix", "phonetic": "/fɪks/", "meaning": "修理", "example": "He <em>fixes</em> the bike.", "emoji": "🔧" },
                    { "word": "tell", "phonetic": "/tel/", "meaning": "告诉，告知", "example": "<em>Tell</em> me the time.", "emoji": "🗣️" }
                ]
            },
            "9": {
                "name": "Unit 9",
                "words": [
                    { "word": "night", "phonetic": "/naɪt/", "meaning": "夜晚，夜间", "example": "Good <em>night</em>.", "emoji": "🌙" },
                    { "word": "afternoon", "phonetic": "/ˌɑːftəˈnuːn/", "meaning": "下午，午后", "example": "Good <em>afternoon</em>.", "emoji": "🌇" },
                    { "word": "evening", "phonetic": "/ˈiːvnɪŋ/", "meaning": "傍晚，晚上", "example": "Good <em>evening</em>.", "emoji": "🌆" },
                    { "word": "morning", "phonetic": "/ˈmɔːnɪŋ/", "meaning": "早晨，上午", "example": "Good <em>morning</em>.", "emoji": "🌅" },
                    { "word": "space", "phonetic": "/speɪs/", "meaning": "太空", "example": "I want to go to <em>space</em>.", "emoji": "🚀" },
                    { "word": "ask", "phonetic": "/ɑːsk/", "meaning": "问，询问", "example": "Can I <em>ask</em> you?", "emoji": "❓" },
                    { "word": "astronaut", "phonetic": "/ˈæstrənɔːt/", "meaning": "宇航员", "example": "He is an <em>astronaut</em>.", "emoji": "👨‍🚀" },
                    { "word": "when", "phonetic": "/wen/", "meaning": "什么时候", "example": "<em>When</em> do you get up?", "emoji": "🕐" },
                    { "word": "get up", "phonetic": "/ɡet ʌp/", "meaning": "起床", "example": "I <em>get up</em> at 7.", "emoji": "⏰" },
                    { "word": "always", "phonetic": "/ˈɔːlweɪz/", "meaning": "总是", "example": "I <em>always</em> get up early.", "emoji": "🔁" },
                    { "word": "often", "phonetic": "/ˈɒfn/", "meaning": "经常，时常", "example": "I <em>often</em> read books.", "emoji": "🔄" },
                    { "word": "breakfast", "phonetic": "/ˈbrekfəst/", "meaning": "早餐", "example": "I have <em>breakfast</em> at 7.", "emoji": "🍳" },
                    { "word": "sometimes", "phonetic": "/ˈsʌmtaɪmz/", "meaning": "有时，不时", "example": "I <em>sometimes</em> walk to school.", "emoji": "⏳" },
                    { "word": "meat", "phonetic": "/miːt/", "meaning": "肉", "example": "I like <em>meat</em>.", "emoji": "🥩" },
                    { "word": "newspaper", "phonetic": "/ˈnjuːzpeɪpə(r)/", "meaning": "报纸", "example": "Dad reads a <em>newspaper</em>.", "emoji": "📰" },
                    { "word": "exercise", "phonetic": "/ˈeksəsaɪz/", "meaning": "运动，锻炼", "example": "I <em>exercise</em> every day.", "emoji": "🏃" },
                    { "word": "lunch", "phonetic": "/lʌntʃ/", "meaning": "午餐", "example": "I have <em>lunch</em> at 12.", "emoji": "🥪" },
                    { "word": "never", "phonetic": "/ˈnevə(r)/", "meaning": "从不，从未", "example": "I <em>never</em> go to school late.", "emoji": "🚫" }
                ]
            },
            "10": {
                "name": "Unit 10",
                "words": [
                    { "word": "activity", "phonetic": "/ækˈtɪvəti/", "meaning": "活动", "example": "What <em>activity</em> do you like?", "emoji": "🎯" },
                    { "word": "museum", "phonetic": "/mjuˈziːəm/", "meaning": "博物馆", "example": "Let's go to the <em>museum</em>.", "emoji": "🏛️" },
                    { "word": "dinosaur", "phonetic": "/ˈdaɪnəsɔː(r)/", "meaning": "恐龙", "example": "I like <em>dinosaurs</em>.", "emoji": "🦕" },
                    { "word": "film", "phonetic": "/fɪlm/", "meaning": "电影，影片", "example": "Let's see a <em>film</em>.", "emoji": "🎬" },
                    { "word": "shall", "phonetic": "/ʃæl/", "meaning": "……好吗", "example": "<em>Shall</em> we go?", "emoji": "❓" },
                    { "word": "let's", "phonetic": "/lets/", "meaning": "让我们……吧", "example": "<em>Let's</em> go to the park.", "emoji": "👉" },
                    { "word": "homework", "phonetic": "/ˈhəʊmwɜːk/", "meaning": "家庭作业，功课", "example": "I do my <em>homework</em>.", "emoji": "📝" },
                    { "word": "group", "phonetic": "/ɡruːp/", "meaning": "组，群", "example": "We are in a <em>group</em>.", "emoji": "👥" },
                    { "word": "about", "phonetic": "/əˈbaʊt/", "meaning": "关于", "example": "What <em>about</em> you?", "emoji": "💬" },
                    { "word": "enough", "phonetic": "/ɪˈnʌf/", "meaning": "足够的，充足的", "example": "We have <em>enough</em> time.", "emoji": "✅" },
                    { "word": "free", "phonetic": "/friː/", "meaning": "免费的", "example": "It's <em>free</em>!", "emoji": "🆓" },
                    { "word": "by bus", "phonetic": "/baɪ bʌs/", "meaning": "乘公共汽车", "example": "I go to school <em>by bus</em>.", "emoji": "🚌" },
                    { "word": "close", "phonetic": "/kləʊz/", "meaning": "关门，歇业", "example": "The shop is <em>closed</em>.", "emoji": "🚪" },
                    { "word": "by bike", "phonetic": "/baɪ baɪk/", "meaning": "骑自行车", "example": "I go <em>by bike</em>.", "emoji": "🚲" },
                    { "word": "buy", "phonetic": "/baɪ/", "meaning": "买，购买", "example": "I want to <em>buy</em> a book.", "emoji": "🛒" },
                    { "word": "robot", "phonetic": "/ˈrəʊbɒt/", "meaning": "机器人", "example": "The <em>robot</em> is cool.", "emoji": "🤖" },
                    { "word": "by car", "phonetic": "/baɪ kɑː(r)/", "meaning": "乘小轿车", "example": "I go <em>by car</em>.", "emoji": "🚗" },
                    { "word": "on foot", "phonetic": "/ɒn fʊt/", "meaning": "步行", "example": "I go <em>on foot</em>.", "emoji": "🚶" },
                    { "word": "by taxi", "phonetic": "/baɪ ˈtæksi/", "meaning": "乘出租车", "example": "I go <em>by taxi</em>.", "emoji": "🚕" }
                ]
            },
            "11": {
                "name": "Unit 11",
                "words": [
                    { "word": "weather", "phonetic": "/ˈweðə(r)/", "meaning": "天气，气象", "example": "How is the <em>weather</em>?", "emoji": "🌤️" },
                    { "word": "rainy", "phonetic": "/ˈreɪni/", "meaning": "阴雨的", "example": "It's <em>rainy</em> today.", "emoji": "🌧️" },
                    { "word": "sunny", "phonetic": "/ˈsʌni/", "meaning": "阳光充足的", "example": "It's <em>sunny</em> today.", "emoji": "☀️" },
                    { "word": "cloudy", "phonetic": "/ˈklaʊdi/", "meaning": "多云的，阴天的", "example": "It's <em>cloudy</em>.", "emoji": "☁️" },
                    { "word": "snowy", "phonetic": "/ˈsnəʊi/", "meaning": "下雪的", "example": "It's <em>snowy</em>.", "emoji": "🌨️" },
                    { "word": "farm", "phonetic": "/fɑːm/", "meaning": "农场", "example": "We visit a <em>farm</em>.", "emoji": "🌾" },
                    { "word": "dark", "phonetic": "/dɑːk/", "meaning": "深色的；黑暗的", "example": "It's <em>dark</em> outside.", "emoji": "🌑" },
                    { "word": "cloud", "phonetic": "/klaʊd/", "meaning": "云，云朵", "example": "Look at the <em>cloud</em>.", "emoji": "☁️" },
                    { "word": "rain", "phonetic": "/reɪn/", "meaning": "下雨", "example": "It's going to <em>rain</em>.", "emoji": "🌧️" },
                    { "word": "weather report", "phonetic": "/ˈweðə rɪˈpɔːt/", "meaning": "天气预报", "example": "Let's watch the <em>weather report</em>.", "emoji": "📺" },
                    { "word": "scared", "phonetic": "/skeəd/", "meaning": "害怕的", "example": "I'm <em>scared</em>.", "emoji": "😨" },
                    { "word": "fun", "phonetic": "/fʌn/", "meaning": "有趣的，逗乐的", "example": "The game is <em>fun</em>.", "emoji": "🎉" },
                    { "word": "windy", "phonetic": "/ˈwɪndi/", "meaning": "风大的，多风的", "example": "It's <em>windy</em>.", "emoji": "💨" },
                    { "word": "warm", "phonetic": "/wɔːm/", "meaning": "暖和的，温暖的", "example": "Spring is <em>warm</em>.", "emoji": "🌡️" }
                ]
            },
            "12": {
                "name": "Unit 12",
                "words": [
                    { "word": "coat", "phonetic": "/kəʊt/", "meaning": "大衣，外套", "example": "Put on your <em>coat</em>.", "emoji": "🧥" },
                    { "word": "sunglasses", "phonetic": "/ˈsʌnɡlɑːsɪz/", "meaning": "太阳镜，墨镜", "example": "I wear <em>sunglasses</em>.", "emoji": "🕶️" }
                ]
            }
        }
    },
    "BNU_6下": {
        "name": "六年级下册（北师大版）",
        "grade": 6,
        "semester": "下",
        "units": {
            "7": {
                "name": "Unit 7",
                "words": [
                    { "word": "vacation", "phonetic": "/vəˈkeɪʃn/", "meaning": "假期", "example": "I like summer <em>vacation</em>.", "emoji": "🏖️" },
                    { "word": "travel", "phonetic": "/ˈtrævl/", "meaning": "旅行", "example": "I like to <em>travel</em>.", "emoji": "✈️" },
                    { "word": "housework", "phonetic": "/ˈhaʊswɜːk/", "meaning": "家务劳动", "example": "I help with <em>housework</em>.", "emoji": "🧹" },
                    { "word": "over", "phonetic": "/ˈəʊvə(r)/", "meaning": "在……期间", "example": "What did you do <em>over</em> the vacation?", "emoji": "⏳" },
                    { "word": "trip", "phonetic": "/trɪp/", "meaning": "旅行，出行", "example": "We had a school <em>trip</em>.", "emoji": "🎒" },
                    { "word": "London", "phonetic": "/ˈlʌndən/", "meaning": "伦敦", "example": "I went to <em>London</em>.", "emoji": "🇬🇧" },
                    { "word": "exciting", "phonetic": "/ɪkˈsaɪtɪŋ/", "meaning": "令人兴奋的", "example": "The trip was <em>exciting</em>.", "emoji": "🤩" },
                    { "word": "photo", "phonetic": "/ˈfəʊtəʊ/", "meaning": "照片", "example": "I took a <em>photo</em>.", "emoji": "📷" },
                    { "word": "tour", "phonetic": "/tʊə(r)/", "meaning": "游览，观光", "example": "We went on a <em>tour</em>.", "emoji": "🗺️" },
                    { "word": "top", "phonetic": "/tɒp/", "meaning": "顶部，上端", "example": "We climbed to the <em>top</em>.", "emoji": "⬆️" },
                    { "word": "special", "phonetic": "/ˈspeʃl/", "meaning": "特别的", "example": "It was a <em>special</em> day.", "emoji": "⭐" },
                    { "word": "bring", "phonetic": "/brɪŋ/", "meaning": "带来，带回", "example": "I <em>brought</em> a gift.", "emoji": "🤲" },
                    { "word": "weekend", "phonetic": "/ˌwiːkˈend/", "meaning": "周末", "example": "I played on the <em>weekend</em>.", "emoji": "📅" },
                    { "word": "read", "phonetic": "/red/", "meaning": "阅读", "example": "I <em>read</em> a book.", "emoji": "📖" },
                    { "word": "write", "phonetic": "/raɪt/", "meaning": "写", "example": "I <em>wrote</em> a letter.", "emoji": "✍️" }
                ]
            },
            "8": {
                "name": "Unit 8",
                "words": [
                    { "word": "concert", "phonetic": "/ˈkɒnsət/", "meaning": "音乐会", "example": "I went to a <em>concert</em>.", "emoji": "🎵" },
                    { "word": "program", "phonetic": "/ˈprəʊɡræm/", "meaning": "节目单；节目", "example": "Look at the <em>program</em>.", "emoji": "📋" },
                    { "word": "piano", "phonetic": "/piˈænəʊ/", "meaning": "钢琴", "example": "She plays the <em>piano</em>.", "emoji": "🎹" },
                    { "word": "drum", "phonetic": "/drʌm/", "meaning": "鼓", "example": "He plays the <em>drum</em>.", "emoji": "🥁" },
                    { "word": "guitar", "phonetic": "/ɡɪˈtɑː(r)/", "meaning": "吉他", "example": "He plays the <em>guitar</em>.", "emoji": "🎸" },
                    { "word": "flute", "phonetic": "/fluːt/", "meaning": "笛子", "example": "She plays the <em>flute</em>.", "emoji": "🎶" },
                    { "word": "will", "phonetic": "/wɪl/", "meaning": "将，会，要", "example": "I <em>will</em> go to the concert.", "emoji": "🔜" },
                    { "word": "wonderful", "phonetic": "/ˈwʌndəfl/", "meaning": "美妙的", "example": "The music is <em>wonderful</em>.", "emoji": "🌟" },
                    { "word": "begin", "phonetic": "/bɪˈɡɪn/", "meaning": "开始", "example": "The concert <em>begins</em> at 7.", "emoji": "▶️" },
                    { "word": "soon", "phonetic": "/suːn/", "meaning": "不久", "example": "See you <em>soon</em>.", "emoji": "⏳" },
                    { "word": "tonight", "phonetic": "/təˈnaɪt/", "meaning": "今晚", "example": "I <em>will</em> watch TV <em>tonight</em>.", "emoji": "🌙" },
                    { "word": "worried", "phonetic": "/ˈwʌrid/", "meaning": "担忧的", "example": "Don't be <em>worried</em>.", "emoji": "😟" },
                    { "word": "violin", "phonetic": "/ˌvaɪəˈlɪn/", "meaning": "小提琴", "example": "She plays the <em>violin</em>.", "emoji": "🎻" }
                ]
            },
            "9": {
                "name": "Unit 9",
                "words": [
                    { "word": "year", "phonetic": "/jɪə(r)/", "meaning": "年", "example": "Happy New <em>Year</em>!", "emoji": "🎉" },
                    { "word": "live", "phonetic": "/lɪv/", "meaning": "居住", "example": "I <em>live</em> in Beijing.", "emoji": "🏠" },
                    { "word": "people", "phonetic": "/ˈpiːpl/", "meaning": "人，人们", "example": "There are many <em>people</em>.", "emoji": "👥" },
                    { "word": "think", "phonetic": "/θɪŋk/", "meaning": "认为，以为；思考", "example": "I <em>think</em> so.", "emoji": "🤔" },
                    { "word": "life", "phonetic": "/laɪf/", "meaning": "生活；生命", "example": "I like school <em>life</em>.", "emoji": "🌈" },
                    { "word": "hard", "phonetic": "/hɑːd/", "meaning": "困难的", "example": "The question is <em>hard</em>.", "emoji": "💪" },
                    { "word": "happen", "phonetic": "/ˈhæpən/", "meaning": "发生", "example": "What <em>happened</em>?", "emoji": "❗" },
                    { "word": "future", "phonetic": "/ˈfjuːtʃə(r)/", "meaning": "未来", "example": "I want to be a teacher in the <em>future</em>.", "emoji": "🔮" },
                    { "word": "everything", "phonetic": "/ˈevriθɪŋ/", "meaning": "一切，每件事", "example": "<em>Everything</em> is fine.", "emoji": "💯" },
                    { "word": "more", "phonetic": "/mɔː(r)/", "meaning": "更多", "example": "I need <em>more</em> time.", "emoji": "➕" },
                    { "word": "better", "phonetic": "/ˈbetə(r)/", "meaning": "更好的，较好的", "example": "I feel <em>better</em> now.", "emoji": "👍" },
                    { "word": "dirty", "phonetic": "/ˈdɜːti/", "meaning": "脏的", "example": "The water is <em>dirty</em>.", "emoji": "🫧" },
                    { "word": "terrible", "phonetic": "/ˈterəbl/", "meaning": "糟糕的", "example": "The weather is <em>terrible</em>.", "emoji": "😖" },
                    { "word": "believe", "phonetic": "/bɪˈliːv/", "meaning": "认为，相信", "example": "I <em>believe</em> you.", "emoji": "🤝" },
                    { "word": "sea", "phonetic": "/siː/", "meaning": "海洋", "example": "The <em>sea</em> is blue.", "emoji": "🌊" }
                ]
            }
        }
    },
    "YL_3下": {
        "name": "三年级下册（译林版）",
        "grade": 3,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    { "word": "school", "phonetic": "/skuːl/", "meaning": "学校", "example": "I go to <em>school</em>.", "emoji": "🏫" },
                    { "word": "thing", "phonetic": "/θɪŋ/", "meaning": "用品，用具", "example": "Put away your <em>things</em>.", "emoji": "📦" },
                    { "word": "pen", "phonetic": "/pen/", "meaning": "笔，钢笔", "example": "Give me a <em>pen</em>.", "emoji": "🖊️" },
                    { "word": "pencil", "phonetic": "/ˈpensl/", "meaning": "铅笔", "example": "I have a <em>pencil</em>.", "emoji": "✏️" },
                    { "word": "ruler", "phonetic": "/ˈruːlə(r)/", "meaning": "直尺", "example": "This is a <em>ruler</em>.", "emoji": "📏" },
                    { "word": "rubber", "phonetic": "/ˈrʌbə(r)/", "meaning": "橡皮", "example": "I have a <em>rubber</em>.", "emoji": "🧽" },
                    { "word": "schoolbag", "phonetic": "/ˈskuːlbæɡ/", "meaning": "书包", "example": "My <em>schoolbag</em> is blue.", "emoji": "🎒" },
                    { "word": "pencil case", "phonetic": "/ˈpensl keɪs/", "meaning": "铅笔盒，铅笔袋", "example": "Open your <em>pencil case</em>.", "emoji": "✏️" },
                    { "word": "that", "phonetic": "/ðæt/", "meaning": "那，那个", "example": "What's <em>that</em>?", "emoji": "👉" },
                    { "word": "put", "phonetic": "/pʊt/", "meaning": "放，安置", "example": "<em>Put</em> it on the desk.", "emoji": "📥" },
                    { "word": "guess", "phonetic": "/ɡes/", "meaning": "猜测，估计", "example": "Can you <em>guess</em>?", "emoji": "🤔" },
                    { "word": "again", "phonetic": "/əˈɡen/", "meaning": "再一次，又一次", "example": "Try <em>again</em>.", "emoji": "🔄" },
                    { "word": "long", "phonetic": "/lɒŋ/", "meaning": "长的", "example": "The ruler is <em>long</em>.", "emoji": "📏" },
                    { "word": "Good idea!", "phonetic": "/ɡʊd aɪˈdɪə/", "meaning": "好主意!", "example": "<em>Good idea!</em>", "emoji": "💡" }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    { "word": "our", "phonetic": "/aʊə(r)/", "meaning": "我们的", "example": "<em>Our</em> classroom is big.", "emoji": "🤝" },
                    { "word": "classroom", "phonetic": "/ˈklɑːsruːm/", "meaning": "教室，课堂", "example": "This is <em>our classroom</em>.", "emoji": "🏫" },
                    { "word": "put away", "phonetic": "/pʊt əˈweɪ/", "meaning": "将……收起，放回原处", "example": "<em>Put away</em> your books.", "emoji": "📥" },
                    { "word": "close", "phonetic": "/kləʊz/", "meaning": "关，关闭", "example": "<em>Close</em> the window.", "emoji": "🚪" },
                    { "word": "window", "phonetic": "/ˈwɪndəʊ/", "meaning": "窗，窗户", "example": "Open the <em>window</em>.", "emoji": "🪟" },
                    { "word": "blackboard", "phonetic": "/ˈblækbɔːd/", "meaning": "黑板", "example": "Look at the <em>blackboard</em>.", "emoji": "⬛" },
                    { "word": "chair", "phonetic": "/tʃeə(r)/", "meaning": "椅子", "example": "Sit on the <em>chair</em>.", "emoji": "🪑" },
                    { "word": "sweep", "phonetic": "/swiːp/", "meaning": "打扫，清扫", "example": "<em>Sweep</em> the floor.", "emoji": "🧹" },
                    { "word": "floor", "phonetic": "/flɔː(r)/", "meaning": "地板，地面", "example": "<em>Sweep</em> the floor.", "emoji": "🧹" },
                    { "word": "let", "phonetic": "/let/", "meaning": "让", "example": "<em>Let</em> me help.", "emoji": "👉" },
                    { "word": "us", "phonetic": "/ʌs/", "meaning": "我们", "example": "<em>Let</em> <em>us</em> clean up.", "emoji": "👥" },
                    { "word": "desk", "phonetic": "/desk/", "meaning": "课桌，书桌", "example": "Put it on the <em>desk</em>.", "emoji": "🗄️" },
                    { "word": "dirty", "phonetic": "/ˈdɜːti/", "meaning": "脏的", "example": "The desk is <em>dirty</em>.", "emoji": "🫧" },
                    { "word": "Me too!", "phonetic": "/miː tuː/", "meaning": "我也是!", "example": "— I like English. — <em>Me too!</em>", "emoji": "🙋" },
                    { "word": "All right.", "phonetic": "/ɔːl raɪt/", "meaning": "好的。", "example": "<em>All right.</em>", "emoji": "👌" },
                    { "word": "clean", "phonetic": "/kliːn/", "meaning": "洁净的，干净的", "example": "Keep the room <em>clean</em>.", "emoji": "✨" },
                    { "word": "keep", "phonetic": "/kiːp/", "meaning": "保持，处于", "example": "<em>Keep</em> it clean.", "emoji": "✨" }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    { "word": "rule", "phonetic": "/ruːl/", "meaning": "规则，规章", "example": "Follow the <em>rules</em>.", "emoji": "📋" },
                    { "word": "library", "phonetic": "/ˈlaɪbrəri/", "meaning": "图书馆", "example": "I go to the <em>library</em>.", "emoji": "📚" },
                    { "word": "shout", "phonetic": "/ʃaʊt/", "meaning": "大声说，叫，嚷", "example": "Don't <em>shout</em>.", "emoji": "📢" },
                    { "word": "talk", "phonetic": "/tɔːk/", "meaning": "说话，讲话", "example": "Don't <em>talk</em>.", "emoji": "🗣️" },
                    { "word": "eat", "phonetic": "/iːt/", "meaning": "吃", "example": "Don't <em>eat</em> in class.", "emoji": "🍽️" },
                    { "word": "run", "phonetic": "/rʌn/", "meaning": "跑，奔跑", "example": "Don't <em>run</em>.", "emoji": "🏃" },
                    { "word": "Mrs", "phonetic": "/ˈmɪsɪz/", "meaning": "太太，夫人", "example": "<em>Mrs</em> Li is kind.", "emoji": "👩" },
                    { "word": "sit down", "phonetic": "/sɪt daʊn/", "meaning": "坐下", "example": "<em>Sit down</em>, please.", "emoji": "🪑" },
                    { "word": "late", "phonetic": "/leɪt/", "meaning": "迟的，晚的", "example": "Don't be <em>late</em>.", "emoji": "⏰" },
                    { "word": "look out of", "phonetic": "/lʊk aʊt ɒv/", "meaning": "朝……外看", "example": "Don't <em>look out of</em> the window.", "emoji": "🪟" },
                    { "word": "on", "phonetic": "/ɒn/", "meaning": "在……上面", "example": "The book is <em>on</em> the desk.", "emoji": "⬆️" },
                    { "word": "shh", "phonetic": "/ʃ/", "meaning": "嘘", "example": "<em>Shh</em>! Be quiet.", "emoji": "🤫" },
                    { "word": "fun", "phonetic": "/fʌn/", "meaning": "有趣的", "example": "It's <em>fun</em>!", "emoji": "🎉" },
                    { "word": "quiet", "phonetic": "/ˈkwaɪət/", "meaning": "安静的", "example": "Be <em>quiet</em>.", "emoji": "🤫" },
                    { "word": "follow", "phonetic": "/ˈfɒləʊ/", "meaning": "遵循，听从", "example": "<em>Follow</em> the rules.", "emoji": "👉" },
                    { "word": "Would you like ...?", "phonetic": "/wʊd juː laɪk/", "meaning": "你想要……吗?", "example": "<em>Would you like</em> a sweet?", "emoji": "❓" },
                    { "word": "sweet", "phonetic": "/swiːt/", "meaning": "糖果", "example": "Here's a <em>sweet</em>.", "emoji": "🍬" },
                    { "word": "look at", "phonetic": "/lʊk æt/", "meaning": "看，瞧", "example": "<em>Look at</em> the blackboard.", "emoji": "👀" },
                    { "word": "That's all right.", "phonetic": "/ðæts ɔːl raɪt/", "meaning": "不要紧。", "example": "<em>That's all right.</em>", "emoji": "👌" }
                ]
            },
            "4": {
                "name": "Unit 4",
                "words": [
                    { "word": "have fun", "phonetic": "/hæv fʌn/", "meaning": "玩得高兴", "example": "Let's <em>have fun</em>.", "emoji": "🎉" },
                    { "word": "after class", "phonetic": "/ˈɑːftə klɑːs/", "meaning": "课后", "example": "We play <em>after class</em>.", "emoji": "🔔" },
                    { "word": "behind", "phonetic": "/bɪˈhaɪnd/", "meaning": "在……的后面", "example": "The cat is <em>behind</em> the tree.", "emoji": "🔙" },
                    { "word": "tree", "phonetic": "/triː/", "meaning": "树，树木", "example": "The <em>tree</em> is tall.", "emoji": "🌳" },
                    { "word": "by", "phonetic": "/baɪ/", "meaning": "在……旁边", "example": "Stand <em>by</em> the tree.", "emoji": "📍" },
                    { "word": "under", "phonetic": "/ˈʌndə(r)/", "meaning": "在……下面", "example": "The cat is <em>under</em> the tree.", "emoji": "⬇️" },
                    { "word": "flower", "phonetic": "/ˈflaʊə(r)/", "meaning": "花，花朵", "example": "The <em>flower</em> is red.", "emoji": "🌸" },
                    { "word": "over", "phonetic": "/ˈəʊvə(r)/", "meaning": "结束", "example": "Class is <em>over</em>.", "emoji": "🏁" },
                    { "word": "play", "phonetic": "/pleɪ/", "meaning": "玩耍", "example": "Let's <em>play</em>.", "emoji": "🎮" },
                    { "word": "go", "phonetic": "/ɡəʊ/", "meaning": "开始；移动", "example": "Let's <em>go</em>!", "emoji": "🏃" },
                    { "word": "plane", "phonetic": "/pleɪn/", "meaning": "飞机", "example": "I can see a <em>plane</em>.", "emoji": "✈️" },
                    { "word": "very", "phonetic": "/ˈveri/", "meaning": "很，非常", "example": "It's <em>very</em> far.", "emoji": "💯" },
                    { "word": "far", "phonetic": "/fɑː(r)/", "meaning": "远", "example": "The plane is <em>far</em>.", "emoji": "📏" },
                    { "word": "where", "phonetic": "/weə(r)/", "meaning": "在哪里，到哪里", "example": "<em>Where</em> is the bird?", "emoji": "❓" },
                    { "word": "find", "phonetic": "/faɪnd/", "meaning": "找到", "example": "I can't <em>find</em> it.", "emoji": "🔍" },
                    { "word": "student", "phonetic": "/ˈstjuːdnt/", "meaning": "学生", "example": "I am a <em>student</em>.", "emoji": "🎓" },
                    { "word": "garden", "phonetic": "/ˈɡɑːdn/", "meaning": "花园，园圃", "example": "The <em>garden</em> is beautiful.", "emoji": "🌺" },
                    { "word": "butterfly", "phonetic": "/ˈbʌtəflaɪ/", "meaning": "蝴蝶", "example": "I see a <em>butterfly</em>.", "emoji": "🦋" },
                    { "word": "beautiful", "phonetic": "/ˈbjuːtɪfl/", "meaning": "美丽的，美好的", "example": "The flower is <em>beautiful</em>.", "emoji": "🌸" },
                    { "word": "duck", "phonetic": "/dʌk/", "meaning": "鸭子", "example": "I see a <em>duck</em>.", "emoji": "🦆" },
                    { "word": "of", "phonetic": "/ɒv/", "meaning": "关于", "example": "A <em>of</em> B.", "emoji": "📝" }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    { "word": "fruit", "phonetic": "/fruːt/", "meaning": "水果", "example": "I like <em>fruit</em>.", "emoji": "🍎" },
                    { "word": "orange", "phonetic": "/ˈɒrɪndʒ/", "meaning": "橙子，柑橘", "example": "I like <em>oranges</em>.", "emoji": "🍊" },
                    { "word": "grape", "phonetic": "/ɡreɪp/", "meaning": "葡萄", "example": "I like <em>grapes</em>.", "emoji": "🍇" },
                    { "word": "banana", "phonetic": "/bəˈnɑːnə/", "meaning": "香蕉", "example": "I like <em>bananas</em>.", "emoji": "🍌" },
                    { "word": "apple", "phonetic": "/ˈæpl/", "meaning": "苹果", "example": "I like <em>apples</em>.", "emoji": "🍎" },
                    { "word": "mango", "phonetic": "/ˈmæŋɡəʊ/", "meaning": "芒果", "example": "I like <em>mangoes</em>.", "emoji": "🥭" },
                    { "word": "share", "phonetic": "/ʃeə(r)/", "meaning": "分享，共享", "example": "Let's <em>share</em>.", "emoji": "🤝" },
                    { "word": "like", "phonetic": "/laɪk/", "meaning": "喜欢，喜爱", "example": "I <em>like</em> apples.", "emoji": "❤️" },
                    { "word": "they", "phonetic": "/ðeɪ/", "meaning": "它们，他们，她们", "example": "<em>They</em> are sweet.", "emoji": "👥" },
                    { "word": "sweet", "phonetic": "/swiːt/", "meaning": "甜的", "example": "The apple is <em>sweet</em>.", "emoji": "🍯" },
                    { "word": "make", "phonetic": "/meɪk/", "meaning": "做，制造", "example": "Let's <em>make</em> a salad.", "emoji": "👨‍🍳" },
                    { "word": "salad", "phonetic": "/ˈsæləd/", "meaning": "色拉，沙拉", "example": "I like <em>salad</em>.", "emoji": "🥗" },
                    { "word": "together", "phonetic": "/təˈɡeðə(r)/", "meaning": "在一起，共同", "example": "Let's do it <em>together</em>.", "emoji": "🤝" },
                    { "word": "an", "phonetic": "/ən/", "meaning": "一（个）", "example": "I have <em>an</em> apple.", "emoji": "1️⃣" },
                    { "word": "What about you?", "phonetic": "/wɒt əˈbaʊt juː/", "meaning": "你呢?", "example": "I like apples. <em>What about you?</em>", "emoji": "❓" },
                    { "word": "nice", "phonetic": "/naɪs/", "meaning": "好的", "example": "It's <em>nice</em>.", "emoji": "👍" }
                ]
            },
            "6": {
                "name": "Unit 6",
                "words": [
                    { "word": "farm", "phonetic": "/fɑːm/", "meaning": "农场", "example": "I visit a <em>farm</em>.", "emoji": "🌾" },
                    { "word": "cow", "phonetic": "/kaʊ/", "meaning": "奶牛", "example": "The <em>cow</em> is big.", "emoji": "🐄" },
                    { "word": "sheep", "phonetic": "/ʃiːp/", "meaning": "羊，绵羊", "example": "The <em>sheep</em> is white.", "emoji": "🐑" },
                    { "word": "rabbit", "phonetic": "/ˈræbɪt/", "meaning": "兔子", "example": "The <em>rabbit</em> is cute.", "emoji": "🐰" },
                    { "word": "chicken", "phonetic": "/ˈtʃɪkɪn/", "meaning": "鸡", "example": "I see a <em>chicken</em>.", "emoji": "🐔" },
                    { "word": "carrot", "phonetic": "/ˈkærət/", "meaning": "胡萝卜", "example": "I like <em>carrots</em>.", "emoji": "🥕" },
                    { "word": "pig", "phonetic": "/pɪɡ/", "meaning": "猪", "example": "The <em>pig</em> is pink.", "emoji": "🐷" },
                    { "word": "Welcome to ...", "phonetic": "/ˈwelkəm tuː/", "meaning": "欢迎来到……", "example": "<em>Welcome to</em> our farm.", "emoji": "👋" },
                    { "word": "home", "phonetic": "/həʊm/", "meaning": "家，住所", "example": "Welcome <em>home</em>.", "emoji": "🏠" },
                    { "word": "these", "phonetic": "/ðiːz/", "meaning": "这些", "example": "<em>These</em> are carrots.", "emoji": "👉" },
                    { "word": "those", "phonetic": "/ðəʊz/", "meaning": "那些", "example": "<em>Those</em> are cows.", "emoji": "👉" },
                    { "word": "help", "phonetic": "/help/", "meaning": "帮助，协助", "example": "Let me <em>help</em> you.", "emoji": "🤝" },
                    { "word": "cute", "phonetic": "/kjuːt/", "meaning": "可爱的", "example": "The rabbit is <em>cute</em>.", "emoji": "😍" },
                    { "word": "move", "phonetic": "/muːv/", "meaning": "移动", "example": "Don't <em>move</em>.", "emoji": "🏃" }
                ]
            },
            "7": {
                "name": "Unit 7",
                "words": [
                    { "word": "animal", "phonetic": "/ˈænɪml/", "meaning": "动物", "example": "I like <em>animals</em>.", "emoji": "🐾" },
                    { "word": "monkey", "phonetic": "/ˈmʌŋki/", "meaning": "猴子", "example": "The <em>monkey</em> is funny.", "emoji": "🐵" },
                    { "word": "lion", "phonetic": "/ˈlaɪən/", "meaning": "狮子", "example": "The <em>lion</em> is strong.", "emoji": "🦁" },
                    { "word": "bear", "phonetic": "/beə(r)/", "meaning": "熊", "example": "The <em>bear</em> is big.", "emoji": "🐻" },
                    { "word": "tiger", "phonetic": "/ˈtaɪɡə(r)/", "meaning": "老虎", "example": "The <em>tiger</em> is big.", "emoji": "🐯" },
                    { "word": "panda", "phonetic": "/ˈpændə/", "meaning": "大熊猫", "example": "The <em>panda</em> is cute.", "emoji": "🐼" },
                    { "word": "elephant", "phonetic": "/ˈelɪfənt/", "meaning": "大象", "example": "The <em>elephant</em> is big.", "emoji": "🐘" },
                    { "word": "lunchtime", "phonetic": "/ˈlʌntʃtaɪm/", "meaning": "午餐时间", "example": "It's <em>lunchtime</em>.", "emoji": "🍱" },
                    { "word": "fish", "phonetic": "/fɪʃ/", "meaning": "鱼；鱼肉", "example": "I like <em>fish</em>.", "emoji": "🐟" },
                    { "word": "high five", "phonetic": "/haɪ faɪv/", "meaning": "相互击掌", "example": "Give me a <em>high five</em>!", "emoji": "🖐️" },
                    { "word": "feed", "phonetic": "/fiːd/", "meaning": "给食物，喂养", "example": "Don't <em>feed</em> the animals.", "emoji": "🚫" },
                    { "word": "zoo", "phonetic": "/zuː/", "meaning": "动物园", "example": "Let's go to the <em>zoo</em>.", "emoji": "🦁" },
                    { "word": "go", "phonetic": "/ɡəʊ/", "meaning": "去，走", "example": "Let's <em>go</em> to the zoo.", "emoji": "🚶" },
                    { "word": "see", "phonetic": "/siː/", "meaning": "看，见", "example": "I can <em>see</em> a panda.", "emoji": "👀" }
                ]
            },
            "8": {
                "name": "Unit 8",
                "words": [
                    { "word": "colour", "phonetic": "/ˈkʌlə(r)/", "meaning": "颜色，色彩", "example": "What <em>colour</em> is it?", "emoji": "🎨" },
                    { "word": "yellow", "phonetic": "/ˈjeləʊ/", "meaning": "黄色的", "example": "It's <em>yellow</em>.", "emoji": "🟡" },
                    { "word": "blue", "phonetic": "/bluː/", "meaning": "蓝色的", "example": "The sky is <em>blue</em>.", "emoji": "🔵" },
                    { "word": "red", "phonetic": "/red/", "meaning": "红色的", "example": "The apple is <em>red</em>.", "emoji": "🔴" },
                    { "word": "orange", "phonetic": "/ˈɒrɪndʒ/", "meaning": "橙红色的", "example": "The cat is <em>orange</em>.", "emoji": "🟠" },
                    { "word": "pink", "phonetic": "/pɪŋk/", "meaning": "粉红色的", "example": "The flower is <em>pink</em>.", "emoji": "💗" },
                    { "word": "green", "phonetic": "/ɡriːn/", "meaning": "绿色的", "example": "The tree is <em>green</em>.", "emoji": "🟢" },
                    { "word": "brown", "phonetic": "/braʊn/", "meaning": "棕色的", "example": "The bear is <em>brown</em>.", "emoji": "🟤" },
                    { "word": "black", "phonetic": "/blæk/", "meaning": "黑色的", "example": "The cat is <em>black</em>.", "emoji": "⚫" },
                    { "word": "white", "phonetic": "/waɪt/", "meaning": "白色的", "example": "The sheep is <em>white</em>.", "emoji": "⚪" },
                    { "word": "buy", "phonetic": "/baɪ/", "meaning": "买", "example": "I want to <em>buy</em> a balloon.", "emoji": "🛒" },
                    { "word": "balloon", "phonetic": "/bəˈluːn/", "meaning": "气球", "example": "I like <em>balloons</em>.", "emoji": "🎈" },
                    { "word": "sure", "phonetic": "/ʃʊə(r)/", "meaning": "当然", "example": "— Can I help? — <em>Sure</em>!", "emoji": "👌" },
                    { "word": "chameleon", "phonetic": "/kəˈmiːliən/", "meaning": "变色龙", "example": "The <em>chameleon</em> changes colour.", "emoji": "🦎" },
                    { "word": "little", "phonetic": "/ˈlɪtl/", "meaning": "小的", "example": "The <em>little</em> bird is cute.", "emoji": "🐤" },
                    { "word": "What colour is ...?", "phonetic": "/wɒt ˈkʌlə(r) ɪz/", "meaning": "……是什么颜色的?", "example": "<em>What colour is</em> the cat?", "emoji": "🎨" },
                    { "word": "How come?", "phonetic": "/haʊ kʌm/", "meaning": "怎么回事?", "example": "<em>How come?</em>", "emoji": "❓" }
                ]
            }
        }
    },
    "YL_4下": {
        "name": "四年级下册（译林版）",
        "grade": 4,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    { "word": "weak", "phonetic": "/wiːk/", "meaning": "虚弱的，无力的", "example": "He is <em>weak</em>.", "emoji": "😮‍💨" },
                    { "word": "strong", "phonetic": "/strɒŋ/", "meaning": "强壮的", "example": "He is <em>strong</em>.", "emoji": "💪" },
                    { "word": "there are", "phonetic": "/ðeər ɑː(r)/", "meaning": "有", "example": "<em>There are</em> many animals.", "emoji": "📦" },
                    { "word": "them", "phonetic": "/ðem/", "meaning": "它们，他们，她们", "example": "I like <em>them</em>.", "emoji": "👥" },
                    { "word": "from", "phonetic": "/frɒm/", "meaning": "来自", "example": "I'm <em>from</em> China.", "emoji": "📍" },
                    { "word": "party", "phonetic": "/ˈpɑːti/", "meaning": "聚会，联欢会", "example": "Come to my <em>party</em>.", "emoji": "🎉" },
                    { "word": "like", "phonetic": "/laɪk/", "meaning": "像", "example": "She <em>is like</em> a sister.", "emoji": "👥" },
                    { "word": "friendship", "phonetic": "/ˈfrendʃɪp/", "meaning": "友谊", "example": "<em>Friendship</em> is important.", "emoji": "🤝" },
                    { "word": "forest", "phonetic": "/ˈfɒrɪst/", "meaning": "森林", "example": "There is a <em>forest</em>.", "emoji": "🌲" },
                    { "word": "thin", "phonetic": "/θɪn/", "meaning": "瘦的", "example": "He is <em>thin</em>.", "emoji": "🍃" },
                    { "word": "back", "phonetic": "/bæk/", "meaning": "背部", "example": "My <em>back</em> hurts.", "emoji": "🔙" },
                    { "word": "angry", "phonetic": "/ˈæŋɡri/", "meaning": "发怒的，生气的", "example": "Don't be <em>angry</em>.", "emoji": "😠" },
                    { "word": "one day", "phonetic": "/wʌn deɪ/", "meaning": "有朝一日", "example": "<em>One day</em> I will be strong.", "emoji": "📅" },
                    { "word": "how", "phonetic": "/haʊ/", "meaning": "怎样，如何", "example": "<em>How</em> are you?", "emoji": "❓" },
                    { "word": "Please!", "phonetic": "/pliːz/", "meaning": "求求你!", "example": "Help me, <em>please!</em>", "emoji": "🙏" },
                    { "word": "Go away!", "phonetic": "/ɡəʊ əˈweɪ/", "meaning": "走开!", "example": "<em>Go away!</em>", "emoji": "🚫" },
                    { "word": "net", "phonetic": "/net/", "meaning": "网", "example": "There is a <em>net</em>.", "emoji": "🕸️" },
                    { "word": "sad", "phonetic": "/sæd/", "meaning": "悲哀的，难过的", "example": "I am <em>sad</em>.", "emoji": "😢" },
                    { "word": "Help!", "phonetic": "/help/", "meaning": "救命啊!", "example": "<em>Help!</em>", "emoji": "🆘" },
                    { "word": "there is", "phonetic": "/ðeər ɪz/", "meaning": "有", "example": "<em>There is</em> a bird.", "emoji": "📦" },
                    { "word": "hole", "phonetic": "/həʊl/", "meaning": "洞", "example": "There is a <em>hole</em>.", "emoji": "🕳️" },
                    { "word": "kind", "phonetic": "/kaɪnd/", "meaning": "友好的，体贴的", "example": "She is <em>kind</em>.", "emoji": "💛" },
                    { "word": "become", "phonetic": "/bɪˈkʌm/", "meaning": "变成，变为", "example": "They <em>become</em> friends.", "emoji": "🦋" }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    { "word": "other", "phonetic": "/ˈʌðə(r)/", "meaning": "另外，其他", "example": "What <em>other</em> rooms?", "emoji": "➡️" },
                    { "word": "room", "phonetic": "/ruːm/", "meaning": "房间", "example": "This is my <em>room</em>.", "emoji": "🏠" },
                    { "word": "computer", "phonetic": "/kəmˈpjuːtə(r)/", "meaning": "计算机，电脑", "example": "I use a <em>computer</em>.", "emoji": "💻" },
                    { "word": "swing", "phonetic": "/swɪŋ/", "meaning": "秋千", "example": "I like the <em>swing</em>.", "emoji": "🎪" },
                    { "word": "playground", "phonetic": "/ˈpleɪɡraʊnd/", "meaning": "游戏场", "example": "We play in the <em>playground</em>.", "emoji": "🏟️" },
                    { "word": "have a look", "phonetic": "/hæv ə lʊk/", "meaning": "看一看", "example": "Let me <em>have a look</em>.", "emoji": "👀" },
                    { "word": "careful", "phonetic": "/ˈkeəfl/", "meaning": "小心，谨慎", "example": "Be <em>careful</em>!", "emoji": "⚠️" },
                    { "word": "feel", "phonetic": "/fiːl/", "meaning": "觉得，感到", "example": "I <em>feel</em> happy.", "emoji": "😊" },
                    { "word": "take", "phonetic": "/teɪk/", "meaning": "带，拿", "example": "<em>Take</em> me to the room.", "emoji": "🤲" },
                    { "word": "first", "phonetic": "/fɜːst/", "meaning": "第一", "example": "It's on the <em>first</em> floor.", "emoji": "1️⃣" },
                    { "word": "floor", "phonetic": "/flɔː(r)/", "meaning": "楼层", "example": "It's on the second <em>floor</em>.", "emoji": "🏢" },
                    { "word": "show ... around", "phonetic": "/ʃəʊ əˈraʊnd/", "meaning": "带……参观", "example": "Let me <em>show</em> you <em>around</em>.", "emoji": "🗺️" },
                    { "word": "any", "phonetic": "/ˈeni/", "meaning": "任何的，任一的", "example": "Are there <em>any</em> swings?", "emoji": "❓" },
                    { "word": "third", "phonetic": "/θɜːd/", "meaning": "第三", "example": "It's on the <em>third</em> floor.", "emoji": "3️⃣" },
                    { "word": "later", "phonetic": "/ˈleɪtə(r)/", "meaning": "以后，后来", "example": "See you <em>later</em>.", "emoji": "⏳" },
                    { "word": "piano", "phonetic": "/piˈænəʊ/", "meaning": "钢琴", "example": "I play the <em>piano</em>.", "emoji": "🎹" },
                    { "word": "second", "phonetic": "/ˈsekənd/", "meaning": "第二", "example": "It's on the <em>second</em> floor.", "emoji": "2️⃣" }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    { "word": "road", "phonetic": "/rəʊd/", "meaning": "道路，公路", "example": "Cross the <em>road</em>.", "emoji": "🛣️" },
                    { "word": "safety", "phonetic": "/ˈseɪfti/", "meaning": "安全，平安", "example": "<em>Safety</em> first!", "emoji": "🛡️" },
                    { "word": "bus", "phonetic": "/bʌs/", "meaning": "公共汽车，巴士", "example": "I go <em>by bus</em>.", "emoji": "🚌" },
                    { "word": "traffic light", "phonetic": "/ˈtræfɪk laɪt/", "meaning": "交通信号灯", "example": "Look at the <em>traffic light</em>.", "emoji": "🚦" },
                    { "word": "take", "phonetic": "/teɪk/", "meaning": "乘坐，搭乘", "example": "I <em>take</em> the bus.", "emoji": "🚌" },
                    { "word": "busy", "phonetic": "/ˈbɪzi/", "meaning": "人来车往的", "example": "The road is <em>busy</em>.", "emoji": "🚗" },
                    { "word": "stay", "phonetic": "/steɪ/", "meaning": "保持", "example": "<em>Stay</em> safe.", "emoji": "🛡️" },
                    { "word": "close", "phonetic": "/kləʊs/", "meaning": "接近，靠近", "example": "<em>Close</em> to the school.", "emoji": "📍" },
                    { "word": "cross", "phonetic": "/krɒs/", "meaning": "穿越，横过", "example": "Don't <em>cross</em> the road.", "emoji": "🚶" },
                    { "word": "stop", "phonetic": "/stɒp/", "meaning": "停止，停下", "example": "<em>Stop</em> at the red light.", "emoji": "✋" },
                    { "word": "wait", "phonetic": "/weɪt/", "meaning": "等候，等待", "example": "<em>Wait</em> for the green light.", "emoji": "⏳" },
                    { "word": "left", "phonetic": "/left/", "meaning": "向左边", "example": "Turn <em>left</em>.", "emoji": "↪️" },
                    { "word": "right", "phonetic": "/raɪt/", "meaning": "向右边", "example": "Turn <em>right</em>.", "emoji": "↩️" },
                    { "word": "safe", "phonetic": "/seɪf/", "meaning": "安全的", "example": "Be <em>safe</em>!", "emoji": "🛡️" }
                ]
            },
            "4": {
                "name": "Unit 4",
                "words": [
                    { "word": "care about", "phonetic": "/keə(r) əˈbaʊt/", "meaning": "关心，关怀", "example": "I <em>care about</em> you.", "emoji": "❤️" },
                    { "word": "hungry", "phonetic": "/ˈhʌŋɡri/", "meaning": "感到饿的", "example": "I am <em>hungry</em>.", "emoji": "🤤" },
                    { "word": "thirsty", "phonetic": "/ˈθɜːsti/", "meaning": "渴的，口渴的", "example": "I am <em>thirsty</em>.", "emoji": "💧" },
                    { "word": "ill", "phonetic": "/ɪl/", "meaning": "不舒服，有病", "example": "He is <em>ill</em>.", "emoji": "🤒" },
                    { "word": "tired", "phonetic": "/ˈtaɪəd/", "meaning": "疲倦的，疲劳的", "example": "I am <em>tired</em>.", "emoji": "😮‍💨" },
                    { "word": "hot", "phonetic": "/hɒt/", "meaning": "觉得闷热", "example": "I feel <em>hot</em>.", "emoji": "🥵" },
                    { "word": "water", "phonetic": "/ˈwɔːtə(r)/", "meaning": "水", "example": "I want some <em>water</em>.", "emoji": "💧" },
                    { "word": "have a rest", "phonetic": "/hæv ə rest/", "meaning": "休息一下", "example": "Let's <em>have a rest</em>.", "emoji": "😴" },
                    { "word": "What's the matter?", "phonetic": "/wɒts ðə ˈmætə(r)/", "meaning": "怎么了?", "example": "<em>What's the matter?</em>", "emoji": "❓" },
                    { "word": "home", "phonetic": "/həʊm/", "meaning": "到家，在家", "example": "Let's go <em>home</em>.", "emoji": "🏠" },
                    { "word": "bag", "phonetic": "/bæɡ/", "meaning": "包，袋", "example": "My <em>bag</em> is heavy.", "emoji": "🎒" },
                    { "word": "bread", "phonetic": "/bred/", "meaning": "面包", "example": "I eat <em>bread</em>.", "emoji": "🍞" },
                    { "word": "dear", "phonetic": "/dɪə(r)/", "meaning": "亲爱的", "example": "Oh <em>dear</em>!", "emoji": "💝" },
                    { "word": "set the table", "phonetic": "/set ðə ˈteɪbl/", "meaning": "摆放餐具", "example": "Let's <em>set the table</em>.", "emoji": "🍽️" }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    { "word": "eat out", "phonetic": "/iːt aʊt/", "meaning": "去饭店吃饭", "example": "Let's <em>eat out</em>.", "emoji": "🍽️" },
                    { "word": "fried rice", "phonetic": "/fraɪd raɪs/", "meaning": "炒饭", "example": "I like <em>fried rice</em>.", "emoji": "🍚" },
                    { "word": "spring roll", "phonetic": "/sprɪŋ rəʊl/", "meaning": "春卷", "example": "I like <em>spring rolls</em>.", "emoji": "🥟" },
                    { "word": "noodle", "phonetic": "/ˈnuːdl/", "meaning": "面条", "example": "I like <em>noodles</em>.", "emoji": "🍜" },
                    { "word": "tea", "phonetic": "/tiː/", "meaning": "茶", "example": "I like <em>tea</em>.", "emoji": "🍵" },
                    { "word": "juice", "phonetic": "/dʒuːs/", "meaning": "果汁", "example": "I like <em>juice</em>.", "emoji": "🧃" },
                    { "word": "menu", "phonetic": "/ˈmenjuː/", "meaning": "菜单", "example": "Look at the <em>menu</em>.", "emoji": "📋" },
                    { "word": "What would you like?", "phonetic": "/wɒt wʊd juː laɪk/", "meaning": "你想要什么?", "example": "<em>What would you like?</em>", "emoji": "❓" },
                    { "word": "fish and chips", "phonetic": "/fɪʃ ænd tʃɪps/", "meaning": "炸鱼薯条", "example": "I like <em>fish and chips</em>.", "emoji": "🐟" },
                    { "word": "sandwich", "phonetic": "/ˈsænwɪtʃ/", "meaning": "三明治", "example": "I like <em>sandwiches</em>.", "emoji": "🥪" },
                    { "word": "hot dog", "phonetic": "/hɒt dɒɡ/", "meaning": "热狗", "example": "I like <em>hot dogs</em>.", "emoji": "🌭" },
                    { "word": "delicious", "phonetic": "/dɪˈlɪʃəs/", "meaning": "美味的，可口的", "example": "The food is <em>delicious</em>.", "emoji": "😋" },
                    { "word": "Anything else?", "phonetic": "/ˈeniθɪŋ els/", "meaning": "还要其他东西吗?", "example": "<em>Anything else?</em>", "emoji": "❓" },
                    { "word": "a glass of", "phonetic": "/ə ɡlɑːs ɒv/", "meaning": "一杯", "example": "I'd like <em>a glass of</em> juice.", "emoji": "🥤" },
                    { "word": "a cup of", "phonetic": "/ə kʌp ɒv/", "meaning": "一杯", "example": "I'd like <em>a cup of</em> tea.", "emoji": "☕" },
                    { "word": "food", "phonetic": "/fuːd/", "meaning": "食物，食品", "example": "I like Chinese <em>food</em>.", "emoji": "🍲" },
                    { "word": "next time", "phonetic": "/nekst taɪm/", "meaning": "下次", "example": "See you <em>next time</em>.", "emoji": "🔄" },
                    { "word": "hot pot", "phonetic": "/hɒt pɒt/", "meaning": "火锅", "example": "Let's eat <em>hot pot</em>.", "emoji": "🍲" },
                    { "word": "takeaway box", "phonetic": "/ˈteɪkəweɪ bɒks/", "meaning": "打包盒", "example": "Put it in a <em>takeaway box</em>.", "emoji": "📦" }
                ]
            },
            "6": {
                "name": "Unit 6",
                "words": [
                    { "word": "job", "phonetic": "/dʒɒb/", "meaning": "工作，职业", "example": "What's your <em>job</em>?", "emoji": "💼" },
                    { "word": "driver", "phonetic": "/ˈdraɪvə(r)/", "meaning": "驾驶员，司机", "example": "He is a <em>driver</em>.", "emoji": "🚗" },
                    { "word": "nurse", "phonetic": "/nɜːs/", "meaning": "护士", "example": "She is a <em>nurse</em>.", "emoji": "👩‍⚕️" },
                    { "word": "worker", "phonetic": "/ˈwɜːkə(r)/", "meaning": "工人", "example": "He is a <em>worker</em>.", "emoji": "👷" },
                    { "word": "teacher", "phonetic": "/ˈtiːtʃə(r)/", "meaning": "教师", "example": "She is a <em>teacher</em>.", "emoji": "👩‍🏫" },
                    { "word": "doctor", "phonetic": "/ˈdɒktə(r)/", "meaning": "医生", "example": "He is a <em>doctor</em>.", "emoji": "👨‍⚕️" },
                    { "word": "farmer", "phonetic": "/ˈfɑːmə(r)/", "meaning": "农民", "example": "He is a <em>farmer</em>.", "emoji": "👨‍🌾" },
                    { "word": "cook", "phonetic": "/kʊk/", "meaning": "厨师；烹饪", "example": "She is a <em>cook</em>.", "emoji": "👨‍🍳" },
                    { "word": "police officer", "phonetic": "/pəˈliːs ˈɒfɪsə(r)/", "meaning": "警察", "example": "He is a <em>police officer</em>.", "emoji": "👮" },
                    { "word": "hospital", "phonetic": "/ˈhɒspɪtl/", "meaning": "医院", "example": "She works in a <em>hospital</em>.", "emoji": "🏥" },
                    { "word": "parent", "phonetic": "/ˈpeərənt/", "meaning": "父亲，母亲", "example": "My <em>parents</em> love me.", "emoji": "👪" },
                    { "word": "work", "phonetic": "/wɜːk/", "meaning": "工作", "example": "They <em>work</em> hard.", "emoji": "💼" },
                    { "word": "sick", "phonetic": "/sɪk/", "meaning": "生病的，有病的", "example": "The <em>sick</em> boy needs help.", "emoji": "🤒" },
                    { "word": "people", "phonetic": "/ˈpiːpl/", "meaning": "人，人们", "example": "Many <em>people</em> work here.", "emoji": "👥" },
                    { "word": "busy", "phonetic": "/ˈbɪzi/", "meaning": "忙碌的", "example": "They are <em>busy</em>.", "emoji": "😤" },
                    { "word": "taxi", "phonetic": "/ˈtæksi/", "meaning": "出租汽车", "example": "I go <em>by taxi</em>.", "emoji": "🚕" },
                    { "word": "train", "phonetic": "/treɪn/", "meaning": "火车", "example": "I go <em>by train</em>.", "emoji": "🚂" },
                    { "word": "place", "phonetic": "/pleɪs/", "meaning": "地方", "example": "This is a nice <em>place</em>.", "emoji": "📍" },
                    { "word": "way", "phonetic": "/weɪ/", "meaning": "方法，方式", "example": "What a good <em>way</em>!", "emoji": "💡" }
                ]
            },
            "7": {
                "name": "Unit 7",
                "words": [
                    { "word": "chore", "phonetic": "/tʃɔː(r)/", "meaning": "日常事务", "example": "I help with <em>chores</em>.", "emoji": "🧹" },
                    { "word": "dish", "phonetic": "/dɪʃ/", "meaning": "碗，碟", "example": "Wash the <em>dishes</em>.", "emoji": "🍽️" },
                    { "word": "water", "phonetic": "/ˈwɔːtə(r)/", "meaning": "给……浇水", "example": "<em>Water</em> the flowers.", "emoji": "🚿" },
                    { "word": "make the bed", "phonetic": "/meɪk ðə bed/", "meaning": "铺床", "example": "I <em>make the bed</em>.", "emoji": "🛏️" },
                    { "word": "what", "phonetic": "/wɒt/", "meaning": "多么，真，太", "example": "<em>What</em> a nice day!", "emoji": "❗" },
                    { "word": "house", "phonetic": "/haʊs/", "meaning": "房屋，房子", "example": "This is our <em>house</em>.", "emoji": "🏠" },
                    { "word": "Good job!", "phonetic": "/ɡʊd dʒɒb/", "meaning": "干得漂亮!", "example": "<em>Good job!</em>", "emoji": "👍" },
                    { "word": "part of", "phonetic": "/pɑːt ɒv/", "meaning": "……的一部分", "example": "I am <em>part of</em> the family.", "emoji": "🧩" },
                    { "word": "so", "phonetic": "/səʊ/", "meaning": "所以", "example": "I'm tired, <em>so</em> I rest.", "emoji": "➡️" },
                    { "word": "half", "phonetic": "/hɑːf/", "meaning": "一半，半", "example": "It's <em>half</em> past eight.", "emoji": "🕐" },
                    { "word": "past", "phonetic": "/pɑːst/", "meaning": "晚于，在……之后", "example": "It's ten <em>past</em> eight.", "emoji": "⏰" },
                    { "word": "weekend", "phonetic": "/ˌwiːkˈend/", "meaning": "周末", "example": "I help at <em>weekend</em>.", "emoji": "📅" }
                ]
            },
            "8": {
                "name": "Unit 8",
                "words": [
                    { "word": "kitchen", "phonetic": "/ˈkɪtʃɪn/", "meaning": "厨房", "example": "Mom is in the <em>kitchen</em>.", "emoji": "🍳" },
                    { "word": "milk", "phonetic": "/mɪlk/", "meaning": "牛奶", "example": "I drink <em>milk</em>.", "emoji": "🥛" },
                    { "word": "tomato", "phonetic": "/təˈmɑːtəʊ/", "meaning": "番茄，西红柿", "example": "I like <em>tomatoes</em>.", "emoji": "🍅" },
                    { "word": "potato", "phonetic": "/pəˈteɪtəʊ/", "meaning": "马铃薯，土豆", "example": "I like <em>potatoes</em>.", "emoji": "🥔" },
                    { "word": "chicken", "phonetic": "/ˈtʃɪkɪn/", "meaning": "鸡肉", "example": "I like <em>chicken</em>.", "emoji": "🍗" },
                    { "word": "egg", "phonetic": "/eɡ/", "meaning": "鸡蛋", "example": "I eat an <em>egg</em>.", "emoji": "🥚" },
                    { "word": "birthday", "phonetic": "/ˈbɜːθdeɪ/", "meaning": "生日", "example": "Happy <em>birthday</em>!", "emoji": "🎂" },
                    { "word": "soup", "phonetic": "/suːp/", "meaning": "汤", "example": "The <em>soup</em> is yummy.", "emoji": "🍲" },
                    { "word": "him", "phonetic": "/hɪm/", "meaning": "他", "example": "I help <em>him</em>.", "emoji": "👦" },
                    { "word": "really", "phonetic": "/ˈriːəli/", "meaning": "十分，非常", "example": "It's <em>really</em> good!", "emoji": "💯" },
                    { "word": "cut", "phonetic": "/kʌt/", "meaning": "切，割", "example": "<em>Cut</em> the tomato.", "emoji": "🔪" },
                    { "word": "meat", "phonetic": "/miːt/", "meaning": "肉", "example": "I like <em>meat</em>.", "emoji": "🥩" },
                    { "word": "I can't wait!", "phonetic": "/aɪ kɑːnt weɪt/", "meaning": "我等不及了!", "example": "<em>I can't wait!</em>", "emoji": "😆" },
                    { "word": "get", "phonetic": "/ɡet/", "meaning": "去取", "example": "Let me <em>get</em> it.", "emoji": "🤲" }
                ]
            }
        }
    },
    "YL_5下": {
        "name": "五年级下册（译林版）",
        "grade": 5,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    { "word": "prince", "phonetic": "/prɪns/", "meaning": "王子", "example": "The <em>prince</em> is kind.", "emoji": "👑" },
                    { "word": "fairy", "phonetic": "/ˈfeəri/", "meaning": "仙女", "example": "The <em>fairy</em> helps her.", "emoji": "🧚" },
                    { "word": "why", "phonetic": "/waɪ/", "meaning": "为什么", "example": "<em>Why</em> are you sad?", "emoji": "❓" },
                    { "word": "because", "phonetic": "/bɪˈkɒz/", "meaning": "因为", "example": "<em>Because</em> I can't go.", "emoji": "💡" },
                    { "word": "clothes", "phonetic": "/kləʊðz/", "meaning": "衣服", "example": "Put on your <em>clothes</em>.", "emoji": "👗" },
                    { "word": "let", "phonetic": "/let/", "meaning": "让", "example": "<em>Let</em> me help you.", "emoji": "👉" },
                    { "word": "put on", "phonetic": "/pʊt ɒn/", "meaning": "穿上", "example": "<em>Put on</em> your coat.", "emoji": "🧥" },
                    { "word": "before", "phonetic": "/bɪˈfɔː(r)/", "meaning": "在……以前", "example": "Come back <em>before</em> 12.", "emoji": "⏰" },
                    { "word": "have to", "phonetic": "/hæv tuː/", "meaning": "不得不，必须", "example": "I <em>have to</em> go now.", "emoji": "❗" },
                    { "word": "try on", "phonetic": "/traɪ ɒn/", "meaning": "试穿", "example": "<em>Try on</em> the shoe.", "emoji": "👗" },
                    { "word": "fit", "phonetic": "/fɪt/", "meaning": "合适，合身", "example": "The shoe <em>fits</em>.", "emoji": "👌" },
                    { "word": "take off", "phonetic": "/teɪk ɒf/", "meaning": "脱下", "example": "<em>Take off</em> your shoes.", "emoji": "👟" },
                    { "word": "mushroom", "phonetic": "/ˈmʌʃruːm/", "meaning": "蘑菇", "example": "Don't pick the <em>mushroom</em>.", "emoji": "🍄" },
                    { "word": "late", "phonetic": "/leɪt/", "meaning": "迟的，晚的", "example": "I'm <em>late</em>!", "emoji": "⏰" },
                    { "word": "pick", "phonetic": "/pɪk/", "meaning": "摘，拾", "example": "Don't <em>pick</em> the flower.", "emoji": "🌺" },
                    { "word": "understand", "phonetic": "/ˌʌndəˈstænd/", "meaning": "明白，理解", "example": "I <em>understand</em>.", "emoji": "💡" },
                    { "word": "be bad for", "phonetic": "/biː bæd fɔː(r)/", "meaning": "有害的", "example": "It's <em>bad for</em> you.", "emoji": "⚠️" },
                    { "word": "leave ... behind", "phonetic": "/liːv bɪˈhaɪnd/", "meaning": "留下，丢下", "example": "Don't <em>leave</em> it <em>behind</em>.", "emoji": "🚫" }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    { "word": "far from", "phonetic": "/fɑː(r) frɒm/", "meaning": "离……远", "example": "My home is <em>far from</em> school.", "emoji": "📏" },
                    { "word": "moon", "phonetic": "/muːn/", "meaning": "月亮", "example": "I can see the <em>moon</em>.", "emoji": "🌙" },
                    { "word": "street", "phonetic": "/striːt/", "meaning": "街，街道", "example": "I live on Apple <em>Street</em>.", "emoji": "🛣️" },
                    { "word": "near", "phonetic": "/nɪə(r)/", "meaning": "在……附近", "example": "The school is <em>near</em> my home.", "emoji": "📍" },
                    { "word": "city", "phonetic": "/ˈsɪti/", "meaning": "城市", "example": "I live in the <em>city</em>.", "emoji": "🏙️" },
                    { "word": "by ...", "phonetic": "/baɪ/", "meaning": "乘（汽车、火车等）", "example": "I go <em>by</em> bus.", "emoji": "🚌" },
                    { "word": "bus", "phonetic": "/bʌs/", "meaning": "公共汽车，巴士", "example": "I take the <em>bus</em>.", "emoji": "🚌" },
                    { "word": "on foot", "phonetic": "/ɒn fʊt/", "meaning": "步行", "example": "I go <em>on foot</em>.", "emoji": "🚶" },
                    { "word": "metro", "phonetic": "/ˈmetrəʊ/", "meaning": "地铁", "example": "I take the <em>metro</em>.", "emoji": "🚇" },
                    { "word": "taxi", "phonetic": "/ˈtæksi/", "meaning": "出租车，的士", "example": "I take a <em>taxi</em>.", "emoji": "🚕" },
                    { "word": "bike", "phonetic": "/baɪk/", "meaning": "自行车", "example": "I ride a <em>bike</em>.", "emoji": "🚲" },
                    { "word": "plane", "phonetic": "/pleɪn/", "meaning": "飞机", "example": "I go <em>by plane</em>.", "emoji": "✈️" },
                    { "word": "ship", "phonetic": "/ʃɪp/", "meaning": "轮船", "example": "I go <em>by ship</em>.", "emoji": "🚢" },
                    { "word": "train", "phonetic": "/treɪn/", "meaning": "火车", "example": "I go <em>by train</em>.", "emoji": "🚂" },
                    { "word": "ride", "phonetic": "/raɪd/", "meaning": "骑车", "example": "I <em>ride</em> a bike to school.", "emoji": "🚲" },
                    { "word": "show", "phonetic": "/ʃəʊ/", "meaning": "给……看", "example": "<em>Show</em> me your bike.", "emoji": "👉" },
                    { "word": "young", "phonetic": "/jʌŋ/", "meaning": "年幼的", "example": "The <em>young</em> boy is kind.", "emoji": "👦" },
                    { "word": "basket", "phonetic": "/ˈbɑːskɪt/", "meaning": "篮子", "example": "Put it in the <em>basket</em>.", "emoji": "🧺" }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    { "word": "ask the way", "phonetic": "/ɑːsk ðə weɪ/", "meaning": "问路", "example": "Let me <em>ask the way</em>.", "emoji": "🗺️" },
                    { "word": "get to", "phonetic": "/ɡet tuː/", "meaning": "到达", "example": "How do I <em>get to</em> the park?", "emoji": "📍" },
                    { "word": "take", "phonetic": "/teɪk/", "meaning": "搭乘", "example": "<em>Take</em> the bus.", "emoji": "🚌" },
                    { "word": "get on", "phonetic": "/ɡet ɒn/", "meaning": "上车", "example": "<em>Get on</em> the bus.", "emoji": "🚌" },
                    { "word": "station", "phonetic": "/ˈsteɪʃn/", "meaning": "车站", "example": "I'm at the <em>station</em>.", "emoji": "🚉" },
                    { "word": "get off", "phonetic": "/ɡet ɒf/", "meaning": "下车", "example": "<em>Get off</em> at the next stop.", "emoji": "🚶" },
                    { "word": "walk", "phonetic": "/wɔːk/", "meaning": "走，步行", "example": "<em>Walk</em> along the street.", "emoji": "🚶" },
                    { "word": "bookshop", "phonetic": "/ˈbʊkʃɒp/", "meaning": "书店", "example": "I go to the <em>bookshop</em>.", "emoji": "📚" },
                    { "word": "next to", "phonetic": "/nekst tuː/", "meaning": "在……旁边", "example": "It's <em>next to</em> the park.", "emoji": "↔️" },
                    { "word": "sun", "phonetic": "/sʌn/", "meaning": "太阳", "example": "The <em>sun</em> is hot.", "emoji": "☀️" },
                    { "word": "ask ... for help", "phonetic": "/ɑːsk fɔː(r) help/", "meaning": "向……求助", "example": "<em>Ask</em> the policeman <em>for help</em>.", "emoji": "🙋" },
                    { "word": "excuse me", "phonetic": "/ɪkˈskjuːz miː/", "meaning": "劳驾；对不起", "example": "<em>Excuse me</em>, where is the zoo?", "emoji": "🙋" },
                    { "word": "along", "phonetic": "/əˈlɒŋ/", "meaning": "沿着，顺着", "example": "Go <em>along</em> this street.", "emoji": "➡️" },
                    { "word": "turn right", "phonetic": "/tɜːn raɪt/", "meaning": "向右转", "example": "<em>Turn right</em> at the lights.", "emoji": "↩️" },
                    { "word": "traffic light", "phonetic": "/ˈtræfɪk laɪt/", "meaning": "交通灯", "example": "Look at the <em>traffic light</em>.", "emoji": "🚦" },
                    { "word": "on your right", "phonetic": "/ɒn jɔː(r) raɪt/", "meaning": "在你的右侧", "example": "The park is <em>on your right</em>.", "emoji": "➡️" },
                    { "word": "cinema", "phonetic": "/ˈsɪnəmə/", "meaning": "电影院", "example": "Let's go to the <em>cinema</em>.", "emoji": "🎬" },
                    { "word": "hospital", "phonetic": "/ˈhɒspɪtl/", "meaning": "医院", "example": "The <em>hospital</em> is near here.", "emoji": "🏥" },
                    { "word": "shop", "phonetic": "/ʃɒp/", "meaning": "商店", "example": "The <em>shop</em> is on your left.", "emoji": "🏪" },
                    { "word": "zoo", "phonetic": "/zuː/", "meaning": "动物园", "example": "How do I <em>get to</em> the zoo?", "emoji": "🦁" },
                    { "word": "turn left", "phonetic": "/tɜːn left/", "meaning": "向左转", "example": "<em>Turn left</em> at the corner.", "emoji": "↪️" },
                    { "word": "supermarket", "phonetic": "/ˈsuːpəmɑːkɪt/", "meaning": "超市", "example": "I go to the <em>supermarket</em>.", "emoji": "🏬" },
                    { "word": "film", "phonetic": "/fɪlm/", "meaning": "电影", "example": "Let's see a <em>film</em>.", "emoji": "🎬" },
                    { "word": "stop", "phonetic": "/stɒp/", "meaning": "车站", "example": "Get off at the next <em>stop</em>.", "emoji": "🚏" },
                    { "word": "full", "phonetic": "/fʊl/", "meaning": "满的；饱的", "example": "The bus is <em>full</em>.", "emoji": "📦" },
                    { "word": "over", "phonetic": "/ˈəʊvə(r)/", "meaning": "结束了，完了", "example": "The film is <em>over</em>.", "emoji": "🏁" }
                ]
            },
            "4": {
                "name": "Unit 4",
                "words": [
                    { "word": "see the doctor", "phonetic": "/siː ðə ˈdɒktə(r)/", "meaning": "看医生，看病", "example": "You should <em>see the doctor</em>.", "emoji": "👨‍⚕️" },
                    { "word": "feel", "phonetic": "/fiːl/", "meaning": "感觉，感到", "example": "I <em>feel</em> ill.", "emoji": "🤒" },
                    { "word": "check", "phonetic": "/tʃek/", "meaning": "检查", "example": "Let me <em>check</em>.", "emoji": "✅" },
                    { "word": "should", "phonetic": "/ʃʊd/", "meaning": "应该", "example": "You <em>should</em> rest.", "emoji": "💡" },
                    { "word": "have a rest", "phonetic": "/hæv ə rest/", "meaning": "休息", "example": "You should <em>have a rest</em>.", "emoji": "😴" },
                    { "word": "take medicine", "phonetic": "/teɪk ˈmedsn/", "meaning": "吃药", "example": "<em>Take medicine</em> and drink water.", "emoji": "💊" },
                    { "word": "drink water", "phonetic": "/drɪŋk ˈwɔːtə(r)/", "meaning": "喝水", "example": "You should <em>drink water</em>.", "emoji": "💧" },
                    { "word": "toothache", "phonetic": "/ˈtuːθeɪk/", "meaning": "牙疼", "example": "I have a <em>toothache</em>.", "emoji": "😬" },
                    { "word": "dentist", "phonetic": "/ˈdentɪst/", "meaning": "牙医", "example": "I go to the <em>dentist</em>.", "emoji": "🦷" },
                    { "word": "anything", "phonetic": "/ˈeniθɪŋ/", "meaning": "任何东西", "example": "I can't eat <em>anything</em>.", "emoji": "❓" },
                    { "word": "brush one's teeth", "phonetic": "/brʌʃ wʌnz tiːθ/", "meaning": "刷牙", "example": "You should <em>brush your teeth</em>.", "emoji": "🪥" },
                    { "word": "bedtime", "phonetic": "/ˈbedtaɪm/", "meaning": "就寝时间", "example": "It's <em>bedtime</em>.", "emoji": "🌙" },
                    { "word": "giraffe", "phonetic": "/dʒɪˈrɑːf/", "meaning": "长颈鹿", "example": "The <em>giraffe</em> has a long neck.", "emoji": "🦒" },
                    { "word": "point at", "phonetic": "/pɔɪnt æt/", "meaning": "指着，指向", "example": "Don't <em>point at</em> people.", "emoji": "👉" },
                    { "word": "neck", "phonetic": "/nek/", "meaning": "脖子", "example": "The giraffe has a long <em>neck</em>.", "emoji": "🦒" }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    { "word": "parent", "phonetic": "/ˈpeərənt/", "meaning": "父或母", "example": "My <em>parents</em> love me.", "emoji": "👪" },
                    { "word": "clean", "phonetic": "/kliːn/", "meaning": "擦，洗", "example": "I <em>clean</em> the table.", "emoji": "🧹" },
                    { "word": "cook", "phonetic": "/kʊk/", "meaning": "烧，煮", "example": "Mom <em>cooks</em> dinner.", "emoji": "🍳" },
                    { "word": "sweep the floor", "phonetic": "/swiːp ðə flɔː(r)/", "meaning": "扫地", "example": "I <em>sweep the floor</em>.", "emoji": "🧹" },
                    { "word": "busy", "phonetic": "/ˈbɪzi/", "meaning": "忙，忙碌", "example": "I am <em>busy</em>.", "emoji": "😤" },
                    { "word": "wash the dishes", "phonetic": "/wɒʃ ðə ˈdɪʃɪz/", "meaning": "洗碗", "example": "I <em>wash the dishes</em>.", "emoji": "🍽️" },
                    { "word": "make the bed", "phonetic": "/meɪk ðə bed/", "meaning": "整理床铺", "example": "I <em>make the bed</em>.", "emoji": "🛏️" },
                    { "word": "grow", "phonetic": "/ɡrəʊ/", "meaning": "种植", "example": "We <em>grow</em> flowers.", "emoji": "🌱" },
                    { "word": "garden", "phonetic": "/ˈɡɑːdn/", "meaning": "花园，果园", "example": "The <em>garden</em> is beautiful.", "emoji": "🌺" },
                    { "word": "sweet", "phonetic": "/swiːt/", "meaning": "甜的", "example": "The grapes are <em>sweet</em>.", "emoji": "🍯" },
                    { "word": "pest", "phonetic": "/pest/", "meaning": "害虫", "example": "The <em>pest</em> eats the leaves.", "emoji": "🐛" },
                    { "word": "ladybird", "phonetic": "/ˈleɪdibɜːd/", "meaning": "瓢虫", "example": "The <em>ladybird</em> is helpful.", "emoji": "🐞" },
                    { "word": "go away", "phonetic": "/ɡəʊ əˈweɪ/", "meaning": "走了，离开", "example": "The pests <em>go away</em>.", "emoji": "🚶" },
                    { "word": "leaf", "phonetic": "/liːf/", "meaning": "叶子", "example": "The <em>leaf</em> is green.", "emoji": "🍃" }
                ]
            },
            "6": {
                "name": "Unit 6",
                "words": [
                    { "word": "game", "phonetic": "/ɡeɪm/", "meaning": "运动，比赛", "example": "There is a football <em>game</em>.", "emoji": "⚽" },
                    { "word": "smell", "phonetic": "/smel/", "meaning": "有……气味，闻起来", "example": "It <em>smells</em> good.", "emoji": "👃" },
                    { "word": "meat", "phonetic": "/miːt/", "meaning": "肉", "example": "I like <em>meat</em>.", "emoji": "🥩" },
                    { "word": "vegetable", "phonetic": "/ˈvedʒtəbl/", "meaning": "蔬菜", "example": "Eat your <em>vegetables</em>.", "emoji": "🥬" },
                    { "word": "tomato", "phonetic": "/təˈmɑːtəʊ/", "meaning": "西红柿，番茄", "example": "I like <em>tomatoes</em>.", "emoji": "🍅" },
                    { "word": "potato", "phonetic": "/pəˈteɪtəʊ/", "meaning": "马铃薯，土豆", "example": "I like <em>potatoes</em>.", "emoji": "🥔" },
                    { "word": "I can't wait!", "phonetic": "/aɪ kɑːnt weɪt/", "meaning": "我等不及了！", "example": "<em>I can't wait!</em>", "emoji": "😆" },
                    { "word": "look for", "phonetic": "/lʊk fɔː(r)/", "meaning": "找，寻找", "example": "I <em>look for</em> my pen.", "emoji": "🔍" },
                    { "word": "ready", "phonetic": "/ˈredi/", "meaning": "准备好", "example": "Are you <em>ready</em>?", "emoji": "👌" },
                    { "word": "yummy", "phonetic": "/ˈjʌmi/", "meaning": "好吃的，美味的", "example": "The soup is <em>yummy</em>.", "emoji": "😋" },
                    { "word": "love", "phonetic": "/lʌv/", "meaning": "喜欢，喜爱", "example": "I <em>love</em> the food.", "emoji": "❤️" },
                    { "word": "bread", "phonetic": "/bred/", "meaning": "面包", "example": "I eat <em>bread</em>.", "emoji": "🍞" },
                    { "word": "win", "phonetic": "/wɪn/", "meaning": "获胜，赢", "example": "We <em>win</em> the game!", "emoji": "🏆" },
                    { "word": "yeah", "phonetic": "/jeə/", "meaning": "太好了，太棒了", "example": "<em>Yeah!</em> We win!", "emoji": "🎉" },
                    { "word": "angry", "phonetic": "/ˈæŋɡri/", "meaning": "生气的，愤怒的", "example": "Don't be <em>angry</em>.", "emoji": "😠" },
                    { "word": "spot", "phonetic": "/spɒt/", "meaning": "斑，点", "example": "The ladybird has <em>spots</em>.", "emoji": "🔴" },
                    { "word": "catch", "phonetic": "/kætʃ/", "meaning": "抓，抓住", "example": "The cat <em>catches</em> the pest.", "emoji": "🤲" },
                    { "word": "drive ... away", "phonetic": "/draɪv əˈweɪ/", "meaning": "赶走", "example": "<em>Drive</em> the pests <em>away</em>.", "emoji": "🚫" }
                ]
            },
            "7": {
                "name": "Unit 7",
                "words": [
                    { "word": "festival", "phonetic": "/ˈfestɪvl/", "meaning": "节日", "example": "My favourite <em>festival</em> is Spring Festival.", "emoji": "🎉" },
                    { "word": "Spring Festival", "phonetic": "/sprɪŋ ˈfestɪvl/", "meaning": "春节", "example": "<em>Spring Festival</em> is in January.", "emoji": "🧨" },
                    { "word": "January", "phonetic": "/ˈdʒænjuəri/", "meaning": "一月", "example": "<em>January</em> is the first month.", "emoji": "📅" },
                    { "word": "February", "phonetic": "/ˈfebruəri/", "meaning": "二月", "example": "<em>February</em> is the second month.", "emoji": "📅" },
                    { "word": "call", "phonetic": "/kɔːl/", "meaning": "叫作，称作", "example": "We <em>call</em> it Spring Festival.", "emoji": "🗣️" },
                    { "word": "Chinese New Year", "phonetic": "/ˌtʃaɪˈniːz njuː jɪə(r)/", "meaning": "中国农历新年", "example": "<em>Chinese New Year</em> is fun.", "emoji": "🧧" },
                    { "word": "get together", "phonetic": "/ɡet təˈɡeðə(r)/", "meaning": "团聚", "example": "We <em>get together</em> at Spring Festival.", "emoji": "👨‍👩‍👧‍👦" },
                    { "word": "jiaozi", "phonetic": "/ˈdʒaʊˈdzɪ/", "meaning": "饺子", "example": "We eat <em>jiaozi</em>.", "emoji": "🥟" },
                    { "word": "Dragon Boat Festival", "phonetic": "/ˈdræɡən bəʊt ˈfestɪvl/", "meaning": "端午节", "example": "<em>Dragon Boat Festival</em> is in June.", "emoji": "🐲" },
                    { "word": "May", "phonetic": "/meɪ/", "meaning": "五月", "example": "<em>May</em> is the fifth month.", "emoji": "📅" },
                    { "word": "June", "phonetic": "/dʒuːn/", "meaning": "六月", "example": "<em>June</em> is the sixth month.", "emoji": "📅" },
                    { "word": "dragon boat race", "phonetic": "/ˈdræɡən bəʊt reɪs/", "meaning": "赛龙舟", "example": "We watch the <em>dragon boat race</em>.", "emoji": "🐲" },
                    { "word": "place", "phonetic": "/pleɪs/", "meaning": "地方，地点", "example": "It's a nice <em>place</em>.", "emoji": "📍" },
                    { "word": "rice dumpling", "phonetic": "/raɪs ˈdʌmplɪŋ/", "meaning": "粽子", "example": "We eat <em>rice dumplings</em>.", "emoji": "🍙" },
                    { "word": "Mid-Autumn Festival", "phonetic": "/mɪd ˈɔːtəm ˈfestɪvl/", "meaning": "中秋节", "example": "<em>Mid-Autumn Festival</em> is in September.", "emoji": "🌕" },
                    { "word": "September", "phonetic": "/sepˈtembə(r)/", "meaning": "九月", "example": "School starts in <em>September</em>.", "emoji": "📅" },
                    { "word": "October", "phonetic": "/ɒkˈtəʊbə(r)/", "meaning": "十月", "example": "National Day is in <em>October</em>.", "emoji": "📅" },
                    { "word": "moon cake", "phonetic": "/muːn keɪk/", "meaning": "月饼", "example": "We eat <em>moon cakes</em>.", "emoji": "🥮" },
                    { "word": "Double Ninth Festival", "phonetic": "/ˈdʌbl naɪnθ ˈfestɪvl/", "meaning": "重阳节", "example": "<em>Double Ninth Festival</em> is in November.", "emoji": "🏔️" },
                    { "word": "November", "phonetic": "/nəʊˈvembə(r)/", "meaning": "十一月", "example": "<em>November</em> is cool.", "emoji": "📅" },
                    { "word": "old", "phonetic": "/əʊld/", "meaning": "老的，年纪大的", "example": "We visit <em>old</em> people.", "emoji": "👴" },
                    { "word": "mountain", "phonetic": "/ˈmaʊntɪn/", "meaning": "山，山脉", "example": "We climb the <em>mountain</em>.", "emoji": "⛰️" },
                    { "word": "rice cake", "phonetic": "/raɪs keɪk/", "meaning": "重阳糕", "example": "We eat <em>rice cakes</em>.", "emoji": "🍰" },
                    { "word": "Mother's Day", "phonetic": "/ˈmʌðəz deɪ/", "meaning": "母亲节", "example": "<em>Mother's Day</em> is in May.", "emoji": "👩‍👧" },
                    { "word": "Father's Day", "phonetic": "/ˈfɑːðəz deɪ/", "meaning": "父亲节", "example": "<em>Father's Day</em> is in June.", "emoji": "👨‍👦" },
                    { "word": "favourite", "phonetic": "/ˈfeɪvərɪt/", "meaning": "最喜欢的", "example": "My <em>favourite</em> festival is Spring Festival.", "emoji": "⭐" }
                ]
            },
            "8": {
                "name": "Unit 8",
                "words": [
                    { "word": "birthday", "phonetic": "/ˈbɜːθdeɪ/", "meaning": "生日", "example": "Happy <em>birthday</em>!", "emoji": "🎂" },
                    { "word": "eleventh", "phonetic": "/ɪˈlevnθ/", "meaning": "第十一", "example": "My birthday is on the <em>eleventh</em>.", "emoji": "🔢" },
                    { "word": "eighth", "phonetic": "/eɪtθ/", "meaning": "第八", "example": "March the <em>eighth</em>.", "emoji": "🔢" },
                    { "word": "April", "phonetic": "/ˈeɪprəl/", "meaning": "四月", "example": "My birthday is in <em>April</em>.", "emoji": "📅" },
                    { "word": "together", "phonetic": "/təˈɡeðə(r)/", "meaning": "一起", "example": "We play <em>together</em>.", "emoji": "🤝" },
                    { "word": "game", "phonetic": "/ɡeɪm/", "meaning": "游戏", "example": "Let's play a <em>game</em>.", "emoji": "🎮" },
                    { "word": "March", "phonetic": "/mɑːtʃ/", "meaning": "三月", "example": "My birthday is in <em>March</em>.", "emoji": "📅" },
                    { "word": "July", "phonetic": "/dʒuˈlaɪ/", "meaning": "七月", "example": "<em>July</em> is hot.", "emoji": "📅" },
                    { "word": "August", "phonetic": "/ˈɔːɡəst/", "meaning": "八月", "example": "<em>August</em> is a summer month.", "emoji": "📅" },
                    { "word": "December", "phonetic": "/dɪˈsembə(r)/", "meaning": "十二月", "example": "Christmas is in <em>December</em>.", "emoji": "📅" },
                    { "word": "hero", "phonetic": "/ˈhɪərəʊ/", "meaning": "英雄", "example": "He is a <em>hero</em>.", "emoji": "🦸" },
                    { "word": "play", "phonetic": "/pleɪ/", "meaning": "戏，戏剧", "example": "We act in a <em>play</em>.", "emoji": "🎭" },
                    { "word": "number", "phonetic": "/ˈnʌmbə(r)/", "meaning": "数字，数", "example": "What's your <em>number</em>?", "emoji": "🔢" },
                    { "word": "password", "phonetic": "/ˈpɑːswɜːd/", "meaning": "密码", "example": "What's the <em>password</em>?", "emoji": "🔐" },
                    { "word": "answer", "phonetic": "/ˈɑːnsə(r)/", "meaning": "答案", "example": "What's the <em>answer</em>?", "emoji": "💡" },
                    { "word": "fourth", "phonetic": "/fɔːθ/", "meaning": "第四", "example": "April the <em>fourth</em>.", "emoji": "🔢" },
                    { "word": "start", "phonetic": "/stɑːt/", "meaning": "开始", "example": "The <em>play</em> starts.", "emoji": "▶️" },
                    { "word": "fight", "phonetic": "/faɪt/", "meaning": "打仗，打架", "example": "Don't <em>fight</em>.", "emoji": "⚔️" }
                ]
            }
        }
    },
    "YL_6下": {
        "name": "六年级下册（译林版）",
        "grade": 6,
        "semester": "下",
        "units": {
            "1": {
                "name": "Unit 1",
                "words": [
                    { "word": "mouse", "phonetic": "/maʊs/", "meaning": "老鼠", "example": "The <em>mouse</em> is small.", "emoji": "🐭" },
                    { "word": "large", "phonetic": "/lɑːdʒ/", "meaning": "大的", "example": "The elephant is very <em>large</em>.", "emoji": "🐘" },
                    { "word": "strong", "phonetic": "/strɒŋ/", "meaning": "强大的，强壮的", "example": "He is very <em>strong</em>.", "emoji": "💪" },
                    { "word": "walk by", "phonetic": "/wɔːk baɪ/", "meaning": "走过，路过", "example": "I <em>walk by</em> the park every day.", "emoji": "🚶" },
                    { "word": "wake ... up", "phonetic": "/weɪk ʌp/", "meaning": "吵醒，叫醒", "example": "Please don't <em>wake</em> him <em>up</em>.", "emoji": "🔔" },
                    { "word": "some day", "phonetic": "/sʌm deɪ/", "meaning": "某一天", "example": "<em>Some day</em> I will be a doctor.", "emoji": "📅" },
                    { "word": "quietly", "phonetic": "/ˈkwaɪətli/", "meaning": "小声地，安静地", "example": "She walked <em>quietly</em> into the room.", "emoji": "🤫" },
                    { "word": "weak", "phonetic": "/wiːk/", "meaning": "弱的，软弱的", "example": "The old man is <em>weak</em>.", "emoji": "😶" },
                    { "word": "loudly", "phonetic": "/ˈlaʊdli/", "meaning": "大声地", "example": "He speaks <em>loudly</em>.", "emoji": "📢" },
                    { "word": "let ... go", "phonetic": "/let ɡəʊ/", "meaning": "释放，放开", "example": "Please <em>let</em> me <em>go</em>.", "emoji": "🫳" },
                    { "word": "the next day", "phonetic": "/ðə nekst deɪ/", "meaning": "第二天", "example": "<em>The next day</em>, he went to school.", "emoji": "📆" },
                    { "word": "net", "phonetic": "/net/", "meaning": "网", "example": "The fish is in the <em>net</em>.", "emoji": "🥅" },
                    { "word": "bite", "phonetic": "/baɪt/", "meaning": "咬", "example": "The dog may <em>bite</em>.", "emoji": "😬" },
                    { "word": "sharp", "phonetic": "/ʃɑːp/", "meaning": "锋利的，尖的", "example": "The knife is very <em>sharp</em>.", "emoji": "🔪" },
                    { "word": "sadly", "phonetic": "/ˈsædli/", "meaning": "难过地，伤心地", "example": "He walked away <em>sadly</em>.", "emoji": "😢" },
                    { "word": "just then", "phonetic": "/dʒʌst ðen/", "meaning": "就在那时", "example": "<em>Just then</em>, the bell rang.", "emoji": "⏰" },
                    { "word": "soon", "phonetic": "/suːn/", "meaning": "不久，很快", "example": "He will come <em>soon</em>.", "emoji": "⏳" },
                    { "word": "happily", "phonetic": "/ˈhæpɪli/", "meaning": "开心地，高兴地", "example": "They played <em>happily</em> together.", "emoji": "😊" },
                    { "word": "from then on", "phonetic": "/frɒm ðen ɒn/", "meaning": "从那时起", "example": "<em>From then on</em>, they were friends.", "emoji": "🤝" },
                    { "word": "cheer", "phonetic": "/tʃɪə(r)/", "meaning": "欢呼", "example": "Everyone started to <em>cheer</em>.", "emoji": "🎉" },
                    { "word": "hit", "phonetic": "/hɪt/", "meaning": "打，击", "example": "Don't <em>hit</em> others.", "emoji": "👊" },
                    { "word": "deep", "phonetic": "/diːp/", "meaning": "深的", "example": "The river is very <em>deep</em>.", "emoji": "🌊" },
                    { "word": "reach", "phonetic": "/riːtʃ/", "meaning": "够得着", "example": "Can you <em>reach</em> the book?", "emoji": "🫳" },
                    { "word": "quickly", "phonetic": "/ˈkwɪkli/", "meaning": "迅速地，快地", "example": "He ran <em>quickly</em> to school.", "emoji": "🏃" },
                    { "word": "pour ... into", "phonetic": "/pɔː(r) ˈɪntuː/", "meaning": "把……倒入", "example": "Please <em>pour</em> the water <em>into</em> the cup.", "emoji": "🫗" }
                ]
            },
            "2": {
                "name": "Unit 2",
                "words": [
                    { "word": "habit", "phonetic": "/ˈhæbɪt/", "meaning": "习惯", "example": "Good <em>habits</em> are important.", "emoji": "🔄" },
                    { "word": "never", "phonetic": "/ˈnevə(r)/", "meaning": "从不", "example": "I <em>never</em> go to school late.", "emoji": "🚫" },
                    { "word": "late", "phonetic": "/leɪt/", "meaning": "迟，晚", "example": "Don't be <em>late</em> for school.", "emoji": "⏰" },
                    { "word": "put ... in order", "phonetic": "/pʊt ɪn ˈɔːdə(r)/", "meaning": "把……整理得井井有条", "example": "Please <em>put</em> your books <em>in order</em>.", "emoji": "📚" },
                    { "word": "finish", "phonetic": "/ˈfɪnɪʃ/", "meaning": "完成", "example": "I <em>finish</em> my homework before dinner.", "emoji": "✅" },
                    { "word": "tidy", "phonetic": "/ˈtaɪdi/", "meaning": "干净的，整齐的", "example": "Keep your room <em>tidy</em>.", "emoji": "🧹" },
                    { "word": "bad", "phonetic": "/bæd/", "meaning": "不好的，坏的", "example": "<em>Bad</em> habits are hard to change.", "emoji": "👎" },
                    { "word": "sleepy", "phonetic": "/ˈsliːpi/", "meaning": "困的，困倦的", "example": "I feel <em>sleepy</em> in the afternoon.", "emoji": "😴" },
                    { "word": "last night", "phonetic": "/lɑːst naɪt/", "meaning": "昨夜", "example": "<em>Last night</em> I watched a movie.", "emoji": "🌙" },
                    { "word": "fast", "phonetic": "/fɑːst/", "meaning": "快地", "example": "He runs very <em>fast</em>.", "emoji": "⚡" },
                    { "word": "go into", "phonetic": "/ɡəʊ ˈɪntuː/", "meaning": "走进，走入", "example": "She <em>went into</em> the classroom.", "emoji": "🚪" },
                    { "word": "slowly", "phonetic": "/ˈsləʊli/", "meaning": "慢速地", "example": "The old man walked <em>slowly</em>.", "emoji": "🐢" },
                    { "word": "badly", "phonetic": "/ˈbædli/", "meaning": "差地，不好", "example": "He did his homework <em>badly</em>.", "emoji": "😞" }
                ]
            },
            "3": {
                "name": "Unit 3",
                "words": [
                    { "word": "healthy", "phonetic": "/ˈhelθi/", "meaning": "健康的", "example": "We should eat <em>healthy</em> food.", "emoji": "💚" },
                    { "word": "diet", "phonetic": "/ˈdaɪət/", "meaning": "饮食", "example": "A good <em>diet</em> is important.", "emoji": "🥗" },
                    { "word": "a little", "phonetic": "/ə ˈlɪtl/", "meaning": "一点", "example": "I eat <em>a little</em> rice every meal.", "emoji": "🍚" },
                    { "word": "a few", "phonetic": "/ə fjuː/", "meaning": "几个", "example": "There are <em>a few</em> apples on the table.", "emoji": "🍎" },
                    { "word": "at a time", "phonetic": "/æt ə taɪm/", "meaning": "一次", "example": "Eat one egg <em>at a time</em>.", "emoji": "🥚" },
                    { "word": "cola", "phonetic": "/ˈkəʊlə/", "meaning": "可乐", "example": "Don't drink too much <em>cola</em>.", "emoji": "🥤" },
                    { "word": "need", "phonetic": "/niːd/", "meaning": "需要", "example": "We <em>need</em> to drink water every day.", "emoji": "📌" }
                ]
            },
            "4": {
                "name": "Unit 4",
                "words": [
                    { "word": "road", "phonetic": "/rəʊd/", "meaning": "马路，公路", "example": "Be careful when you cross the <em>road</em>.", "emoji": "🛣️" },
                    { "word": "safety", "phonetic": "/ˈseɪfti/", "meaning": "安全", "example": "<em>Safety</em> comes first.", "emoji": "🛡️" },
                    { "word": "cross", "phonetic": "/krɒs/", "meaning": "穿过，穿行", "example": "Please <em>cross</em> the road at the zebra crossing.", "emoji": "🚶" },
                    { "word": "safely", "phonetic": "/ˈseɪfli/", "meaning": "安全地", "example": "We should cross the road <em>safely</em>.", "emoji": "✅" },
                    { "word": "must", "phonetic": "/mʌst/", "meaning": "必须", "example": "You <em>must</em> follow the rules.", "emoji": "⚠️" },
                    { "word": "zebra crossing", "phonetic": "/ˈzebrə ˈkrɒsɪŋ/", "meaning": "斑马线", "example": "Cross the road at the <em>zebra crossing</em>.", "emoji": "🦓" },
                    { "word": "safe", "phonetic": "/seɪf/", "meaning": "安全的", "example": "It is <em>safe</em> to wait on the pavement.", "emoji": "🔒" },
                    { "word": "pavement", "phonetic": "/ˈpeɪvmənt/", "meaning": "人行道", "example": "Walk on the <em>pavement</em>.", "emoji": "🚶" },
                    { "word": "look out for", "phonetic": "/lʊk aʊt fɔː(r)/", "meaning": "当心，提防", "example": "<em>Look out for</em> cars and bikes.", "emoji": "👀" },
                    { "word": "easily", "phonetic": "/ˈiːzəli/", "meaning": "容易地", "example": "We can <em>easily</em> find the way.", "emoji": "👌" },
                    { "word": "follow", "phonetic": "/ˈfɒləʊ/", "meaning": "遵守", "example": "We should <em>follow</em> the traffic rules.", "emoji": "📋" },
                    { "word": "rule", "phonetic": "/ruːl/", "meaning": "规则", "example": "We must follow the <em>rules</em>.", "emoji": "📜" },
                    { "word": "stay", "phonetic": "/steɪ/", "meaning": "保持", "example": "<em>Stay</em> safe on the road.", "emoji": "🛑" },
                    { "word": "light", "phonetic": "/laɪt/", "meaning": "灯", "example": "Wait for the green <em>light</em>.", "emoji": "🚦" }
                ]
            },
            "5": {
                "name": "Unit 5",
                "words": [
                    { "word": "Children's Day", "phonetic": "/ˈtʃɪldrənz deɪ/", "meaning": "儿童节", "example": "<em>Children's Day</em> is on June 1st.", "emoji": "🎈" },
                    { "word": "clown", "phonetic": "/klaʊn/", "meaning": "小丑", "example": "The <em>clown</em> is very funny.", "emoji": "🤡" },
                    { "word": "appear", "phonetic": "/əˈpɪə(r)/", "meaning": "出现", "example": "A rabbit <em>appeared</em> from the hat.", "emoji": "✨" },
                    { "word": "balloon", "phonetic": "/bəˈluːn/", "meaning": "气球", "example": "There are many <em>balloons</em> at the party.", "emoji": "🎈" },
                    { "word": "begin", "phonetic": "/bɪˈɡɪn/", "meaning": "开始", "example": "The show will <em>begin</em> soon.", "emoji": "▶️" },
                    { "word": "put on", "phonetic": "/pʊt ɒn/", "meaning": "上演，表演", "example": "They will <em>put on</em> a play.", "emoji": "🎭" },
                    { "word": "end", "phonetic": "/end/", "meaning": "结束", "example": "The party will <em>end</em> at five.", "emoji": "🏁" }
                ]
            },
            "6": {
                "name": "Unit 6",
                "words": [
                    { "word": "country", "phonetic": "/ˈkʌntri/", "meaning": "国家", "example": "Australia is a big <em>country</em>.", "emoji": "🌍" },
                    { "word": "will", "phonetic": "/wɪl/", "meaning": "将，将要", "example": "I <em>will</em> go to Beijing next week.", "emoji": "🔮" },
                    { "word": "learn", "phonetic": "/lɜːn/", "meaning": "学习", "example": "I want to <em>learn</em> about Australia.", "emoji": "📖" },
                    { "word": "Australia", "phonetic": "/ɒˈstreɪliə/", "meaning": "澳大利亚", "example": "<em>Australia</em> is famous for kangaroos.", "emoji": "🇦🇺" },
                    { "word": "find out", "phonetic": "/faɪnd aʊt/", "meaning": "发现", "example": "Let's <em>find out</em> about this country.", "emoji": "🔍" },
                    { "word": "magazine", "phonetic": "/ˌmæɡəˈziːn/", "meaning": "杂志", "example": "I read a <em>magazine</em> about animals.", "emoji": "📰" },
                    { "word": "kangaroo", "phonetic": "/ˌkæŋɡəˈruː/", "meaning": "袋鼠", "example": "The <em>kangaroo</em> can jump very far.", "emoji": "🦘" },
                    { "word": "koala", "phonetic": "/kəʊˈɑːlə/", "meaning": "考拉", "example": "The <em>koala</em> lives in Australia.", "emoji": "🐨" },
                    { "word": "sport-lover", "phonetic": "/spɔːt ˈlʌvə(r)/", "meaning": "运动爱好者", "example": "He is a <em>sport-lover</em>.", "emoji": "⚽" },
                    { "word": "Australian football", "phonetic": "/ɒˈstreɪliən ˈfʊtbɔːl/", "meaning": "澳式橄榄球", "example": "<em>Australian football</em> is very exciting.", "emoji": "🏈" },
                    { "word": "exciting", "phonetic": "/ɪkˈsaɪtɪŋ/", "meaning": "令人激动的，令人兴奋的", "example": "The game is very <em>exciting</em>.", "emoji": "🎉" },
                    { "word": "Sydney", "phonetic": "/ˈsɪdni/", "meaning": "（澳大利亚城市）悉尼", "example": "<em>Sydney</em> is a big city in Australia.", "emoji": "🏙️" },
                    { "word": "welcome", "phonetic": "/ˈwelkəm/", "meaning": "欢迎", "example": "<em>Welcome</em> to our school!", "emoji": "🤗" },
                    { "word": "visitor", "phonetic": "/ˈvɪzɪtə(r)/", "meaning": "游人，游客", "example": "Many <em>visitors</em> come to China every year.", "emoji": "👥" },
                    { "word": "for example", "phonetic": "/fɔː(r) ɪɡˈzɑːmpl/", "meaning": "例如", "example": "I like fruit, <em>for example</em>, apples and bananas.", "emoji": "💡" },
                    { "word": "London", "phonetic": "/ˈlʌndən/", "meaning": "（英国城市）伦敦", "example": "<em>London</em> is the capital of the UK.", "emoji": "🏙️" },
                    { "word": "Oxford", "phonetic": "/ˈɒksfəd/", "meaning": "（英国城市）牛津", "example": "<em>Oxford</em> is famous for its university.", "emoji": "🏫" },
                    { "word": "like", "phonetic": "/laɪk/", "meaning": "如", "example": "Cities <em>like</em> London and Oxford.", "emoji": "👉" },
                    { "word": "Big Ben", "phonetic": "/bɪɡ ben/", "meaning": "（伦敦）大本钟", "example": "<em>Big Ben</em> is a famous clock tower.", "emoji": "🕰️" },
                    { "word": "London Eye", "phonetic": "/ˈlʌndən aɪ/", "meaning": "（伦敦的摩天轮）伦敦眼", "example": "The <em>London Eye</em> is very tall.", "emoji": "🎡" },
                    { "word": "Tower Bridge", "phonetic": "/ˈtaʊə(r) brɪdʒ/", "meaning": "（伦敦）塔桥", "example": "<em>Tower Bridge</em> is over the River Thames.", "emoji": "🌉" },
                    { "word": "What do you think?", "phonetic": "/wɒt duː juː θɪŋk/", "meaning": "你觉得呢？", "example": "<em>What do you think?</em> It's great!", "emoji": "🤔" },
                    { "word": "month", "phonetic": "/mʌnθ/", "meaning": "月", "example": "There are twelve <em>months</em> in a year.", "emoji": "📅" }
                ]
            },
            "7": {
                "name": "Unit 7",
                "words": [
                    { "word": "summer holiday", "phonetic": "/ˈsʌmə(r) ˈhɒlɪdeɪ/", "meaning": "暑假", "example": "I will go to Beijing this <em>summer holiday</em>.", "emoji": "☀️" },
                    { "word": "go back to", "phonetic": "/ɡəʊ bæk tuː/", "meaning": "回去", "example": "I will <em>go back to</em> my hometown.", "emoji": "🔙" },
                    { "word": "how long", "phonetic": "/haʊ lɒŋ/", "meaning": "多久", "example": "<em>How long</em> will you stay there?", "emoji": "❓" },
                    { "word": "stay", "phonetic": "/steɪ/", "meaning": "停留", "example": "I will <em>stay</em> there for a week.", "emoji": "🏠" },
                    { "word": "sound", "phonetic": "/saʊnd/", "meaning": "听起来，听上去", "example": "That <em>sounds</em> great!", "emoji": "🔊" },
                    { "word": "Disneyland", "phonetic": "/ˈdɪznɪlænd/", "meaning": "迪士尼乐园", "example": "I want to visit <em>Disneyland</em>.", "emoji": "🏰" },
                    { "word": "Ocean Park", "phonetic": "/ˈəʊʃn pɑːk/", "meaning": "（香港）海洋公园", "example": "<em>Ocean Park</em> is in Hong Kong.", "emoji": "🐬" },
                    { "word": "Taipei", "phonetic": "/ˌtaɪˈpeɪ/", "meaning": "台北", "example": "<em>Taipei</em> is a beautiful city.", "emoji": "🏙️" },
                    { "word": "photo", "phonetic": "/ˈfəʊtəʊ/", "meaning": "照片", "example": "I will take many <em>photos</em>.", "emoji": "📷" },
                    { "word": "travel", "phonetic": "/ˈtrævl/", "meaning": "旅游", "example": "I like to <em>travel</em> around the world.", "emoji": "✈️" },
                    { "word": "traveller", "phonetic": "/ˈtrævələ(r)/", "meaning": "旅行者", "example": "He is a brave <em>traveller</em>.", "emoji": "🧳" },
                    { "word": "travel around the world", "phonetic": "/ˈtrævl əˈraʊnd ðə wɜːld/", "meaning": "环游世界", "example": "I dream to <em>travel around the world</em>.", "emoji": "🌏" },
                    { "word": "different", "phonetic": "/ˈdɪfrənt/", "meaning": "不同的", "example": "There are many <em>different</em> places to visit.", "emoji": "🔀" }
                ]
            },
            "8": {
                "name": "Unit 8",
                "words": [
                    { "word": "dream", "phonetic": "/driːm/", "meaning": "梦想", "example": "My <em>dream</em> is to be a doctor.", "emoji": "💫" },
                    { "word": "future", "phonetic": "/ˈfjuːtʃə(r)/", "meaning": "将来，未来", "example": "What do you want to be in the <em>future</em>?", "emoji": "🔮" },
                    { "word": "care about", "phonetic": "/keə(r) əˈbaʊt/", "meaning": "关心，在乎", "example": "We should <em>care about</em> our teeth.", "emoji": "❤️" },
                    { "word": "tooth", "phonetic": "/tuːθ/", "meaning": "牙齿", "example": "Brush your <em>teeth</em> every day.", "emoji": "🦷" },
                    { "word": "astronaut", "phonetic": "/ˈæstrənɔːt/", "meaning": "宇航员", "example": "I want to be an <em>astronaut</em>.", "emoji": "🧑‍🚀" },
                    { "word": "spaceship", "phonetic": "/ˈspeɪsʃɪp/", "meaning": "宇宙飞船", "example": "The <em>spaceship</em> flies into space.", "emoji": "🚀" },
                    { "word": "football player", "phonetic": "/ˈfʊtbɔːl ˈpleɪə(r)/", "meaning": "足球运动员", "example": "He is a famous <em>football player</em>.", "emoji": "⚽" },
                    { "word": "World Cup", "phonetic": "/wɜːld kʌp/", "meaning": "世界杯", "example": "The <em>World Cup</em> is very exciting.", "emoji": "🏆" },
                    { "word": "dancer", "phonetic": "/ˈdɑːnsə(r)/", "meaning": "舞蹈家", "example": "She is a great <em>dancer</em>.", "emoji": "💃" },
                    { "word": "pianist", "phonetic": "/ˈpɪænɪst/", "meaning": "钢琴演奏家", "example": "He wants to be a <em>pianist</em>.", "emoji": "🎹" },
                    { "word": "come true", "phonetic": "/kʌm truː/", "meaning": "实现，成真", "example": "My dream will <em>come true</em> one day.", "emoji": "🌟" },
                    { "word": "take care of", "phonetic": "/teɪk keə(r) ɒv/", "meaning": "爱护；照顾", "example": "We should <em>take care of</em> our health.", "emoji": "🤲" },
                    { "word": "scientist", "phonetic": "/ˈsaɪəntɪst/", "meaning": "科学家", "example": "She wants to be a <em>scientist</em>.", "emoji": "🔬" },
                    { "word": "brave", "phonetic": "/breɪv/", "meaning": "勇敢的", "example": "The boy is very <em>brave</em>.", "emoji": "🦁" },
                    { "word": "artist", "phonetic": "/ˈɑːtɪst/", "meaning": "艺术家", "example": "He is a great <em>artist</em>.", "emoji": "🎨" },
                    { "word": "paint", "phonetic": "/peɪnt/", "meaning": "画画", "example": "She likes to <em>paint</em> pictures.", "emoji": "🖌️" }
                ]
            }
        }
    },
    "WYS_CL1_2下": {
        "name": "二年级下册（外研社版·一年级起点）",
        "grade": 2,
        "semester": "下",
        "units": {
            "1": {
                "name": "Module 1",
                "words": [
                    { "word": "weather", "phonetic": "/ˈweðə(r)/", "meaning": "天气", "example": "What's the <em>weather</em> like today?", "emoji": "🌤️" },
                    { "word": "like", "phonetic": "/laɪk/", "meaning": "像，如同", "example": "What's the weather <em>like</em>?", "emoji": "👉" },
                    { "word": "What's the weather like?", "phonetic": "", "meaning": "天气怎么样？", "example": "<em>What's the weather like?</em> It's sunny.", "emoji": "🌡️" },
                    { "word": "sunny", "phonetic": "/ˈsʌni/", "meaning": "阳光充足的，阳光明媚的", "example": "It's <em>sunny</em> today.", "emoji": "☀️" },
                    { "word": "windy", "phonetic": "/ˈwɪndi/", "meaning": "有风的，刮风的", "example": "It's <em>windy</em> outside.", "emoji": "🌬️" },
                    { "word": "take", "phonetic": "/teɪk/", "meaning": "带，拿", "example": "<em>Take</em> your cap, please.", "emoji": "🤲" },
                    { "word": "cap", "phonetic": "/kæp/", "meaning": "（有帽檐的）帽子", "example": "He is wearing a <em>cap</em>.", "emoji": "🧢" },
                    { "word": "sofa", "phonetic": "/ˈsəʊfə/", "meaning": "沙发", "example": "The cat is on the <em>sofa</em>.", "emoji": "🛋️" },
                    { "word": "street", "phonetic": "/striːt/", "meaning": "街道", "example": "There are many cars in the <em>street</em>.", "emoji": "🛣️" },
                    { "word": "rain", "phonetic": "/reɪn/", "meaning": "下雨；雨", "example": "It's going to <em>rain</em>.", "emoji": "🌧️" },
                    { "word": "snow", "phonetic": "/snəʊ/", "meaning": "下雪", "example": "It will <em>snow</em> tomorrow.", "emoji": "❄️" },
                    { "word": "ski", "phonetic": "/skiː/", "meaning": "滑雪", "example": "I like to <em>ski</em> in winter.", "emoji": "⛷️" }
                ]
            },
            "2": {
                "name": "Module 2",
                "words": [
                    { "word": "photo", "phonetic": "/ˈfəʊtəʊ/", "meaning": "照片", "example": "This is a <em>photo</em> of my family.", "emoji": "📷" },
                    { "word": "newspaper", "phonetic": "/ˈnjuːzpeɪpə(r)/", "meaning": "报纸", "example": "My dad reads the <em>newspaper</em> every morning.", "emoji": "📰" },
                    { "word": "little", "phonetic": "/ˈlɪtl/", "meaning": "年幼的，幼小的", "example": "My <em>little</em> sister is cute.", "emoji": "👶" },
                    { "word": "camera", "phonetic": "/ˈkæmərə/", "meaning": "照相机", "example": "He has a new <em>camera</em>.", "emoji": "📸" },
                    { "word": "smile", "phonetic": "/smaɪl/", "meaning": "微笑", "example": "Please <em>smile</em> for the photo!", "emoji": "😊" },
                    { "word": "draw", "phonetic": "/drɔː/", "meaning": "绘画，画", "example": "I like to <em>draw</em> pictures.", "emoji": "✏️" },
                    { "word": "picture", "phonetic": "/ˈpɪktʃə(r)/", "meaning": "图画；照片", "example": "She is drawing a <em>picture</em>.", "emoji": "🖼️" },
                    { "word": "write", "phonetic": "/raɪt/", "meaning": "写", "example": "I can <em>write</em> my name.", "emoji": "✍️" },
                    { "word": "letter", "phonetic": "/ˈletə(r)/", "meaning": "信", "example": "She is writing a <em>letter</em>.", "emoji": "✉️" },
                    { "word": "colour", "phonetic": "/ˈkʌlə(r)/", "meaning": "给……着色", "example": "Please <em>colour</em> the picture.", "emoji": "🖍️" }
                ]
            },
            "3": {
                "name": "Module 3",
                "words": [
                    { "word": "tidy", "phonetic": "/ˈtaɪdi/", "meaning": "整理，收拾", "example": "Please <em>tidy</em> your room.", "emoji": "🧹" },
                    { "word": "room", "phonetic": "/ruːm/", "meaning": "房间", "example": "My <em>room</em> is very clean.", "emoji": "🏠" },
                    { "word": "do", "phonetic": "/duː/", "meaning": "做，干", "example": "I <em>do</em> my homework every day.", "emoji": "✅" },
                    { "word": "homework", "phonetic": "/ˈhəʊmwɜːk/", "meaning": "家庭作业", "example": "I am doing my <em>homework</em>.", "emoji": "📝" },
                    { "word": "sleep", "phonetic": "/sliːp/", "meaning": "睡觉", "example": "It's time to <em>sleep</em>.", "emoji": "😴" },
                    { "word": "secret", "phonetic": "/ˈsiːkrɪt/", "meaning": "秘密", "example": "I have a <em>secret</em>.", "emoji": "🤫" },
                    { "word": "card", "phonetic": "/kɑːd/", "meaning": "贺卡", "example": "I made a <em>card</em> for my mum.", "emoji": "💳" },
                    { "word": "flower", "phonetic": "/ˈflaʊə(r)/", "meaning": "花", "example": "There are many <em>flowers</em> in the garden.", "emoji": "🌸" },
                    { "word": "science", "phonetic": "/ˈsaɪəns/", "meaning": "科学", "example": "I like <em>science</em> class.", "emoji": "🔬" },
                    { "word": "today", "phonetic": "/təˈdeɪ/", "meaning": "今天", "example": "What day is it <em>today</em>?", "emoji": "📅" }
                ]
            },
            "4": {
                "name": "Module 4",
                "words": [
                    { "word": "call", "phonetic": "/kɔːl/", "meaning": "打电话，通话", "example": "I will <em>call</em> my friend.", "emoji": "📞" },
                    { "word": "noise", "phonetic": "/nɔɪz/", "meaning": "声音，响声", "example": "Don't make a <em>noise</em>.", "emoji": "📢" },
                    { "word": "drink", "phonetic": "/drɪŋk/", "meaning": "喝，饮", "example": "I want to <em>drink</em> some water.", "emoji": "🥤" },
                    { "word": "talk", "phonetic": "/tɔːk/", "meaning": "说话，交谈", "example": "They are <em>talking</em> happily.", "emoji": "💬" },
                    { "word": "stone", "phonetic": "/stəʊn/", "meaning": "石子，石头", "example": "The boy is throwing a <em>stone</em>.", "emoji": "🪨" },
                    { "word": "five-stones", "phonetic": "/faɪv stəʊnz/", "meaning": "五石游戏", "example": "Let's play <em>five-stones</em>.", "emoji": "🎲" },
                    { "word": "behind", "phonetic": "/bɪˈhaɪnd/", "meaning": "在……后面", "example": "The cat is <em>behind</em> the door.", "emoji": "🔙" },
                    { "word": "hide", "phonetic": "/haɪd/", "meaning": "躲藏", "example": "Let's <em>hide</em> behind the tree.", "emoji": "🙈" },
                    { "word": "seek", "phonetic": "/siːk/", "meaning": "寻找", "example": "Ready or not, I will <em>seek</em> you.", "emoji": "🔍" },
                    { "word": "hide-and-seek", "phonetic": "/haɪd ənd siːk/", "meaning": "捉迷藏", "example": "Let's play <em>hide-and-seek</em>.", "emoji": "😄" }
                ]
            },
            "5": {
                "name": "Module 5",
                "words": [
                    { "word": "skip", "phonetic": "/skɪp/", "meaning": "跳绳", "example": "I like to <em>skip</em> in the playground.", "emoji": "⏭️" },
                    { "word": "hurry up", "phonetic": "/ˈhʌri ʌp/", "meaning": "赶快", "example": "<em>Hurry up!</em> We are late.", "emoji": "🏃" },
                    { "word": "late", "phonetic": "/leɪt/", "meaning": "晚的，迟的", "example": "Don't be <em>late</em> for school.", "emoji": "⏰" },
                    { "word": "sad", "phonetic": "/sæd/", "meaning": "伤心的，难过的", "example": "She looks <em>sad</em>.", "emoji": "😢" },
                    { "word": "no", "phonetic": "/nəʊ/", "meaning": "没有", "example": "<em>No</em>, I can't find it.", "emoji": "🚫" },
                    { "word": "those", "phonetic": "/ðəʊz/", "meaning": "那些", "example": "What are <em>those</em>?", "emoji": "👉" },
                    { "word": "clap", "phonetic": "/klæp/", "meaning": "拍手", "example": "Let's <em>clap</em> our hands.", "emoji": "👏" },
                    { "word": "game", "phonetic": "/ɡeɪm/", "meaning": "游戏", "example": "I like playing <em>games</em>.", "emoji": "🎮" },
                    { "word": "clapping game", "phonetic": "/ˈklæpɪŋ ɡeɪm/", "meaning": "拍手游戏", "example": "Let's play a <em>clapping game</em>.", "emoji": "🤲" },
                    { "word": "well", "phonetic": "/wel/", "meaning": "噢，喔，好", "example": "<em>Well</em>, let me think.", "emoji": "🤔" },
                    { "word": "kid", "phonetic": "/kɪd/", "meaning": "小孩", "example": "The <em>kid</em> is very cute.", "emoji": "👶" },
                    { "word": "catch", "phonetic": "/kætʃ/", "meaning": "抓，捉；追人游戏", "example": "Can you <em>catch</em> the ball?", "emoji": "🤾" },
                    { "word": "of course", "phonetic": "/əv kɔːs/", "meaning": "当然", "example": "<em>Of course</em> I can help you.", "emoji": "💯" }
                ]
            },
            "6": {
                "name": "Module 6",
                "words": [
                    { "word": "usually", "phonetic": "/ˈjuːʒuəli/", "meaning": "通常地", "example": "I <em>usually</em> get up at seven.", "emoji": "🔄" },
                    { "word": "us", "phonetic": "/ʌs/", "meaning": "（宾格）我们", "example": "Come with <em>us</em>.", "emoji": "👥" },
                    { "word": "ride", "phonetic": "/raɪd/", "meaning": "骑", "example": "I <em>ride</em> my bike to school.", "emoji": "🚲" },
                    { "word": "thing", "phonetic": "/θɪŋ/", "meaning": "事情，活动", "example": "There are many <em>things</em> to do.", "emoji": "📋" },
                    { "word": "ill", "phonetic": "/ɪl/", "meaning": "有病的", "example": "She is <em>ill</em> today.", "emoji": "🤒" },
                    { "word": "cook", "phonetic": "/kʊk/", "meaning": "做（饭），烧（菜）", "example": "Mum is <em>cooking</em> dinner.", "emoji": "🍳" },
                    { "word": "her", "phonetic": "/hɜː(r)/", "meaning": "（宾格）她", "example": "I help <em>her</em> with homework.", "emoji": "👉" },
                    { "word": "go shopping", "phonetic": "/ɡəʊ ˈʃɒpɪŋ/", "meaning": "去购物", "example": "Let's <em>go shopping</em> today.", "emoji": "🛒" },
                    { "word": "kitchen", "phonetic": "/ˈkɪtʃɪn/", "meaning": "厨房", "example": "Mum is in the <em>kitchen</em>.", "emoji": "🍳" }
                ]
            },
            "7": {
                "name": "Module 7",
                "words": [
                    { "word": "Children's Day", "phonetic": "/ˈtʃɪldrənz deɪ/", "meaning": "儿童节", "example": "<em>Children's Day</em> is on June 1st.", "emoji": "🎈" },
                    { "word": "TV", "phonetic": "/ˌtiːˈviː/", "meaning": "电视台", "example": "The <em>TV</em> show is very funny.", "emoji": "📺" },
                    { "word": "play", "phonetic": "/pleɪ/", "meaning": "（戏剧）演出", "example": "The children are doing a <em>play</em>.", "emoji": "🎭" },
                    { "word": "say", "phonetic": "/seɪ/", "meaning": "念，朗诵", "example": "Please <em>say</em> it again.", "emoji": "🗣️" },
                    { "word": "poem", "phonetic": "/ˈpəʊɪm/", "meaning": "诗", "example": "She is reading a <em>poem</em>.", "emoji": "📜" },
                    { "word": "dragon", "phonetic": "/ˈdræɡən/", "meaning": "龙", "example": "The <em>dragon</em> is a symbol of China.", "emoji": "🐉" },
                    { "word": "dragon dance", "phonetic": "/ˈdræɡən dɑːns/", "meaning": "舞龙", "example": "They are doing a <em>dragon dance</em>.", "emoji": "🐉" },
                    { "word": "picnic", "phonetic": "/ˈpɪknɪk/", "meaning": "野餐", "example": "Let's have a <em>picnic</em> in the park.", "emoji": "🧺" },
                    { "word": "family", "phonetic": "/ˈfæməli/", "meaning": "家，家庭", "example": "I love my <em>family</em>.", "emoji": "👨‍👩‍👧‍👦" },
                    { "word": "beach", "phonetic": "/biːtʃ/", "meaning": "海滩", "example": "We play on the <em>beach</em>.", "emoji": "🏖️" }
                ]
            },
            "8": {
                "name": "Module 8",
                "words": [
                    { "word": "hill", "phonetic": "/hɪl/", "meaning": "小山", "example": "The <em>hill</em> is not very high.", "emoji": "⛰️" },
                    { "word": "past", "phonetic": "/pɑːst/", "meaning": "经过", "example": "We walked <em>past</em> the hospital.", "emoji": "➡️" },
                    { "word": "station", "phonetic": "/ˈsteɪʃn/", "meaning": "车站", "example": "The <em>station</em> is near here.", "emoji": "🚉" },
                    { "word": "hospital", "phonetic": "/ˈhɒspɪtl/", "meaning": "医院", "example": "The <em>hospital</em> is on this street.", "emoji": "🏥" },
                    { "word": "stop", "phonetic": "/stɒp/", "meaning": "停止", "example": "Please <em>stop</em> here.", "emoji": "🛑" },
                    { "word": "turn", "phonetic": "/tɜːn/", "meaning": "转向，转弯", "example": "<em>Turn</em> left at the corner.", "emoji": "↩️" },
                    { "word": "around", "phonetic": "/əˈraʊnd/", "meaning": "到另一面，转向", "example": "Look <em>around</em> you.", "emoji": "🔄" },
                    { "word": "turn around", "phonetic": "/tɜːn əˈraʊnd/", "meaning": "转身，回转", "example": "<em>Turn around</em> and look at me.", "emoji": "↩️" },
                    { "word": "ground", "phonetic": "/ɡraʊnd/", "meaning": "地面", "example": "The ball is on the <em>ground</em>.", "emoji": "🌍" },
                    { "word": "again", "phonetic": "/əˈɡen/", "meaning": "又一次，再一次", "example": "Can you say it <em>again</em>?", "emoji": "🔁" },
                    { "word": "jump", "phonetic": "/dʒʌmp/", "meaning": "跳跃", "example": "The rabbit can <em>jump</em> high.", "emoji": "🦘" },
                    { "word": "back", "phonetic": "/bæk/", "meaning": "回到，返回", "example": "Let's go <em>back</em> home.", "emoji": "🔙" },
                    { "word": "come back", "phonetic": "/kʌm bæk/", "meaning": "回来", "example": "Please <em>come back</em> soon.", "emoji": "🏠" }
                ]
            },
            "9": {
                "name": "Module 9",
                "words": [
                    { "word": "left", "phonetic": "/left/", "meaning": "向左；左边的", "example": "<em>Turn left</em> at the traffic light.", "emoji": "⬅️" },
                    { "word": "turn left", "phonetic": "/tɜːn left/", "meaning": "向左转", "example": "<em>Turn left</em> here.", "emoji": "⬅️" },
                    { "word": "right", "phonetic": "/raɪt/", "meaning": "向右；右边的", "example": "<em>Turn right</em> at the corner.", "emoji": "➡️" },
                    { "word": "turn right", "phonetic": "/tɜːn raɪt/", "meaning": "向右转", "example": "<em>Turn right</em> at the school.", "emoji": "➡️" },
                    { "word": "road", "phonetic": "/rəʊd/", "meaning": "公路，道路", "example": "Cross the <em>road</em> carefully.", "emoji": "🛣️" },
                    { "word": "excuse me", "phonetic": "/ɪkˈskjuːz miː/", "meaning": "劳驾，对不起", "example": "<em>Excuse me</em>, where is the hospital?", "emoji": "🙋" },
                    { "word": "straight", "phonetic": "/streɪt/", "meaning": "直地，直线地", "example": "Go <em>straight</em> on.", "emoji": "⬆️" },
                    { "word": "go straight on", "phonetic": "/ɡəʊ streɪt ɒn/", "meaning": "直着走", "example": "<em>Go straight on</em> and turn left.", "emoji": "⬆️" },
                    { "word": "lost", "phonetic": "/lɒst/", "meaning": "迷路的", "example": "I am <em>lost</em>. Can you help me?", "emoji": "❓" },
                    { "word": "out", "phonetic": "/aʊt/", "meaning": "出，向外", "example": "Let's go <em>out</em> to play.", "emoji": "🚪" },
                    { "word": "factory", "phonetic": "/ˈfæktəri/", "meaning": "工厂", "example": "His father works in a <em>factory</em>.", "emoji": "🏭" }
                ]
            },
            "10": {
                "name": "Module 10",
                "words": [
                    { "word": "next to", "phonetic": "/nekst tuː/", "meaning": "接近，靠近", "example": "The school is <em>next to</em> the park.", "emoji": "📍" },
                    { "word": "cousin", "phonetic": "/ˈkʌzn/", "meaning": "堂（表）兄（弟姐妹）", "example": "My <em>cousin</em> is very tall.", "emoji": "👦" },
                    { "word": "supermarket", "phonetic": "/ˈsuːpəmɑːkɪt/", "meaning": "超市", "example": "Let's go to the <em>supermarket</em>.", "emoji": "🛒" },
                    { "word": "wrong", "phonetic": "/rɒŋ/", "meaning": "不正确的", "example": "This answer is <em>wrong</em>.", "emoji": "❌" },
                    { "word": "way", "phonetic": "/weɪ/", "meaning": "道路，路线", "example": "Can you show me the <em>way</em>?", "emoji": "🗺️" },
                    { "word": "turn back", "phonetic": "/tɜːn bæk/", "meaning": "往回走", "example": "We need to <em>turn back</em>.", "emoji": "↩️" },
                    { "word": "front", "phonetic": "/frʌnt/", "meaning": "前面", "example": "The school is in <em>front</em> of the park.", "emoji": "⬆️" },
                    { "word": "in front of", "phonetic": "/ɪn frʌnt ɒv/", "meaning": "在……的前面", "example": "The tree is <em>in front of</em> the house.", "emoji": "⬆️" },
                    { "word": "well", "phonetic": "/wel/", "meaning": "完全地，充分地", "example": "I know the way <em>well</em>.", "emoji": "👌" },
                    { "word": "taxi", "phonetic": "/ˈtæksi/", "meaning": "出租车，计程车", "example": "Let's take a <em>taxi</em>.", "emoji": "🚕" },
                    { "word": "Mrs", "phonetic": "/ˈmɪsɪz/", "meaning": "太太，夫人", "example": "<em>Mrs</em> Li is our teacher.", "emoji": "👩" },
                    { "word": "cinema", "phonetic": "/ˈsɪnəmə/", "meaning": "电影院", "example": "Let's go to the <em>cinema</em>.", "emoji": "🎬" }
                ]
            }
        }
    }
};

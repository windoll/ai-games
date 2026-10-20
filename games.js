// AI 遊戲收錄資料。定期收集排程會在這個陣列「新增」項目，不會刪除舊的。
// 欄位：
//   id        唯一代號（小寫英數與連字號）
//   region    主要熱度地區（台灣以外才寫：香港、中國、星馬）
//   lang      遊戲官方支援的中文：繁中／簡中／繁簡（沒有中文的遊戲不收）
//   tier      main = 主榜（達到收錄門檻）；watch = 觀察中（有 AI 證據和一些熱度，還沒達門檻）
//   missing   觀察中的遊戲還差什麼（例：Threads 分享合計 4,200，門檻 5,000）
//   aliases   這款遊戲的所有名稱、別名、網址關鍵字，每次搜尋都要全部用上
//   lastActive 最近一次有新報導或新貼文的日期 YYYY-MM-DD；距今超過 30 天，網站標成「已退燒」
//   lastActiveNote lastActive 的依據
//   name      遊戲名稱
//   url       可直接遊玩的網址
//   desc      一句話簡介（繁體中文）
//   genre     類型
//   ai        使用的 AI 工具（不知道就留空陣列）
//   aiVerified true = 有公開資料證實用 AI 製作；false = 尚未證實
//   source    資料來源網址（新聞、比賽頁、列表）
//   hot       熱門原因（新聞、得獎、數據）
//   added     收錄日期 YYYY-MM-DD
//   origin    作者自己發的原始貼文：platform、account、url、date、stats（實際看到的數字）
//   threads   Threads 分享數：totalShares = 找到的貼文分享數合計（網站依此排名），posts = 各貼文的帳號、網址、日期、分享、讚、瀏覽
//   score     熱門分數 0–10（加分規則見 COLLECT.md）（參考用）
//   scoreDetail 每一項加分的理由與數字
//   buzz      熱度數據摘要（Threads、PTT、Google 搜尋趨勢的實際數字與日期）
//   tw        true = 在台灣 Threads 上有熱度（網站只收 tw: true；門檻見 COLLECT.md）
window.LAST_UPDATED = "2026-10-20";
window.GAMES = [
  {
    id: "taipei-gta",
    name: "臺北 GTA / TAIPEI RUSH 臺北狂飆",
    url: "https://taipeigta.com/",
    desc: "台灣開發者把西門町、台北車站、忠孝復興搬進瀏覽器的 3D 開放世界，可以開車騎車亂逛。",
    genre: "開放世界",
    ai: [
      "AICodeWith"
    ],
    aiVerified: true,
    source: "https://technews.tw/2026/09/30/taipei-gta/",
    hot: "9 月底在 Threads 公開後爆紅，科技新報、新頭殼、Yahoo 都有報導。作者說燒了超過 1 萬美元 AI Token；「三天 120 萬人同時在線」未經證實。",
    added: "2026-10-19",
    tw: true,
    score: 9,
    buzz: "Threads 原始貼文 10.5 萬讚、300 萬瀏覽、11.4 萬分享（9/27）；Google 搜尋趨勢台灣 10/3 達高峰 100；PTT 每篇只有個位數推。",
    scoreDetail: [
      "台灣媒體 5 家（科技新報、新頭殼、Yahoo 奇摩新聞、4Gamers、鏈新聞）+5",
      "近 7 天有新報導或討論：開發者 10/15、10/17 在 Threads 發新地圖仍有數百讚 +2",
      "高互動貼文：Threads 原文 10.5 萬讚、300 萬瀏覽（9/27） +2"
    ],
    threads: {
      totalShares: 115887,
      checked: "2026-10-19",
      posts: [
        {
          account: "@aicodewithme",
          url: "https://www.threads.com/@aicodewithme/post/DdzIky4Gl9T",
          date: "9/27",
          shares: 114000,
          likes: 105000,
          views: "300 萬"
        },
        {
          account: "@dekyllllll",
          url: "https://www.threads.com/@dekyllllll/post/Dd6v96iCsD0",
          date: "9/30",
          shares: 1800,
          likes: 4700,
          views: "28.3 萬"
        },
        {
          account: "@aicodewithme",
          url: "https://www.threads.com/@aicodewithme/post/Degs6yqGx0c",
          date: "約 10/15",
          shares: 87,
          likes: 397,
          views: "1.07 萬"
        }
      ]
    },
    origin: {
      platform: "Threads",
      account: "@aicodewithme（作者）",
      url: "https://www.threads.com/@aicodewithme/post/DdzIky4Gl9T",
      date: "2026-09-27",
      stats: "11.4 萬分享・10.5 萬讚・300 萬瀏覽"
    },
    aliases: [
      "臺北GTA",
      "台北GTA",
      "台北版GTA",
      "TAIPEI RUSH",
      "臺北狂飆",
      "台北狂飆",
      "taipeigta"
    ],
    lastActive: "2026-10-17",
    lastActiveNote: "作者 10/17 在 Threads 發倫敦版",
    tier: "main",
    lang: "繁中"
  },
  {
    id: "pokesurvivor",
    name: "PokéSurvivor 寶可夢倖存者",
    url: "https://pokesurvivor.com/",
    desc: "寶可夢版《吸血鬼倖存者》，收錄 966 隻寶可夢，自動攻擊、升級選招式，最多 4 人連線，網頁免費玩。",
    genre: "類倖存者",
    ai: [
      "AI 程式助手"
    ],
    aiVerified: true,
    source: "https://www.nownews.com/news/6883368",
    hot: "國外開發者 jpter78 的同人作品，itch.io 頁面自述「用 AI 程式助手開發（程式碼、原創音樂、部分 UI 圖示），寶可夢圖不是 AI 生成」。10 月中在台灣 Threads 爆紅，被稱為「精神時光屋」。注意：pokesurvivor.co 等網址是別人架的仿站。",
    added: "2026-10-19",
    tw: true,
    score: 6,
    scoreDetail: [
      "台灣媒體 2 家（NOWnews、Yahoo 奇摩新聞）+2",
      "近 7 天有新報導或討論：NOWnews 10/15、Yahoo 10/14 報導 +2",
      "Google 搜尋趨勢：這次查詢被暫時擋住，沒有數據，+0",
      "高互動貼文：Threads @cardesignaaron 8.1K 讚（10/11）+2"
    ],
    buzz: "Threads @cardesignaaron 8.1K 讚、1.01 萬分享、91.3 萬瀏覽（10/11）；PTT 搜不到討論；Dcard 有攻略文；itch.io 評分 4.9（8 則）。",
    threads: {
      totalShares: 16600,
      checked: "2026-10-19",
      posts: [
        {
          account: "@cardesignaaron",
          url: "https://www.threads.com/@cardesignaaron/post/DeYPkSMk27j",
          date: "10/11",
          shares: 10100,
          likes: 8100,
          views: "91.3 萬"
        },
        {
          account: "@kai_199805",
          url: "https://www.threads.com/@kai_199805/post/DeYRZGuD-2p",
          date: "10/11",
          shares: 5100,
          likes: 2400,
          views: "21 萬"
        },
        {
          account: "@game_time_roi",
          url: "https://www.threads.com/@game_time_roi/post/Debpp6EE5VH",
          date: "約 10/13",
          shares: 1400,
          likes: 1200,
          views: "14.1 萬"
        }
      ]
    },
    origin: {
      platform: "X",
      account: "@JPTER78（作者）",
      url: "https://x.com/JPTER78/status/2108849627248148894",
      date: "2026-10-10",
      stats: "231.6 萬觀看・1.7 萬讚・1,532 轉推・1.3 萬書籤（X 不公開分享數）"
    },
    aliases: [
      "PokéSurvivor",
      "PokeSurvivor",
      "寶可夢倖存者",
      "pokesurvivor.com",
      "JPTER78"
    ],
    lastActive: "2026-10-15",
    lastActiveNote: "NOWnews 10/15 報導",
    tier: "main",
    lang: "繁中"
  },
  {
    id: "fab24hr",
    name: "fab24hr 晶圓廠打工人的一天",
    url: "https://fab24hr.com/",
    desc: "扮演晶圓廠工程師上一班，處理各種突發狀況；也能跟著一顆晶片從研發走到使用者手上。",
    genre: "職業模擬",
    ai: [],
    aiVerified: true,
    source: "https://www.gvm.com.tw/article/133824",
    hot: "台灣獨立開發者 Marcel（Threads @mrclty）作品。遠見雜誌報導為 Threads 上熱門的 AI 協作模擬遊戲。",
    added: "2026-10-19",
    tw: true,
    score: 9,
    buzz: "Threads 原文 593 讚（10/3）；PTT C_Chat 一篇 53 推；Google 搜尋趨勢有小幅波動（最高 16，以台北 GTA 高峰為 100）。",
    scoreDetail: [
      "台灣媒體 5 家（遠見、INSIDE、TVBS、鏈新聞、FTNN）+5",
      "近 7 天有新報導或討論：遠見 10/16 報導 +2",
      "高互動貼文：Threads @what.game.play 6.4K 讚（10/8）+2"
    ],
    threads: {
      totalShares: 13189,
      checked: "2026-10-19",
      posts: [
        {
          account: "@what.game.play",
          url: "https://www.threads.com/@what.game.play/post/DeOzZ4SidaA",
          date: "10/8",
          shares: 12400,
          likes: 6400,
          views: "34.7 萬"
        },
        {
          account: "@mrclty（作者）",
          url: "https://www.threads.com/@mrclty/post/DeEAw_PEaKw",
          date: "10/3",
          shares: 731,
          likes: 593,
          views: "3.97 萬"
        },
        {
          account: "@aiposthub",
          url: "https://www.threads.com/@aiposthub/post/DeVzOu6klbr",
          date: "10/10",
          shares: 58,
          likes: 29,
          views: "4.3K"
        }
      ]
    },
    origin: {
      platform: "Threads",
      account: "@mrclty（作者）",
      url: "https://www.threads.com/@mrclty/post/DeEAw_PEaKw",
      date: "2026-10-03",
      stats: "731 分享・593 讚・3.97 萬瀏覽"
    },
    aliases: [
      "fab24hr",
      "晶圓廠打工人",
      "半導體晶圓廠打工人的一天",
      "晶圓廠模擬器"
    ],
    lastActive: "2026-10-16",
    lastActiveNote: "遠見 10/16 報導",
    tier: "main",
    lang: "繁中"
  },
  {
    id: "1in8b",
    name: "80億分之1",
    url: "https://1in8b.life/zh/",
    desc: "隨機出生在世界某處，依 172 國真實統計資料活完一生的人生模擬遊戲。",
    genre: "人生模擬",
    ai: [
      "Claude"
    ],
    aiVerified: true,
    source: "https://www.ettoday.net/news/20261018/3256636.htm",
    hot: "韓國獨立開發者用 AI 約 4 小時做出。繁中版上線後在台灣 Threads 爆紅，ETtoday、中時、NOWnews、數位時代都有報導，網友直呼「投胎在台灣很幸福」。",
    added: "2026-10-19",
    tw: true,
    score: 10,
    buzz: "Threads 台灣網友 @linqiaokai 10.3K 讚、9.9K 分享、46.3 萬瀏覽（約 10/16）；PTT C_Chat 系列文 85／82／42 推，八卦板 4 篇問卦（10/13–10/18）；Google 搜尋趨勢台灣 10/15 起明顯上升。",
    scoreDetail: [
      "台灣媒體 5 家（ETtoday、中時、NOWnews、數位時代、遠見）+5",
      "近 7 天有新報導或討論：ETtoday 10/18 報導、PTT 10/18 仍有討論 +2",
      "高互動貼文：Threads @linqiaokai 10.3K 讚、9.9K 分享（約 10/16）+2",
      "Google 搜尋趨勢 10/15 起明顯上升 +1"
    ],
    threads: {
      totalShares: 12600,
      checked: "2026-10-20",
      posts: [
        {
          account: "@linqiaokai",
          url: "https://www.threads.com/@linqiaokai/post/DeezgQvEhCV",
          date: "約 10/16",
          shares: 9900,
          likes: 10300,
          views: "46.4 萬"
        },
        {
          account: "@jins__earth（作者，韓文）",
          url: "https://www.threads.com/@jins__earth/post/DeG1MpWm4Nd",
          date: "10/5",
          shares: 1400,
          likes: 1800,
          views: "47.5 萬"
        },
        {
          account: "@kelly_chen0822",
          url: "https://www.threads.com/@kelly_chen0822/post/DelTsbjCEYC",
          date: "約 10/17",
          shares: 1300,
          likes: 2400,
          views: "9.19 萬"
        }
      ]
    },
    origin: {
      platform: "Threads",
      account: "@jins__earth（作者，韓文）",
      url: "https://www.threads.com/@jins__earth/post/DeG1MpWm4Nd",
      date: "2026-10-05",
      stats: "1,400 分享・1,800 讚・47.5 萬瀏覽"
    },
    aliases: [
      "80億分之1",
      "80億分之一",
      "八十億分之一",
      "1 in 8 Billion",
      "1in8b",
      "投胎模擬器"
    ],
    lastActive: "2026-10-18",
    lastActiveNote: "ETtoday 10/18 報導、PTT 10/18 討論",
    tier: "main",
    lang: "繁中"
  },
  {
    id: "safe-off-work",
    name: "今天也要平安下班（校事會議模擬器／輔導室）",
    url: "https://claude.ai/artifact/AWwoUVfR7KFTQd7ateyNfb",
    desc: "扮演國中老師撐過每一天，一不小心就被家長投訴、送進校事會議；同頁還有「輔導室：今天也不能倒下」，扮演唯一的專任輔導老師。",
    genre: "職業模擬",
    ai: [
      "Claude"
    ],
    aiVerified: true,
    source: "https://www.nownews.com/news/6882238",
    hot: "台灣匿名作者參考真實校事會議案例、用 AI 工具做的 claude.ai 網頁遊戲（NOWnews：「運用AI工具製作，共設計120道題目」）。10 月初在 Threads 爆紅，很多人玩不到 3 分鐘就被投訴出局，也引發教育圈討論。",
    added: "2026-10-20",
    tw: true,
    score: 9,
    scoreDetail: [
      "台灣媒體 8 家（NOWnews、鏡報、中時、中天、遠見、鏡週刊、TVBS、造咖）+5",
      "近 7 天有新報導或討論：遠見、鏡週刊 10/16 報導 +2",
      "高互動貼文：Threads @lihan_168888 33.1K 讚、11.8K 分享（10/8）+2",
      "Google 搜尋趨勢：沒有查到數據，+0"
    ],
    buzz: "Threads @lihan_168888 33.1K 讚、11.8K 分享、110 萬瀏覽（10/8，中天新聞引用）；PTT Teacher 板轉錄文推 18、噓 7，C_Chat 新聞文 7 推。",
    origin: null,
    threads: {
      totalShares: 12319,
      checked: "2026-10-20",
      posts: [
        {
          account: "@lihan_168888",
          url: "https://www.threads.com/@lihan_168888/post/DeQ2HFqk0ty",
          date: "10/8",
          shares: 11800,
          likes: 33100,
          views: "110 萬"
        },
        {
          account: "@do_first_zhongli",
          url: "https://www.threads.com/@do_first_zhongli/post/DeRjFfBnx64",
          date: "10/9",
          shares: 475,
          likes: 509,
          views: "3.05 萬"
        },
        {
          account: "@yciingh0320",
          url: "https://www.threads.com/@yciingh0320/post/DeRiQQMk9Nt",
          date: "10/9",
          shares: 44,
          likes: 30,
          views: "3.7K"
        }
      ]
    },
    aliases: [
      "今天也要平安下班",
      "校事會議模擬器",
      "老師，今天能平安下班嗎",
      "輔導室：今天也不能倒下",
      "笑鼠會議"
    ],
    lastActive: "2026-10-16",
    lastActiveNote: "遠見、鏡週刊 10/16 報導",
    tier: "main",
    lang: "繁中"
  },
  {
    id: "name-beyblade",
    tier: "watch",
    lang: "繁中",
    name: "姓名戰鬥陀螺",
    aliases: [
      "姓名戰鬥陀螺",
      "姓名陀螺",
      "名字戰鬥陀螺",
      "lpm1.live"
    ],
    url: "https://claude.ai/public/artifacts/03e01152-3e72-4920-9999-ee2e75e37eb1",
    desc: "輸入名字，每個中文字變成一顆戰鬥陀螺互相碰撞，三字三戰、先拿兩勝的名字最強；也有單字一對一模式。",
    genre: "對戰",
    ai: [
      "Claude"
    ],
    aiVerified: true,
    source: "https://www.4gamers.com.tw/news/detail/80099/word-game-name-battle-spinning-top-funny-beyblade",
    hot: "《文字遊戲》總製作人張文韋用 Claude 做的 claude.ai Artifact 小遊戲。漫畫家薪鹽 6/16 在 Threads 發文「男友用 AI 做了一個用名字打架的戰鬥陀螺遊戲」，趁戰鬥陀螺缺貨熱潮爆紅；4Gamers（6/17）、NOWnews（9/30）報導。另有 lpm1.live 版本（NOWnews 引用）。",
    missing: "Threads 分享合計 11,300 已過 5,000，但只有 1 個帳號；第 2 個帳號還沒找到 500 分享以上的貼文",
    added: "2026-10-20",
    tw: true,
    score: 4,
    scoreDetail: [
      "台灣媒體 2 家（4Gamers、NOWnews）+2",
      "近 7 天沒有新報導或討論 +0",
      "高互動貼文：Threads @shinyan_dungeon 11.3K 讚、11.3K 分享（6/16）+2"
    ],
    buzz: "Threads @shinyan_dungeon 11.3K 讚、11.3K 分享、65.5 萬瀏覽（6/16）；PTT 搜不到討論。",
    lastActive: "2026-09-30",
    lastActiveNote: "NOWnews 9/30 報導",
    origin: null,
    threads: {
      totalShares: 11300,
      checked: "2026-10-20",
      posts: [
        {
          account: "@shinyan_dungeon",
          url: "https://www.threads.com/@shinyan_dungeon/post/DZo2HOkiREk",
          date: "6/16",
          shares: 11300,
          likes: 11300,
          views: "65.5 萬"
        }
      ]
    }
  },
  {
    id: "taiwan-sanbao",
    tier: "watch",
    name: "台灣三寶模擬器",
    aliases: [
      "台灣三寶模擬器",
      "台北三寶模擬器",
      "三寶模擬器"
    ],
    url: "https://apps.app.charonyu.cc/play/taiwan-sanbao/index.html",
    desc: "以台灣交通為題材的駕駛遊戲，閃行人、閃狗、閃不打方向燈切車道的車，看你能撐幾公尺。",
    genre: "駕駛",
    ai: [],
    aiVerified: true,
    source: "https://www.gvm.com.tw/article/133824",
    hot: "台灣網友阿班（Threads @aihub.tw）作品，遠見雜誌列為 Threads 熱門的 AI 協作遊戲。",
    missing: "Threads 分享合計 4,200（門檻 5,000）；第 2 個帳號還沒找到 500 分享以上的貼文",
    added: "2026-10-20",
    tw: true,
    lastActive: "2026-10-12",
    lastActiveNote: "Threads @your.engineer.ben 10/12 貼文",
    origin: null,
    threads: {
      totalShares: 4200,
      checked: "2026-10-20",
      posts: [
        {
          account: "@your.engineer.ben",
          url: "https://www.threads.com/@your.engineer.ben/post/DeZkVtqE4wM",
          date: "10/12",
          shares: 4200,
          likes: 1900,
          views: "16.5 萬"
        }
      ]
    },
    lang: "繁中"
  },
  {
    id: "yakyulife",
    tier: "watch",
    name: "YaKyoLife 棒球人生模擬器",
    aliases: [
      "YaKyoLife",
      "yakyulife",
      "棒球人生模擬器",
      "職棒人生模擬器"
    ],
    url: "https://leoggcat.github.io/yakyulife/",
    desc: "文字職棒生涯模擬，從高中打到引退，靠擲骰和選擇決定你是王牌還是板凳。",
    genre: "人生模擬",
    ai: [],
    aiVerified: true,
    source: "https://abmedia.io/yakyolife-ai-vibe-coding-taiwan",
    hot: "台灣網友最先生（Threads @mr.themost）用 AI 做的遊戲。鏈新聞：「Vibe Coding 也能做爆款遊戲？網友靠 AI 打造《棒球人生模擬器》爆紅」。8 月中在 Threads、PTT 爆紅，酷時尚、udn 遊戲角落、電腦王阿達也有報導。",
    missing: "Threads 分享合計 1,700（門檻 5,000）；第 2 個帳號還沒找到 500 分享以上的貼文",
    added: "2026-10-20",
    tw: true,
    lastActive: "2026-08-11",
    lastActiveNote: "鏈新聞、酷時尚 8/11 報導",
    origin: null,
    threads: {
      totalShares: 1702,
      checked: "2026-10-20",
      posts: [
        {
          account: "@blue780927",
          url: "https://www.threads.com/@blue780927/post/Db2fqOmkcCG",
          date: "8/10",
          shares: 1700,
          likes: 1500,
          views: "10.7 萬"
        },
        {
          account: "@mr.themost（作者）",
          url: "https://www.threads.com/@mr.themost/post/Db6G1rUjR6_",
          date: "8/11",
          shares: 1,
          likes: 147,
          views: "1.01 萬"
        },
        {
          account: "@yuhsienyeh",
          url: "https://www.threads.com/@yuhsienyeh/post/Db524rBgRk4",
          date: "8/11",
          shares: 1,
          likes: 162,
          views: "1.3 萬"
        }
      ]
    },
    lang: "繁中"
  },
  {
    id: "ilove-oncall",
    tier: "watch",
    lang: "繁中",
    name: "我熱愛值班",
    aliases: [
      "我熱愛值班",
      "醫院夜班值班模擬",
      "ilove-oncall",
      "drcharming"
    ],
    url: "https://drcharming.net/game",
    desc: "獨自負責一整層病房，從下午 5 點值到隔天早上 8 點：接電話、判斷要不要到床邊、還要記得吃飯睡覺。",
    genre: "職業模擬",
    ai: [
      "AI 護理師"
    ],
    aiVerified: true,
    source: "https://drcharming.net/game",
    hot: "台灣住院醫師做的醫院夜班模擬遊戲，官網寫「大部分案件由 AI 設計、回覆由 AI 生成」；Pro 版可以自由下醫囑，由 AI 護理師回應。10/20 被 Threads 遊戲推薦帳號 @what.game.play 介紹後開始擴散。",
    missing: "Threads 分享合計 1,264（門檻 5,000）；第 2 個帳號還沒找到 500 分享以上的貼文",
    added: "2026-10-20",
    tw: true,
    lastActive: "2026-10-20",
    lastActiveNote: "Threads @what.game.play 10/20 介紹",
    origin: null,
    threads: {
      totalShares: 1264,
      checked: "2026-10-20",
      posts: [
        {
          account: "@what.game.play",
          url: "https://www.threads.com/@what.game.play/post/DerMoVyD07F",
          date: "10/20",
          shares: 1100,
          likes: 604,
          views: "3.4 萬"
        },
        {
          account: "@what.game.play",
          url: "https://www.threads.com/@what.game.play/post/DerMx8Gk_0g",
          date: "10/20",
          shares: 164,
          likes: 23,
          views: "看不到"
        }
      ]
    }
  },
  {
    id: "cms-7",
    tier: "watch",
    lang: "繁中",
    name: "CMS-7（ARG 網頁解謎）",
    aliases: [
      "CMS-7",
      "CMS7",
      "arg-game",
      "ARG 網頁解謎 警員"
    ],
    url: "https://imorintani0611.github.io/arg-game/start.html",
    desc: "扮演台北市警局的菜鳥警員，在網頁裡一步步解開案件的 ARG 解謎遊戲；不用看原始碼、沒有驚嚇橋段，手機也能玩。",
    genre: "解謎",
    ai: [
      "Claude"
    ],
    aiVerified: true,
    source: "https://www.threads.com/@fu0m6xx/post/DdT5J93Er_M",
    hot: "作者在 Threads 自述「我用Claude和GitHub把故事變成這個形式」。9/15 發文後在喜歡 ARG、網頁解謎的玩家間流傳。",
    missing: "Threads 分享 720（門檻 5,000）；還沒有其他帳號的熱門貼文",
    added: "2026-10-20",
    tw: true,
    lastActive: "2026-09-15",
    lastActiveNote: "作者 9/15 Threads 發文",
    origin: {
      platform: "Threads",
      account: "@fu0m6xx（作者）",
      url: "https://www.threads.com/@fu0m6xx/post/DdT5J93Er_M",
      date: "2026-09-15",
      stats: "720 分享・422 讚・2.81 萬瀏覽"
    },
    threads: {
      totalShares: 720,
      checked: "2026-10-20",
      posts: [
        {
          account: "@fu0m6xx（作者）",
          url: "https://www.threads.com/@fu0m6xx/post/DdT5J93Er_M",
          date: "9/15",
          shares: 720,
          likes: 422,
          views: "2.81 萬"
        }
      ]
    }
  },
  {
    id: "lingxiuxian",
    tier: "watch",
    name: "靈劫修仙",
    aliases: [
      "靈劫修仙",
      "網頁靈劫修仙",
      "lingxiuxian"
    ],
    url: "https://lingxiuxian-f5bvckrq.manus.space/",
    desc: "網頁半掛機修仙養成，玩家可以一起拓展遊戲內容，死亡會重置，還有排行榜。",
    genre: "放置養成",
    ai: [
      "Manus"
    ],
    aiVerified: true,
    source: "https://www.ptt.cc/bbs/Little-Games/M.1787634971.A.170.html",
    hot: "PTT 網友 sharpwolf 用 Manus AI 做的網頁遊戲，作者自述「透過AI對話實作出來」。8/25 在 PTT Little-Games 板發文後爆文，大量玩家回報 bug、討論玩法。",
    missing: "沒有找到 Threads 貼文；台灣媒體 0 家（熱度目前集中在 PTT）",
    added: "2026-10-20",
    tw: true,
    lastActive: "2026-08-25",
    lastActiveNote: "PTT Little-Games 8/25 發文（後續推文持續）",
    origin: {
      platform: "PTT",
      account: "sharpwolf（作者）",
      url: "https://www.ptt.cc/bbs/Little-Games/M.1787634971.A.170.html",
      date: "2026-08-25",
      stats: "約 121 推・0 噓・364 則→（爆文）"
    },
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    },
    lang: "繁中"
  },
  {
    id: "wuxia-survivors",
    tier: "watch",
    lang: "簡中",
    name: "群俠傳：倖存者（群侠传：幸存者）",
    aliases: [
      "群俠傳：倖存者",
      "群侠传：幸存者",
      "群侠传幸存者",
      "Wuxia Survivors",
      "Nenly同学"
    ],
    url: "https://store.steampowered.com/app/4957110",
    region: "中國",
    desc: "武俠版倖存者類動作肉鴿，扮演江湖俠客割草升級，Steam 搶先體驗、免費。",
    genre: "類倖存者",
    ai: [
      "AI 程式助手",
      "AI 美術"
    ],
    aiVerified: true,
    source: "https://store.steampowered.com/app/4957110",
    hot: "中國 B 站 UP 主「Nenly同學」零經驗、一個人花三個月做出來，Steam 頁面揭露程式碼部分由 AI 工具協助撰寫，部分美術、動畫、音樂也用 AI 製作。8/11 上架後 Steam「壓倒性好評」，觸樂、遊民星空、17173 都有報導。",
    missing: "沒有台灣或香港 Threads 貼文數據；熱度集中在 Steam 和 B 站（Steam 1,921 則評價 96% 好評，B 站開發影片 10 萬播放）",
    added: "2026-10-20",
    tw: true,
    lastActive: "2026-10-20",
    lastActiveNote: "Steam 近 30 天 666 則新評價（98% 好評）",
    origin: {
      platform: "Bilibili",
      account: "Nenly同學（作者）",
      url: "https://www.bilibili.com/video/BV1MPMd64EiD",
      date: "2026-08-03",
      stats: "10 萬播放・約 4,141 讚（子代理查到，未自行查看）"
    },
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    }
  },
  {
    id: "yueyang-tower",
    tier: "watch",
    lang: "繁中",
    name: "岳陽樓記・巴陵勝狀（3D 文言文遊戲）",
    aliases: [
      "岳陽樓記 3D",
      "岳陽樓記 遊戲",
      "巴陵勝狀",
      "learnmer",
      "始得西山宴遊記 3D"
    ],
    url: "https://yueyang.learnmer.com/",
    region: "香港",
    desc: "把 DSE 中文範文《岳陽樓記》做成洞庭湖 3D 場景，邊逛邊由 AI 小精靈帶你背書、教你答題。",
    genre: "教育探索",
    ai: [
      "AI 小精靈"
    ],
    aiVerified: true,
    source: "https://unwire.hk/2026/10/05/yueyang-tower-ai-game-dse/fun-tech/",
    hot: "香港工程師 Michael Lee（Threads @ckmichael8，learnmer.com）作品。unwire：「網民用 AI 把《岳陽樓記》變成 3D 遊戲」，ezone 也有報導。之後又推出《始得西山宴遊記》3D 版。",
    missing: "Threads 原帖約 9,800 分享是 unwire 截圖上的數字，原帖要登入才看得到、還沒自行確認；第 2 個帳號還沒找到 500 分享以上的貼文",
    added: "2026-10-20",
    tw: true,
    lastActive: "2026-10-19",
    lastActiveNote: "作者 10/19 在 Threads 發《始得西山宴遊記》3D 版",
    origin: {
      platform: "Threads",
      account: "@ckmichael8（作者）",
      url: "https://www.threads.com/@ckmichael8",
      date: "2026-10-04 前後",
      stats: "unwire 截圖：約 1.14 萬讚・564 轉發・9,800 分享（原帖需登入，未自行查看）"
    },
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    }
  },
  {
    id: "chongzhen-zhipin",
    tier: "watch",
    lang: "簡中",
    name: "崇禎直聘：明末官場沉浮模擬器",
    aliases: [
      "崇禎直聘",
      "崇祯直聘",
      "明末官场沉浮模拟器"
    ],
    url: "https://www.taptap.cn/app/837252",
    region: "中國",
    desc: "扮演崇禎年間的七品縣官，在國庫空虛、上司施壓、流寇四起之間求生的官場模擬。",
    genre: "策略模擬",
    ai: [
      "AI 輔助文本與美術"
    ],
    aiVerified: true,
    source: "https://www.taptap.cn/app/837252",
    hot: "中國獨立開發者作品，TapTap 頁面寫明「部分文本在創作過程中使用了人工智能工具進行輔助潤色與表意優化，遊戲內立繪、音樂亦獲得了相關人工智能工具的技術輔助」。TapTap 9.6 分、4,662 則評價、約 48 萬關注，遊戲陀螺列為熱門前十。",
    missing: "沒有台灣或香港 Threads 貼文數據；熱度集中在中國 TapTap",
    added: "2026-10-20",
    tw: true,
    lastActive: "2026-09-11",
    lastActiveNote: "遊戲陀螺 9/11 報導",
    origin: null,
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    }
  },
  {
    id: "mongkok-story",
    tier: "watch",
    lang: "繁中",
    name: "旺角揸Fit人（Mongkok Story）",
    aliases: [
      "旺角揸Fit人",
      "旺角揸 fit 人",
      "Mongkok Story",
      "The Boss of Mong Kok",
      "香港版 GTA"
    ],
    url: "https://mongkok-story.vercel.app",
    region: "香港",
    desc: "受臺北 GTA 啟發的香港版：以真實旺角街景為舞台、講背叛故事的瀏覽器開放世界動作遊戲（只支援電腦版 Chrome）。",
    genre: "開放世界",
    ai: [
      "Meshy"
    ],
    aiVerified: true,
    source: "https://unwire.hk/2026/10/07/mongkok-gta-browser-game-real-streets/fun-tech/",
    hot: "香港創作者 morningwu.ai 作品。unwire：用真實相片「配合 Meshy 製作 3D 模型」（Meshy 是 AI 生成 3D 模型的工具），沒有相片的地方就生成近似外觀。",
    missing: "Threads 原帖抓不到分享數；unwire 文章 818 讚",
    added: "2026-10-20",
    tw: true,
    lastActive: "2026-10-07",
    lastActiveNote: "unwire 10/07 報導",
    origin: {
      platform: "Threads",
      account: "@morningwu.ai（作者）",
      url: "https://www.threads.com/@morningwu.ai/post/DeJNX-wCfwC",
      date: "2026-10 初",
      stats: "抓不到數字"
    },
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    }
  },
  {
    id: "midnight-house",
    lang: "繁中",
    name: "霧隱之邸",
    aliases: [
      "霧隱之邸",
      "言墨遊戲",
      "midnight-house.oscar-chung.chatgpt.site"
    ],
    url: "https://midnight-house.oscar-chung.chatgpt.site/",
    desc: "受《山中小屋》啟發的民國怪談網頁桌遊：探索洋館房間、遭遇徵兆，作祟揭露後改換規則，有單人 AI 補位和多人連線。",
    genre: "桌遊",
    source: "https://yanmo-games.oscar-chung.chatgpt.site/",
    hot: "言墨遊戲工作室的作品，使用者推薦收錄。遊戲放在 chatgpt.site（疑似 OpenAI 的 ChatGPT Sites），但官網沒有寫明是用 AI 製作。版本公告到 10/20 仍持續新增劇本。",
    lastActive: "2026-10-20",
    lastActiveNote: "遊戲版本公告 10/20 新增劇本《義賊廖添丁》",
    tier: "watch",
    aiVerified: false,
    ai: [],
    added: "2026-10-20",
    tw: true,
    score: 0,
    origin: null,
    missing: "還沒找到公開資料說明是用 AI 製作（作者自述、遊戲頁面或報導都可以），也還沒找到討論數字（Threads 分享 300 以上、PTT 15 推、媒體報導等任一項）",
    scoreDetail: [
      "台灣媒體 0 家 +0",
      "近 7 天沒有找到新報導或討論 +0",
      "沒有找到高互動貼文 +0"
    ],
    buzz: "Threads、PTT、媒體都還沒找到討論（2026-10-20）",
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    }
  },
  {
    id: "luanshi-bacheng",
    lang: "繁中",
    name: "亂世八城",
    aliases: [
      "亂世八城",
      "同城暗鬥",
      "言墨遊戲",
      "luanshi-bacheng.oscar-chung.chatgpt.site"
    ],
    url: "https://luanshi-bacheng.oscar-chung.chatgpt.site/",
    desc: "受《富饒之城》啟發的民國權謀網頁桌遊：每輪秘密拉攏一方勢力，興建街區、經營銀元與權勢，報紙事件會影響後續回合。",
    genre: "桌遊",
    source: "https://yanmo-games.oscar-chung.chatgpt.site/",
    hot: "言墨遊戲工作室的作品（與霧隱之邸同作者），使用者推薦收錄。放在 chatgpt.site，官網沒有寫明是用 AI 製作。目前 v0.10.2，已開放教學模式。",
    lastActive: "2026-10-20",
    lastActiveNote: "收錄日（使用者推薦；遊戲頁 v0.10.2）",
    tier: "watch",
    aiVerified: false,
    ai: [],
    added: "2026-10-20",
    tw: true,
    score: 0,
    origin: null,
    missing: "還沒找到公開資料說明是用 AI 製作（作者自述、遊戲頁面或報導都可以），也還沒找到討論數字（Threads 分享 300 以上、PTT 15 推、媒體報導等任一項）",
    scoreDetail: [
      "台灣媒體 0 家 +0",
      "近 7 天沒有找到新報導或討論 +0",
      "沒有找到高互動貼文 +0"
    ],
    buzz: "Threads、PTT、媒體都還沒找到討論（2026-10-20）",
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    }
  },
  {
    id: "taiwan-hegemony",
    lang: "繁中",
    name: "台灣爭霸",
    aliases: [
      "台灣爭霸",
      "N.A.N TW_Studio",
      "nan-game01.chillchatnow.com"
    ],
    url: "https://nan-game01.chillchatnow.com/",
    desc: "以台灣鄉鎮、縣市為地圖的多人線上戰略遊戲（Beta），要註冊帳號遊玩，有戰報和聊天。",
    genre: "戰略",
    source: "https://nan-game01.chillchatnow.com/",
    hot: "N.A.N TW_Studio 的作品，使用者推薦收錄。官網沒有寫明是用 AI 製作。",
    lastActive: "2026-10-20",
    lastActiveNote: "收錄日（使用者推薦，還沒找到貼文或報導）",
    tier: "watch",
    aiVerified: false,
    ai: [],
    added: "2026-10-20",
    tw: true,
    score: 0,
    origin: null,
    missing: "還沒找到公開資料說明是用 AI 製作（作者自述、遊戲頁面或報導都可以），也還沒找到討論數字（Threads 分享 300 以上、PTT 15 推、媒體報導等任一項）",
    scoreDetail: [
      "台灣媒體 0 家 +0",
      "近 7 天沒有找到新報導或討論 +0",
      "沒有找到高互動貼文 +0"
    ],
    buzz: "Threads、PTT、媒體都還沒找到討論（2026-10-20）",
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    }
  },
  {
    id: "fengshan-mansion",
    lang: "繁中",
    name: "封山陰宅",
    aliases: [
      "封山陰宅",
      "Betrayal at the Sealed Mansion",
      "fengshan.paromi7777.workers.dev"
    ],
    url: "https://fengshan.paromi7777.workers.dev/",
    desc: "中式民俗恐怖桌遊的 Three.js 3D 網頁版，探索陰宅，有冥婚結陰親、紙人替身術、殭屍破棺出三個劇本。",
    genre: "桌遊",
    source: "https://fengshan.paromi7777.workers.dev/",
    hot: "使用者推薦收錄。官網沒有寫明是用 AI 製作；版本 v1.1.0，10/20 仍有更新。",
    lastActive: "2026-10-20",
    lastActiveNote: "遊戲頁 build 2026-10-20",
    tier: "watch",
    aiVerified: false,
    ai: [],
    added: "2026-10-20",
    tw: true,
    score: 0,
    origin: null,
    missing: "還沒找到公開資料說明是用 AI 製作（作者自述、遊戲頁面或報導都可以），也還沒找到討論數字（Threads 分享 300 以上、PTT 15 推、媒體報導等任一項）",
    scoreDetail: [
      "台灣媒體 0 家 +0",
      "近 7 天沒有找到新報導或討論 +0",
      "沒有找到高互動貼文 +0"
    ],
    buzz: "Threads、PTT、媒體都還沒找到討論（2026-10-20）",
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    }
  },
  {
    id: "kanto-tactics",
    lang: "簡中",
    name: "Kanto Tactics",
    aliases: [
      "Kanto Tactics",
      "關都戰術",
      "einoow"
    ],
    url: "https://einoow.com/kanto-tactics",
    desc: "寶可夢自走棋：組隊搭配屬性、進化寶可夢，從八大道館一路打到四天王。",
    genre: "自走棋",
    source: "https://retrododo.com/kanto-tactics-combines-pokemon-with-teamfight-tactics-gameplay/",
    hot: "José Luis 做的寶可夢同人網頁遊戲，Retro Dodo 有英文報導（沒有提到 AI），使用者推薦收錄。",
    lastActive: "2026-10-20",
    lastActiveNote: "收錄日（使用者推薦，還沒找到華語貼文或報導）",
    tier: "watch",
    aiVerified: false,
    ai: [],
    added: "2026-10-20",
    tw: true,
    score: 0,
    origin: null,
    missing: "還沒找到公開資料說明是用 AI 製作（作者自述、遊戲頁面或報導都可以），也還沒找到討論數字（Threads 分享 300 以上、PTT 15 推、媒體報導等任一項）",
    scoreDetail: [
      "台灣媒體 0 家 +0",
      "近 7 天沒有找到新報導或討論 +0",
      "沒有找到高互動貼文 +0"
    ],
    buzz: "Threads、PTT、媒體都還沒找到討論（2026-10-20）",
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    }
  },
  {
    id: "pokemon-auto-chess",
    tier: "watch",
    lang: "簡中",
    name: "Pokémon Auto Chess（寶可夢自走棋）",
    aliases: [
      "Pokémon Auto Chess",
      "Pokemon Auto Chess",
      "寶可夢自走棋",
      "宝可梦自走棋",
      "pokemon-auto-chess.com"
    ],
    url: "https://pokemon-auto-chess.com/",
    desc: "寶可夢版的自走棋：組隊、合成進化、搭配屬性羈絆，和其他玩家線上對戰；免費、非營利。",
    genre: "自走棋",
    ai: [],
    aiVerified: false,
    source: "https://github.com/keldaanCommunity/pokemonAutoChess",
    hot: "2019 年起由粉絲社群開發的開源同人遊戲（GitHub 1.8K 星，v6.11.2），使用者指定收錄。目前沒有證據是用 AI 製作；遊戲有簡體中文翻譯。",
    missing: "沒有公開資料說明是用 AI 製作（已知是社群開源專案），也還沒找到華語討論數字（Threads 分享 300 以上、PTT 15 推、媒體報導等任一項）",
    added: "2026-10-20",
    tw: true,
    score: 0,
    scoreDetail: [
      "台灣媒體 0 家 +0",
      "近 7 天沒有找到新報導或討論 +0",
      "沒有找到高互動貼文 +0"
    ],
    buzz: "Threads、PTT、媒體都還沒找到華語討論（2026-10-20）",
    lastActive: "2026-10-20",
    lastActiveNote: "收錄日（使用者推薦；遊戲 v6.11.2 持續更新）",
    origin: null,
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
    }
  }
];

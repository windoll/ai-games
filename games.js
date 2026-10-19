// AI 遊戲收錄資料。定期收集排程會在這個陣列「新增」項目，不會刪除舊的。
// 欄位：
//   id        唯一代號（小寫英數與連字號）
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
    tier: "main"
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
    tier: "main"
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
    tier: "main"
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
          views: "46.3 萬"
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
          views: "9.16 萬"
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
    tier: "main"
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
    tier: "main"
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
    }
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
    }
  },
  {
    id: "komiya",
    tier: "watch",
    name: "取調室的小宮（取調室の小宮）",
    aliases: [
      "取調室的小宮",
      "取調室の小宮",
      "堀井雄二 AI 遊戲"
    ],
    url: "https://claude.ai/artifact/HgsUQQywVPG8X87dp1NWHu",
    desc: "扮演刑警偵訊 72 歲的前鎖匠小宮，找出供述和證據的矛盾，逼近當鋪金庫失竊案的真相。",
    genre: "推理",
    ai: [
      "Claude"
    ],
    aiVerified: true,
    source: "https://www.cna.com.tw/business/chinese/447040",
    hot: "《勇者鬥惡龍》之父堀井雄二 10/11 公開，中央社：「利用AI工具Claude，花了大約30分鐘」完成。主要在日本爆紅，台灣有中央社、動區報導。",
    missing: "台灣 Threads 上還沒找到分享 500 以上的貼文",
    added: "2026-10-20",
    tw: true,
    lastActive: "2026-10-15",
    lastActiveNote: "中央社 10/15 報導",
    origin: {
      platform: "X",
      account: "@YujiHorii（作者）",
      url: "https://x.com/YujiHorii/status/2109222798287835281",
      date: "2026-10-11",
      stats: "日本媒體報導隔天約 199 萬瀏覽（未自行查看）"
    },
    threads: {
      totalShares: 0,
      checked: "2026-10-20",
      posts: []
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
    }
  }
];

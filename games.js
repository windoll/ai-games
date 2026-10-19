// AI 遊戲收錄資料。定期收集排程會在這個陣列「新增」項目，不會刪除舊的。
// 欄位：
//   id        唯一代號（小寫英數與連字號）
//   name      遊戲名稱
//   url       可直接遊玩的網址
//   desc      一句話簡介（繁體中文）
//   genre     類型
//   ai        使用的 AI 工具（不知道就留空陣列）
//   aiVerified true = 有公開資料證實用 AI 製作；false = 尚未證實
//   source    資料來源網址（新聞、比賽頁、列表）
//   hot       熱門原因（新聞、得獎、數據）
//   added     收錄日期 YYYY-MM-DD
//   score     熱門分數 0–10（加分規則見 COLLECT.md），網站依此排序
//   scoreDetail 每一項加分的理由與數字
//   buzz      熱度數據摘要（Threads、PTT、Google 搜尋趨勢的實際數字與日期）
//   tw        true = 台灣媒體報導 2 家以上（網站只收 tw: true）
window.LAST_UPDATED = "2026-10-19";
window.GAMES = [
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
    buzz: "PTT C_Chat 系列文 85／82／42 推，八卦板 4 篇問卦（10/13–10/18）；Threads 原文在韓國 1.8K 讚、47.5 萬瀏覽；Google 搜尋趨勢台灣 10/15 起明顯上升。",
    scoreDetail: [
      "台灣媒體 5 家（ETtoday、中時、NOWnews、數位時代、遠見）+5",
      "近 7 天有新報導或討論：ETtoday 10/18 報導、PTT 10/18 仍有討論 +2",
      "高互動貼文：Threads 原文 1.8K 讚（10/5） +2",
      "Google 搜尋趨勢 10/15 起明顯上升 +1"
    ]
  },
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
    ]
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
    score: 7,
    buzz: "Threads 原文 593 讚（10/3）；PTT C_Chat 一篇 53 推；Google 搜尋趨勢有小幅波動（最高 16，以台北 GTA 高峰為 100）。",
    scoreDetail: [
      "台灣媒體 5 家（遠見、INSIDE、TVBS、鏈新聞、FTNN）+5",
      "近 7 天有新報導或討論：遠見 10/16 報導 +2"
    ]
  },
  {
    id: "counselor-day",
    name: "輔導室：今天也不能倒下",
    url: "https://claude.ai/artifact/AWwoUVfR7KFTQd7ateyNfb",
    desc: "扮演國中唯一的專任輔導老師，同時應付學生、老師和家長，還要寫個案紀錄、記得休息。",
    genre: "職業模擬",
    ai: [
      "Claude"
    ],
    aiVerified: true,
    source: "https://www.gvm.com.tw/article/133824",
    hot: "台灣匿名網友用 Claude 做的作品（原名《老師，今天能平安下班嗎？》），在社群爆紅，遠見雜誌報導。",
    added: "2026-10-19",
    tw: true,
    score: 7,
    buzz: "鏡週刊、TVBS、遠見都說爆紅，但找不到原始貼文，網友轉分享最多 30 讚；PTT 沒有討論。",
    scoreDetail: [
      "台灣媒體 5 家（遠見、鏡週刊、TVBS、造咖、iqmore）+5",
      "近 7 天有新報導或討論：遠見、鏡週刊 10/16 報導 +2"
    ]
  }
];

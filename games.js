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
//   tw        true = 在台灣爆紅（台灣媒體報導、台灣社群瘋傳），或是台灣人做的
window.LAST_UPDATED = "2026-10-19";
window.GAMES = [
  {
    id: "taipei-gta",
    name: "臺北 GTA / TAIPEI RUSH 臺北狂飆",
    url: "https://taipeigta.com/",
    desc: "台灣開發者把西門町、台北車站、忠孝復興搬進瀏覽器的 3D 開放世界，可以開車騎車亂逛。",
    genre: "開放世界",
    ai: ["AICodeWith"],
    aiVerified: true,
    source: "https://technews.tw/2026/09/30/taipei-gta/",
    hot: "9 月底在 Threads 公開後爆紅，科技新報、新頭殼、Yahoo 都有報導。作者說燒了超過 1 萬美元 AI Token；「三天 120 萬人同時在線」未經證實。",
    added: "2026-10-19",
    tw: true
  },
  {
    id: "1in8b",
    name: "80億分之1",
    url: "https://1in8b.life/zh/",
    desc: "隨機出生在世界某處，依 172 國真實統計資料活完一生的人生模擬遊戲。",
    genre: "人生模擬",
    ai: ["Claude"],
    aiVerified: true,
    source: "https://www.ettoday.net/news/20261018/3256636.htm",
    hot: "韓國獨立開發者用 AI 約 4 小時做出。繁中版上線後在台灣 Threads 爆紅，ETtoday、中時、NOWnews、數位時代都有報導，網友直呼「投胎在台灣很幸福」。",
    added: "2026-10-19",
    tw: true
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
    tw: true
  },
  {
    id: "counselor-day",
    name: "輔導室：今天也不能倒下",
    url: "https://claude.ai/artifact/AWwoUVfR7KFTQd7ateyNfb",
    desc: "扮演國中唯一的專任輔導老師，同時應付學生、老師和家長，還要寫個案紀錄、記得休息。",
    genre: "職業模擬",
    ai: ["Claude"],
    aiVerified: true,
    source: "https://www.gvm.com.tw/article/133824",
    hot: "台灣匿名網友用 Claude 做的作品（原名《老師，今天能平安下班嗎？》），在社群爆紅，遠見雜誌報導。",
    added: "2026-10-19",
    tw: true
  },
  {
    id: "taiwan-sanbao",
    name: "台灣三寶模擬器",
    url: "https://apps.app.charonyu.cc/play/taiwan-sanbao/index.html",
    desc: "以台灣交通為題材的駕駛遊戲，有「國道模式」和「成為三寶」兩種玩法、四種車可選。",
    genre: "駕駛",
    ai: [],
    aiVerified: true,
    source: "https://www.gvm.com.tw/article/133824",
    hot: "台灣網友阿班（Threads @aihub.tw）作品，遠見雜誌列為 Threads 熱門的 AI 協作遊戲。",
    added: "2026-10-19",
    tw: true
  },
  {
    id: "pokesurvivor",
    name: "PokéSurvivor",
    url: "https://pokesurvivor.com/",
    desc: "寶可夢版類倖存者遊戲，帶著夥伴抵擋敵人波次，支援 4 人連線。",
    genre: "類倖存者",
    ai: [],
    aiVerified: false,
    source: "https://pokesurvivor.com/",
    hot: "非營利粉絲專案，網頁與手機都能玩。官網沒有提到用 AI 製作。",
    added: "2026-10-19"
  },
  {
    id: "capybara-delivery",
    name: "A Game About Capybaras Delivering Food",
    url: "https://capybara-vibejam26.leocoout.dev/",
    desc: "水豚騎滑板車送外賣的多人開放世界遊戲。",
    genre: "多人開放世界",
    ai: ["Claude Code"],
    aiVerified: true,
    source: "https://github.com/lappemic/awesome-ai-built-games",
    hot: "Vibe Jam 2026 冠軍。",
    added: "2026-10-19"
  },
  {
    id: "fantos-megamart",
    name: "Fanto's Mega-Mart",
    url: "https://fantos-megamart.vercel.app/",
    desc: "在鬧鬼的超市裡高速競速，可以和幽靈回放比賽。",
    genre: "競速",
    ai: ["Codex"],
    aiVerified: true,
    source: "https://github.com/lappemic/awesome-ai-built-games",
    hot: "Vibe Jam 2026 第二名。",
    added: "2026-10-19"
  },
  {
    id: "wenware",
    name: "WenWare",
    url: "https://wen-ware.com/",
    desc: "時空版 GeoGuessr：猜出歷史場景的地點和年份。",
    genre: "猜謎",
    ai: ["Codex"],
    aiVerified: true,
    source: "https://github.com/lappemic/awesome-ai-built-games",
    hot: "Vibe Jam 2026 第三名。",
    added: "2026-10-19"
  },
  {
    id: "eyrie",
    name: "Eyrie",
    url: "https://playeyrie.com/",
    desc: "隨時可加入的合作式波次肉鴿遊戲。",
    genre: "合作肉鴿",
    ai: [],
    aiVerified: true,
    source: "https://github.com/lappemic/awesome-ai-built-games",
    hot: "Vibe Jam 2026 最具氛圍獎。",
    added: "2026-10-19"
  },
  {
    id: "bash-fighter",
    name: "Bash Fighter",
    url: "https://bashfighter.com/",
    desc: "最多 20 人同場亂鬥的平台格鬥遊戲，開源。",
    genre: "格鬥",
    ai: ["Claude"],
    aiVerified: true,
    source: "https://github.com/lappemic/awesome-ai-built-games",
    hot: "開源的 AI 製作多人格鬥遊戲。",
    added: "2026-10-19"
  },
  {
    id: "null-range",
    name: "Null Range",
    url: "https://nullrange.com/",
    desc: "受《Elite: Dangerous》啟發的多人第一人稱太空空戰。",
    genre: "太空射擊",
    ai: ["Cursor"],
    aiVerified: true,
    source: "https://github.com/lappemic/awesome-ai-built-games",
    hot: "AI 遊戲列表常見推薦作品。",
    added: "2026-10-19"
  },
  {
    id: "simcfb",
    name: "SimCFB",
    url: "https://simcfb.com/",
    desc: "大學美式足球教練遊戲，招募、戰術加上 3D 比賽畫面。",
    genre: "運動經營",
    ai: ["Claude Code", "Codex"],
    aiVerified: true,
    source: "https://github.com/lappemic/awesome-ai-built-games",
    hot: "完成度高的 AI 製作經營遊戲。",
    added: "2026-10-19"
  },
  {
    id: "great-taxi-assignment",
    name: "The Great Taxi Assignment",
    url: "https://great-taxi-assignment.netlify.app/",
    desc: "在 3D 城市裡限時載客的計程車遊戲。",
    genre: "駕駛",
    ai: ["Cursor", "Claude"],
    aiVerified: true,
    source: "https://github.com/lappemic/awesome-ai-built-games",
    hot: "Vibe Jam 2025 冠軍。",
    added: "2026-10-19"
  },
  {
    id: "pyramid-wars",
    name: "Pyramid Wars",
    url: "https://durian-arcade.itch.io/pyramid-wars",
    desc: "像素風策略遊戲，橫跨十個戰場並用卡牌補充包強化。",
    genre: "策略",
    ai: ["Claude Opus"],
    aiVerified: true,
    source: "https://github.com/lappemic/awesome-ai-built-games",
    hot: "AI Browser Game Jam 3 冠軍。",
    added: "2026-10-19"
  },
  {
    id: "plug-prosper",
    name: "Plug & Prosper",
    url: "https://smallloopworks.itch.io/plug-prosper",
    desc: "經營充電站，用線材和轉接頭幫客人的裝置充電。",
    genre: "解謎經營",
    ai: ["Codex"],
    aiVerified: true,
    source: "https://github.com/lappemic/awesome-ai-built-games",
    hot: "AI Browser Game Jam 4 冠軍。",
    added: "2026-10-19"
  }
];

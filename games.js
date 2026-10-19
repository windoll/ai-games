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
window.LAST_UPDATED = "2026-10-19";
window.GAMES = [
  {
    id: "taipei-gta",
    name: "臺北 GTA / TAIPEI RUSH 臺北狂飆",
    url: "https://taipeigta.com/",
    desc: "在台北街頭開車亂跑的瀏覽器 3D 開放世界遊戲，免下載免註冊。",
    genre: "開放世界",
    ai: ["AICodeWith"],
    aiVerified: true,
    source: "https://xenospectrum.com/en/taipei-rush-ai-browser-game/",
    hot: "2026 年 10 月爆紅，宣稱三天 120 萬同時在線（數字未經證實），約花 1 萬美元 AI tokens 製作。",
    added: "2026-10-19"
  },
  {
    id: "1in8b",
    name: "80億分之1",
    url: "https://1in8b.life/zh/",
    desc: "隨機出生在世界某處，依 172 國真實統計資料活完一生的人生模擬遊戲。",
    genre: "人生模擬",
    ai: ["Claude"],
    aiVerified: true,
    source: "https://1in8b.life/zh/",
    hot: "官網說明由營運者與 AI（Claude）共同製作。",
    added: "2026-10-19"
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

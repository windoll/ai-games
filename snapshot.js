// 每日紀錄：把 games.js 當天的數字存進 history.js，供網站計算「現在最紅」。
// 用法：node snapshot.js（在專案資料夾執行）。同一天重跑會覆蓋當天那筆。
const fs = require("fs");
const path = require("path");

const dir = __dirname;
global.window = {};
eval(fs.readFileSync(path.join(dir, "games.js"), "utf8"));
const historyFile = path.join(dir, "history.js");
if (fs.existsSync(historyFile)) eval(fs.readFileSync(historyFile, "utf8"));

const date = window.LAST_UPDATED;
if (!/^\d{4}-\d{2}-\d{2}$/.test(date || "")) throw new Error("games.js 的 LAST_UPDATED 格式不對：" + date);

const history = window.HISTORY || {};
history[date] = {};
for (const g of window.GAMES) {
  const posts = g.threads?.posts || [];
  history[date][g.id] = {
    shares: g.threads?.totalShares || 0,
    likes: posts.reduce((s, p) => s + (p.likes || 0), 0),
    score: g.score ?? null,
    lastActive: g.lastActive || null,
  };
}

const sorted = Object.fromEntries(Object.entries(history).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(historyFile,
  "// 每日紀錄（由 snapshot.js 產生，請不要手動修改）。\n" +
  "// 格式：日期 → 遊戲 id → { shares: Threads 分享合計, likes: 貼文讚數合計, score: 熱門分數, lastActive }\n" +
  "window.HISTORY = " + JSON.stringify(sorted, null, 2) + ";\n");
console.log(`已存 ${date} 的紀錄：${window.GAMES.length} 款遊戲，共 ${Object.keys(sorted).length} 天`);

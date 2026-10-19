# 定期收集 AI 遊戲：執行步驟

每次執行時照這份步驟，把新找到的當紅 AI 遊戲加進 `games.js`。

## 1. 搜尋
**優先找在台灣爆紅的 AI 遊戲**，先查台灣來源：
- 台灣新聞：ETtoday、數位時代、遠見、科技新報、新頭殼、NOWnews、中時、自由、Yahoo 奇摩新聞
- 搜尋關鍵字：「AI 做的遊戲 爆紅」「Threads 爆紅 網頁遊戲」「vibe coding 遊戲 台灣」「Claude 做的遊戲」「AI 協作 模擬遊戲」「免費玩 網頁遊戲 網友瘋玩」
- 社群：Threads、PTT、Dcard 上被大量轉傳的 AI 遊戲

在台灣爆紅（台灣媒體報導、台灣社群瘋傳）或是台灣人做的，寫入時加上 `tw: true`。

接著再查國際來源（最近 2 週）：
- 新聞：「vibe coded game viral」「AI-made browser game」「AI 做的遊戲 爆紅」「Claude Code 遊戲」
- 列表：https://github.com/lappemic/awesome-ai-built-games 、https://aibuiltgames.com/recent-added-games 、https://vibecodedapps.dev/games/
- 比賽：Vibe Jam（https://vibej.am/）、AI Browser Game Jam（itch.io）、vibecode.game
- 社群：Reddit r/vibecoding、Hacker News「Show HN」中的遊戲

## 2. 篩選
只收符合以下全部條件的遊戲：
- 有可以直接遊玩的網址（網頁或 itch.io）
- 有公開資料說明是用 AI 做的（作者自述、新聞、比賽規定）；只靠猜測的不收
- 最近有熱度：新聞報導、比賽得獎、社群大量討論
- `games.js` 裡還沒有（用網址和名稱比對）

## 2.5 量熱度（每款候選都要做）
只記錄頁面上實際看到的數字，看不到就寫「看不到」，不要猜。
- **Threads：** 找原始貼文（WebSearch `site:threads.com 遊戲名`，再 WebFetch 貼文網址），記下讚、留言、轉發、分享、瀏覽數和日期。
- **PTT：** WebSearch `site:ptt.cc 遊戲名`，記下看板、標題、推文數。
- **Google 搜尋趨勢：** 可用時查台灣過去 30 天，拿「台北GTA」當基準一起比較，記下平均值和高峰。查不到就略過。

熱度等級和分數（score）：
- 爆紅 80–100：Threads 原文 1 萬讚以上，或 Google 搜尋趨勢接近台北GTA
- 熱門 60–79：PTT 有 50 推以上的文章且多篇討論，或 Threads 5 千讚以上
- 中等 40–59：Threads 1 千讚以上，或 PTT 一篇 50 推以上
- 小眾 20–39：有數字但都低於上面
- 未證實 0–19：只有媒體說紅，找不到任何互動數字

把等級寫入 `heat`、分數寫入 `score`、數字摘要寫入 `buzz`（例：`Threads 原文 1.2K 讚（10/20）；PTT C_Chat 一篇 30 推`）。

## 3. 寫入
- 在 `window.GAMES` 陣列**開頭**加入新項目，欄位格式照檔案上方說明，簡介用繁體中文。
- 不要刪除或修改舊項目。
- 把 `window.LAST_UPDATED` 改成今天的日期。
- 一次最多加 10 款，挑最熱門的，台灣熱門的優先。

## 4. 回報
最後列出這次新增的遊戲（名稱、網址、熱門原因），沒有新的就說沒有。

# 定期收集中文 AI 遊戲：執行步驟

這個網站收**在華語圈爆紅、而且有中文的 AI 遊戲**（以台灣為主，也收香港、中國、星馬的熱度），依 Threads 分享數排名。每次執行時照這份步驟更新 `games.js`。

## 收錄規則（總覽）
- **基本條件（排行榜和觀察中都要）：**
  1. 有公開資料說明是用 AI 做的（作者自述、遊戲頁面、新聞報導都可以）；只靠猜測的不收
  2. **遊戲本身有中文**：官方提供繁中或簡中介面，或遊戲內容本來就是中文。玩家自製的中文補丁不算。寫進 `lang`（繁中／簡中／繁簡）。沒有中文的遊戲不收
- **排行榜（`tier: "main"`）**，另外還要：
  3. Threads 分享合計（`threads.totalShares`）至少 **5,000**
  4. 至少 **2 個不同帳號**的相關貼文各有 **500 分享以上**（防止只靠一篇貼文或行銷帳號灌出來），其中至少 1 個是華語帳號
- **觀察中（`tier: "watch"`）**：符合基本條件，再加上下面**任一項**討論就收：
  - Threads 分享合計 300 以上
  - PTT 文章 15 推以上
  - 巴哈、Dcard、小紅書、微博、知乎上有明顯討論（有實際互動數字）
  - Bilibili 或 YouTube 試玩影片 5,000 觀看以上
  - 任一華語媒體報導（台灣、香港、中國、星馬都算）
  - 寫 `missing` 說明離排行榜還差什麼。每天重新檢查，達到排行榜門檻就改成 `tier: "main"`
- **媒體報導不是排行榜門檻**：只當加分（熱門分數）和查證 AI 製作的來源。
- **不刪除遊戲：** 已收錄的遊戲不因數字變動而移除。超過 30 天沒有新報導或新貼文的，網站會依 `lastActive` 自動標成「已退燒」並排到最後。
- **唯一的移除情況：** 發現收錄時的資料是錯的或不符基本條件（例如其實不是 AI 做的、沒有中文、遊戲網址失效或被下架），並在回報裡說明原因。

## 1. 搜尋新遊戲（台灣為主，也查其他華語圈）
- 台灣新聞：ETtoday、數位時代、遠見、科技新報、新頭殼、NOWnews、中時、自由、Yahoo 奇摩新聞、鏡週刊、鏡報、TVBS、中天、4Gamers、巴哈姆特、INSIDE、中央社
- 香港新聞：unwire.hk、HK01、香港經濟日報、明報、星島、ePrice HK、ezone
- 中國新聞：36氪、少數派、遊研社、機核、觸樂、IT之家、愛范兒、量子位、機器之心、新浪科技、澎湃
- 星馬：星洲日報、聯合早報
- 搜尋關鍵字（繁簡都要搜）：「AI 做的遊戲 爆紅」「AI 做的游戏 爆火」「Threads 爆紅 網頁遊戲」「vibe coding 遊戲」「Claude 做的遊戲」「一個人用 AI 做遊戲」「AI 協作 模擬遊戲」「模擬器 爆紅 網頁」「免費玩 網頁遊戲 網友瘋玩」「claude.ai artifact 遊戲」「Cursor 做游戏」「豆包 做游戏」
- 中國社群：Bilibili（`site:bilibili.com AI 做的游戏`）、小紅書、微博、知乎、TapTap- 社群：Threads、PTT、Dcard 上被大量轉傳的 AI 遊戲
- **論壇（每天都要掃）：**
  - PTT 看板 C_Chat、Little-Games、Gossiping、Steam、Tech_Job、Soft_Job：`site:ptt.cc AI 遊戲`、`site:ptt.cc 網頁遊戲`、`site:pttweb.cc Claude 遊戲`、`site:ptt.cc vibe coding`
  - 巴哈姆特「小品遊戲分享討論」哈啦板（bsn=60183）和 GNN 新聞：`site:forum.gamer.com.tw AI 製作 遊戲`、`site:gnn.gamer.com.tw AI 遊戲`
  - Dcard：`site:dcard.tw AI 遊戲 網頁`、`site:dcard.tw Claude 遊戲`
- **影音：** 台灣遊戲實況主、YouTuber 的網頁遊戲試玩（例：CD喜德）：`網頁遊戲 試玩 AI`、`site:youtube.com AI 做的遊戲 試玩`
- **整理文：** 會一次列很多款台灣 AI 網頁遊戲的文章（例：iqmore「台灣 Claude AI 等 AI 相關線上網頁遊戲整理」、free.com.tw、4Gamers 網頁遊戲標籤）。WebFetch 讀不到（403）時，可以用瀏覽器打開讀（不要登入）
- **追蹤推薦帳號：** 常介紹 AI 遊戲的 Threads 帳號（例：@what.game.play、@game_time_roi、@aiposthub），看它們最近介紹了哪些遊戲
- **看已收錄遊戲的報導：** 媒體寫一款遊戲時，常順便提到其他類似作品（例：遠見那篇同時提到 4 款），把這些也列為候選
- 也直接搜 Threads 上爆紅的遊戲貼文（不必等新聞）：`site:threads.com 遊戲 爆紅`、`site:threads.com claude.ai/artifact`、`site:threads.com 模擬器 網頁`
- 同一款遊戲常有好幾個名字（例：「校事會議模擬器」和「今天也要平安下班」是同一款）。用網址比對，同網址就是同一款，名稱都記進 `aliases`。

## 2. 每款遊戲都要做（新候選和既有遊戲）

### 2.1 用所有名稱搜尋
用 `aliases` 裡的**每一個名稱**都搜一次（WebSearch `site:threads.com 名稱`、`site:ptt.cc 名稱`、一般新聞搜尋）。找到新名稱就加進 `aliases`。

### 2.2 Threads 分享數（排名依據）
- 來源：作者原文、媒體文章裡嵌入或引用的 Threads 貼文、2.1 搜到的貼文
- 每篇用 WebFetch 打開，記下帳號、網址、日期、分享（Share）、讚、瀏覽數。頁面上看不到分享數的貼文不算
- `threads.posts` 保留分享數最高的 3 篇：**已記錄的貼文不會因為今天沒搜到就拿掉**，只會被分享數更高的新貼文取代；每次都重新打開已記錄的貼文更新數字
- 寫入 `threads`：`{ totalShares: 3 篇分享數合計, checked: "查詢日期", posts: [{ account, url, date, shares, likes, views }] }`，posts 依分享數由高到低

### 2.3 原始貼文
找作者自己第一次公開遊戲的貼文（Threads、X、Reddit、itch.io 都可以），寫入 `origin`：`{ platform, account, url, date, stats }`。
- `account` 後面標「（作者）」；`stats` 只寫頁面上實際看到的數字（例：`731 分享・593 讚・3.97 萬瀏覽`）
- X 用 WebFetch 打不開時，可以用瀏覽器開貼文頁讀數字（不要登入）；X 不公開分享數，寫觀看、讚、轉推、書籤
- 作者匿名或找不到原文就寫 `origin: null`

### 2.4 最後活躍日
`lastActive` = 找到的最新一篇台灣新聞報導或 Threads／PTT 貼文的日期（YYYY-MM-DD），`lastActiveNote` 寫依據（例：`ETtoday 10/18 報導`）。只會往後更新，不會往前改。

### 2.5 熱門分數（參考用）
只記錄頁面上實際看到的數字，看不到就寫「看不到」，不要猜。
- **PTT：** 記下看板、標題、推文數
- **Google 搜尋趨勢：** 可用時查台灣過去 30 天，拿「台北GTA」當基準一起比較，記下平均值和高峰。查不到就略過
- **流量：** 遊戲官網有公開人數計數器，或有可信的公開流量數據時記下來；沒有就略過

熱門分數（score，滿分 10），逐項加總：
- 被幾家**不同的台灣媒體**報導：一家 1 分，最多 5 分（同一家多篇只算一家；轉載、社群貼文、部落格、內容農場不算）
- 最近 7 天內還有新報導或討論：+2
- Threads 或 PTT 有明確的高互動貼文（Threads 上千讚，或 PTT 爆文 100 推以上）：+2
- 有公開的遊玩人數，或 Google 搜尋趨勢明顯上升：+1

寫入欄位：`score`、`scoreDetail`（每一項加分的理由與數字，例：`"台灣媒體 3 家（ETtoday、遠見、TVBS）+3"`）、`buzz`（Threads／PTT／搜尋趨勢的數字摘要）。

## 3. 寫入
- 新遊戲加進 `window.GAMES` 陣列（`tw: true`、寫 `lang`，並寫 `tier`：達門檻寫 `main`，觀察中寫 `watch` 加 `missing`），欄位格式照檔案上方說明，簡介用繁體中文。
- 既有遊戲只可以更新 `tier`、`missing`、`aliases`、`threads`、`origin`、`lastActive`、`lastActiveNote`、`score`、`scoreDetail`、`buzz`，其他欄位不要改。
- 陣列先放 `main` 再放 `watch`，各自依 `threads.totalShares` 由高到低排列。
- 把 `window.LAST_UPDATED` 改成今天的日期（**每天都要改**，即使沒有新遊戲）。
- 一次最多加 10 款，挑 Threads 分享數最高的。
- **每天存紀錄：** games.js 改完、`node --check games.js` 通過後，在專案資料夾執行 `node snapshot.js`，它會把今天的數字存進 `history.js`（不要手動改 history.js）。網站的「現在最紅」就是用這份紀錄算最近 7 天增加的分享數，所以**哪天沒跑，那天就會缺資料**。

## 4. 回報
最後列出：
- 新增的遊戲（名稱、網址、Threads 分享數、原始貼文）
- 既有遊戲的分享數與排名變化、新找到的名稱或貼文
- 這次變成「已退燒」的遊戲（`lastActive` 剛超過 30 天的）
- 觀察中名單的變化：新加入的、升上主榜的、各自還差什麼
沒有新的就說「今天沒有找到新的台灣爆紅 AI 遊戲」。

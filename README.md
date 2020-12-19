# 講幹話治百病
採用 Express 打造的幹話產生器，使用者可以在此一鍵製造幹話。

## 專案畫面
![trash_talk_img](https://user-images.githubusercontent.com/69975614/102693706-7f48d680-4257-11eb-905d-95ce4cac7c61.png)
## 功能描述 (features)
- 使用者在工程師、設計師、或創業家中選擇一個要噴的對象
- 使用者按下"製造幹話"按鈕後，右側即會噴出一句幹話

## 環境建置(prerequisites)
- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0

## 安裝與執行步驟 (installation and execution)
- 提醒: 以下動作需使用 terminal 或 Git Bash 指令
1. 將專案clone到本地環境
   ```
   git clone https://github.com/ChangE71/ac_trash_talk_generator.git
   ```
2. 進入專案資料夾
   ```
   cd trash_talk_generator
   ```
3. 至 package.json 檔案裝查看需安裝的npm套件，並搭配以下指令安裝
   ```
   npm install
   ```
4. 安裝 nodemon 套件
   - 提醒: 若先前在本地開發環境中以`npm install -g nodemon` 指令安裝過可跳至下步驟
6. 啟動伺服器，執行 app.js 檔案
   - 使用 `nodemon app.js` 或 `npm run dev` 執行
   - 看到回應 `serving` 代表成功執行
7. 開啟任一瀏覽器瀏覽器輸入 http://localhost:3000 開始使用

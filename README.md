# Monthly AI/Tech Top 10 News Dashboard
月度AI科技十大新闻看板

A React web app for tracking and displaying the monthly Top 10 AI/Tech news with multi-language support.

## Features

- 📋 **TOP 10 News Table** with columns: No., Summary (title + subtitle), Impact, Applicability, Future Prediction
- ✏️ **Edit/Add/Delete** news items via modal form
- ⭐ **Highlight** important rows (yellow background)
- 📅 **Month/Year Selection** – each month's data is saved independently
- 🗂️ **Archive Sidebar** – browse all saved months
- 🌐 **Multi-language** – Chinese (中文), English, Korean (한국어)
- 💾 **localStorage persistence** – data saved in the browser

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech Stack

- **React** (Vite)
- **TailwindCSS**
- **localStorage** for data persistence
- **i18n** multi-language support (zh/en/ko)

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

---

## 中文使用指南

### 快速开始

```bash
npm install
npm run dev
```

在浏览器中打开 [http://localhost:5173](http://localhost:5173)。

### 切换语言

点击页面右上角的语言按钮即可切换语言：

- **中文** — 切换为中文界面
- **EN** — 切换为英文界面
- **한국어** — 切换为韩文界面

### 选择月份

在页面顶部的下拉菜单中选择**年份**和**月份**，即可查看或编辑对应月份的新闻数据。每个月份的数据独立保存。

### 添加新闻

1. 点击右上角的 **「+ 添加新闻」** 按钮，弹出编辑表单。
2. 填写以下字段：
   - **序号（NO）**：新闻编号（1–10）
   - **标题**：新闻主标题（必填）
   - **副标题**：补充说明（可选）
   - **冲击性**：该新闻的市场/行业冲击描述
   - **适用性**：对业务的实际应用场景
   - **未来预测**：未来趋势预判
   - **高亮**：勾选后该行将以黄色背景突出显示
3. 点击 **「保存」** 完成添加。

### 编辑新闻

点击某条新闻行右侧的 **「编辑」** 按钮，在弹出的表单中修改内容，然后点击 **「保存」**。

### 删除新闻

点击某条新闻行右侧的 **「删除」** 按钮，确认后即可删除该条记录。

### 高亮重要新闻

点击某条新闻行右侧的 **「★」** 按钮，可切换该行的高亮状态（黄色背景）。再次点击取消高亮。

### 查看历史归档

页面左侧的 **「历史归档」** 侧边栏列出了所有已保存数据的月份。点击任意月份即可跳转查看该月数据。

### 数据保存说明

所有数据保存在浏览器的 **localStorage** 中，无需登录或联网。清除浏览器数据会导致数据丢失，建议定期在浏览器中导出或备份重要内容。

# 📝 Note-Taking CLI App

A lightweight command-line note-taking application built with **Node.js**, featuring full **CRUD** functionality, custom commands using **yargs**, and the ability to **view notes in the browser** using dynamic HTML.

## 🚀 Live Demo

> Not applicable — this is a CLI-based application.

## 📂 Project Structure

marryamabid/
├── node_modules/ # [Excluded in .gitignore]
├── src/ # Source code
│ ├── command.js # CLI command definitions (add, list, read, remove)
│ ├── db.js # File-based database logic using fs module
│ ├── notes.js # Notes logic and interactions
│ ├── server.js # Local server to display notes in browser
│ └── template.html # Styled HTML template to render notes
├── db.json # Flat-file JSON database to store notes
├── index.js # Entry point for yargs CLI commands
├── package.json # NPM metadata and dependencies
├── package-lock.json # Dependency tree lock
└── .gitignore # Excludes node_modules and other unnecessary files

## ⚙️ Features

- 📌 **Add, List, Read, Delete, and Update** notes directly from the terminal.
- 💡 Uses `yargs` for clean command parsing and friendly CLI interactions.
- 💾 Notes stored in a flat JSON file (`db.json`) using the native `fs` module.
- 🌐 View notes in your browser with styled HTML using the `open` module and a local server (`server.js`).
- 🔄 Includes error handling for duplicate notes, missing arguments, and invalid commands.
- 📁 Modular architecture to separate database logic, CLI commands, and browser rendering.

## 🛠️ Installation

```bash
git clone https://github.com/note-taking-app/marryamabid.git
npm install

Add a Note
note  new <note>

List All Notes
note all

Read a Note
note find <filter>

Delete a Note
note remove <id>

Update a Note
note find <filter>

View Notes in Browser
note web [port]

## Problem Solving Highlights
Implemented file-based persistence using fs and resolved async handling with clear success/failure feedback.

Overcame CLI limitations by dynamically generating HTML and launching it via the open module for better UX.

Added input validation and duplicate-checking to avoid data loss or overwrites.
```

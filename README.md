## 📝 Task Manager App

Это простое приложение для управления списком задач с использованием **React** и **Node.js (Express/Nest/Fastify)**. Задачи можно добавлять, отмечать как выполненные, и они сохраняются на сервере.

### 🚀 Стек технологий

- **Frontend**: React, TypeScript, Axios, Tailwind CSS  
- **Backend**: Node.js + Express/NestJS/Fastify  
- **Database**: SQLite (или любая другая, используемая на бэкенде)

---

### 📦 Установка

1. Клонируй репозиторий:

```bash
git clone https://github.com/your-username/tasks-app.git
cd tasks-app
```

2. Установи зависимости для клиента:

```bash
cd client
npm install
```

3. Установи зависимости для сервера:

```bash
cd ../server
npm install
```

---

### ▶️ Запуск проекта

**Frontend**:

```bash
cd client
npm run dev
```

**Backend**:

```bash
cd server
npm run start
```

По умолчанию:
- клиент работает на [`http://localhost:5173`](http://localhost:5173)
- сервер на [`http://localhost:3000`](http://localhost:3000)

---

### 📁 Структура проекта

```
tasks-app/
├── client/             # React-приложение
│   ├── src/
│   │   ├── App.tsx
│   │   └── api.ts
│   └── ...
├── server/             # Node.js backend
│   └── ...
└── README.md
```

---

### 📌 Возможности

- ✅ Добавление задач
- ✅ Отображение списка задач
- ✅ Отметка задач как выполненные
- ✅ Состояния загрузки и ошибок

---

### 🛠️ План по улучшению

- [ ] Удаление задач  
- [ ] Фильтрация: "все / активные / завершённые"  
- [ ] Аутентификация пользователей  
- [ ] Drag-and-drop сортировка

---

### 📃 Лицензия

MIT — используй свободно!

---

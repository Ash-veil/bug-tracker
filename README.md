# 🐞 Bug Tracker (Kanban Board)

A simple bug tracking web application built with **React** (frontend)
and **Node.js/Express** (backend).\
It lets a user create projects and manage bugs inside a **Kanban board**
with drag-and-drop functionality.

------------------------------------------------------------------------

## ✨ Features (MVP)

-   🔑 **Authentication** (login/signup with JWT)\
-   📂 **Projects**: create and manage multiple projects\
-   🗂️ **Kanban Board** per project with default statuses:
    -   Open\
    -   Assigned\
    -   In Progress\
    -   Fixed\
    -   Closed\
-   🐛 **Bugs**:
    -   Create, edit, delete bugs\
    -   Assign priority (low/medium/high/critical)\
    -   Add labels/tags (e.g., frontend, urgent)\
    -   Drag & drop bugs between statuses\
-   🎨 Clean UI with **React + Tailwind CSS**

------------------------------------------------------------------------

## 🗂️ Tech Stack

-   **Frontend:** React, TailwindCSS, React Router, react-beautiful-dnd\
-   **Backend:** Node.js, Express, SQLite/Postgres\
-   **Auth:** JWT-based authentication\
-   **Docs:** Swagger (for API documentation)

------------------------------------------------------------------------

## 📊 Database Schema (Single User Version)

-   **Users**: id, name, email, passwordHash\
-   **Projects**: id, owner_id, name, description\
-   **Statuses**: id, project_id, name, order\
-   **Bugs**: id, project_id, status_id, title, description, priority,
    assignee_id, createdAt, updatedAt\
-   **Labels**: id, project_id, name, color\
-   **BugLabels**: bug_id, label_id

------------------------------------------------------------------------

## 🚀 Getting Started

### 1. Clone the repo

``` bash
git clone https://github.com/your-username/bug-tracker.git
cd bug-tracker
```

### 2. Backend Setup

``` bash
cd server
npm install
npm run dev
```

### 3. Frontend Setup

``` bash
cd client
npm install
npm run dev
```

------------------------------------------------------------------------

## 📌 Roadmap

-   ✅ Single-user projects & bugs\
-   🔜 Teams & project members (multi-user support)\
-   🔜 Comments under bugs\
-   🔜 Real-time updates with WebSockets\
-   🔜 SaaS billing & subscriptions



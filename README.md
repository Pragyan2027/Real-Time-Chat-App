# 💬 Real-Time Chat Application

![Real-Time Chat App Screenshot](./Screenshot%202025-07-03%20143613.png)

A modern **real-time chat application** built using **Spring Boot**, **WebSockets**, **Thymeleaf**, and **React**. This app enables seamless, instant communication between users with an elegant and responsive UI.

---

## 🚀 Features

- 🔄 **Live Messaging** using WebSockets
- 💻 **Frontend-Backend Sync** with React and Spring Boot
- 🧠 **Thymeleaf integration** for server-side rendering
- 💬 **Chat Bubbles** with sender/receiver distinction
- 📅 **Timestamp Display** for each message
- 📌 **Date Separator** (e.g., “Today”)
- 🎨 **Floating Send Button** and styled UI
- ✅ **Responsive Design** for modern devices

---

## 🛠️ Tech Stack

| Layer        | Technology                  |
|--------------|-----------------------------|
| Backend      | Spring Boot, WebSocket (STOMP) |
| Frontend     | React.js, HTML, CSS, JavaScript |
| Templating   | Thymeleaf                   |
| Styling      | Tailwind CSS (optional) / Custom CSS |
| Messaging    | SockJS + STOMP              |

---
## ⚙️ How It Works

1. **User Enters Name** → Sends messages via WebSocket.
2. **Messages Broadcast** using STOMP over SockJS.
3. **UI Updates in Real-Time** with user-aligned message bubbles.
4. **Server Maintains Connection** through Spring WebSocket configuration.

---

## 🎯 Future Improvements

- ✅ **User authentication and chat rooms**  
- 🔔 **Notification support**
- 💾 **Message persistence with a database**
- 📱 **Full mobile responsiveness**





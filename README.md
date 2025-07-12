# 💬 Chat App with Socket.IO

A real-time chat application built with **Node.js**, **Express**, **React**, **MongoDB**, and **Socket.IO**.

## 🚀 Current Status

This project has a **fully functional chat application** with complete authentication, message handling, and user interface. The only pending feature is the **real-time Socket.IO implementation** for instant messaging.

## 🛠️ Technologies Used

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Socket.IO** - Real-time communication (ready for implementation)
- **JWT** - Token authentication
- **bcryptjs** - Password encryption
- **Cookie-parser** - Cookie handling
- **Morgan** - HTTP logger
- **Dotenv** - Environment variables

### Frontend

- **React 19** - UI library
- **Vite** - Build tool
- **TailwindCSS** - CSS framework
- **DaisyUI** - UI components
- **React Router** - Navigation
- **ESLint** - Code linter

## 📁 Project Structure

```
chat_app_socket_io/
├── backend/
│   ├── controllers/
│   │   ├── auth.controller.js      # Authentication (login, register, logout)
│   │   ├── messages.controller.js  # Message handling
│   │   └── user.controller.js      # User management
│   ├── libs/
│   │   ├── bcrypt.js              # Encryption utilities
│   │   ├── connectMongoDB.js      # Database connection
│   │   └── JWT.js                 # JWT token handling
│   ├── middlewares/
│   │   └── protectedRoutes.js     # Authentication middleware
│   ├── models/
│   │   ├── conversation.model.js  # Conversation schema
│   │   ├── messages.model.js      # Message schema
│   │   └── users.model.js         # User schema
│   ├── routes/
│   │   ├── auth.routes.js         # Authentication routes
│   │   ├── messages.routes.js     # Message routes
│   │   └── users.routes.js        # User routes
│   └── server.js                  # Main server
├── frontend/
│   ├── src/
│   │   ├── components/            # React components
│   │   ├── context/              # Context providers
│   │   ├── hooks/                # Custom hooks
│   │   ├── pages/                # Page components
│   │   ├── libs/                 # Utility functions
│   │   ├── App.jsx               # Main component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Main styles
│   ├── index.html                # HTML template
│   ├── vite.config.js            # Vite configuration
│   └── package.json              # Frontend dependencies
└── package.json                  # Backend dependencies
```

## 🔗 API Endpoints

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users

- `GET /api/users/` - Get users for sidebar (protected)

### Messages

- `POST /api/messages/send/:id` - Send message to user (protected)
- `GET /api/messages/:id` - Get conversation with user (protected)

## 💾 Database Models

### User

```javascript
{
  fullName: String,
  username: String (unique),
  password: String (encrypted),
  gender: String ("male" | "female"),
  profilePic: String,
  timestamps: true
}
```

### Message

```javascript
{
  senderId: ObjectId (ref: User),
  receiverId: ObjectId (ref: User),
  message: String,
  timestamps: true
}
```

### Conversation

```javascript
{
  participants: [ObjectId] (ref: User),
  messages: [ObjectId] (ref: Messages),
  timestamps: true
}
```

## ⚙️ Setup and Installation

### Prerequisites

- Node.js v18+
- MongoDB
- Git

### Environment Variables

Create `.env` file in the backend root:

```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/chat_app
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Backend Installation

```bash
# Install backend dependencies
npm install

# Run server in development mode
npm run server
```

### Frontend Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run in development mode
npm run dev
```

## 🔐 Security Features

- **JWT Authentication**: Secure tokens with 1-day expiration
- **HTTP-Only Cookies**: XSS attack prevention
- **Password Hashing**: bcryptjs with 10 salt rounds
- **Protection Middleware**: Protected route validation
- **Data Validation**: User input verification

## 🎯 Pending Features

- [ ] **Real-time Socket.IO** for instant messaging
- [ ] **Status indicators** (online/offline)
- [ ] **Message notifications**
- [ ] **Group chat** and rooms
- [ ] **File and image upload**
- [ ] **Dark mode** and customizable themes
- [ ] **Emojis** and reactions

## 👨‍💻 Author

**AndHoyosGarzon**

- GitHub: [@AndHoyosGarzon](https://github.com/AndHoyosGarzon)

## 📄 License

This project is under the ISC License.

---

⭐ **Give it a star if you like the project!**

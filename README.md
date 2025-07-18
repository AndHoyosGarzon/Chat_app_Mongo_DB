# 💬 Real-Time Chat Application

A fully functional real-time chat application built with **Node.js**, **Express**, **React**, **MongoDB**, and **Socket.IO**. Features instant messaging, user authentication, online/offline status tracking, and a modern responsive UI.

![Chat Application](https://img.shields.io/badge/Status-Complete-brightgreen) ![Socket.IO](https://img.shields.io/badge/Socket.IO-Implemented-blue) ![React](https://img.shields.io/badge/React-19-blue) ![Node.js](https://img.shields.io/badge/Node.js-18+-green)

## ✨ Features

### 🔐 Authentication & Security
- **User Registration & Login** - Secure account creation and authentication
- **JWT Token Authentication** - Session management with HTTP-only cookies
- **Password Encryption** - bcryptjs hashing with salt rounds
- **Protected Routes** - Middleware-based route protection
- **XSS Protection** - HTTP-only cookies prevent cross-site scripting

### 💬 Real-Time Messaging
- **Instant Messaging** - Socket.IO powered real-time communication
- **Message History** - Persistent conversation storage
- **Auto-scroll** - Smooth scrolling to latest messages
- **Message Timestamps** - Formatted time display for each message
- **Sound Notifications** - Audio alerts for new messages

### 👥 User Experience
- **Online/Offline Status** - Real-time user presence indicators
- **User Search** - Find users by name in the sidebar
- **Profile Pictures** - Gender-based avatar system
- **Responsive Design** - Mobile-friendly interface
- **Modern UI** - TailwindCSS with DaisyUI components
- **Loading States** - Skeleton loaders and spinners

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Socket.IO** - Real-time bidirectional communication
- **MongoDB** - NoSQL document database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing and encryption
- **Cookie-parser** - Cookie handling middleware
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **dotenv** - Environment variable management

### Frontend
- **React 19** - User interface library
- **Vite** - Build tool and development server
- **Socket.IO Client** - Real-time client connection
- **React Router** - Client-side routing
- **Zustand** - State management
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **React Hot Toast** - Notification system
- **ESLint** - Code linting and formatting

## 📁 Project Architecture

```
Chat_app_Mongo_DB/
├── backend/
│   ├── controllers/           # Business logic handlers
│   │   ├── auth.controller.js     # Authentication operations
│   │   ├── messages.controller.js # Message CRUD operations
│   │   └── user.controller.js     # User management
│   ├── libs/                  # Utility libraries
│   │   ├── bcrypt.js              # Password encryption
│   │   ├── connectMongoDB.js      # Database connection
│   │   ├── JWT.js                 # Token management
│   │   └── socket.js              # Socket.IO configuration
│   ├── middlewares/           # Request middlewares
│   │   └── protectedRoutes.js     # Authentication middleware
│   ├── models/                # Database schemas
│   │   ├── conversation.model.js  # Conversation schema
│   │   ├── messages.model.js      # Message schema
│   │   └── users.model.js         # User schema
│   ├── routes/                # API route definitions
│   │   ├── auth.routes.js         # Authentication endpoints
│   │   ├── messages.routes.js     # Message endpoints
│   │   └── users.routes.js        # User endpoints
│   └── server.js              # Application entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Conversation.jsx       # Individual conversation item
│   │   │   ├── Conversations.jsx      # Conversation list
│   │   │   ├── LogoutButton.jsx       # Logout functionality
│   │   │   ├── Message.jsx            # Individual message bubble
│   │   │   ├── MessageInput.jsx       # Message composition
│   │   │   ├── Messages.jsx           # Message list container
│   │   │   ├── MessagesContainer.jsx  # Main chat interface
│   │   │   ├── MessageSkeleton.jsx    # Loading skeleton
│   │   │   ├── NoChatSelected.jsx     # Empty state
│   │   │   ├── SearchInput.jsx        # User search
│   │   │   └── Sidebar.jsx            # Navigation sidebar
│   │   ├── context/           # React context providers
│   │   │   ├── AuthContext.jsx        # Authentication state
│   │   │   ├── SocketContext.jsx      # Socket connection
│   │   │   └── zustandStore/          # Zustand store
│   │   │       └── useConversation.js # Conversation state
│   │   ├── hooks/             # Custom React hooks
│   │   │   ├── useGetCoversations.js  # Fetch conversations
│   │   │   ├── useGetMessages.js      # Fetch messages
│   │   │   ├── useListenMessages.js   # Real-time message listener
│   │   │   ├── useLogin.js            # Login functionality
│   │   │   ├── useLogout.js           # Logout functionality
│   │   │   ├── useSendMessages.js     # Send message
│   │   │   └── useSignup.js           # Registration functionality
│   │   ├── libs/              # Utility functions
│   │   │   ├── emojis.js              # Random emoji generator
│   │   │   ├── Errors.js              # Error handling
│   │   │   └── extracTime.js          # Time formatting
│   │   ├── pages/             # Page components
│   │   │   ├── home/Home.jsx          # Main chat interface
│   │   │   ├── login/Login.jsx        # Login page
│   │   │   └── signup/Signup.jsx      # Registration page
│   │   ├── assets/            # Static assets
│   │   │   └── sound/
│   │   │       └── notification.mp3  # Message notification sound
│   │   ├── App.jsx            # Main application component
│   │   ├── main.jsx           # Application entry point
│   │   └── index.css          # Global styles
│   ├── index.html             # HTML template
│   ├── vite.config.js         # Vite configuration
│   └── package.json           # Frontend dependencies
│
├── package.json               # Backend dependencies
└── README.md                  # Project documentation
```

## 🔗 API Endpoints

### Authentication Routes (`/api/auth`)
| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | `/signup` | User registration | Public |
| POST | `/login` | User login | Public |
| POST | `/logout` | User logout | Public |

### User Routes (`/api/users`)
| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| GET | `/` | Get all users for sidebar | Protected |

### Message Routes (`/api/messages`)
| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| GET | `/:id` | Get conversation messages | Protected |
| POST | `/send/:id` | Send message to user | Protected |

## 💾 Database Schema

### User Model
```javascript
{
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"]
  },
  profilePic: {
    type: String,
    default: ""
  },
  timestamps: true
}
```

### Message Model
```javascript
{
  senderId: {
    type: ObjectId,
    ref: "User",
    required: true
  },
  receiverId: {
    type: ObjectId,
    ref: "User",
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamps: true
}
```

### Conversation Model
```javascript
{
  participants: [{
    type: ObjectId,
    ref: "User"
  }],
  messages: [{
    type: ObjectId,
    ref: "Messages",
    default: []
  }],
  timestamps: true
}
```

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** v18 or higher
- **MongoDB** (local installation or MongoDB Atlas)
- **Git** for version control

### Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3001

# Database Configuration
MONGO_URI=mongodb://localhost:27017/chat_app

# Authentication
JWT_SECRET=your_super_secure_jwt_secret_key_here

# Environment
NODE_ENV=development
```

### Backend Setup

```bash
# Clone the repository
git clone <repository-url>
cd Chat_app_Mongo_DB

# Install backend dependencies
npm install

# Start the backend server (with auto-reload)
npm run server
```

The backend server will start on `http://localhost:3001`

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install frontend dependencies
npm install

# Start the development server
npm run dev
```

The frontend will start on `http://localhost:3000`

### Development Workflow

1. **Start MongoDB** - Ensure MongoDB is running locally or connect to MongoDB Atlas
2. **Start Backend** - Run `npm run server` in the root directory
3. **Start Frontend** - Run `npm run dev` in the frontend directory
4. **Access Application** - Open `http://localhost:3000` in your browser

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication with 1-day expiration
- **HTTP-Only Cookies** - Prevents XSS attacks by storing tokens in secure cookies
- **Password Hashing** - bcryptjs with 10 salt rounds for secure password storage
- **Protected Routes** - Middleware validation for authenticated endpoints
- **CORS Configuration** - Controlled cross-origin resource sharing
- **Input Validation** - Client and server-side input validation
- **Secure Cookie Settings** - Production-ready cookie configuration

## 🚀 Socket.IO Implementation

### Real-Time Features
- **Instant Message Delivery** - Messages appear immediately without page refresh
- **Online/Offline Status** - Real-time user presence tracking
- **Connection Management** - Automatic reconnection handling
- **User Socket Mapping** - Efficient user-to-socket ID mapping

### Socket Events
- `connection` - User connects to chat
- `disconnect` - User leaves chat
- `newMessage` - Real-time message broadcasting
- `getOnlineUsers` - Online user status updates

## 🎨 UI/UX Features

- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Dark Theme** - Modern dark interface with gradient backgrounds
- **Loading States** - Skeleton loaders and spinners for better UX
- **Toast Notifications** - Success and error message notifications
- **Smooth Animations** - Hover effects and transitions
- **Avatar System** - Gender-based profile pictures
- **Message Bubbles** - WhatsApp-style message layout
- **Auto-scroll** - Automatic scrolling to latest messages

## 🔧 Development Scripts

### Backend
```bash
npm run server    # Start backend with auto-reload using --watch flag
```

### Frontend
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🚀 Production Deployment

### Environment Variables for Production
```env
NODE_ENV=production
PORT=3001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chat_app
JWT_SECRET=your_production_jwt_secret
```

### Frontend Build
```bash
cd frontend
npm run build
```

### Backend Production
```bash
npm install --production
node backend/server.js
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**AndHoyosGarzon**
- GitHub: [@AndHoyosGarzon](https://github.com/AndHoyosGarzon)
- LinkedIn: [https://www.linkedin.com/in/andresfelipehoyosgarzon/]

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- MongoDB for flexible data storage
- React team for the amazing frontend library
- TailwindCSS for the utility-first styling approach

---

⭐ **Star this repository if you found it helpful!**

## 📸 Screenshots

## 🔮 Future Enhancements

- [ ] Group chat functionality
- [ ] File and image sharing
- [ ] Message reactions and emojis
- [ ] Voice messages
- [ ] Video calling integration
- [ ] Message encryption
- [ ] Custom themes and dark/light mode toggle
- [ ] Message search functionality
- [ ] User blocking and reporting
- [ ] Push notifications

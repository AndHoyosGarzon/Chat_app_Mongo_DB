// 1 import socket.io
import { Server } from "socket.io";
// 2 import http module
import http from "http";
// 3 import express
import express from "express";

// 4 create app
const app = express()

// 5 create server
const server = http.createServer(app);

const userSocketMap = {}


// 6 create socket
const io = new Server(server, {
    cors: {//permit cors from frontend
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],//only get and post methods are allowed
    }
});

// 7 create socket connection
io.on("connection", (socket) => {
    console.log(`Connected user, your ID socket is ${socket.id}`)

     //8 get userId from query
     const userId = socket.handshake.query.userId
     if(!userId != "undefined") userSocketMap[userId] = socket.id


     //emit online users
     io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log(`User disconnected, your ID socket is ${socket.id}`)
    })
})










//export app, io, server
export {app, io, server};


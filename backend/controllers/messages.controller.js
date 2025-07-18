import Messages from "../models/messages.model.js";
import User from "../models/users.model.js";
import Conversation from "../models/conversation.model.js";
import { getReceiverSocketId, io } from "../libs/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.userId;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessages = await Messages({
      senderId,
      receiverId,
      message,
    });

    if (newMessages) {
      conversation.messages.push(newMessages._id);
    }

    //this will run in parallel
    await Promise.all([conversation.save(), newMessages.save()]);

    //TODO: Socket io Functionality will go here
    const receiverSocketId = getReceiverSocketId(receiverId)    
    
    //validate if receiverSocketId is not null
    if(receiverSocketId){
      //io.to(<socketId>).emit(<event>, <data>) used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessages)
    }


    return res.status(201).json(newMessages);
  } catch (error) {
    console.log("Error sending message", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.userId;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    return res.status(200).json(messages);
  } catch (error) {
    console.log("Error getting messages", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

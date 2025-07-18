import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"	
import useConversation from "../context/zustandStore/useConversation"
import notification from '../assets/sound/notification.mp3'

const useListenMessages = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages } = useConversation()

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {

        //play sound
        const sound = new Audio(notification) 
        sound.play()
         
        //add new Message to messages
        setMessages([...messages, newMessage])
    })

    return () => socket?.off("newMessage")
  },[socket, setMessages, messages])


}

export default useListenMessages
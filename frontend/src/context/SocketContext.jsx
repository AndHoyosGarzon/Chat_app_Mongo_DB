import { createContext, useEffect, useState } from "react"
import { useAuthContext } from "./AuthContext"
import io from "socket.io-client"

//create socket context provider 
export const SocketContext = createContext()

export const SocketProvider = ({children}) => {

    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])

     //import context 
    const {authUser} = useAuthContext()


    useEffect(() => {
         if(authUser){
            const socket = io("http://localhost:3001", {
                query:{
                    userId: authUser._id,
                }
            })
            //save socket in state
            setSocket(socket)

            //cleaning up socket
            return () => socket.close()
        } else {
            if(socket) {
                socket.close()
                setSocket(null)
            }
        }
    },[])


    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}
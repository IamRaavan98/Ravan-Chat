import React, { useContext, useState } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const[opensidebar, setOpenSideBar] = useState(false)

const handleThreeDots =()=>{
 
  (opensidebar === true)?setOpenSideBar(false):setOpenSideBar(true)


}
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <div className="threeDot">
           <img onClick={handleThreeDots} src={More} alt="" />
           {opensidebar && <div className="threeDots">
           <button onClick={()=>signOut(auth)}>logout</button>
                <button>Change profile</button>
                <button>Admin Route</button>
            </div>}
          </div>
        </div>
        
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;

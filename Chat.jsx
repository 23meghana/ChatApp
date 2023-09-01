import React from 'react'
import Cam from '../img/cam.jpg';
import Add from '../img/addperson.jpg';
import More from '../img/more.png';

function Chat() {
  return (   
    <div className='chat'>
      <div className="chatInfo">
        <span>Tanuja</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add}alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
    </div>
  )
}

export default Chat

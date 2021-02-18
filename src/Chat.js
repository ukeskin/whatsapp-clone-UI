import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">

        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at..</p>
        </div>
        <div className="chat__headerRight">
          <IconButton><SearchOutlined /></IconButton>
          <IconButton><AttachFile /></IconButton>
          <IconButton><MoreVert /></IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Umut</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Umut</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
        {/** CHAT REVİEVER */}
        <p className="chat__message chat__reciever">
          <span className="chat__name">Umut</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Send a message">
          </input>
          <button
            onClick={() => alert('Hello')}
            type="submit"
          >

          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat

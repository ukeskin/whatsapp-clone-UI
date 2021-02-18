import React from 'react'
import './Sidebar.css'
import SidebarChat from '../SidebarChat'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src='https://avatars.githubusercontent.com/u/26279663?s=400&u=7e57667508cdf0b5bbcd0dcbd945e6aa174042f9&v=4' />
        <div className="sidebar__headerRight">
          <IconButton><DonutLargeIcon /></IconButton>
          <IconButton><ChatIcon /></IconButton>
          <IconButton><MoreVertIcon /></IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type='text' placeholder='Let Start Chat' />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar

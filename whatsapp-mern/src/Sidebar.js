import React from 'react';
import "./Sidebar.css";
import SidebarChat from './SidebarChat.js'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// import Move



function Sidebar() {
  return (
    <div className='sidebar'>
     <div className='sidebar_header'>
      <Avatar src=" https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXRoZXJldW18ZW58MHx8MHx8&w=1000&q=80"/>
        <div className='sidebar_headerRight'>
          <Button>
            <DonutLargeIcon/>
          </Button>
          <Button>
            <ChatIcon/>
          </Button>
          <Button>
            <MoreVertIcon/>
          </Button>
        </div>
     </div>
    <div className='sidebar_search'>
      <div className='sidebar_searchContainer'>
        <SearchOutlinedIcon/>
        <input placeholder='Search or start new chat' type='text'/>
      </div>
    </div>
   <div className='sidebar_chats'>
    <SidebarChat/>
    <SidebarChat/>
    <SidebarChat/>
    <SidebarChat/>
   </div>
    </div>

  )
}

export default Sidebar

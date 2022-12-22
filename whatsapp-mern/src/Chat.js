import React,{useState} from 'react';
import "./Chat.css"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';

function Chat({messages}) {
  const [input,setInput] = useState("");
  const sendMessage = async (e)=>{
    e.preventDefault(); //doubt
    await axios.post("/messages/new",{
      message: input,
      name: "Demo",
      timestamp: "just now",
      received : true,
    });
    setInput("");
  }
  return (
    <div className='chat'>
        <div className='chat_header'>
          <Avatar/>
          <div className='chat_headerInfo'>
            <h3>Room Name</h3>
            <p>Last seen at...</p>
          </div>
          <div className='chat_headerRight'>
          <Button>
            <SearchOutlinedIcon/>
          </Button>
          <Button>
            <AttachFileIcon/>
          </Button>
          <Button>
            <MoreVertIcon/>
          </Button>
          </div>
        </div>
        <div className='chat_body'>
          {messages.map((message)=>(
            <p className={`chat_message ${message.received && "chat_reciever"}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className='chat_timestamp'>{message.timestamp}</span>
           
          </p>
          ))}
          
          {/* <p className='chat_message chat_reciever'>
            <span className="chat_name">Prasanna</span>
            This is a message
            <span className='chat_timestamp'>{new Date().toUTCString()}</span>
           
          </p> */}
        </div>

        <div className='chat_footer'>
          <InsertEmoticonIcon/>
          <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Type a message' type='text'/>
            <button  onClick={sendMessage}type="submit">
              Send a message
            </button>
          </form>
          <MicIcon/>
        </div>
    </div>
  )
}

export default Chat

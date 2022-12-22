import React, { useEffect,useState} from "react";
import './App.css';
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get("/messages/sync").then(response=>{
      setMessages(response.data);
    })
  },[]);
  useEffect(()=>{
    const  pusher = new Pusher('89eceb548d0f4a3ab47f', {
      cluster: 'ap2'
    });
    
    const  channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));console.log(data);
      setMessages([...messages,data]);
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages]);
  console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;

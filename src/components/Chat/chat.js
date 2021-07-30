import React,{useState,useEffect} from 'react';
import {io} from 'socket.io-client';
import axios from 'axios'

const Chat=()=>{
    const [msg,setMessage]=useState('');
    const socket=io('http://localhost:9000/');
    const [name,setName]=useState('');
    const [nameDisplay,setNameDisplay]=useState('block');
    const [msgDisplay,setMsgDisplay]=useState('none');
    const [color,setColor]=useState();
    const [textColor,setTextColor]=useState();
    const [currentUserData,setCurrentUserData]=useState([])
    const [userData,setUserData]=useState([])
    const [id,setId]=useState('')
    const [regUser,setRegUser]=useState( axios.get("http://localhost:9000/getusersid").then(res =>
    setRegUser(
      res.data.filter((v) => {
        return v._id === JSON.parse(localStorage.getItem("user"));
      })
    )
    ))
    const createId=()=>{
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    const sendSocket=(e)=>{
        e.preventDefault()
        if(regUser.length===0){
          socket.emit('send message',{msg:msg,name:name,color:color,textColor:textColor,hours:new Date().getHours(), minutes:new Date().getMinutes(),seconds:new Date().getSeconds(),id:id})
        }else{
          regUser.forEach(v=>{
            socket.emit('send message',{msg:msg,name:`${v.name} ${v.surname}`,color:color,textColor:textColor,hours:new Date().getHours(), minutes:new Date().getMinutes(),seconds:new Date().getSeconds(),id:id})
          })
        }        
        setMessage('')
      }
    const addName=(e)=>{
      e.preventDefault();
      if(name.length!==0){
        setNameDisplay('none')
        setMsgDisplay('block')
     }
    }
    useEffect(()=>{
      io('http://localhost:9000/')     
      switch(Math.floor(Math.random()*6)+1){
        case 1:
          setColor('#FF4136')
          setTextColor('#333')
          break;
          case 2:
            setColor('#001f3f')
            setTextColor('white')
            break;
            case 3:
              setColor('#AAAAAA')
              setTextColor('#333')
              break;
              case 4:
                setColor('#3D9970')
                setTextColor('white')
                break;
                case 5:
          setColor('purple')
          setTextColor('white')
          break;
          case 6:
          setColor('#111111')
          setTextColor('white')
          break;
      }  
    },[])
    useEffect(()=>{
        socket.on('send message',data=>{ 
          document.getElementById('chat_main').scrollTo(0,document.getElementById('chat_main').scrollHeight)
          if(data.id===document.getElementById('user_id').value){
              document.getElementById('chat_main').innerHTML+=`<span class="current_user_content">
              <p style="background-color:${data.color};color:${data.textColor}">${data.msg}</p>
              <p>${data.name} ${data.hours}:${data.minutes}:${data.seconds}</p>
              </span>`
            }else{
              document.getElementById('chat_main').innerHTML+=`<span class="user_content">
              <p style="background-color:${data.color};color:${data.textColor}">${data.msg}</p>
              <p>${data.name} ${data.hours}:${data.minutes}:${data.seconds}</p>
              </span>`
            }
      })
    },[])
    useEffect(()=>{
      if(id.length===0){
        setId(createId) 
      }
    },[id])
    return(
        <div>
        <div className="break"></div>
            <div className="chat">              
                <div className="chat_content">
                    <div className="chat_header">
                        <h2>Chat</h2>
                    </div>
                        <div id="chat_main" className="chat_main"></div>                        
                     {regUser.length!==0?
                      <form className="chat_footer" onSubmit={sendSocket}>
                        <input id="user_name" style={{display:'none'}} required value='m' />
                        <input style={{display:'none'}} id="user_id" value={id} onChange={e=>setId(e.target.value)}/>
                     <input placeholder="Message" required value={msg} onChange={e=>setMessage(e.target.value)}/>
                     <button><p>&#10148;</p></button>
                 </form>
                  :
                 <div style={{position:'absolute',top:"91%",width:'70%'}}>
                    <form style={{display:nameDisplay}} className="chat_footer" onSubmit={addName}>
                      <input id="user_name" placeholder="Choose your name" required value={name} onChange={e=>setName(e.target.value)}/>
                      <input style={{display:'none'}} id="user_id" value={id} onChange={e=>setId(e.target.value)}/>
                      <button><p>&#10148;</p></button>
                  </form>
                   <form style={{display:msgDisplay}} className="chat_footer" onSubmit={sendSocket}>
                   <input placeholder="Message" required value={msg} onChange={e=>setMessage(e.target.value)}/>
                   <button><p>&#10148;</p></button>
               </form>
                 </div>
                  }
                </div>
            </div>
        </div>
    )
}

export default Chat
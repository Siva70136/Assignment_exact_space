import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from '../chatItem';
import './index.css'

const user_list=["Alan","Bob","Carol","Dean","Elin"];
class Chat extends Component{
    state={msg1:"",msg_list:[]};
    
    onMsg=event=>{
        this.setState({
            msg1:event.target.value
        })
    }

    call=event=>{
        event.preventDefault();
        const {msg1,msg_list}=this.state
        const num=Math.floor(Math.random() * user_list.length);
        const newMsg={
            id:uuidv4(),
            name:user_list[num],
            msg:msg1 ,
            like:0
        }
        
        
        this.setState({
            msg_list:[...msg_list,newMsg],
            msg1:'',
            
        });
    }

 /*   onLike=(id)=>{
        const {msg_list}=this.state
        msg_list.map(each=>{
            if(id===each.id){
                console.log(id,each)
            }    
    })
}*/

onLike = (id) => {
    this.setState((prevState) => {
      const updatedMsgList = prevState.msg_list.map((msg) => {
        if (msg.id === id) {
          return {
            ...msg,
            like: msg.like + 1,
          };
        }
        return msg;
      });
  
      return {
        msg_list: updatedMsgList,
      };
    });
  };
  

  render(){
    const {msg_list,msg1}=this.state
    console.log(msg_list)
    return(
        <div className="main-container">
            <div className="app-container">
            <div className="chat-container">  
                <form className="send-form" onSubmit={this.call}>
                    <input type="text" placeholder="Write a comment" className="chat-box" onChange={this.onMsg} value={msg1}/>
                    <button type="submit" className="send-button">Send</button>
                </form>
                </div>
            <ul className="items">
            {msg_list.map(each=>
                <Item data={each} key ={each.id} onLike={this.onLike}/>
                )
                    }
                    
                </ul>
                
            </div>
        </div>
    );
  }
}



export default Chat;
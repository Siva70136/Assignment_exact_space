import {BiLike} from 'react-icons/bi';

import './index.css'
const Item=props=>{
    const {data,onLike}=props
    const {name,msg,id,like}=data

    const onLike1=()=>{
        onLike(id)
    }
    return(
        <li className="item">
            <div className="name-container">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" className="profile" />
                <h1 className="name">{name}</h1>
            </div>
            <p className="msg">{msg}</p>
            <div className='like-container'>
            <button className='like' onClick={onLike1}><BiLike className='like-icon'/></button>
            <p className='like-count'>{like}</p>
            </div>
            
        </li>
    );
}
export default Item
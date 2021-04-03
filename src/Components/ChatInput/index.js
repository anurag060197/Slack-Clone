import React, { useState } from 'react';
import "./styles.css";
import db from "../Firebase";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";

const ChatInput = ({channelName, channelID}) => {
    const [input, setInput] = useState('');
    const [{user}] = useStateValue();

    const sendMessage = e =>{
        e.preventDefault();

        if(channelID){
            db.collection("rooms").doc(channelID).collection("messages").add({
                message: input,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            })
        }
    }

    return (
        <div className="chatInput">
            <form>
                <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message #${channelName?.toLowerCase()}`} />
                <button type="submit" onClick={sendMessage} >SEND</button>                 
            </form>
        </div>
    );
};

export default ChatInput;
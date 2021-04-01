import React, { useEffect, useState } from 'react';
import "./styles.css";
import {useParams} from "react-router-dom";
import StarBorderOutLinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutLinedIcon from "@material-ui/icons/InfoOutlined";
import db from '../Firebase';
import Message from "../Message";

const Chat = () => {
    const {roomid} = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(()=>{
        if(roomid){
            db.collection("rooms").doc(roomid).onSnapshot(
                snapshot=>(setRoomDetails(snapshot.data()))
            )
        }
        db.collection("rooms").doc(roomid)
        .collection("messages")
        .orderBy("timeStamp", "asc")
        .onSnapshot(snapshot=>
            setRoomMessages(snapshot.docs.map(doc=>doc.data())))
    }, [roomid]);
    console.log(roomMessages);
    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutLinedIcon />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutLinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat_messages">
                {
                    roomMessages.map(({message, timeStamp, user, userImage})=>(
                        <Message 
                        message={message}
                        timeStamp={timeStamp}
                        user={user}
                        userImage={userImage} />
                    ))
                }
            </div>
        </div>
    );
};

export default Chat;
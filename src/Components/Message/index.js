import React from 'react';
import "./styles.css";

const Message = ({message, timeStamp, user, userImage}) => {
    return (
        <div className="message">
            <img src={userImage} alt="" />
            <div className="message_info">
                <h4>
                    {user} 
                    <span className="message_timeStamp">{new Date(timeStamp?.toDate()).toUTCString()} </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Message;
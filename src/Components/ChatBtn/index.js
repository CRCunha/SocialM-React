import React from 'react';
import './chatBtn.css';
import chatIcon from './chat.png';

const ChatBtn = () => (
    <div className="chatBtn">
        <div className="container">
            <div className="linha"></div>
            <div className="img">
                <img src={chatIcon} alt="chat" />
            </div>
        </div>
    </div>
);

export default ChatBtn;
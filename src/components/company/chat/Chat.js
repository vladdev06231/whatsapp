import React, { useEffect, useState } from "react";

import WizardLayout from "../../layout/WizardLayout";
import ChatSideBar from './ChatSideBar';
import ChatMain from "./ChatMain";

import './Chat.css'

const ChatContent = () => {

    const [selectedChat, setSelectedChat] = useState({});

    const showMessage = (each) => {
        setSelectedChat(each);
    }

    return (
        <div
            style={{
                position: "relative",
            }}
            className="d-lg-flex text-start"
        >
            <ChatSideBar showMessage={showMessage}/>

            <ChatMain selectedChat={selectedChat}/>

        </div>
    );
}

const Chat = () => {
    return (
        <>
            <WizardLayout children={ChatContent()} name={"Chat"} />
        </>
    )
}

export default Chat;
import React, { useEffect, useState, useRef } from 'react'

import { Tabs, Tab, InputGroup, Form } from "react-bootstrap";
import Conversations from './Conversations';
import Contacts from './Contacts.js';

import './Chat.css'

const ChatSideBar = ({ showMessage }) => {
    const [original, setOriginal] = useState([]);
    const [conversations, setConversations] = useState([]);
    const inputForConversation = useRef();
    const inputForContact = useRef();

    const searchConversation = (e) => {
        let matched = [];
        original.forEach((each, index) => {
            each.username.toLowerCase().includes(e.target.value) && matched.push(each);
        });
        setConversations(matched);
    }

    const searchContact = (e) => {
        let matched = [];
        original.forEach((each, index) => {
            each.username.toLowerCase().includes(e.target.value) && matched.push(each);
        });
        setConversations(matched);
    }

    const switchTab = () => {
        setConversations(original);
        inputForConversation.current.value = '';
        inputForContact.current.value = '';
    }

    useEffect(() => {
        setConversations(
            [
                {
                    avatar: '',
                    username: 'Marlin Yost',
                    msgLists: [
                        {
                            type: 'document',
                            filename: 'Solution for Whatsapp project'
                        }
                    ],
                    status: 'active',
                    lastTime: '12:45',
                    unreadMsgNumber: 5,
                    tagList: [
                        {
                            color: '#1485FF',
                            backgroundColor: 'rgba(20, 133, 255, 0.1)',
                            content: '100 User'
                        },
                        {
                            color: '#FF7214',
                            backgroundColor: 'rgba(255, 114, 20, 0.1)',
                            content: 'Urgent'
                        },
                        {
                            color: '#4214FF',
                            backgroundColor: 'rgba(66, 20, 255, 0.1)',
                            content: 'Customer'
                        },
                    ]
                },
                {
                    avatar: '',
                    username: 'Merley Lisa',
                    msgLists: [
                        {
                            type: 'document',
                            filename: 'Solution for Whatsapp project'
                        }
                    ],
                    status: 'active',
                    lastTime: '12:45',
                    unreadMsgNumber: 5,
                    tagList: [
                        {
                            color: '#1485FF',
                            backgroundColor: 'rgba(20, 133, 255, 0.1)',
                            content: '100 User'
                        },
                        {
                            color: '#FF7214',
                            backgroundColor: 'rgba(255, 114, 20, 0.1)',
                            content: 'Urgent'
                        },
                        {
                            color: '#4214FF',
                            backgroundColor: 'rgba(66, 20, 255, 0.1)',
                            content: 'Customer'
                        },
                    ]
                },
                {
                    avatar: '',
                    username: 'Charleton Stehr',
                    msgLists: [
                        {
                            type: 'document',
                            filename: 'Solution for Whatsapp project'
                        }
                    ],
                    status: 'active',
                    lastTime: '12:45',
                    unreadMsgNumber: 5,
                    tagList: [
                        {
                            color: '#1485FF',
                            backgroundColor: 'rgba(20, 133, 255, 0.1)',
                            content: '100 User'
                        },
                        {
                            color: '#FF7214',
                            backgroundColor: 'rgba(255, 114, 20, 0.1)',
                            content: 'Urgent'
                        },
                        {
                            color: '#4214FF',
                            backgroundColor: 'rgba(66, 20, 255, 0.1)',
                            content: 'Customer'
                        },
                    ]
                },
                {
                    avatar: '',
                    username: 'Alek Kovacek',
                    msgLists: [
                        {
                            type: 'document',
                            filename: 'Solution for Whatsapp project'
                        }
                    ],
                    status: 'active',
                    lastTime: '12:45',
                    unreadMsgNumber: 5,
                    tagList: [
                        {
                            color: '#1485FF',
                            backgroundColor: 'rgba(20, 133, 255, 0.1)',
                            content: '100 User'
                        },
                        {
                            color: '#FF7214',
                            backgroundColor: 'rgba(255, 114, 20, 0.1)',
                            content: 'Urgent'
                        },
                        {
                            color: '#4214FF',
                            backgroundColor: 'rgba(66, 20, 255, 0.1)',
                            content: 'Customer'
                        },
                    ]
                },
                {
                    avatar: '',
                    username: 'Nella McLaughlin',
                    msgLists: [
                        {
                            type: 'document',
                            filename: 'Solution for Whatsapp project'
                        }
                    ],
                    status: 'active',
                    lastTime: '12:45',
                    unreadMsgNumber: 5,
                    tagList: [
                        {
                            color: '#1485FF',
                            backgroundColor: 'rgba(20, 133, 255, 0.1)',
                            content: '100 User'
                        },
                        {
                            color: '#FF7214',
                            backgroundColor: 'rgba(255, 114, 20, 0.1)',
                            content: 'Urgent'
                        },
                        {
                            color: '#4214FF',
                            backgroundColor: 'rgba(66, 20, 255, 0.1)',
                            content: 'Customer'
                        },
                    ]
                },
            ]
        );
        setOriginal(
            [
                {
                    avatar: '',
                    username: 'Marlin Yost',
                    msgLists: [
                        {
                            type: 'document',
                            filename: 'Solution for Whatsapp project'
                        }
                    ],
                    status: 'active',
                    lastTime: '12:45',
                    unreadMsgNumber: 5,
                    tagList: [
                        {
                            color: '#1485FF',
                            backgroundColor: 'rgba(20, 133, 255, 0.1)',
                            content: '100 User'
                        },
                        {
                            color: '#FF7214',
                            backgroundColor: 'rgba(255, 114, 20, 0.1)',
                            content: 'Urgent'
                        },
                        {
                            color: '#4214FF',
                            backgroundColor: 'rgba(66, 20, 255, 0.1)',
                            content: 'Customer'
                        },
                    ]
                },
                {
                    avatar: '',
                    username: 'Merley Lisa',
                    msgLists: [
                        {
                            type: 'document',
                            filename: 'Solution for Whatsapp project'
                        }
                    ],
                    status: 'active',
                    lastTime: '12:45',
                    unreadMsgNumber: 5,
                    tagList: [
                        {
                            color: '#1485FF',
                            backgroundColor: 'rgba(20, 133, 255, 0.1)',
                            content: '100 User'
                        },
                        {
                            color: '#FF7214',
                            backgroundColor: 'rgba(255, 114, 20, 0.1)',
                            content: 'Urgent'
                        },
                        {
                            color: '#4214FF',
                            backgroundColor: 'rgba(66, 20, 255, 0.1)',
                            content: 'Customer'
                        },
                    ]
                },
                {
                    avatar: '',
                    username: 'Charleton Stehr',
                    msgLists: [
                        {
                            type: 'document',
                            filename: 'Solution for Whatsapp project'
                        }
                    ],
                    status: 'active',
                    lastTime: '12:45',
                    unreadMsgNumber: 5,
                    tagList: [
                        {
                            color: '#1485FF',
                            backgroundColor: 'rgba(20, 133, 255, 0.1)',
                            content: '100 User'
                        },
                        {
                            color: '#FF7214',
                            backgroundColor: 'rgba(255, 114, 20, 0.1)',
                            content: 'Urgent'
                        },
                        {
                            color: '#4214FF',
                            backgroundColor: 'rgba(66, 20, 255, 0.1)',
                            content: 'Customer'
                        },
                    ]
                },
                {
                    avatar: '',
                    username: 'Alek Kovacek',
                    msgLists: [
                        {
                            type: 'document',
                            filename: 'Solution for Whatsapp project'
                        }
                    ],
                    status: 'active',
                    lastTime: '12:45',
                    unreadMsgNumber: 5,
                    tagList: [
                        {
                            color: '#1485FF',
                            backgroundColor: 'rgba(20, 133, 255, 0.1)',
                            content: '100 User'
                        },
                        {
                            color: '#FF7214',
                            backgroundColor: 'rgba(255, 114, 20, 0.1)',
                            content: 'Urgent'
                        },
                        {
                            color: '#4214FF',
                            backgroundColor: 'rgba(66, 20, 255, 0.1)',
                            content: 'Customer'
                        },
                    ]
                },
                {
                    avatar: '',
                    username: 'Nella McLaughlin',
                    msgLists: [
                        {
                            type: 'document',
                            filename: 'Solution for Whatsapp project'
                        }
                    ],
                    status: 'active',
                    lastTime: '12:45',
                    unreadMsgNumber: 5,
                    tagList: [
                        {
                            color: '#1485FF',
                            backgroundColor: 'rgba(20, 133, 255, 0.1)',
                            content: '100 User'
                        },
                        {
                            color: '#FF7214',
                            backgroundColor: 'rgba(255, 114, 20, 0.1)',
                            content: 'Urgent'
                        },
                        {
                            color: '#4214FF',
                            backgroundColor: 'rgba(66, 20, 255, 0.1)',
                            content: 'Customer'
                        },
                    ]
                },
            ]
        );
    }, [])

    return (
        <div className='chat-leftsidebar me-lg-1'>

            {/* ------------------ Header ------------------ */}
            <div>
                <h1 className='chat-page-header m-0'>Chat</h1>
            </div>
            <hr className='m-0' />

            <div>
                <Tabs
                    defaultActiveKey="1"
                    transition={true}
                    className="horizontal-tabs text-white"
                    onSelect={switchTab}
                >

                    {/* ----------------- Conversation ----------------- */}

                    <Tab
                        eventKey="1"
                        className="headings"
                        title="Conversation"
                    >
                        <InputGroup className="border-0">
                            <Form.Control
                                placeholder="Search Conversation..."
                                aria-label="conversation"
                                aria-describedby="basic-addon1"
                                onChange={searchConversation}
                                ref={inputForConversation}
                            />
                        </InputGroup>
                        <hr className='m-0' />

                        {/* ---------- Conversation List ---------- */}
                        <Conversations showMessage={showMessage} conversations={conversations} />
                    </Tab>

                    {/* ----------------- Contact ----------------- */}
                    <Tab
                        eventKey="2"
                        className="headings"
                        title="Contacts"
                    >
                        <InputGroup className="border-0">
                            <Form.Control
                                placeholder="Search Contact List..."
                                aria-label="contactlist"
                                aria-describedby="basic-addon2"
                                onChange={searchContact}
                                ref={inputForContact}
                            />
                        </InputGroup>
                        <hr className='m-0' />

                        {/* --------------- Contact List --------------- */}
                        <Contacts showMessage={showMessage} contacts={conversations} />

                    </Tab>
                </Tabs>
            </div>


        </div>
    )
}

export default ChatSideBar;

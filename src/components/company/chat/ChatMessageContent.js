import React, { useEffect, useState } from 'react'
import { RiSendPlane2Line, RiFile2Line } from 'react-icons/ri';

import sample from '../../../assets/img/bg-login.svg'
import sample_video from '../../../assets/video/sample.mp4'

const ChatMessageContent = ({ selectedChat }) => {

    const [userInfo, setUserInfo] = useState({
        name: 'Chistian Lee',
        avatar: ''
    });

    const [clientInfo, setClientInfo] = useState({
        name: '',
        avatar: '',
    });

    const [msgList, setMsgList] = useState([]);

    const getShortName = (username) => {
        const fullName = username.split(' ');
        const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        return initials.toUpperCase();
    }

    useEffect(() => {
        if (selectedChat && selectedChat.username) {
            setClientInfo({ name: selectedChat.username, avatar: selectedChat.avatar });
            setUserInfo({
                name: 'Christian Lee',
                avatar: ''
            }); // Current Agent User Name
            setMsgList([
                {
                    form: 'received',
                    type: 'message',
                    content: 'This is the first message from the Carleton',
                    time: '12-45',
                },
                {
                    form: 'sent',
                    type: 'message',
                    content: 'This is the first message from the Carleton',
                    time: '12-46',
                },
                {
                    form: 'received',
                    type: 'message',
                    content: 'This is the first message from the Carleton',
                    time: '12-47',
                },
                {
                    form: 'sent',
                    type: 'image',
                    filename: 'Simple.png',
                    path: 'E:\\single.jpg',
                    time: '12-48',
                },
                {
                    form: 'received',
                    type: 'video',
                    filename: 'Record for project.mp4',
                    path: 'E:\\single.jpg',
                    time: '12-48',
                },
                {
                    form: 'sent',
                    type: 'document',
                    filename: 'Solution for Whatsapp project',
                    path: 'E:\\Solution for Whatsapp project.zip',
                    time: '12-49',
                },
            ])
        }
    }, [selectedChat]);

    return (
        <>
            {/* ------------- Message Content -------------- */}
            <div id='messages' className='chat-conversation p-3 p-lg-4'>
                <div className='simplebar-wrapper'>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                    </div>

                    <div className='simplebar-mask'>
                        <div className='simplebar-offset'>
                            <div className='simplebar-content-wrapper' tabIndex={0} role='region' >
                                <div className='simplebar-content'>

                                    <ul className='list-unstyled mb-0'>
                                        {
                                            msgList && msgList.length && msgList.map((each, index) => {
                                                return (
                                                    each.form === 'received' ?
                                                        (
                                                            <li className='' key={index}>
                                                                <div className='conversation-list'>
                                                                    <div className='chat-avatar'>
                                                                        {clientInfo && clientInfo.avatar ?
                                                                            (
                                                                                <>
                                                                                    <img
                                                                                        // className='avatar-xs'
                                                                                        src={clientInfo.avatar}
                                                                                        alt={clientInfo.name}
                                                                                    />
                                                                                </>
                                                                            )
                                                                            :
                                                                            (
                                                                                <>
                                                                                    <div className='chat-user-img online align-self-center me-3'>
                                                                                        <div className='avatar-xs'>
                                                                                            <span className="avatar-title online rounded-circle bg-soft-primary text-primary">{getShortName(clientInfo.name)}</span>
                                                                                            <span className="user-status"></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </>
                                                                            )
                                                                        }
                                                                    </div>
                                                                    {
                                                                        each.type === 'message' ?
                                                                            (
                                                                                <div className='user-chat-content'>
                                                                                    <div className='ctext-wrap'>
                                                                                        <div className='ctext-wrap-content'>
                                                                                            <p className="mb-0">{each.content}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="conversation-name">{each.time}</div>
                                                                                </div>
                                                                            )
                                                                            :
                                                                            (
                                                                                each.type === 'image' ?
                                                                                    (
                                                                                        <div className='user-chat-content'>
                                                                                            <div className='ctext-wrap'>
                                                                                                <div className='ctext-wrap-content'>
                                                                                                    <p className="mb-0">Image</p>
                                                                                                    <ul className='list-inline message-img  mb-0'>
                                                                                                        <li className='list-inline-item message-img-list'>
                                                                                                            <div>
                                                                                                                <a className='popup-img d-inline-block m-1'>
                                                                                                                    <img src={sample} alt='image' className='rounded border' />
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="conversation-name">{each.time}</div>
                                                                                        </div>
                                                                                    )
                                                                                    :
                                                                                    (
                                                                                        each.type === 'video' ?
                                                                                            (
                                                                                                <>
                                                                                                    <div className='user-chat-content'>
                                                                                                        <div className='ctext-wrap'>
                                                                                                            <div className='ctext-wrap-content'>
                                                                                                                <p className="mb-0">File</p>
                                                                                                                <div className='d-flex align-items-center'>
                                                                                                                    <div className='avatar-sm me-3 ms-0'>
                                                                                                                        <div className='avatar-title bg-soft-primary text-primary rounded font-size-20'>
                                                                                                                            <RiSendPlane2Line />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className='flex-grow-1'>
                                                                                                                        <div className='text-start'>
                                                                                                                            <div className='font-size-14 mb-1'>{each.filename}</div>
                                                                                                                            {/* --------------- File Size --------------- */}
                                                                                                                            {/* <p className='text-muted font-size-13 mb-0'>{each.filesize}</p> */}
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="conversation-name">{each.time}</div>
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                            :
                                                                                            (
                                                                                                <>
                                                                                                    <div className='user-chat-content'>
                                                                                                        <div className='ctext-wrap'>
                                                                                                            <div className='ctext-wrap-content'>
                                                                                                                <p className="mb-0">File</p>
                                                                                                                <div className='d-flex align-items-center'>
                                                                                                                    <div className='avatar-sm me-3 ms-0'>
                                                                                                                        <div className='avatar-title bg-soft-primary text-primary rounded font-size-20'>
                                                                                                                            <RiFile2Line />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className='flex-grow-1'>
                                                                                                                        <div className='text-start'>
                                                                                                                            <div className='font-size-14 mb-1'>{each.filename}</div>
                                                                                                                            {/* --------------- File Size --------------- */}
                                                                                                                            {/* <p className='text-muted font-size-13 mb-0'>{each.filesize}</p> */}
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="conversation-name">{each.time}</div>
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                    )
                                                                            )
                                                                    }


                                                                </div>
                                                            </li>
                                                        )
                                                        : // Sent Message Content
                                                        (
                                                            <li className='right' key={index}>
                                                                <div className='conversation-list'>
                                                                    <div className='chat-avatar'>
                                                                        {userInfo && userInfo.avatar ?
                                                                            (
                                                                                <>
                                                                                    <img
                                                                                        // className='avatar-xs'
                                                                                        src={userInfo.avatar}
                                                                                        alt={userInfo.username}
                                                                                    />
                                                                                </>
                                                                            )
                                                                            :
                                                                            (
                                                                                <>
                                                                                    <div className='chat-user-img online align-self-center me-3'>
                                                                                        <div className='avatar-xs'>
                                                                                            <span className="avatar-title online rounded-circle bg-soft-primary text-primary">{getShortName(userInfo.name)}</span>
                                                                                            <span className="user-status"></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </>
                                                                            )
                                                                        }
                                                                    </div>
                                                                    {
                                                                        each.type === 'message' ?
                                                                            (
                                                                                <div className='user-chat-content'>
                                                                                    <div className='ctext-wrap'>
                                                                                        <div className='ctext-wrap-content'>
                                                                                            <p className="mb-0">{each.content}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="conversation-name">{each.time}</div>
                                                                                </div>
                                                                            )
                                                                            :
                                                                            (
                                                                                each.type === 'image' ?
                                                                                    (
                                                                                        <div className='user-chat-content'>
                                                                                            <div className='ctext-wrap'>
                                                                                                <div className='ctext-wrap-content'>
                                                                                                    <p className="mb-0">Image</p>
                                                                                                    <ul className='list-inline message-img  mb-0'>
                                                                                                        <li className='list-inline-item message-img-list'>
                                                                                                            <div>
                                                                                                                <a className='popup-img d-inline-block m-1'>
                                                                                                                    <img src={sample} alt='image' className='rounded border' />
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="conversation-name">{each.time}</div>
                                                                                        </div>
                                                                                    )
                                                                                    :
                                                                                    (
                                                                                        each.type === 'video' ?
                                                                                            (
                                                                                                <>
                                                                                                    <div className='user-chat-content'>
                                                                                                        <div className='ctext-wrap'>
                                                                                                            <div className='ctext-wrap-content'>
                                                                                                                <p className="mb-0">File</p>
                                                                                                                <div className='d-flex align-items-center'>
                                                                                                                    <div className='avatar-sm me-3 ms-0'>
                                                                                                                        <div className='avatar-title bg-soft-primary text-primary rounded font-size-20'>
                                                                                                                            <RiSendPlane2Line />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className='flex-grow-1'>
                                                                                                                        <div className='text-start'>
                                                                                                                            <div className='font-size-14 mb-1'>{each.filename}</div>
                                                                                                                            {/* --------------- File Size --------------- */}
                                                                                                                            {/* <p className='text-muted font-size-13 mb-0'>{each.filesize}</p> */}
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="conversation-name">{each.time}</div>
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                            :
                                                                                            (
                                                                                                <>
                                                                                                    <div className='user-chat-content'>
                                                                                                        <div className='ctext-wrap'>
                                                                                                            <div className='ctext-wrap-content'>
                                                                                                                <p className="mb-0">File</p>
                                                                                                                <div className='d-flex align-items-center'>
                                                                                                                    <div className='avatar-sm me-3 ms-0'>
                                                                                                                        <div className='avatar-title bg-soft-primary text-primary rounded font-size-20'>
                                                                                                                            <RiFile2Line />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className='flex-grow-1'>
                                                                                                                        <div className='text-start'>
                                                                                                                            <div className='font-size-14 mb-1'>{each.filename}</div>
                                                                                                                            {/* --------------- File Size --------------- */}
                                                                                                                            {/* <p className='text-muted font-size-13 mb-0'>{each.filesize}</p> */}
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="conversation-name">{each.time}</div>
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                    )
                                                                            )
                                                                    }


                                                                </div>
                                                            </li>
                                                        )
                                                )
                                            })
                                        }

                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatMessageContent;
import React, { useState, useEffect } from 'react'
import { RiImage2Fill, RiFile2Line } from 'react-icons/ri'
import { FiVideo } from 'react-icons/fi'

const ConversationList = ({ showMessage, conversations }) => {

    const [chatList, setChatList] = useState([]);

    const getShortName = (username) => {
        const fullName = username.split(' ');
        const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        return initials.toUpperCase();
    }

    const showChat = (chatUser) => {
        showMessage(chatUser);
    }

    useEffect(() => {
        setChatList(conversations);
    }, [conversations]);

    return (
        <div id='chat-list-wrapper'>
            <ul className='list-unstyled chat-list chat-user-list'>
                {chatList && chatList.map((each, index) => {
                    return (
                        <li
                            id={'conversation' + index}
                            className=''
                            key={each.lastTime + index}
                            onClick={() => showChat(each)}
                        >
                            <a>
                                <div className='d-flex'>

                                    {/* ------------- User Avatar ------------- */}
                                    <div className='chat-user-img online align-self-center me-3 ms-0'>
                                        {each.avatar ? (
                                            <>
                                                <img
                                                    src={each.avatar}
                                                    alt={each.username}
                                                    className='rounded-circle avatar-xs'
                                                />
                                                <span className='user-status'></span>
                                            </>
                                        )
                                            :
                                            (
                                                <div className='avatar-xs'>
                                                    <span className='avatar-title online rounded-circle bg-soft-primary text-primary'>
                                                        {
                                                            getShortName(each.username)
                                                        }
                                                    </span>
                                                    <span className='user-status'></span>
                                                </div>
                                            )
                                        }

                                    </div>

                                    {/* ------------- Conversation Content -------------  */}
                                    <div className='d-flex flex-column overflow-hidden w-100'>
                                        <div className='d-flex flex-row'>
                                            <div className='flex-grow-1 overflow-hidden'>
                                                <h5 className='text-truncate mb-1 chat-username'>{each.username}</h5>
                                                <p className='chat-user-message text-truncate mb-0'>

                                                    {each.msgLists && each.msgLists.length &&
                                                        each.msgLists[each.msgLists.length - 1].type === 'message' ?
                                                        each.msgLists[each.msgLists.length - 1].content :
                                                        (each.msgLists[each.msgLists.length - 1].type === 'image' ?
                                                            (
                                                                <>
                                                                    <RiImage2Fill className='me-2' />
                                                                    <span>
                                                                        {each.msgLists[each.msgLists.length - 1].filename ?
                                                                            each.msgLists[each.msgLists.length - 1].filename :
                                                                            'Image'}
                                                                    </span>
                                                                </>
                                                            ) : (each.msgLists[each.msgLists.length - 1].type === 'video') ?
                                                                (
                                                                    <>
                                                                        <FiVideo className='me-2' />
                                                                        <span>
                                                                            {
                                                                                each.msgLists[each.msgLists.length - 1].filename ?
                                                                                    each.msgLists[each.msgLists.length - 1].filename :
                                                                                    'Video'
                                                                            }
                                                                        </span>
                                                                    </>
                                                                )
                                                                : (
                                                                    <>
                                                                        <RiFile2Line className='me-2' />
                                                                        <span>
                                                                            {
                                                                                each.msgLists[each.msgLists.length - 1].filename ?
                                                                                    each.msgLists[each.msgLists.length - 1].filename :
                                                                                    'File'
                                                                            }
                                                                        </span>
                                                                    </>
                                                                )
                                                        )

                                                    }
                                                </p>
                                            </div>

                                            <div className='font-size-11 chat-lasttime'>
                                                {each.lastTime}
                                            </div>
                                        </div>

                                        <div className='d-flex gap-3 pt-2'>
                                            {each.tagList && each.tagList.map((tag, i) => {
                                                return (
                                                    <span
                                                        key={tag.content + i}
                                                        className='text-center'
                                                        style={{
                                                            color: tag.color,
                                                            backgroundColor: tag.backgroundColor,
                                                            padding: '0.1rem 0.5rem',
                                                            borderRadius: '50px',
                                                            fontSize: '14px',
                                                        }}>
                                                        {tag.content}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ConversationList;
import React, { useEffect, useState, useRef } from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import { RiEmotionLine, RiAttachment2, RiSendPlane2Line } from 'react-icons/ri';

// import EmojiPicker from './EmojiPicker';
import Picker from 'emoji-picker-react';

import ChatProfile from './ChatProfile'
import noMsgImg from '../../../assets/img/bg-login.svg'
import ChatMessageContent from './ChatMessageContent';

const ChatMain = ({ selectedChat }) => {

    const [message, setMessage] = useState({});
    const [display, setDisplay] = useState('d-none');
    const [width, setWidth] = useState('100');
    const [msgInput, setMsgInput] = useState('');
    const [showPicker, setPickerState] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [quickAnswers, setQuickAnswers] = useState([]);
    const [isSelectedChat, setIsSelectedChat] = useState('');

    /**
     *  Get Current User 
     */

    // let currentuser = {};
    // currentuser.username = 'Christeen Lee';

    const toggleMenu = () => {
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        document.getElementsByClassName('toggle-menu-icon')[0].classList.toggle('menu-icon-toggled');
    }

    const toggleProfile = () => {
        if (display) {
            setDisplay('');
            setWidth('specified');
        } else {
            setDisplay('d-none');
            setWidth('100');
        }
    }

    const setDisplayOption = ({ width, open }) => {
        setWidth(width);
        setDisplay(open);
    }

    const getShortName = (username) => {
        if (username) {
            const fullName = username.split(' ');
            const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
            return initials.toUpperCase();
        }
        else return '';
    }


    const toggleEmoji = () => {
        setPickerState(!showPicker);
    }

    const onEmojiClick = (event, emojiObject) => {
        setMsgInput(msgInput + emojiObject.emoji);
        setChosenEmoji(emojiObject);
    };

    const addMsgInput = (event) => {
        setMsgInput(event.target.value);
    }

    const addFile = (event) => {
        console.log(event.target.files)
    }

    const submitHandle = (event) => { // disable submission form
        event.preventDefault();
    }

    const submitMsg = (event) => {
        event.preventDefault();
    }

    const putQuickAnswer = (answer) => {
        console.log(answer);
    }

    const showContactList = () => {
        setIsSelectedChat('');
    }

    useEffect(() => {
        if (selectedChat) {
            setMessage(selectedChat);
            setIsSelectedChat('user-chat-show');
        }

        setQuickAnswers([
            "How are you?",
            "Can we talk now?",
            "Are you available now?"
        ]);
    }, [selectedChat])

    useEffect(() => {
        setIsSelectedChat('');
    }, [])

    return (
        <div className={`user-chat w-100 ` + isSelectedChat }>
            <div className='d-lg-flex h-100'>
                <div className={`h-100 w-` + width}>

                    {selectedChat && selectedChat.username === undefined ?
                        (
                            <>
                                <div className='no-message-container d-flex flex-column align-items-center justify-content-center text-center h-100'>
                                    <img src={noMsgImg} className='w-35 mb-5' />
                                    <p className='lead'>
                                        Select a chat to read messages
                                    </p>
                                </div>
                            </>
                        ) :
                        (
                            <>
                                {/* ------------- Message Box Header ----------- */}
                                <div className='p-lg-4 border-bottom message-box-header d-flex'>
                                    <div className='align-items-center row w-100 mx-0'>
                                        <div className='align-items-center row mx-0 p-0'>

                                            <div className='col-11 col-sm-11 p-0'>
                                                <div className='d-flex align-items-center'>
                                                    <div className='d-block d-lg-none me-2 ms-0'>
                                                        <a className="user-chat-remove text-muted cursor-pointer font-size-16 p-2" onClick={showContactList}>
                                                            <FiArrowLeft />
                                                        </a>
                                                    </div>

                                                    {/* ---------- User Avatar ---------- */}
                                                    <div className='me-lg-3 ms-0'>
                                                        <div className='chat-user-img online align-self-center me-3 ms-0 message-box-header-avatar-wrapper cursor-pointer' onClick={toggleProfile}>
                                                            {message.avatar ? (
                                                                <>
                                                                    <img
                                                                        src={message.avatar}
                                                                        alt={message.username}
                                                                        className='rounded-circle avatar-xs'
                                                                    />
                                                                    <span className='user-status'></span>
                                                                </>
                                                            )
                                                                :
                                                                (
                                                                    <div className='avatar-xs'>
                                                                        <span className='avatar-title online rounded-circle bg-soft-primary text-primary message-box-header-avatar'>
                                                                            {
                                                                                getShortName(message.username)
                                                                            }
                                                                        </span>
                                                                        <span className='user-status'></span>
                                                                    </div>
                                                                )
                                                            }

                                                        </div>
                                                    </div>

                                                    {/* ---------- User Name ---------- */}
                                                    <div className='flex-grow-1 overflow-hidden d-flex flex-column'>
                                                        <h5 className='font-size-16 mb-0 text-truncate'>
                                                            <a className='text-reset user-profile-show'>{message.username}</a>
                                                        </h5>
                                                        <div className=''>
                                                            <div className='d-flex gap-1 gap-lg-3 pt-2'>
                                                                {message.tagList && message.tagList.map((tag, i) => {
                                                                    return (
                                                                        <span
                                                                            key={tag.content + i}
                                                                            className='tag-text text-center'
                                                                            style={{
                                                                                color: tag.color,
                                                                                backgroundColor: tag.backgroundColor,
                                                                                padding: '0.1rem 0.5rem',
                                                                                borderRadius: '50px',
                                                                                fontSize: '14px',
                                                                                minWidth: '75px',
                                                                            }}>
                                                                            {tag.content}
                                                                        </span>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className='col-1 col-sm-1 p-0'>
                                                <ul className='list-inline user-chat-nav text-left text-md-center text-lg-end mb-0'>
                                                    <li className='list-inline-item d-inline-block'>
                                                        <FaRegUser className='' onClick={toggleProfile} />
                                                    </li>
                                                </ul>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>

                                {/* --------------- Message Box Content --------------- */}
                                <ChatMessageContent selectedChat={selectedChat} />

                                {/* ------------- Message Input ------------ */}
                                <div className='py-2 py-lg-3 border-top mb-0'>
                                    <div className='d-flex px-2 px-lg-3 pb-2 pb-lg-3 gap-2 quick-answer-wrapper border-bottom'>
                                        {quickAnswers && quickAnswers.length && quickAnswers.map((each, index) => {
                                            return (
                                                <button 
                                                    tabIndex={0} 
                                                    className='quick-answer-btn' 
                                                    onClick={() => putQuickAnswer(each)}
                                                    key={index}
                                                >
                                                    {each}
                                                </button>
                                            )
                                        })}
                                        {/* <button tabIndex={0} className='quick-answer-btn' onClick={ }>
                                            How are you?
                                        </button>
                                        <button tabIndex={0} className='quick-answer-btn'>
                                            Can we talk now?
                                        </button>
                                        <button tabIndex={0} className='quick-answer-btn'>
                                            Are you available now?
                                        </button> */}
                                    </div>
                                    <form className='p-3 p-lg-4' onSubmit={submitHandle}>
                                        <div className='no-gutters row'>
                                            <div className='col'>
                                                <div>
                                                    <input
                                                        placeholder="Enter Message..."
                                                        type="text"
                                                        className="form-control form-control-lg bg-light border-light form-control"
                                                        value={msgInput}
                                                        onChange={addMsgInput}
                                                        webkitdirectory=''
                                                        multiple
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-auto'>
                                                <div className='chat-input-links ms-md-2'>
                                                    <ul className='list-inline mb-0 ms-0'>
                                                        <li className='list-inline-item'>
                                                            <div className='emoji-dropdown dropup btn-group'>
                                                                <button
                                                                    type="button"
                                                                    id="emoji"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="true"
                                                                    className="text-decoration-none font-size-16 btn-lg waves-effect btn btn-link"
                                                                >
                                                                    <RiEmotionLine className='' onClick={toggleEmoji} />
                                                                </button>
                                                                {/* ---------- Emoji --------- */}
                                                                {showPicker ?
                                                                    (
                                                                        <div
                                                                            tabIndex={-1}
                                                                            role='menu'
                                                                            aria-hidden={false}
                                                                            className='dropdown-menu-end dropdown-menu show'
                                                                            x-placement='top-start'
                                                                        >
                                                                            <Picker onEmojiClick={onEmojiClick} />
                                                                        </div>
                                                                    )
                                                                    : ''}

                                                            </div>
                                                        </li>
                                                        <li className='list-inline-item input-file'>
                                                            <label id='files' className='btn btn-link text-decoration-none font-size-16 btn-lg waves-effect'>
                                                                <RiAttachment2 className='' />
                                                                <input
                                                                    name="fileInput"
                                                                    size="60"
                                                                    type="file"
                                                                    className="form-control-file"
                                                                    onChange={addFile}
                                                                />
                                                            </label>
                                                        </li>
                                                        <li className='list-inline-item'>
                                                            <button className='btn btn-lg'>
                                                                <RiSendPlane2Line className='' onClick={submitMsg} />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </>
                        )

                    }

                </div>

                {/* ------------ User Profile ------------- */}
                <ChatProfile display={display} setDisplayOption={setDisplayOption} selectedChat={selectedChat} />
            </div>

        </div>
    )
}


export default ChatMain;
import React, { useEffect, useState } from 'react'
import sample from '../../../assets/img/sample.png';

const ChatProfile = ({ display, setDisplayOption, selectedChat }) => {

    const [open, setOpen] = useState('d-none');

    const toggleProfile = () => {
        setDisplayOption({ width: '100', open: 'd-none' });
    }

    useEffect(() => {
        setOpen(display);
    }, [display]);

    useEffect(() => {
        setDisplayOption({ width: '100', open: 'd-none' });
    }, [])

    return (
        <div className={`user-profile-sidebar ` + open}>
                    <div className='' style={{height: '8rem'}}>
                        <div className='ri-close-line d-flex align-items-center h-100' onClick={toggleProfile}>

                        </div>
                    </div>
            <div className='d-flex flex-column h-100 justify-content-start gap-5' style={{paddingTop: '5rem'}}>
                <div className='avatar-lg text-center'>
                    {selectedChat && selectedChat.avatar ?
                        (
                            <>
                                <img
                                    src={selectedChat.avatar}
                                    alt={selectedChat.username}
                                    className='rounded-circle w-35'
                                />
                            </>
                        ) :
                        (
                            <>
                                <img
                                    src={sample}
                                    alt={selectedChat.username}
                                    className='rounded-circle w-35'
                                />
                            </>
                        )
                    }

                </div>
                <div className='user-profile-name'>
                    {selectedChat && selectedChat.username && (
                        <>
                            <h1 className='text-center'>
                                {selectedChat.username}
                            </h1>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ChatProfile;
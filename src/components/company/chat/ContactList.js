import React, { useState, useEffect } from 'react'
import { RiImage2Fill, RiFile2Line } from 'react-icons/ri'
import { FiVideo } from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ showMessage, contactList }) => {

    const [contacts, setContacts] = useState([]);

    const getShortName = (username) => {
        const fullName = username.split(' ');
        const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        return initials.toUpperCase();
    }

    const showChat = (chatUser) => {
        showMessage(chatUser);
    }

    const sortAndGroupContacts = (contacts) => {
        let sorted = contacts.sort((a, b) => {
            let ua = a.username.toLowerCase(),
                ub = b.username.toLowerCase();

            if (ua < ub) {
                return -1;
            }
            if (ua > ub) {
                return 1;
            }
            return 0;
        });

        let grouped = sorted.reduce((group, each) => {
            const groupBy = each.username[0];
            group[groupBy] = group[groupBy] ?? [];
            group[groupBy].push(each);
            return group;
        }, {});

        setContacts(grouped);
    };

    const displayContact = (grouped) => {
        let elementList = [];
        for (const key in grouped) {
            if (Object.hasOwnProperty.call(grouped, key)) {
                const groupedContact = grouped[key];
                elementList.push({
                    category: key,
                    groupedContact: groupedContact
                })
            }
        }

        return elementList;
    }

    useEffect(() => {
        sortAndGroupContacts(contactList);

    }, [contactList]);

    return (
        <div id='contact-list-wrapper'>
            <ul className='list-unstyled chat-list chat-user-list'>

                {displayContact(contacts) && displayContact(contacts).map((every, index) => {
                    return (
                        <div key={index}>
                            <h4 className='p-4 text-secondary'>{every.category}</h4>

                            {every.groupedContact.length && every.groupedContact.map((each, id) => {
                                return (
                                    <li
                                        key={uuidv4()}
                                        id={'conversation' + id}
                                        className=''
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
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )

                            })}
                        </div>
                    )
                })}

            </ul>
        </div>
    )
}

export default ContactList;
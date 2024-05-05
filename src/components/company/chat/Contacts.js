import React from 'react'
import ContactList from './ContactList'

const Contacts = ({showMessage, contacts}) => {

    return (
        <>
            <ContactList showMessage={showMessage} contactList={contacts} />
        </>
    )
}

export default Contacts;
import React from 'react'
import ConversationList from './ConversationList'

const Conversation = ({ showMessage, conversations }) => {
    return (
        <>
            <ConversationList showMessage={showMessage} conversations={conversations} />
        </>
    )
}

export default Conversation;
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { BiHelpCircle } from 'react-icons/bi';

import './CompanySettings.css'

const SecureConversation = () => {

    const [state, setState] = useState(1);

    const switchSecure = (event) => {
        if (event.target.checked === true) {
            setState(2); // All is public
        } else {
            setState(1); // Conversation is private
        }
    }

    return (
        <>
            <div className="container">
                <div className='text-end'>
                    <BiHelpCircle className='cursor-pointer' style={{ color: '#FFD233' }}  data-toggle="tooltip" data-placement="top" title="This setting is for securing conversation." />
                </div>

                <Form className="d-flex align-items-center justify-content-center ">
                    <div className='col-4'>
                        <Form.Label htmlFor='secure-switch' className='toggleButton-label'>Conversation Private</Form.Label>
                    </div>

                    <div className='col-4'>
                        <Form.Check
                            type="switch"
                            id="secure-switch"
                            onChange={switchSecure}
                        />
                    </div>

                    <div className='col-4'>
                        <Form.Label htmlFor='secure-switch' className='toggleButton-label'>All is public</Form.Label>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default SecureConversation;
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { BiHelpCircle } from 'react-icons/bi';

import './CompanySettings.css'

const AssignConversation = () => {

    const [state, setState] = useState(1);

    const switchAssign = (event) => {
        if (event.target.checked === true) {
            setState(2); // Manual Assign
        } else {
            setState(1); // Round Robin
        }
    }

    return (
        <>
            <div className="container">
                <div className='text-end'>
                    <BiHelpCircle className='cursor-pointer' style={{ color: '#FFD233' }} data-toggle="tooltip" data-placement="top" title="This setting is for assigning conversation manually or round robin" />
                </div>

                <Form className="d-flex align-items-center justify-content-center">
                    <div className="col-4">
                        <Form.Label htmlFor='assign-switch' className='toggleButton-label'>Round Robin</Form.Label>
                    </div>
                    <div className="col-4">
                        <Form.Check
                            type="switch"
                            id="assign-switch"
                            onChange={switchAssign}
                        />
                    </div>
                    <div className="col-4">
                        <Form.Label htmlFor='assign-switch' className='toggleButton-label'>Manuel Assign</Form.Label>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default AssignConversation;
// Original

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { FaRegAddressBook, FaRegCommentAlt, FaRegUser } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { FiLogOut, FiMenu } from 'react-icons/fi';

import { auth } from '../../firebase';
import { VerifyToken } from '../auth/VerifyToken';
import './WizardLayout.css';

const WizardLayout = ({ children, name }) => {

    const { decoded_token } = VerifyToken();
    const [user, setUser] = useState(decoded_token);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        auth.signOut()
            .then(() => navigate('/login'));
    }

    const toggleMenu = () => {
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        document.getElementsByClassName('toggle-menu-icon')[0].classList.toggle('menu-icon-toggled');
    }

    useEffect(() => {
        if (name) {
            if (user.role === 1 && name === "Settings") {
                document.querySelectorAll(".settings-icon")[0].classList.add('linked-icon');
            } else if (user.role === 1 && name !== "Settings") {
                document.querySelectorAll(".settings-icon").length &&
                    document.querySelectorAll(".settings-icon")[0].classList.remove('linked-icon');
            } else if (user.role === 2 && name === "Contacts") {
                document.querySelectorAll(".menu-icon").length &&
                    document.querySelectorAll(".menu-icon").forEach((each, index) => {
                        each.classList.remove('linked-icon');
                    })
                document.querySelectorAll(".menu-icon")[0].classList.add('linked-icon');
            } else if (user.role === 2 && name === "Chat") {
                document.querySelectorAll(".menu-icon").length &&
                    document.querySelectorAll(".menu-icon").forEach((each, index) => {
                        each.classList.remove('linked-icon');
                    })
                document.querySelectorAll(".menu-icon")[1].classList.add('linked-icon');
            } else if (user.role === 2 && name === "Settings") {
                document.querySelectorAll(".menu-icon").length &&
                    document.querySelectorAll(".menu-icon").forEach((each, index) => {
                        each.classList.remove('linked-icon');
                    })
                document.querySelectorAll(".menu-icon")[3].classList.add('linked-icon');
            } else if (user.role === 3 && name === "Chat") {
                document.querySelectorAll(".menu-icon").length &&
                    document.querySelectorAll(".menu-icon").forEach((each, index) => {
                        each.classList.remove('linked-icon');
                    })
                document.querySelectorAll(".menu-icon")[0].classList.add('linked-icon');
            }

            /**
             *  This menu icon should be changed
            if(name === "Contact") {
                document.querySelectorAll(".menu-icon")[2].classList.add('linked-icon');
            } else {
                document.querySelectorAll(".menu-icon")[2].classList.remove('linked-icon');
            }
             */

        }
    }, [name]);

    return (
        <div className='d-flex overflow' id='wrapper'>

            {/*---------- Sidebar ----------*/}

            <div className='border-end' id='sidebar-wrapper'>

                <div className='sidebar-heading bg-light'>
                    <h1>IT</h1>
                </div>

                {/* ---------- Menu item ---------- */}
                <div className='list-group list-group-flush'>

                    {user && user.role === 1 ?
                        (
                            <>
                                <Link to={'/system/settings'} className='menu-link'>
                                    <FaRegAddressBook className='menu-icon' />
                                </Link>
                                <Link to={'/system/settings'} className='menu-link'>
                                    <AiOutlineSetting className='menu-icon settings-icon' />
                                </Link>
                            </>
                        )
                        :
                        (
                            user.role === 2 ?
                                <>
                                    <Link to={'/company/contacts'} className='menu-link'>
                                        <FaRegAddressBook className='menu-icon' />
                                    </Link>

                                    <Link to={'/company/chat'} className='menu-link'>
                                        <FaRegCommentAlt className='menu-icon' />
                                    </Link>

                                    <Link to={'/company/contacts'} className='menu-link'>
                                        <FaRegUser className='menu-icon' />
                                    </Link>

                                    <Link to={'/company/settings'} className='menu-link'>
                                        <AiOutlineSetting className='menu-icon settings-icon' />
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to={'/company/chat'} className='menu-link'>
                                        <FaRegCommentAlt className='menu-icon' />
                                    </Link>
                                </>
                        )

                    }

                    {/* Log out */}
                    <span className='menu-link menu-logout' onClick={logout}>
                        <FiLogOut className='menu-icon logout-icon' />
                    </span>

                </div>
            </div>

            {/* ---------- Page content wrapper ---------- */}

            <div id="page-content-wrapper">

                {name && name !== "Chat" ?
                    (
                        <div className='page-content-header border-bottom d-flex align-items-center justify-content-between'>

                            <h1 className='text-start m-0'>
                                {user && user.role === 1 ?
                                    name === "Settings" ?
                                        "Settings SuperAdmin"
                                        : "" // 
                                    : name}
                            </h1>
                        </div>
                    )
                    :
                    <></>
                }
                <FiMenu className='toggle-menu-icon position-fixed top-0 end-0 z-index-100 mt-3' onClick={toggleMenu} />

                {/* Page content */}
                <div className="container-fluid p-0">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default WizardLayout;

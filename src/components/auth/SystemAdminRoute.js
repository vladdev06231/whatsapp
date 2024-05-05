import React from 'react'
import { Navigate } from 'react-router-dom';
import Swal from "sweetalert2";

import { VerifyToken } from './VerifyToken';

const SystemAdminRoute = ({ children }) => {
    const { decoded_token, userFullName } = VerifyToken();

    if (!decoded_token || (decoded_token.fName + " " + decoded_token.lName !== userFullName)) {
        return (
            <Navigate
                to={"/login"}
            />
        )
    } else if (decoded_token && decoded_token.verificationRequired) {
        return (
            <Navigate
                to={"/sign-in/verify"}
            />
        )
    } else if (decoded_token.role) {
        if (decoded_token.role === 2) { // Company Administrator
            return (
                <Navigate
                    to={"/company/contacts"}
                />
            )
        } else if (decoded_token.role === 3) { // Company Agent
            return (
                <Navigate
                    to={"/company/chat"}
                />
            )
        } else {
            return children;
        }
    }
}

export default SystemAdminRoute;
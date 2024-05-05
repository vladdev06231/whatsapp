import React from 'react'
import { Navigate } from 'react-router-dom';
import Swal from "sweetalert2";

import { VerifyToken } from './VerifyToken';

const PrivateRoute = ({ children }) => {

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
    } else if (
        decoded_token &&
        !decoded_token.verificationRequired &&
        decoded_token.role &&
        decoded_token.role === 1 //System Administrator
    ) {
        return (
            <Navigate
                to={"/system/settings"}
            />
        )
    }
    else {
        return children;
    }

}

export default PrivateRoute;

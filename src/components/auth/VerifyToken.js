import jwt_decode from "jwt-decode";

export const VerifyToken = () => {
    let token = localStorage.getItem('token');
    let userFullName = localStorage.getItem("fullName");
    let decoded_token = {};

    try {
        decoded_token = token && jwt_decode(token);
        if(decoded_token) decoded_token.verificationRequired = false; // Temporarily
    } catch (error) {
        console.log(error);
    }

    return {
        decoded_token: decoded_token,
        userFullName: userFullName
    };
}
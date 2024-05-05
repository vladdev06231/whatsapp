import { getGlobal, getDispatch } from "reactn";
import { useMutation } from "react-query";
import axios from "axios";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

export const getTokenHeader = () => {
    const token = getGlobal().token;

    if (!token) {
        return {};
    }

    const headers = {
        Authorization: `Bearer ${token}`,
    }

    return headers;
}

const makeRequest = async (useMethod, url, payload = null) => {
    try {
        const method = useMethod.toLowerCase();
        const config = {
            method,
            url: `${url}`,
            headers: getTokenHeader(),
        }

        if (method !== "get" && payload) {
            config.data = payload;
        }

        const response = await axios(config);
        console.log(response);

        return response.data;
    } catch (err) {
        console.log(err.response.status);

        const logout = getDispatch.logout;

        if (err.response.status === 401 || err.response.status === 403) {
            logout()
        }

        if (err.response.data && err.response.data.msg) {
            throw new Error(
                "Unknown error encountered. Please refresh the page and try again."
            );
        }
    }
}

export const useApiPost = (url, callback, opts = {}) => {
    return useMutation(async (payload) => {
        const response = await makeRequest("post", url, payload);
        if (typeof callback === "function") callback(response);
        return response;
    }, opts);
}

export const login = async (useMethod, url, payload = null) => {
    const method = useMethod.toLowerCase();
    const config = {
        method,
        url: `http://localhost:3001${url}`,
        headers: getTokenHeader()
    }
    if (method !== "get" && payload) config.data = payload

    const response = await axios(config);

    if (response) {
        if (!response.data.error) {
            const { fName, lName, email, role } = jwt_decode(response.data);
            localStorage.setItem("token", response.data);
            localStorage.setItem("fullName", fName + " " + lName);
            return response;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${response.data.error}`,
            })
        }
    }
    else console.log("error");
}

export const registerUser = async (useMethod, url, payload = null) => {
    const method = useMethod.toLowerCase();
    const config = {
        method,
        url: `http://localhost:3001${url}`,
        headers: getTokenHeader()
    }
    if (method !== "get" && payload) config.data = payload

    const response = await axios(config);
    if (!response.data.error) {
        Swal.fire("Successfully Registered!");
        return response
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${response.data.error}`,
        })
    }
}

export const authGoogle = async (useMethod, url, payload = null) => {
    const method = useMethod.toLowerCase();
    const config = {
        method,
        url: `http://localhost:3001${url}`,
        headers: getTokenHeader()
    }
    if (method !== "get" && payload) config.data = payload

    const response = await axios(config);
    if (!response.data.error) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("fullName", response.data.fullName);
        if (response.data && response.data.isNew) {
            Swal.fire("Successfully Registered!");
        }
        return response;
    } else {
        console.log(response.data.error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Server Error!`,
        });
    }
}
import bcrypt from "bcryptjs";
import { v1 as uuidv1 } from "uuid";

import { LOGIN, LOGOUT, SIGNUP } from "../actions/auth/type.js";

const initialState = {
    users: [],
    currentUser: {},
    errors: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:

            break;
        case LOGOUT:

            break;
        case SIGNUP:

            break;
    }
}

// export default authReducer;
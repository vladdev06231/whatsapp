import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { googleReducer } from "./googleReducer";

const rootReducer = combineReducers({
    // auth: authReducer,
    // googleReducer: googleReducer
});

export default rootReducer;
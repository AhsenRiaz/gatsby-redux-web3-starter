import { combineReducers } from "redux";
import authReducer from "./slice/authSlice/index";

const parentReducer = combineReducers({
    auth : authReducer,
})

export default parentReducer;
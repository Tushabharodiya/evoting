import { combineReducers } from "redux";
import adminReducer from "./admin/redux/reducer";



let rootRrducer=combineReducers({
    adminReducer,
})

export default rootRrducer;
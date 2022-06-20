import { messagesReducer } from "./messagesReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
  messages: messagesReducer,
});

export default combinedReducer;

import { messagesReducer } from "./messagesReducer";
import { availabilityReducer } from "./availabilityReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
  messages: messagesReducer,
  available: availabilityReducer,
});

export default combinedReducer;

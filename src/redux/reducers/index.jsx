import { messagesReducer } from "./messagesReducer";
import { availabilityReducer } from "./availabilityReducer";
import { projectsReducer } from "./projectsReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
  messages: messagesReducer,
  available: availabilityReducer,
  projects: projectsReducer,
});

export default combinedReducer;

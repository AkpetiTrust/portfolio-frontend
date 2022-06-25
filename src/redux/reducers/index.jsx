import { messagesReducer } from "./messagesReducer";
import { availabilityReducer } from "./availabilityReducer";
import { projectsReducer } from "./projectsReducer";
import { draggedProjectReducer } from "./draggedProjectReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
  messages: messagesReducer,
  available: availabilityReducer,
  projects: projectsReducer,
  draggedProject: draggedProjectReducer,
});

export default combinedReducer;

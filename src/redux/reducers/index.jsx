import { messagesReducer } from "./messagesReducer";
import { availabilityReducer } from "./availabilityReducer";
import { projectsReducer } from "./projectsReducer";
import { draggedProjectReducer } from "./draggedProjectReducer";
import { loadingReducer } from "./loadingReducer";
import { currentlyReducer } from "./currentlyReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
  messages: messagesReducer,
  available: availabilityReducer,
  projects: projectsReducer,
  draggedProject: draggedProjectReducer,
  loading: loadingReducer,
  currently: currentlyReducer,
});

export default combinedReducer;

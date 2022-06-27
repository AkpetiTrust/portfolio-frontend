import { createStore } from "redux";
import { api } from "../constants";
import { initializeState, toggleLoading } from "./actions";
import combinedReducer from "./reducers";

const store = createStore(
  combinedReducer,
  {
    loading: true,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

async function populateState() {
  if (!localStorage.getItem("token")) return;

  const messagesResponse = await api.get("messages", true);
  const projectsResponse = await api.get("projects", true);
  const settingsResponse = await api.get("settings", true);

  const messages = messagesResponse.response;
  const projects = projectsResponse.response;
  const settings = settingsResponse.response;

  const availability = settings.is_available;
  const currently = settings.currently;

  store.dispatch(
    initializeState({ messages, projects, availability, currently })
  );
  store.dispatch(toggleLoading(false));
}

populateState();

export default store;

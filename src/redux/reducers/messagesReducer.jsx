export const messagesReducer = (state = [], action) => {
  if (action.type === "INITIALIZE_STATE") {
    return action.payload.messages;
  }

  if (action.type === "MESSAGES") {
    return action.payload;
  }

  if (action.type === "SELECT_MESSAGE") {
    return state.map((message) =>
      message.id === action.payload.id
        ? { ...message, selected: action.payload.selected }
        : message
    );
  }

  if (action.type === "DELETE_SELECTED_MESSAGES") {
    return state.filter((message) => !message.selected);
  }

  return state;
};

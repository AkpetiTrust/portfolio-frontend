export const currentlyReducer = (state = "", action) => {
  if (action.type === "INITIALIZE_STATE") {
    return action.payload.currently;
  }

  if (action.type === "CURRENTLY") {
    return action.payload;
  }

  return state;
};

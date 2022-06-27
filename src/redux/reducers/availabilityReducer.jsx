export const availabilityReducer = (state = false, action) => {
  if (action.type === "INITIALIZE_STATE") {
    return action.payload.availability;
  }

  if (action.type === "AVAILABILITY") {
    return action.payload;
  }

  return state;
};

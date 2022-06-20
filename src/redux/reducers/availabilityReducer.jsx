export const availabilityReducer = (state = false, action) => {
  if (action.type === "AVAILABILITY") {
    return action.payload;
  }

  return state;
};

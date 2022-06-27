export const loadingReducer = (state = false, action) => {
  if (action.type === "LOADING") {
    return action.payload;
  }

  return state;
};

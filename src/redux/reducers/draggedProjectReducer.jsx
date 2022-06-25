export const draggedProjectReducer = (state = 0, action) => {
  if (action.type === "DRAGGED_PROJECT") {
    return action.payload.id;
  }

  return state;
};

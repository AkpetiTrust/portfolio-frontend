export const selectMessage = (id, selected) => {
  return { type: "SELECT_MESSAGE", payload: { id, selected } };
};

export const updateProject = (id, body) => {
  return { type: "UPDATE_PROJECT", payload: { id, body } };
};

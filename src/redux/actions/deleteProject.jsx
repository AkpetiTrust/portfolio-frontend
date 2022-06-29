export const deleteProject = (id) => {
  return { type: "DELETE_PROJECT", payload: { id } };
};

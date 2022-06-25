export const projectsReducer = (state = [], action) => {
  if (action.type === "PROJECTS") {
    return action.payload;
  }

  if (action.type === "TOGGLE_FEATURED") {
    return state.map((project) =>
      project.id === action.payload.id
        ? { ...project, featured: action.payload.featured }
        : project
    );
  }

  return state;
};

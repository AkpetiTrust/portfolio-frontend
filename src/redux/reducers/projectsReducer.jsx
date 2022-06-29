export const projectsReducer = (state = [], action) => {
  if (action.type === "INITIALIZE_STATE") {
    return action.payload.projects;
  }

  if (action.type === "PROJECTS") {
    return action.payload;
  }

  if (action.type === "TOGGLE_FEATURED") {
    return state.map((project) =>
      project.id === action.payload.id
        ? { ...project, is_featured: action.payload.featured }
        : project
    );
  }

  if (action.type === "UPDATE_ORDER") {
    const { orderOfHoveringItem, orderOfItemToReplace } = action.payload;
    let stateCopy = [...state].map((project) => ({ ...project }));
    let shiftIndex;
    if (orderOfHoveringItem < orderOfItemToReplace) {
      shiftIndex = -1;
    } else {
      shiftIndex = 1;
    }

    const hoveringItem = stateCopy.find(
      (project) => project.order === orderOfHoveringItem
    );

    hoveringItem.order = orderOfItemToReplace;

    stateCopy = stateCopy.map((project) => {
      const projectIsInTheRightDistance =
        Math.abs(project.order - orderOfHoveringItem) <=
        Math.abs(orderOfHoveringItem - orderOfItemToReplace);

      const projectShouldBeMoved =
        projectIsInTheRightDistance &&
        project.id !== hoveringItem.id &&
        Math.sign(orderOfHoveringItem - project.order) === shiftIndex;

      if (projectShouldBeMoved) {
        return { ...project, order: project.order + shiftIndex };
      } else {
        return project;
      }
    });

    return stateCopy;
  }

  if (action.type === "NEW_PROJECT") {
    return [...state, action.payload];
  }

  if (action.type === "UPDATE_PROJECT") {
    return [...state].map((project) =>
      project.id == action.payload.id
        ? { ...action.payload.body, id: action.payload.id }
        : project
    );
  }

  if (action.type === "DELETE_PROJECT") {
    return state.filter((project) => project.id !== action.payload.id);
  }

  return state;
};

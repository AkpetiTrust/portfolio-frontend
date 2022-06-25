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

    stateCopy.map((project) =>
      Math.abs(project.order - orderOfHoveringItem) <=
      Math.abs(orderOfHoveringItem - orderOfItemToReplace)
        ? { ...project, order: project.order + shiftIndex }
        : project
    );

    return stateCopy;
  }

  return state;
};

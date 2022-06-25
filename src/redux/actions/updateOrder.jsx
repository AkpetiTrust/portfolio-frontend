export const updateOrder = (orderOfHoveringItem, orderOfItemToReplace) => {
  return {
    type: "UPDATE_ORDER",
    payload: { orderOfHoveringItem, orderOfItemToReplace },
  };
};

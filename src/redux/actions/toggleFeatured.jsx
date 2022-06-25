export const toggleFeatured = (id, featured) => {
  return { type: "TOGGLE_FEATURED", payload: { id, featured } };
};

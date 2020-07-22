import { GET_GROUPS, CREATE_GROUP } from "../actions/types";

export default (
  state = [
    { name: "group1" },
    { name: "group2" },
    { name: "group3" },
    { name: "group4" },
    { name: "group5" },
  ],
  action
) => {
  switch (action.type) {
    case GET_GROUPS:
      return state;
    case CREATE_GROUP:
      return [...state, action.payload];
    default:
      return state;
  }
};

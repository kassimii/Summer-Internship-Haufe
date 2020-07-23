import { GET_GROUPS, CREATE_GROUP, EDIT_GROUP } from "../actions/types";

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
    case EDIT_GROUP:
      let newState = state;
      newState = state.map((group) =>
        group.name === action.payload.oldName
          ? { name: action.payload.newName }
          : group
      );
      return newState;
    default:
      return state;
  }
};

import { GET_GROUPS, CREATE_GROUP, EDIT_GROUP } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_GROUPS:
      return action.payload;
    case CREATE_GROUP:
      return [...state, action.payload];
    case EDIT_GROUP:
      let newState = state;
      newState = state.map((group) =>
        group.id === action.payload.id ? action.payload : group
      );
      return newState;
    default:
      return state;
  }
};

import { GET_GROUPS, CREATE_GROUP } from "../actions/types";

export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case GET_GROUPS:
      return action.payload;
    case CREATE_GROUP:
      return action.payload;
    default:
      return state;
  }
};

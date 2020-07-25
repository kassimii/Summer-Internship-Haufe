import { GET_GROUP, CLEAR_GROUP } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case GET_GROUP:
      return action.payload;
    case CLEAR_GROUP:
      return null;
    default:
      return state;
  }
};

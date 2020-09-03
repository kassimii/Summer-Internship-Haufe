import { GET_GROUP, CLEAR_GROUP, USER_LOGOUT } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case GET_GROUP:
      return action.payload.group;
    case CLEAR_GROUP:
      return null;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
};

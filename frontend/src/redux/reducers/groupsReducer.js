import { GET_GROUPS, CREATE_GROUP, USER_LOGOUT } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_GROUPS:
      if (action.payload.groups) {
        if (action.payload.groups.length === 0) return null;
        return action.payload.groups;
      } else {
        return state;
      }
    case CREATE_GROUP:
      if (action.payload.group) {
        if (state === null) return [action.payload.group];
        else return [...state, action.payload.group];
      }
      return state;
    case USER_LOGOUT:
      return [];
    default:
      return state;
  }
};

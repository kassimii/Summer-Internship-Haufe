import {
  GET_GROUPS,
  CREATE_GROUP,
  EDIT_GROUP,
  DELETE_GROUP
} from "../actions/types";

export default (state = [], action) => {
  console.log(action);
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

    case EDIT_GROUP:
      if (action.payload.group) {
        let newState = state;
        newState = state.map((group) =>
          group.id === action.payload.id ? action.payload : group
        );
        return newState;
      } else {
        return state;
      }
    case DELETE_GROUP:
      if (action.payload.message === "deleted group" && action.payload.id) {
        let newState = state;
        newState = state.filter((group) => action.payload.id !== group.id);
        return newState;
      } else {
        return state;
      }
    default:
      return state;
  }
};

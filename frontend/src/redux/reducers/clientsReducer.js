import * as actions from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case actions.GET_CLIENTS:
      if (action.payload.clients) {
        if (action.payload.clients.length === 0) return null;
        return action.payload.cliens;
      } else {
        return state;
      }
    case actions.CREATE_CLIENT:
      if (action.payload.client) {
        if (state === null) return [action.payload.client];
        else return [...state, action.payload.client];
      }
      return state;

    default:
      return state;
  }
};

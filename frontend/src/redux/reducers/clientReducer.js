import * as actions from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case actions.GET_CLIENT:
      return action.payload.client;
    default:
      return state;
  }
};

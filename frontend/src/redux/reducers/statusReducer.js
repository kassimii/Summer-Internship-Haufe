import * as actions from "../actions/types";

export default (currentStatus = null, action) => {
  switch (action.type) {
    case actions.GET_STATUS:
      return action.payload.client;
    default:
      return currentStatus;
  }
};

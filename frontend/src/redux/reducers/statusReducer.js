import * as actions from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case actions.ADD_STATUS:
      return action;

    default:
      return state;
  }
};

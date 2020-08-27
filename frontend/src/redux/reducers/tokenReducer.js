import * as actions from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case actions.STORE_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

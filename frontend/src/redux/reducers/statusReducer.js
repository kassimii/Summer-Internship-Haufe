import * as actions from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    // case actions.GET_STATUS:
    //   return action.payload;
    default:
      return state;
  }
};

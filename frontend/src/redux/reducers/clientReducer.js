import * as actions from "../actions/types";

export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case actions.GET_CLIENT:
      return action.payload;
    default:
      return state;
  }
};

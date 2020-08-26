import * as actions from "../actions/types";

export default (filters = null, action) => {
  switch (action.type) {
    case actions.GET_FILTERS:
      return action.payload.filters;
    default:
      return filters;
  }
};

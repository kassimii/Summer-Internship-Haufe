import * as actions from "../actions/types";

export default (filters = null, action) => {
  switch (action.type) {
    case actions.GET_FILTERS:
      return action.payload.filters;
    case actions.USER_LOGOUT:
      return null;
    default:
      return filters;
  }
};

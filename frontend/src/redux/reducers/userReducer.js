import * as actions from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.USER_SIGNIN_REQUEST:
      return { loading: true };
    case actions.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actions.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case actions.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

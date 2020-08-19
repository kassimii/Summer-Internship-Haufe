import * as actions from "../actions/types";

export default (selectedClient = null, action) => {
  switch (action.type) {
    case actions.GET_CLIENT:
      return action.payload;
    default:
      return selectedClient;
  }
};

import * as actions from "../actions/types";

export default (selectedClient = null, action) => {
  switch (action.type) {
    case actions.GET_CLIENT:
      return action.payload.client;
    case actions.EDIT_CLIENT:
      return action.payload.client;
    case actions.CLEAR_CLIENT:
      return null;
    case actions.UPLOAD_CLIENT_METADATA:
      return action.payload;
    case actions.GET_CLIENT_METATDATA:
      return action.payload;
    case actions.GET_STATUS:
      if (action.payload.clientId === selectedClient.id) {
        return { ...selectedClient, latestStatus: action.payload.status };
      }
      return selectedClient;
    case actions.USER_LOGOUT:
      return null;
    default:
      return selectedClient;
  }
};

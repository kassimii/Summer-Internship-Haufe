import * as actions from "../actions/types";

export default (selectedClient = null, action) => {
  switch (action.type) {
    case actions.GET_CLIENT:
      console.log(action);
      return action.payload.client;
    case actions.CLEAR_CLIENT:
      return null;
    case actions.UPLOAD_CLIENT_METADATA:
      console.log(action);
      return action.payload; 
    case actions.GET_CLIENT_METATDATA:
      return action.payload;  
    default:
      return selectedClient;
  }
};

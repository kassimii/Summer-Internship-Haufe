import { combineReducers } from "redux";

import groupsReducer from "./groupsReducer";
import groupReducer from "./groupReducer";
import clientReducer from "./clientReducer";
import clientsReducer from "./clientsReducer";
import userReducer from "./userReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  groups: groupsReducer,
  group: groupReducer,
  selectedClient: clientReducer,
  clients: clientsReducer,
  userSignIn: userReducer,
  currentStatus: statusReducer,
});

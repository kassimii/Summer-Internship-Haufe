import { combineReducers } from "redux";

import groupsReducer from "./groupsReducer";
import groupReducer from "./groupReducer";
import clientReducer from "./clientReducer";
import clientsReducer from "./clientsReducer";
import tokenReducer from "./tokenReducer";

export default combineReducers({
  groups: groupsReducer,
  group: groupReducer,
  selectedClient: clientReducer,
  clients: clientsReducer,
  token: tokenReducer,
});

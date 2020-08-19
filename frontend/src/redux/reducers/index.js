import { combineReducers } from "redux";

import groupsReducer from "./groupsReducer";
import groupReducer from "./groupReducer";
import clientReducer from "./clientReducer";
import clientsReducer from "./clientsReducer";

export default combineReducers({ groups: groupsReducer, group: groupReducer, client: clientReducer, clients: clientsReducer });

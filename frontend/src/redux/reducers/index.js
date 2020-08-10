import { combineReducers } from "redux";

import groupsReducer from "./groupsReducer";
import groupReducer from "./groupReducer";
export default combineReducers({ groups: groupsReducer, group: groupReducer });

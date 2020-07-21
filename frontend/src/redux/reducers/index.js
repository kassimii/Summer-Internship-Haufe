import { combineReducers } from "redux";

import groupsReducer from "./groupsReducer";

export default combineReducers({ groups: groupsReducer });

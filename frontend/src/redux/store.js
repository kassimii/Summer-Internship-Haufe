import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import Cookie from "js-cookie";

import reducers from "./reducers";
const composeEnhanvers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  userSignIn: userInfo
};

export const store = createStore(
  reducers,
  initialState,
  composeEnhanvers(applyMiddleware(thunk))
);

export default { store };

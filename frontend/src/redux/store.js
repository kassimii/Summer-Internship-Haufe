import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { compose } from 'redux';

import reducers from './reducers';
const composeEnhanvers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    composeEnhanvers(applyMiddleware(thunk))
);

export default { store };

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// const reducer = combineReducers({
//     // additional reducers could be added here
// });

const store = createStore(
  applyMiddleware(logger),
);

export default store;

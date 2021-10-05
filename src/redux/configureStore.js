import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rocketsSlice';

const reducer = combineReducers({
  rockets: rocketsReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;

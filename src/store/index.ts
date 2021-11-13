import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AlertState, SessionState } from './interface';
import rootReducer from './reducers';
import { errorApiMiddleware } from './middleware';

export type State = {
  session: SessionState;
  alert: AlertState;
};

const middleware = [thunk, logger, errorApiMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

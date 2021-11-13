import { combineReducers } from 'redux';
import account from './account';
import alert from './alert';

export default combineReducers({
  session: account,
  alert
});

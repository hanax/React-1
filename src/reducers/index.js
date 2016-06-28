import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  users: UsersReducer,
  form: formReducer
});

export default rootReducer;

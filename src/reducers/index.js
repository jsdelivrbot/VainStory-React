import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PlayerReducer from './players';

const rootReducer = combineReducers({
  form: formReducer,
  player: PlayerReducer
});

export default rootReducer;

import _ from 'lodash';
import { FETCH_PLAYER, FETCH_MATCHES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYER:
      console.log(action.payload);
      return state; //{ ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_MATCHES:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}
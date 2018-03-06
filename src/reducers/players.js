import _ from 'lodash';
import { FETCH_PLAYER } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYER:
      console.log(action.payload);
      return state; //{ ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
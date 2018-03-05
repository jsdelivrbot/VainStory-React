import _ from 'lodash';
import { FETCH_PLAYER } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYER:
      return state;
    default:
      return state;
  }
}
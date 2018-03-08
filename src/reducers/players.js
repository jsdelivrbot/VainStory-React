import _ from 'lodash';
import { FETCH_PLAYER, FETCH_MATCHES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYER:
      const data = action.payload.data.data[0];

      if (data) {
        return { ...state, [data.attributes.name]: data.attributes};
      } else {
        return state;
      }
    case FETCH_MATCHES:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}
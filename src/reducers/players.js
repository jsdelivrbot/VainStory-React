import _ from 'lodash';
import { FETCH_PLAYER, FETCH_MATCHES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYER:
      const payloadData = action.payload.data;
      
      if (payloadData) {
        const data = payloadData.data[0];
        return { ...state, [data.attributes.name]: { attributes: data.attributes, id: `${data.id}` } };
      } else {
        return state;
      }
    case FETCH_MATCHES:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
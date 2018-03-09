import _ from 'lodash';
import { FETCH_PLAYER, FETCH_MATCHES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYER:
      const data = action.payload.data.data[0];
    
      if (data) {
        return { ...state, [data.attributes.name]: { attributes: data.attributes, id: `${data.id}` } };
      } else {
        return state;
      }
    case FETCH_MATCHES:
      //console.log(state);  
      //console.log(action.payload);
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
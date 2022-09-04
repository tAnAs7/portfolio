import { FETCH_ALL_ORDER, CREATE_ORDER, UPDATE_ORDER } from '../constants/actionTypes';

export default (events = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ORDER:
      return action.payload;
    case CREATE_ORDER:
      return [...events, action.payload];
    case UPDATE_ORDER:
      return events.map((event) => (event._id === action.payload._id ? action.payload : event));
    default:
      return events;
  }
};


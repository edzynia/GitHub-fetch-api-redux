import { INCREMENT, DECREMENT } from './counter-actions';

const DELTA = 1;
export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: {
      return state + DELTA;
    }
    case DECREMENT: {
      return state - DELTA;
    }
    default: {
      return state;
    }
  }
};

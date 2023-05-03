import { SET_TECHNOLOGY, SET_LOADING, SET_ERROR } from './technologies-actions';

const initialState = {
  status: 'idle', //loading| received | rejected
  error: null,
  technology: {},
};

export const technologyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: payload ? payload : null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload,
      };
    case SET_TECHNOLOGY:
      return {
        ...state,
        status: 'received',
        technology: payload,
      };
    default:
      return state;
  }
};

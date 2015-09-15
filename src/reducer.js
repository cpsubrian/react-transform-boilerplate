import {
  INCREMENT,
  RESET
} from './types';

const initialState = {
  counter: 0
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case RESET:
      return {
        ...state,
        counter: action.value || 0
      };

    default:
      return state;
  }
}

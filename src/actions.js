import {
  INCREMENT,
  RESET
} from './types';

export function increment () {
  return {type: INCREMENT};
}

export function reset ({value}) {
  return {type: RESET, value};
}

import * as actionTypes from '../constants/ActionTypes';

export function someActionCreator(stage) {
  return {
    type: actionTypes.SOME_ACTION_TYPE,
    stage
  };
}
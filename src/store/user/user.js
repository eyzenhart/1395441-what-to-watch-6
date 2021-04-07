import {ActionType} from '../actions';
import {AUTH_STATUS} from '../api-actions';

const initialState = {
  authorizationStatus: AUTH_STATUS.NO_AUTH,
  userData: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.GET_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
  }

  return state;
};

export {user};

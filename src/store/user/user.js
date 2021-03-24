import {ActionType} from '../actions';
import {AUTH_STATUS} from '../../api-actions';

const initialState = {
  authorizationStatus: AUTH_STATUS.NO_AUTH
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
  }

  return state
};

export {user};

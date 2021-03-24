import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: 'DATA',
  USER: 'USER'
};

export const rootReducer = combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.USER]: user
});

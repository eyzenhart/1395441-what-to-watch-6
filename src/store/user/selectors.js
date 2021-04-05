import {NameSpace} from '../root-reducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUser = (state) => state[NameSpace.USER].userData;

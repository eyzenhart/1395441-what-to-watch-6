import {ActionCreator} from './store/actions';

export const AUTH_STATUS = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH'
};

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
  .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const authCheck = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(ActionCreator.requiredAuthorization(AUTH_STATUS.AUTH)))
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(() => dispatch(ActionCreator.requiredAuthorization(AUTH_STATUS.AUTH)))
  .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

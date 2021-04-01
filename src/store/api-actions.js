import {loadFilms, loadComments, requiredAuthorization, redirectToRoute} from './actions';

export const AUTH_STATUS = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH'
};


export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/` + id)
  .then(({data}) => dispatch(loadComments(data)))
);


export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
  .then(({data}) => dispatch(loadFilms(data)))
);

export const authCheck = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(requiredAuthorization(AUTH_STATUS.AUTH)))
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(() => dispatch(requiredAuthorization(AUTH_STATUS.AUTH)))
  .then(() => dispatch(redirectToRoute(`/`)))
);

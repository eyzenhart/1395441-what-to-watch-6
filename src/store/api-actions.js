import {loadFilms, loadComments, requiredAuthorization, redirectToRoute, addFilm, loadPromoFilm, getUserData, setFormError} from './actions';
import {filmsAdapter, promoAdapter, userAdapter} from '../adapter/adapter';

export const AUTH_STATUS = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/` + id)
  .then(({data}) => dispatch(loadComments(data)))
);

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
  .then(({data}) => dispatch(loadFilms(filmsAdapter(data))))
);

export const authCheck = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then((data) => dispatch(getUserData(data)))
  .then(() => dispatch(requiredAuthorization(AUTH_STATUS.AUTH)))
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then((data) => dispatch(getUserData(data)))
  .then(() => dispatch(requiredAuthorization(AUTH_STATUS.AUTH)))
  .then(() => dispatch(redirectToRoute(`/`)))
);

export const review = (comment, rating, id) => (dispatch, _getState, api) => (
  api.post(`/comments/` + id, {comment, rating})
  .then(() => dispatch(redirectToRoute(`/films/` + id)))
  .catch(() => dispatch(setFormError(true)))
);

export const postFavouriteFilm = (film, id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/` + id + `/` + status)
  .then(() => dispatch(addFilm(film)))
  .then(() => dispatch(redirectToRoute(`/`)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
  .then(({data}) => dispatch(loadPromoFilm(promoAdapter(data))))
);

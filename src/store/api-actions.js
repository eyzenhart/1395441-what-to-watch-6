import {loadFilms, loadComments, requiredAuthorization, redirectToRoute, addFilm, addComment, loadPromoFilm, getUserData} from './actions';

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
  // .then(() => console.log('dkjsljn'))
  .then(({data}) => dispatch(loadFilms(data)))
);

export const authCheck = () => (dispatch, _getState, api) => (
  api.get(`/login`)
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
  .then((data) => dispatch(addComment(data)))
  .then(() => dispatch(redirectToRoute(`/`)))
);

export const postFavouriteFilm = (film, id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/` + id + `/` + status)
  .then(() => dispatch(addFilm(film)))
  .catch(() => {redirectToRoute(`/login`)})
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
  .then(({data}) => dispatch(loadPromoFilm(data)))
)

// export const logout = () => (dispatch, _getState, api) => (
//   api.get(`/logout`)
//   .then(())
// )

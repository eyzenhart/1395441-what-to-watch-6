export const ActionType = {
  GENRE_CHANGE: `genre-change`,
  CREATE_GENRE_LIST: `create-genre-list`,
  LOAD_FILMS: 'load-films',
  REQUIRED_AUTHORIZATION: 'required-authorization',
  REDIRECCT_TO_ROUTE: 'redirect-to-route',
};

export const ActionCreator = {

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECCT_TO_ROUTE,
    payload: url
  }),

  loadFilms: (films) => ({
      type: ActionType.LOAD_FILMS,
      payload: films
  }),

  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  changeGenre: (activeGenre) => ({
    type: ActionType.GENRE_CHANGE,
    payload: activeGenre
  }),
};

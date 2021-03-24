export const ActionType = {
  GENRE_CHANGE: `app/genre-change`,
  LOAD_FILMS: 'data/load-films',
  REQUIRED_AUTHORIZATION: 'user/required-authorization',
  REDIRECT_TO_ROUTE: 'app/redirect-to-route',
};

  export const redirectToRoute = (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  });

  export const loadFilms = (films) => ({
      type: ActionType.LOAD_FILMS,
      payload: films
  });

  export const requiredAuthorization = (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  });

  export const changeGenre = (activeGenre) => ({
    type: ActionType.GENRE_CHANGE,
    payload: activeGenre
  });

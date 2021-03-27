export const ActionType = {
  GENRE_CHANGE: `app/genre-change`,
  LOAD_FILMS: 'data/load-films',
  LOAD_COMMENTS: 'data/load-comments',
  REQUIRED_AUTHORIZATION: 'user/required-authorization',
  REDIRECT_TO_ROUTE: 'app/redirect-to-route',
  TAB_CHANGE: 'app/tab-change',
  GET_CARD_ID: 'app/card-id'
};

  export const redirectToRoute = (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  });

  export const loadFilms = (films) => ({
      type: ActionType.LOAD_FILMS,
      payload: films
  });


  export const loadComments = (comments) => ({
    type: ActionType.LOAD_FILMS,
    payload: comments
});

  export const requiredAuthorization = (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  });

  export const changeGenre = (activeGenre) => ({
    type: ActionType.GENRE_CHANGE,
    payload: activeGenre
  });

  export const changeTab = (activeTab) => ({
    type: ActionType.TAB_CHANGE,
    payload: activeTab
  });

  export const getCardId = (id) => ({
    type: ActionType.GET_CARD_ID,
    payload: id
  });

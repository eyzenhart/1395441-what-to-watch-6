import {ActionCreator, ActionType} from './actions';
// import films from '../mocks/films';
import {AUTH_STATUS} from '../api-actions'

const initialState = {
  activeGenre: `All genres`,
  films: [],
  currentFilms: [],
  // genreList: ActionCreator.createGenreList(films),
  genreList: [],
  isFilmListLoaded: false,
  authorizationStatus: AUTH_STATUS.NO_AUTH
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        currentFilms: action.payload,
        isFilmListLoaded: true
      };

    case ActionType.GENRE_CHANGE:
      return {
        ...state,
        activeGenre: action.payload,
        currentFilms: action.payload === `All genres` ? state.films : state.films.filter(film => film.genre === action.payload)
      };

    case ActionType.CREATE_GENRE_LIST:
      return {
        ...state,
        genreList: action.payload
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
  };

  return state;
};

export {reducer};

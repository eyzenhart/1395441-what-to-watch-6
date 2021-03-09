import {ActionCreator, ActionType} from './actions';
import films from '../mocks/films';

const initialState = {
  activeGenre: `All genres`,
  genreList: ActionCreator.createGenreList(films),
  films: films,
  currentFilms: films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
  }

  return state;
};

export {reducer};

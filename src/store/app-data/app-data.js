import {ActionType} from '../actions';

const initialState = {
  activeGenre: `All genres`,
  films: [],
  currentFilms: [],
  genreList: [],
  isFilmListLoaded: false,
}

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        genreList: Array.from(new Set(action.payload.map((film) => film.genre))),
        currentFilms: action.payload,
        isFilmListLoaded: true
      };

    case ActionType.GENRE_CHANGE:
      return {
        ...state,
        activeGenre: action.payload,
        currentFilms: action.payload === `All genres` ? state.films : state.films.filter(film => film.genre === action.payload)
      };
  }

  return state
};

export {appData};

import {ActionType} from '../actions';

const initialState = {
  activeGenre: `All genres`,
  films: [],
  comments: [],
  currentFilms: [],
  genreList: [`All genres`],
  isFilmListLoaded: false,
  activeTab: `Overview`,
  activeCard: ` `,
  myFilms: [],
  promoFilm: {}
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        genreList: Array.from(new Set([...state.genreList, ...action.payload.map((film) => film.genre)])),
        currentFilms: action.payload,
        isFilmListLoaded: true
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };


    case ActionType.GENRE_CHANGE:
      return {
        ...state,
        activeGenre: action.payload,
        currentFilms: action.payload === `All genres` ? state.films : state.films.filter(film => film.genre === action.payload)
      };

    case ActionType.TAB_CHANGE:
      return {
        ...state,
        activeTab: action.payload
      };

    case ActionType.GET_CARD_ID:
      return {
        ...state,
        activeCard: action.payload
      };

    case ActionType.ADD_FAVORITE_FILM:
      return {
        ...state,
        myFilms: [...state.myFilms, action.payload]
      };

    case ActionType.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };

    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload
      };
  }

  return state;
};

export {appData};

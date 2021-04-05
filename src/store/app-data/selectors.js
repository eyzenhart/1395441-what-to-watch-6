import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getCurrentFilms = (state) => state[NameSpace.DATA].currentFilms;
export const getGenres = (state) => state[NameSpace.DATA].genreList;
export const getActiveGenre = (state) => state[NameSpace.DATA].activeGenre;
export const getLoadedFilmListStatus = (state) => state[NameSpace.DATA].isFilmListLoaded;
export const getActiveTab = (state) => state[NameSpace.DATA].activeTab;
export const getActiveCard = (state) => state[NameSpace.DATA].activeCard;
export const getFavouriteFilms = (state) => state[NameSpace.DATA].myFilms;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;

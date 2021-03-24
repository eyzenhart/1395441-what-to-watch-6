import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getGenres = (state) => state[NameSpace.DATA].genreList;
export const getActiveGenre = (state) => state[NameSpace.DATA].activeGenre;

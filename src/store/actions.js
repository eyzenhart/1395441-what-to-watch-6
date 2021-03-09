export const ActionType = {
  GENRE_CHANGE: `genre-change`,
  CREATE_GENRE_LIST: `create-genre-list`,
};

export const ActionCreator = {

  changeGenre: (activeGenre) => ({
    type: ActionType.GENRE_CHANGE,
    payload: activeGenre
  }),

  createGenreList: (films) => {

    const filmsGenre = films.map(function(film) {
      return film.genre;
    });

    filmsGenre.unshift(`All genres`);

    const uniqueGenre = Array.from(new Set(filmsGenre));

    return {
      type: ActionType.CREATE_GENRE_LIST,
      payload: uniqueGenre
    };

  }

};

import React from 'react';
import Card from '../card/card';

const SimilarFilms = ({films, genre}) => {

  return (
    <div className="catalog__movies-list">

      {films.map((film) => film.genre == genre ? <Card {...film}/> : null).slice(0, 5)}

    </div>
  )
};

export default SimilarFilms;

import React from 'react';
import propTypes from 'prop-types';

const MoviePageOverview = ({film}) => {

  const getRating = () => {
    switch (true) {
      case film.rating < 3:
        return `Bad`;
      case film.rating >= 3 && film.rating < 5:
        return `Normal`;
      case film.rating >= 5 && film.rating < 8:
        return `Good`;
      case film.rating >= 8 && film.rating < 10:
        return `Very good`;
      case film.rating === 10:
        return `Awesome`;
    }
    return `Normal`
  };

  return (<React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRating(film)}</span>
        <span className="movie-rating__count">{film.scoresCount}</span>
      </p>
    </div>

    <div className="movie-card__text">
      {film.description}
      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {film.starring.map((person) => person + `, `)} and other</strong></p>
    </div>
  </React.Fragment>
  );
};

MoviePageOverview.propTypes = {
  film: propTypes.shape({
    director: propTypes.string,
    starring: propTypes.arrayOf(propTypes.string),
    rating: propTypes.number,
    scores_count: propTypes.number,
    description: propTypes.string
  })
};

export default MoviePageOverview;



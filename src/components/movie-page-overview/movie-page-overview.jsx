import React from 'react';

const MoviePageOverview = ({film}) => {

  console.log(film.starring)


  return (<React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{film.scores_count}</span>
        </p>
      </div>

      <div className="movie-card__text">
        {film.description}
        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.map((person) => person + ' ')} and other</strong></p>
      </div>
    </React.Fragment>
  )
};

export default MoviePageOverview;

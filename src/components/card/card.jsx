import React from 'react';
import propTipes from 'prop-types';

const Card = (props) => {

  const {title = 'Fantastic Beasts: The Crimes of Grindelwald'} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">{title}</a>
            </h3>
    </article>
  );
};

Card.propTipes = {
  title: propTipes.string
}

export default Card;

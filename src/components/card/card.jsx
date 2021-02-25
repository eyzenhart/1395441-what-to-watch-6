import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Card = (props) => {

  const {onMouseOver, ...films} = props;

  return (

    <article onMouseOver = {() => onMouseOver(films.id)} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={films.src} alt={films.alt} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/:id?">
          {films.title}
        </Link>
      </h3>
    </article>
  );
};

Card.propTypes = {
  films: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        src: propTypes.string,
        alt: propTypes.string,
        video: propTypes.string
      })
  ),
  onMouseOver: propTypes.func
};

export default Card;

import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PreviewPlayer from '../preview-player/preview-player';
import movieInfoProps from '../../props/movie-info.props';

const Card = (props) => {

  const {onMouseOver, ...films} = props;

  return (

    <article onMouseOver = {() => onMouseOver(films.id)} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {/* <img src={films.src} alt={films.alt} width="280" height="175" /> */}
        <PreviewPlayer defaultIsPlaying = {false} src = {films.video}/>
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
  films: movieInfoProps,
  onMouseOver: propTypes.func
};

export default Card;

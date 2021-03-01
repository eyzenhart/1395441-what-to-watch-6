import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PreviewPlayer from '../preview-player/preview-player';
import movieInfoProps from '../../props/movie-info.props';
import React, {useState, useRef} from 'react';

const Card = (props) => {

  const [isHovered, setIsHovered] = useState(false);
  const [timeouts, setTimeouts] = useState([]);

  const handleMouseOver = (evt) => {
    const timeout = setTimeout(() => {
      setIsHovered(true);
    }, 1000);
    setTimeouts([...timeouts, timeout]);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    timeouts.forEach(clearTimeout);
  };


  const {onMouseOver, ...films} = props;

  return (
    <article onMouseOver = {handleMouseOver} onMouseLeave = {handleMouseLeave} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        { isHovered ?
          <PreviewPlayer src = {films.video}/> :
          <img src = {films.src} alt = {films.alt} width="280" height="175" />
        }
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

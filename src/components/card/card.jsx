import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PreviewPlayer from '../preview-player/preview-player';
import movieInfoProps from '../../props/movie-info.props';
import React, {useState} from 'react';

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



  const {onMouseOver, onClick, ...film} = props;

  return (
    <article onMouseOver = {handleMouseOver} onMouseLeave = {handleMouseLeave} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        { isHovered ?
          <PreviewPlayer src = {film.preview_video_link} image = {film.preview_image}/> :
          <img src = {film.preview_image} alt = {film.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-movie-card__title">
        <Link  className="small-movie-card__link" to={`/films/` + (film.id) + `?`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
};



Card.propTypes = {
  films: movieInfoProps,
  onMouseOver: propTypes.func
};

export default React.memo(Card);

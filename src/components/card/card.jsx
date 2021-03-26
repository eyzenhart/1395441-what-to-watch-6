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



  const {onMouseOver, onClick, ...films} = props;

  return (
    <article onMouseOver = {handleMouseOver} onMouseLeave = {handleMouseLeave} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        { isHovered ?
          <PreviewPlayer src = {films.preview_video_link} image = {films.preview_image}/> :
          <img src = {films.preview_image} alt = {films.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-movie-card__title">
        <Link onClick = {() => onClick(films.id)} className="small-movie-card__link" to={`/films/` + (films.id) + `?`}>
          {films.name}
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

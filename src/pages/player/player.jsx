import React from 'react';
import {Link, useParams} from 'react-router-dom';
import propTypes from 'prop-types';

const Player = ({films}) => {

  const {id} = useParams();
  const film = films.find((film) => film.id === id);

  return (
    <div className="player">
      <video src={film.video} className="player__video" poster="img/player-poster.jpg"></video>

      <Link type="button" className="player__exit" to = "/">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: 30 + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.title}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  films: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        src: propTypes.string,
        alt: propTypes.string,
        video: propTypes.string
      })
  )
};

export default Player;
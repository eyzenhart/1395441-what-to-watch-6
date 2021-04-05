import React, {useRef} from 'react';
import { connect } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import movieInfoProps from '../../props/movie-info.props';
import { getCurrentFilms, getFilms } from '../../store/app-data/selectors';

const Player = ({films}) => {

  const {id} = useParams();

  const videoRef = useRef();

  console.log(videoRef)

  const film = films.find((film) => film.id == id);

  const handleVideoPlay = () => {
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
  }

  const handleVideoFullScreen = () => {
    videoRef.current.requestFullscreen()
  }

  return (
    <div className="player">
      <video ref = {videoRef} autoPlay className="player__video" poster={film.poster_image}> <source type="video/mp4" src={film.video_link}/> </video>

      <Link type="button" className="player__exit" to = {`/films/` + (film.id) + `?`}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: 30 + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{}</div>
        </div>

        <div className="player__controls-row">
          <button onClick = {handleVideoPlay} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button onClick = {handleVideoFullScreen} type="button" className="player__full-screen">
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
  films: movieInfoProps
};

const mapStateToProps = (state) => ({
  films: getFilms(state)
})

export {Player};
export default connect(mapStateToProps, null)(Player);

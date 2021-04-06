import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import movieInfoProps from '../../props/movie-info.props';
import {getFilms} from '../../store/app-data/selectors';

const Player = ({films}) => {

  const [time, setCurrentTime] = useState();
  const [duration, setDuration] = useState();

  const {id} = useParams();

  const videoRef = useRef();

  const film = films.find((film) => film.id == id);

  const handleVideoPlay = () => {
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
  };

  const handleVideoFullScreen = () => {
    videoRef.current.requestFullscreen();
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const {currentTime} = video;
    setCurrentTime(currentTime)
  };

  const handleDurationChange = () => {
    const video = videoRef.current;
    setDuration(video.duration)
  };

  const getTime = (duration, time) => {
    const fullTime = duration - time;
    const hours = Math.floor(fullTime / 60 / 60);
    return hours + `:` + (Math.floor(fullTime / 60) - (hours * 60)) + `:` + Math.floor(fullTime % 60);
  }

  return (
    <div className="player">
      <video onTimeUpdate = {handleTimeUpdate} onDurationChange = {handleDurationChange} ref = {videoRef} autoPlay className="player__video" poster={film.poster_image}> <source type="video/mp4" src={film.video_link}/> </video>

      <Link type="button" className="player__exit" to = {`/films/` + (film.id) + `?`}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={time} max={duration}></progress>
            <div className="player__toggler" style={{left: (time * 100 / duration) + '%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{getTime(duration, time)}</div>
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
});

export {Player};
export default connect(mapStateToProps, null)(Player);

import React, {useState, createRef, useEffect} from 'react';
import propTypes from 'prop-types';

const PreviewPlayer = ({defaultIsPlaying, src}) => {

  const {isPlaying, setIsPlaying} = useState(defaultIsPlaying);

  const videoRef = createRef(src);

  useEffect(() => {

    videoRef.current.onplay = () => setIsPlaying(true);
    videoRef.current.onpause = () => setIsPlaying(false);

    return () => {
      videoRef.current.pause();
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };

  }, [src]);


  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);


  return (
    <video ref={videoRef} onMouseOver = {() => {setIsPlaying(isPlaying)}} src={src} className="player__video" poster="img/player-poster.jpg"></video>
  );
};

PreviewPlayer.propTypes = {
  defaultIsPlaying: propTypes.bool,
  src: propTypes.string
};

export default PreviewPlayer;

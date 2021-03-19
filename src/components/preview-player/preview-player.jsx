import React from 'react';
import propTypes from 'prop-types';

const PreviewPlayer = ({src, image}) => {

  return (
    <video autoPlay className="player__video" poster={image} muted> <source src={src}/> </video>
  );
};

PreviewPlayer.propTypes = {
  defaultIsPlaying: propTypes.bool,
  src: propTypes.string
};

export default PreviewPlayer;

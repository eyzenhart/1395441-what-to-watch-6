import React, {useState, createRef, useEffect} from 'react';
import propTypes from 'prop-types';

const PreviewPlayer = ({src}) => {

  return (
    <video autoPlay className="player__video" poster="img/player-poster.jpg" muted> <source src={src}/> </video>
  );
};

PreviewPlayer.propTypes = {
  defaultIsPlaying: propTypes.bool,
  src: propTypes.string
};

export default PreviewPlayer;

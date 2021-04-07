import React from 'react';
import propTypes from 'prop-types';

const PreviewPlayer = ({src, image}) => {

  return (
    <video autoPlay className="player__video" poster={image} muted> <source src={src}/> </video>
  );
};

PreviewPlayer.propTypes = {
  src: propTypes.string,
  image: propTypes.string
};

export default PreviewPlayer;

import React from 'react';
import propTypes from 'prop-types';

const ShowMoreButton = ({onClick}) => {

  return (
    <div className="catalog__more">
      <button onClick = {onClick} className="catalog__button" type="button">Show more</button>
    </div>
  )
};

ShowMoreButton.propTypes = {
  onClick: propTypes.func
}

export default ShowMoreButton;

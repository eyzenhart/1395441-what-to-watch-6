import React from 'react';

const ShowMoreButton = ({onClick}) => {

  return (
    <div className="catalog__more">
      <button onClick = {onClick} className="catalog__button" type="button">Show more</button>
    </div>
  )
};

export default ShowMoreButton;

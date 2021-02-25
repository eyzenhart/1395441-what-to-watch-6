import React, {useState} from 'react';
import Card from '../card/card';
import propTypes from 'prop-types';

const FilmList = ({films}) => {

  const [activeCard, setActiveCard] = useState();

  const handleMouseOver = (id) => {
    setActiveCard(id);
  };

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <Card key = {film.id} {...film} onMouseOver = {handleMouseOver} />)}
    </div>
  );
};

FilmList.propTypes = {
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

export default FilmList;

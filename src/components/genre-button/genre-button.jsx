import React from 'react';
import {connect} from 'react-redux';
import propTypes, {arrayOf} from 'prop-types';


const GenreButton = (props) => {

  const {genre, activeGenre, onClick} = props;


  return (
    <li className={`catalog__genres-item` + (genre === activeGenre ? ` catalog__genres-item--active` : ``)}>
      <a onClick={() => onClick(genre)} href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
};

GenreButton.propTypes = {
  genre: propTypes.string,
  activeGenre: propTypes.string,
  onClick: propTypes.func
}

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre
});

export {GenreButton};
export default connect(mapStateToProps, null)(GenreButton);
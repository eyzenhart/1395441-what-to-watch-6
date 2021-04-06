import React, {useState} from 'react';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import propTypes from 'prop-types';

const Tabs = ({film}) => {

  const [activeTab, setActiveTab] = useState(`Overview`);

  const handleClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.dataset.name);
  };

  const getTabInfo = () => {
    switch(activeTab) {
      case `Overview`:
        return <MoviePageOverview film={film}/>;
      case `Details`:
        return <MoviePageDetails film={film}/>;
      case `Reviews`:
        return <MoviePageReviews film={film}/>;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item` + (activeTab === `Overview` ? ` movie-nav__item--active` : ``)}>
            <a onClick={handleClick} href="#" className="movie-nav__link" data-name="Overview">Overview</a></li>
          <li className={`movie-nav__item` + (activeTab === `Details` ? ` movie-nav__item--active` : ``)}>
            <a onClick={handleClick} href="#" className="movie-nav__link" data-name="Details">Details</a>
          </li>
          <li className={`movie-nav__item` + (activeTab === `Reviews` ? ` movie-nav__item--active` : ``)}>
            <a onClick={handleClick} href="#" className="movie-nav__link" data-name="Reviews">Reviews</a>
          </li>
        </ul>
      </nav>
      {getTabInfo(activeTab)}
    </div>
  );
};

Tabs.propTypes = {
  film: propTypes.shape({})
};

export default Tabs;

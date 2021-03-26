import React, { useState } from 'react';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';

const Tabs = (props) => {

  const {films} = props;

  const [activeTab, setActiveTab] = useState('Overview');

  const handleClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.dataset.name)
  };

  // const getChosenTab = (evt, activeTab) => {
  //   switch(activeTab) {
  //     case `Overview`:
  //       return " movie-nav__item--active"
  //     case `Details`:
  //       return " movie-nav__item--active"
  //     case `Reviews`:
  //       return " movie-nav__item--active"
  //   // if (activeTab === evt.target.dataset.name) {
  //   //   return " movie-nav__item--active"
  //   // }
  // }


  const getTabInfo = (activeTab) => {
    switch(activeTab) {
      case `Overview`:
        return <MoviePageOverview films={films}/>
      case `Details`:
        return <MoviePageDetails films={films}/>
      case `Reviews`:
        return <MoviePageReviews films={films}/>
    }
  };


  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={"movie-nav__item" + (activeTab === "Overview" ? " movie-nav__item--active" : "")}>
            <a onClick={handleClick} href="#" className="movie-nav__link" data-name="Overview">Overview</a></li>
          <li className={"movie-nav__item" + (activeTab === "Details" ? " movie-nav__item--active" : "")}>
            <a onClick={handleClick} href="#" className="movie-nav__link" data-name="Details">Details</a>
          </li>
          <li className={"movie-nav__item" + (activeTab === "Reviews" ? " movie-nav__item--active" : "")}>
            <a onClick={handleClick} href="#" className="movie-nav__link" data-name="Reviews">Reviews</a>
          </li>
        </ul>
      </nav>
      {getTabInfo(activeTab)}
    </div>
  )
};

export default Tabs;

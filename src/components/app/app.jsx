import React from 'react';
import MainPage from '../main-page/main-page';
import propTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
// import Film from '../film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../not-found/not-found';
import MoviePage from '../movie-page/movie-page';

const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact>
          <MainPage {...props}/>
        </Route>
        <Route path = '/player/:id?' exact>
          <Player {...props}/>
        </Route>
        <Route path = '/login' exact component = {SignIn}/>
        <Route path = '/mylist' exact>
          <MyList {...props}/>
        </Route>
        <Route path = '/films/:id?' exact>
          <MoviePage {...props}/>
        </Route>
        <Route path = '/films/:id/review' exact component = {AddReview}/>
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  films: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        src: propTypes.string,
        alt: propTypes.string,
        video: propTypes.string
      })
  ),
  promo: propTypes.arrayOf(
      propTypes.shape({
        promoTitle: propTypes.string,
        promoGenre: propTypes.string,
        promoYear: propTypes.string
      })
  )};

export default App;

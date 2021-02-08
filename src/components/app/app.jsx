import React from 'react';
import MainPage from '../main-page/main-page';
import propTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
// import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import MoviePage from '../movie-page/movie-page';

const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact>
          <MainPage {...props}/>
        </Route>
        <Route path = '/login' exact component = {SignIn}/>
        <Route path = '/mylist' exact component = {MyList}/>
        <Route path = '/films/:id?' exact>
          <MoviePage {...props}/>
        </Route>
        <Route path = '/films/:id/review' exact component = {AddReview}/>
        <Route path = '/player/:id?' exact>
          <Player/>
        </Route>
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  titles: propTypes.arrayOf(propTypes.string),
  promo: propTypes.arrayOf(
      propTypes.shape({
        promoTitle: propTypes.string,
        promoGenre: propTypes.string,
        promoYear: propTypes.string
      })
  )};

export default App;

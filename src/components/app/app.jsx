import React from 'react';
import MainPage from '../main-page/main-page';
import propTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../not-found/not-found';
import MoviePage from '../movie-page/movie-page';
import movieInfoProps from '../../props/movie-info.props';
import { PrivateRoute } from '../private-route/private-route';

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
        <PrivateRoute path = '/mylist' exact render = {() => <MyList {...props}/>}>
        </PrivateRoute>
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
  films: movieInfoProps,
  promo: propTypes.arrayOf(
      propTypes.shape({
        promoTitle: propTypes.string,
        promoGenre: propTypes.string,
        promoYear: propTypes.string
      })
  )};

export default App;

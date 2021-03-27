import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './store/api'
import {authCheck, fetchFilmsList} from './store/api-actions';
import {AUTH_STATUS} from './store/api-actions';
import {redirect} from './store/redirect';
import {rootReducer} from './store/root-reducer';
import {requiredAuthorization} from './store/actions'

const promoData = [
  {promoTitle: `The Grand Budapest Hotel`, promoGenre: `Drama`, promoYear: `2014`}
];

const api = createAPI(
  () => store.dispatch(requiredAuthorization(AUTH_STATUS.NO_AUTH))
);


const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api)),
      applyMiddleware(redirect)
    )
);

store.dispatch(authCheck());
store.dispatch(fetchFilmsList());


ReactDOM.render(
    <Provider store = {store}>
      <App
        promo = {promoData}
      />
    </Provider>,
    document.querySelector(`#root`)
);

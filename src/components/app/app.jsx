import React from 'react';
import MainPage from '../main-page/main-page';

const App = (props) => {

  const {titles, promo} = props;

  return (<React.Fragment>
    <MainPage
    titles = {titles}
    promo = {promo}
    />
    </React.Fragment>
  );
};

export default App;

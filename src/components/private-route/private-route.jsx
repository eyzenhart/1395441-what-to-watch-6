import React from 'react';
import {Redirect, Route} from 'react-router';
import {AUTH_STATUS} from '../../api-actions';
import {connect} from 'react-redux';


const PrivateRoute = (props) => {


  const {render, exact, path, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render = {(routeProps) => {
        authorizationStatus === AUTH_STATUS.AUTH ? render(routeProps) : <Redirect to={`/login`}/>
      }}
    >

    </Route>
  )
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);


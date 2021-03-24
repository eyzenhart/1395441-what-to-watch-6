import React from 'react';
import {Redirect, Route} from 'react-router';
import {AUTH_STATUS} from '../../store/api-actions';
import {connect} from 'react-redux';
import {getAuthStatus} from '../../store/user/selectors';


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
  authorizationStatus: getAuthStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);


import React from 'react';
import {Redirect, Route} from 'react-router';
import {AUTH_STATUS} from '../../store/api-actions';
import {connect} from 'react-redux';
import {getAuthStatus} from '../../store/user/selectors';
import propTypes from 'prop-types';


const PrivateRoute = (props) => {


  const {render, exact, path, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render = {(routeProps) => {
        return authorizationStatus === AUTH_STATUS.AUTH ? render(routeProps) : <Redirect to={`/login`}/>;
      }}
    >

    </Route>
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: propTypes.string,
  render: propTypes.object,
  path: propTypes.string,
  exact: propTypes.bool
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);


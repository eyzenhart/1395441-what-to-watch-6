import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AUTH_STATUS} from '../../store/api-actions';


const PageHeader = (props) => {

  const {authorizationStatus} = props;
  console.log(authorizationStatus)

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
          <Link to='/' className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <Link to={authorizationStatus === AUTH_STATUS.AUTH ? `/mylist` : `/login`} className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </Link>
    </header>
  )
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

export {PageHeader};
export default connect(mapStateToProps, null)(PageHeader);

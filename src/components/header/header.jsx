import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AUTH_STATUS} from '../../store/api-actions';
import {getAuthStatus, getUser} from '../../store/user/selectors';
import propTypes from 'prop-types';


const PageHeader = ({authorizationStatus, userData}) => {

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to='/' className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <Link to={authorizationStatus === AUTH_STATUS.AUTH ? `/mylist` : `/login`} className="user-block">
        <div className="user-block__avatar">
          <img src={authorizationStatus === AUTH_STATUS.AUTH ? userData.avatar_url : `img/avatar.jpg`} alt="User avatar" width="63" height="63" />
        </div>
      </Link>
    </header>
  );
};

PageHeader.propTypes = {
  authorizationStatus: propTypes.string,
  userData: propTypes.shape({
    avatar_url: propTypes.string
  })
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
  userData: getUser(state)
});

export {PageHeader};
export default connect(mapStateToProps, null)(PageHeader);

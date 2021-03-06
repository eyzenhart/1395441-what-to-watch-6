import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {login} from '../../store/api-actions';
import Footer from '../../components/footer/footer';
import {PageHeader} from '../../components/header/header';
import propTypes from 'prop-types';

const SignIn = ({onSubmit}) => {


  const loginRef = useRef();
  const passRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passRef.current.value
    });
  };

  return (
    <div className="user-page">

      <PageHeader/>


      <div className="sign-in user-page__content">
        <form method = "POST" onSubmit={handleSubmit} action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref = {loginRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref = {passRef} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: propTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export default connect(null, mapDispatchToProps)(SignIn);



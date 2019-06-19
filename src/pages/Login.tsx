import React from 'react';
import styled from 'styled-components';
import qs from 'query-string';
import { Redirect, withRouter, RouteComponentProps } from 'react-router';

import { setJWT } from '../utils/jwt';
import Loader from '../components/Loader';
import Logo from '../components/Logo';
import * as colors from '../utils/colors';

const Styled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colors.WHITE()};
  animation-duration: 1s;
  animation-name: fadein;
  overflow: hidden;
  background: url('/images/papyrus.png');
  .container {
    margin: auto;
    margin-top: 10%;
    width: 25rem;
    text-align: center;
  }
  .container p {
    margin: 2rem 0;
  }
  .container img {
    width: 10rem;
  }
  .container svg {
    width: 200px;
    height: 80px;
    margin-top: 2rem;
  }
`;

const LoginPage: React.FC<RouteComponentProps> = props => {
  // Use React Routers' location function to get the query parameters in the URL.
  // Then check if we have a JWT included as a query parameter.
  const { location, history } = props;
  const { jwt } = qs.parse(location.search);

  // If we have a JWT, save it to local storage so that we can include it in all
  // requests to our API from here on.
  if (jwt && typeof jwt === 'string') {
    setJWT(jwt);
    history.push('/');
  }

  const loading = false;
  const authorized = false;

  if (loading) {
    return <Loader />;
  }
  return authorized ? (
    <Redirect to="/" />
  ) : (
    <Styled>
      <div className="container">
        <Logo />
        <p>
          Sign with your Google account to submit bugs or feature requests to
          the Midtype team.
        </p>
        <a href={process.env.REACT_APP_MY_APP_GOOGLE_SIGN_IN_LINK}>
          <img
            alt="Sign into Midtype with Google."
            src="/images/google-sign-in.png"
          />
        </a>
      </div>
    </Styled>
  );
};

export default withRouter(LoginPage);

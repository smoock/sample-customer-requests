import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import UserProfile from './UserProfile';

const Main = styled.main`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 3rem;
  max-width: 80rem;
  margin: auto;
  margin-top: 50px;
  padding: 3rem;
`;

/**
 * There are some routes in our app that we only want logged in users to be able to
 * access. For those routes, we wrap them in a GraphQL query that checks if the user
 * is currently logged in. If not, we redirect them to the login page. To learn
 * more about the Apollo `<Query />` component, [see their documentation](https://www.apollographql.com/docs/react/essentials/queries/#the-query-component)
 */
const AppContainer: React.FC = props => (
  <>
    <Nav />
    <Main>
      <UserProfile />
      {props.children}
    </Main>
  </>
);

export default AppContainer;

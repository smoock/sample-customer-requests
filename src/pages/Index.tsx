import React from 'react';
import styled from 'styled-components';

import UserProfile from '../components/UserProfile';

const Styled = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  max-width: 80rem;
  margin: auto;
`;

const IndexPage: React.FC = () => {
  return (
    <Styled>
      <UserProfile />
    </Styled>
  );
};

export default IndexPage;

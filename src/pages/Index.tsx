import React from 'react';
import styled from 'styled-components';

import UserProfile from '../components/UserProfile';
import IssueList from '../components/IssueList';

const Styled = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 3rem;
  max-width: 80rem;
  margin: auto;
`;

const IndexPage: React.FC = () => {
  return (
    <Styled>
      <UserProfile />
      <IssueList />
    </Styled>
  );
};

export default IndexPage;

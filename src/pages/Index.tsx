import React from 'react';

import IssueList from '../components/IssueList';
import UserProfile from '../components/UserProfile';

const IndexPage: React.FC = () => {
  return (
    <>
      <UserProfile />
      <IssueList />
    </>
  );
};

export default IndexPage;

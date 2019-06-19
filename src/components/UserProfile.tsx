import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import styled from 'styled-components';

import * as colors from '../utils/colors';
import * as styles from '../utils/styles';
import GET_CURRENT_USER, { ICurrentUser } from '../apollo/queries/currentUser';
import Loader from '../components/Loader';

const Styled = styled.div`
  background: ${colors.WHITE()};
  border-radius: ${styles.BORDER_RADIUS};
  box-shadow: ${styles.BOX_SHADOW};
  padding: 1rem;

  .user {
    display: flex;
    align-items: center;
  }

  .user__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: cover;
    background-position: center center;
    margin-right: 1rem;
  }
`;

const UserMetaInfo: React.FC<ICurrentUser> = props => {
  const { currentUser: user } = props;
  return (
    <div className="user">
      <div
        className="user__avatar"
        style={{ backgroundImage: `url('${user.photoUrl}')` }}
      />
      <h4>{user.name}</h4>
    </div>
  );
};

const UserProfile: React.FC = () => (
  <Styled>
    <Query query={GET_CURRENT_USER}>
      {(query: QueryResult<ICurrentUser>) => {
        if (query.loading) {
          return <Loader />;
        }
        if (query.data) {
          return (
            <>
              <UserMetaInfo currentUser={query.data.currentUser} />
            </>
          );
        }
        return `Error!`;
      }}
    </Query>
  </Styled>
);

export default UserProfile;

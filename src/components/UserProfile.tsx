import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import styled from 'styled-components';

import AddIssue from './AddIssue';
import GET_CURRENT_USER, {
  ICurrentUser,
  IUser
} from '../apollo/queries/currentUser';
import GET_ISSUES, { IIssues } from '../apollo/queries/getIssues';
import Loader from '../components/Loader';

const Styled = styled.div`
  height: fit-content;

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .user__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: cover;
    background-position: center center;
    margin-right: 1rem;
  }
  .user__info p {
    margin: 0;
  }
`;

const UserMetaInfo: React.FC<IUser & { issues: number }> = props => {
  return (
    <div className="user">
      <div
        className="user__avatar"
        style={{ backgroundImage: `url('${props.photoUrl}')` }}
      />
      <div className="user__info">
        <h4>{props.name}</h4>
        <a>{props.issues ? props.issues : 'No'} issues reported</a>
      </div>
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
          const { currentUser } = query.data;
          return (
            <Query query={GET_ISSUES} variables={{ userId: currentUser.id }}>
              {(issues: QueryResult<IIssues>) => {
                if (issues.loading) {
                  return <Loader />;
                }
                if (issues.data) {
                  const count = issues.data.issues.nodes.length;
                  return (
                    <>
                      <UserMetaInfo {...currentUser} issues={count} />
                      <AddIssue />
                    </>
                  );
                }
                return `Error!`;
              }}
            </Query>
          );
        }
        return `Error!`;
      }}
    </Query>
  </Styled>
);

export default UserProfile;

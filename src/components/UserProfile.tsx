import React from 'react';
import { Link } from 'react-router-dom';
import { Query, QueryResult } from 'react-apollo';
import styled from 'styled-components';

import AddIssue from './AddIssue';
import GET_CURRENT_USER, { ICurrentUser } from '../apollo/queries/currentUser';
import { IUser } from '../apollo/queries/userFragment';
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
  .user__empty {
    padding: 2rem;
    border: 1px dashed gray;
  }
`;

const UserMetaInfo: React.FC<IUser & { issues: number }> = props => {
  return (
    <div className="user">
      <div
        className="user__avatar"
        style={{ backgroundImage: `url('${props.private.photoUrl}')` }}
      />
      <div className="user__info">
        <h3>{props.private.name}</h3>
        <a href="/">{props.issues ? props.issues : 'No'} issues reported</a>
      </div>
    </div>
  );
};

const UserProfile: React.FC = () => (
  <Styled>
    <Query query={GET_CURRENT_USER}>
      {(query: QueryResult<ICurrentUser>) => {
        // Return loader if still loading.
        if (query.loading) {
          return <Loader />;
        }
        // If data is available and the user is logged in, show their profile.
        else if (query.data && query.data.mUserInSession) {
          const { mUserInSession: user } = query.data;
          return (
            <Query query={GET_ISSUES} variables={{ userId: user.id }}>
              {(issues: QueryResult<IIssues>) => {
                if (issues.loading) {
                  return <Loader />;
                }
                if (issues.data) {
                  const count = issues.data.issues.nodes.length;
                  return (
                    <>
                      <UserMetaInfo {...user} issues={count} />
                      <AddIssue userId={user.id} />
                    </>
                  );
                }
                return null;
              }}
            </Query>
          );
        }
        // If data is available, but there's no `currentUser`, that means they're no logged in
        return (
          <div className="user__empty">
            <h4>
              <Link to="/login">Sign in</Link> to submit a bug or feature
              request of your own.
            </h4>
          </div>
        );
      }}
    </Query>
  </Styled>
);

export default UserProfile;

import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router';

import Loader from '../components/Loader';
import IssueComments from '../components/IssueComments';
import UserProfile from '../components/UserProfile';
import { IssueMeta } from '../components/IssueListItem';
import GET_ISSUE, { IIssueQuery } from '../apollo/queries/getIssue';

const Styled = styled.div`
  .issue__user__avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-size: cover;
    background-position: center center;
    margin-right: 0.5rem;
  }
  .issue__meta {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: gray;
  }
`;

interface IPathParams {
  id: string;
}

const LoginPage: React.FC<RouteComponentProps<IPathParams>> = props => {
  // Get the ID of this issue from the url parameter.
  const { id } = props.match.params;

  return (
    <>
      <UserProfile />
      <Styled>
        <Query query={GET_ISSUE} variables={{ id }}>
          {(query: QueryResult<IIssueQuery>) => {
            const { loading, data } = query;
            if (loading) {
              return <Loader />;
            }
            if (data) {
              const { issue } = data;
              return (
                <Styled>
                  <h1>{issue.summary}</h1>
                  <h2>{issue.status}</h2>
                  <IssueMeta {...issue} style={{ margin: '1rem 0 2rem 0' }} />
                  <p>{issue.body}</p>
                  <IssueComments {...issue} />
                </Styled>
              );
            }
            return null;
          }}
        </Query>
      </Styled>
    </>
  );
};

export default withRouter(LoginPage);

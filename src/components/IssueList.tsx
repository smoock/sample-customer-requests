import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import styled from 'styled-components';
import dateFormat from 'dateformat';

import * as colors from '../utils/colors';
import { IIssues, IIssue } from '../apollo/queries/getIssues';
import GET_ALL_ISSUES from '../apollo/queries/getAllIssues';
import Loader from '../components/Loader';

const StyledIssue = styled.div`
  margin-bottom: 2.5rem;
  p {
    margin-bottom: 0.8rem;
  }
  .user__avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-size: cover;
    background-position: center center;
    margin-right: 0.5rem;
  }
  .issue-meta {
    display: flex;
    font-size: 0.8rem;
    color: ${colors.GRAY_3()};
  }
`;

const Issue: React.FC<IIssue> = props => (
  <StyledIssue>
    <h5>{props.summary}</h5>
    <p>{props.body}</p>
    <div className="issue-meta">
      {props.reporter && (
        <div
          className="user__avatar"
          style={{ backgroundImage: `url('${props.reporter.photoUrl}')` }}
        />
      )}
      <>Reported </>
      {props.reporter && <>by {props.reporter.name} </>}
      <>on {dateFormat(props.createdAt, 'dddd, mmmm d, yyyy, h:MM TT')}</>
    </div>
  </StyledIssue>
);

const IssueList: React.FC = () => (
  <Query query={GET_ALL_ISSUES}>
    {(query: QueryResult<IIssues>) => {
      if (query.loading) {
        return <Loader />;
      }
      if (query.data) {
        const issues = query.data.issues.nodes;
        return (
          <div>
            {issues.map(issue => (
              <Issue key={issue.id} {...issue} />
            ))}
          </div>
        );
      }
      return `Error!`;
    }}
  </Query>
);

export default IssueList;

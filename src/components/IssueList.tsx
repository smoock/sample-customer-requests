import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import styled from 'styled-components';
import dateFormat from 'dateformat';

import * as colors from '../utils/colors';
import * as styles from '../utils/styles';
import { IIssues } from '../apollo/queries/getIssues';
import { IIssue } from '../apollo/queries/issueFragment';
import GET_ALL_ISSUES from '../apollo/queries/getAllIssues';
import Loader from '../components/Loader';

const StyledIssue = styled.div`
  margin-bottom: 2rem;
  background: ${colors.WHITE()};
  border-radius: ${styles.BORDER_RADIUS};
  box-shadow: ${styles.BOX_SHADOW};
  padding: 1rem;

  p {
    margin-bottom: 0.8rem;
  }
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
    font-size: 0.8rem;
    color: ${colors.GRAY_3()};
  }
  .issue__title h5 {
    display: flex;
  }
  .issue__title h5 div {
    margin-left: 0.5rem;
  }
`;

interface IPillProps {
  color: string;
}

const StyledPill = styled.div`
  font-size: 0.8rem;
  border: 1px solid ${(props: IPillProps) => props.color};
  color: ${(props: IPillProps) => props.color};
  border-radius: 15px;
  padding: 0.2rem 0.5rem;
`;

const Pill: React.FC<IPillProps> = props => (
  <StyledPill {...props}>{props.children}</StyledPill>
);

const Issue: React.FC<IIssue> = props => (
  <StyledIssue>
    <div className="issue__title">
      <h5>
        {props.summary}
        <Pill color={colors.PURPLE_LIGHT()}>{props.topic.name}</Pill>
      </h5>
    </div>

    <p>{props.body}</p>
    <div className="issue__meta">
      {props.reporter && (
        <div
          className="issue__user__avatar"
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
  <Query query={GET_ALL_ISSUES} fetchPolicy="cache-and-network">
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

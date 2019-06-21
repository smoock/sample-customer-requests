import { gql } from 'apollo-boost';
import ISSUE_FRAGMENT, { IIssue } from './issueFragment';

export default gql`
  query GetUserIssues($userId: UUID!) {
    issues(filter: { reporterId: { equalTo: $userId } }) {
      nodes {
        ...IssueFragment
      }
    }
  }
  ${ISSUE_FRAGMENT}
`;

export interface IIssues {
  issues: {
    nodes: IIssue[];
  };
}

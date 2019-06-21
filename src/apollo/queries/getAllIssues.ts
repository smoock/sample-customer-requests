import { gql } from 'apollo-boost';
import ISSUE_FRAGMENT from './issueFragment';

export default gql`
  query GetAllIssues {
    issues(orderBy: CREATED_AT_DESC) {
      nodes {
        ...IssueFragment
      }
    }
  }
  ${ISSUE_FRAGMENT}
`;

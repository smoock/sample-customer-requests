import { gql } from 'apollo-boost';
import ISSUE_FRAGMENT from './issueFragment';

export default gql`
  mutation CreateIssue(
    $userId: UUID!
    $type: String!
    $topicId: UUID!
    $summary: String!
    $body: String!
  ) {
    createIssue(
      input: {
        issue: {
          reporterId: $userId
          type: $type
          topicId: $topicId
          summary: $summary
          body: $body
        }
      }
    ) {
      query {
        issues(orderBy: CREATED_AT_DESC) {
          nodes {
            ...IssueFragment
          }
        }
      }
    }
  }
  ${ISSUE_FRAGMENT}
`;

export interface ICreateIssue {
  issue: {};
}

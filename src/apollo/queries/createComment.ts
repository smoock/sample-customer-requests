import { gql } from 'apollo-boost';
import ISSUE_FRAGMENT from './issueFragment';

export default gql`
  mutation CreateComment(
    $commenterId: UUID!
    $body: String!
    $issueId: UUID!
    $parentId: UUID
  ) {
    createComment(
      input: {
        comment: {
          commenterId: $commenterId
          body: $body
          issueId: $issueId
          parentId: $parentId
        }
      }
    ) {
      issue {
        ...IssueFragment
      }
    }
  }
  ${ISSUE_FRAGMENT}
`;

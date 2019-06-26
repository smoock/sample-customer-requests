import { gql } from 'apollo-boost';
import COMMENT_FRAGMENT, { IComment } from './commentFragment';

export default gql`
  query GetIssueComments($issueId: UUID!) {
    comments(filter: { issueId: { equalTo: $issueId } }) {
      nodes {
        ...CommentFragment
      }
    }
  }
  ${COMMENT_FRAGMENT}
`;

export interface ICommentsQuery {
  comments: {
    nodes: IComment[];
  };
}

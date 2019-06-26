import { gql } from 'apollo-boost';
import COMMENT_FRAGMENT, { IComment } from './commentFragment';

export default gql`
  query GetComment($id: UUID!) {
    comment(id: $id) {
      ...CommentFragment
    }
  }
  ${COMMENT_FRAGMENT}
`;

export interface ICommentQuery {
  comment: IComment;
}

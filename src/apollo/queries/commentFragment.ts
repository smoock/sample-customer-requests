import { gql } from 'apollo-boost';
import USER_FRAGMENT, { IUser } from './userFragment';

export default gql`
  fragment CommentFragment on Comment {
    id
    body
    createdAt
    updatedAt
    commenter {
      ...UserFragment
    }
    childComments {
      nodes {
        id
      }
    }
  }
  ${USER_FRAGMENT}
`;

export interface IComment {
  id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  commenter: IUser;
  childComments: {
    nodes: Array<{ id: string }>;
  };
}

import { gql } from 'apollo-boost';
import USER_FRAGMENT, { IUser } from './userFragment';

export default gql`
  fragment IssueFragment on Issue {
    id
    reporter {
      ...UserFragment
    }
    summary
    type
    body
    topic {
      name
    }
    comments(orderBy: CREATED_AT_DESC, filter: { parentId: { isNull: true } }) {
      nodes {
        id
      }
    }
    createdAt
  }
  ${USER_FRAGMENT}
`;

export interface IIssue {
  id: string;
  reporter: IUser;
  summary: string;
  type: string;
  body: string;
  topic: {
    name: string;
  };
  createdAt: string;
  comments: {
    nodes: Array<{ id: string }>;
  };
}

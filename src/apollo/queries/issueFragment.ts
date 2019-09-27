import { gql } from 'apollo-boost';

export default gql`
  fragment IssueFragment on Issue {
    id
    reporter {
      id
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
`;

export interface IIssue {
  id: string;
  reporter: { id: string };
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

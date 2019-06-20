import { gql } from 'apollo-boost';
import { IUser } from './currentUser';

export default gql`
  query GetUserIssues($userId: UUID!) {
    issues(filter: { reporterId: { equalTo: $userId } }) {
      nodes {
        id
        reporter {
          id
          name
          email
          photoUrl
        }
        summary
        type
        body
        topic {
          name
        }
        createdAt
      }
    }
  }
`;

export interface IIssue {
  id: string;
  reporter: IUser;
  summary: string;
  type: string;
  body: string;
  topic: string;
  createdAt: string;
}

export interface IIssues {
  issues: {
    nodes: IIssue[];
  };
}

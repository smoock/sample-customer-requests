import { gql } from 'apollo-boost';

export default gql`
  query GetIssueTopics {
    topics {
      nodes {
        name
        id
      }
    }
  }
`;

export interface ITopic {
  name: string;
  id: string;
}

export interface ITopics {
  topics: {
    nodes: ITopic[];
  };
}

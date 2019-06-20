import { gql } from 'apollo-boost';

export default gql`
  query GetAllIssues {
    issues {
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

import { gql } from 'apollo-boost';

export default gql`
  fragment UserFragment on MUser {
    id
    private {
      name
      email
      photoUrl
    }
  }
`;

export interface IUser {
  id: string;
  private: {
    name: string;
    email: string;
    photoUrl: string;
  };
}

import { gql } from 'apollo-boost';

export default gql`
  query GetCurrentUser {
    currentUser {
      id
      name
      email
      photoUrl
    }
  }
`;

export interface IUser {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
}

export interface ICurrentUser {
  currentUser: IUser;
}

import { gql } from 'apollo-boost';

export default gql`
  fragment UserFragment on User {
    id
    name
    email
    photoUrl
  }
`;

export interface IUser {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
}

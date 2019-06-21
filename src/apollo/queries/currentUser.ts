import { gql } from 'apollo-boost';
import USER_FRAGMENT, { IUser } from './userFragment';

export default gql`
  query GetCurrentUser {
    currentUser {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

export interface ICurrentUser {
  currentUser: IUser;
}

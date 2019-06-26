import { gql } from 'apollo-boost';
import ISSUE_FRAGMENT, { IIssue } from './issueFragment';

export default gql`
  query GetIssue($id: UUID!) {
    issue(id: $id) {
      ...IssueFragment
    }
  }
  ${ISSUE_FRAGMENT}
`;

export interface IIssueQuery {
  issue: IIssue;
}

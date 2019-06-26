import React from 'react';
import { Query, QueryResult } from 'react-apollo';

import { IIssues } from '../apollo/queries/getIssues';
import GET_ALL_ISSUES from '../apollo/queries/getAllIssues';
import Loader from './Loader';
import Issue from './IssueListItem';

const IssueList: React.FC = () => (
  <Query query={GET_ALL_ISSUES}>
    {(query: QueryResult<IIssues>) => {
      if (query.loading) {
        return <Loader />;
      }
      if (query.data) {
        const issues = query.data.issues.nodes;
        return (
          <div>
            {issues.map(issue => (
              <Issue key={issue.id} {...issue} />
            ))}
          </div>
        );
      }
      return null;
    }}
  </Query>
);

export default IssueList;

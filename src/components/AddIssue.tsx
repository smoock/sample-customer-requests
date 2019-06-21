import React, { useState } from 'react';
import { Query, QueryResult } from 'react-apollo';

import Button from './Button';
import Modal from './Modal';
import AddIssueForm from './AddIssueForm';
import Loader from './Loader';

import GET_TOPICS, { ITopics } from '../apollo/queries/getIssueTopics';

interface IProps {
  userId: string;
}

const AddIssue: React.FC<IProps> = props => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Query query={GET_TOPICS}>
      {(query: QueryResult<ITopics>) => {
        if (query.loading) {
          return <Loader />;
        }
        if (query.data) {
          return (
            <>
              <Modal
                height={600}
                open={modalOpen}
                onClickClose={() => setModalOpen(false)}
              >
                <AddIssueForm
                  userId={props.userId}
                  onClose={() => setModalOpen(false)}
                  topics={query.data.topics.nodes}
                />
              </Modal>
              <Button onClick={() => setModalOpen(true)}>Submit Issue</Button>
            </>
          );
        }
        return `Error!`;
      }}
    </Query>
  );
};

export default AddIssue;

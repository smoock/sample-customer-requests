import React, { useState } from 'react';

import Button from './Button';
import Modal from './Modal';
import AddIssueForm from './AddIssueForm';

const AddIssue: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
      <Modal open={modalOpen} onClickClose={() => setModalOpen(false)}>
        <AddIssueForm />
      </Modal>
      <Button onClick={() => setModalOpen(true)}>Submit Issue</Button>
    </>
  );
};

export default AddIssue;

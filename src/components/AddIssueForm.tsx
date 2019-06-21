import React, { useState } from 'react';
import styled from 'styled-components';

import * as colors from '../utils/colors';
import * as styles from '../utils/styles';
import Input from './Input';

const Styled = styled.div`
  padding: 1rem;

  .form-group {
    margin-bottom: 2rem;
    display: flex;
    flex-flow: column;
  }
  .form-group__label {
    margin-bottom: 0.5rem;
  }
  .form-group__select {
    background: ${colors.WHITE()};
    border: 1px solid ${colors.GRAY_2()};
    box-shadow: ${styles.BOX_SHADOW};
    border-radius: 5px;
    height: 3rem;
    padding: 1rem;
    transition: 250ms all;
    outline: none;
    width: 100%;
    &:focus {
      border: 1px solid ${colors.PURPLE_LIGHT()};
    }
  }
`;

const AddIssueForm: React.FC = () => {
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [type, setType] = useState('');
  return (
    <Styled>
      <div className="form-group">
        <label className="form-group__label">Issue Summary</label>
        <Input value={summary} onChange={setSummary} />
      </div>
      <div className="form-group">
        <label className="form-group__label">Details</label>
        <Input value={body} onChange={setBody} textarea={true} />
      </div>
      <div className="form-group">
        <label className="form-group__label">Issue Type</label>
        <select
          className="form-group__select"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="bug">Bug</option>
          <option value="request">Feature Request</option>
        </select>
      </div>
    </Styled>
  );
};

export default AddIssueForm;

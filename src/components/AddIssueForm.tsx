import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import * as colors from '../utils/colors';
import * as styles from '../utils/styles';
import Input from './Input';
import Button from './Button';

import CREATE_ISSUE from '../apollo/queries/createIssue';
import { ITopic } from '../apollo/queries/getIssueTopics';

interface IProps {
  userId: string;
  onClose: () => void;
  topics: ITopic[];
}

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
  .modal__footer {
    z-index: ${styles.ZINDEX_MASK_CONTENT + 1};
  }
`;

const AddIssueForm: React.FC<IProps> = props => {
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [type, setType] = useState('bug');
  const [topicId, setTopicId] = useState(props.topics[0].id);
  const SubmitButton = useMemo(
    () => (
      <Mutation
        mutation={CREATE_ISSUE}
        variables={{ userId: props.userId, type, topicId, summary, body }}
      >
        {(createIssue: any) => (
          <Button
            onClick={() => {
              createIssue();
              props.onClose();
            }}
          >
            Submit
          </Button>
        )}
      </Mutation>
    ),
    [props, body, type, topicId, summary]
  );
  return (
    <Styled>
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
      <div className="form-group">
        <label className="form-group__label">Issue Summary</label>
        <Input value={summary} onChange={setSummary} />
      </div>
      <div className="form-group">
        <label className="form-group__label">Details</label>
        <Input value={body} onChange={setBody} textarea={true} />
      </div>
      <div className="form-group">
        <label className="form-group__label">Topic</label>
        <select
          className="form-group__select"
          value={topicId}
          onChange={e => setTopicId(e.target.value)}
        >
          {props.topics.map(topic => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
      </div>
      <div className="modal__footer">{SubmitButton}</div>
    </Styled>
  );
};

export default AddIssueForm;

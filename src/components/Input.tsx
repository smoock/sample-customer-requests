import React from 'react';
import styled from 'styled-components';

import * as colors from '../utils/colors';
import * as styles from '../utils/styles';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
}

const StyledInput = styled.input`
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
`;

const StyledTextarea = styled.textarea`
  background: ${colors.WHITE()};
  border: 1px solid ${colors.GRAY_2()};
  box-shadow: ${styles.BOX_SHADOW};
  border-radius: 5px;
  height: 3rem;
  padding: 1rem;
  transition: 250ms all;
  outline: none;
  width: 100%;
  height: 100px;
  resize: none;
  &:focus {
    border: 1px solid ${colors.PURPLE_LIGHT()};
  }
`;

const Input: React.FC<IProps> = props => {
  return props.textarea ? (
    <StyledTextarea
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
  ) : (
    <StyledInput
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
  );
};

export default Input;

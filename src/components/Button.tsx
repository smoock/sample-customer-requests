import React from 'react';
import styled from 'styled-components';

import * as styles from '../utils/styles';

interface IProps {
  status?: string;
  secondary?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Styled = styled.button`
  border: 0;
  box-shadow: none;
  outline: none;
  background: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  transition: 250ms all;
  transform: translateZ(0);
  text-decoration: none;
  background-color: ${(props: IProps) => (props.secondary ? 'white' : 'black')};
  border: none;

  &:hover {
    box-shadow: ${styles.BOX_SHADOW};
    transform: translateY(-2px);
  }
  h4 {
    color: ${(props: IProps) => (props.secondary ? 'black' : 'white')};
  }
`;

const Button: React.FC<IProps> = props => (
  <Styled {...props} onClick={props.onClick} style={props.style}>
    <h4>{props.children}</h4>
  </Styled>
);

export default Button;

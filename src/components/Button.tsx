import React from 'react';
import styled from 'styled-components';

import * as colors from '../utils/colors';
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
  height: 3rem;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  transition: 250ms all;
  transform: translateZ(0);
  text-decoration: none;
  background-image: ${(props: IProps) => {
    if (props.secondary) {
      return 'none';
    }
    return `linear-gradient(90deg,
      ${colors.PURPLE_LIGHT(0.8)} 0%,
      ${colors.PURPLE_LIGHT(1)} 100%
    )`;
  }};
  border: none;

  &:hover {
    box-shadow: ${styles.BOX_SHADOW_PURPLE};
    transform: translateY(-2px);
  }
  h5 {
    color: ${(props: IProps) => {
      if (props.secondary) {
        return colors.PURPLE_LIGHT();
      }
      return colors.WHITE();
    }};
  }
`;

const Button: React.FC<IProps> = props => (
  <Styled {...props} onClick={props.onClick} style={props.style}>
    <h5>{props.children}</h5>
  </Styled>
);

export default Button;

import React from 'react';
import styled from 'styled-components';

import * as colors from '../utils/colors';
import * as styles from '../utils/styles';

interface IProps {
  onClick: () => void;
}

const Styled = styled.button`
  padding: 1rem;
  border: 0;
  box-shadow: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  transition: 250ms all;
  transform: translateZ(0);
  text-decoration: none;
  width: fit-content;
  background-image: ${`linear-gradient(90deg,
      ${colors.PURPLE_LIGHT(0.8)} 0%,
      ${colors.PURPLE_LIGHT(1)} 100%
    )`};
  border: none;

  &:hover {
    box-shadow: ${styles.BOX_SHADOW_PURPLE};
    transform: translateY(-2px);
  }
  h5 {
    color: ${colors.WHITE()};
  }
`;

const Button: React.FC<IProps> = props => {
  return (
    <Styled onClick={props.onClick}>
      <h5>{props.children}</h5>
    </Styled>
  );
};

export default Button;

import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import * as colors from '../utils/colors';
import * as styles from '../utils/styles';

interface IProps {
  style?: CSSProperties;
}

const Styled = styled.div`
  background: ${colors.WHITE()};
  box-shadow: ${styles.BOX_SHADOW};
  border-radius: ${styles.BORDER_RADIUS};
  padding: ${styles.PADDING};
  transition: 250ms all;
  &.clickable {
    cursor: pointer;
  }
  &.clickable:hover {
    box-shadow: ${styles.BOX_SHADOW_DARK};
  }
`;

const Card: React.FC<IProps> = props => (
  <Styled style={props.style}>{props.children}</Styled>
);

export default Card;

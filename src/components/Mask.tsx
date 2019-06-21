import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import * as styles from '../utils/styles';

interface IProps {
  onClick: () => void;
}

const Styled = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: black;
  z-index: ${styles.ZINDEX_MASK};
  opacity: 0.7;
  animation: maskanimation 250ms;
  will-change: opacity;
  @keyframes maskanimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.7;
    }
  }
`;

const Mask: React.FC<IProps> = props =>
  ReactDOM.createPortal(
    <Styled onClick={props.onClick} />,
    document.getElementById('mask') || document.body
  );

export default Mask;

import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

import * as colors from '../utils/colors';
import * as styles from '../utils/styles';
import Mask from './Mask';
import Card from './Card';

interface IProps {
  open: boolean;
  onClickClose: () => void;
  footer?: JSX.Element;
  width?: number;
  height?: number;
}

const Styled = styled.div`
  position: fixed;
  margin: auto;
  overflow: hidden;
  z-index: ${styles.ZINDEX_MASK_CONTENT};
  .modal__footer {
    display: flex;
    width: 100%;
    height: 80px;
    padding: ${styles.PADDING};
    background: ${colors.GRAY_1()};
    border-top: ${styles.BORDER};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: ${styles.ZINDEX_MASK_CONTENT};
  }
  .modal__footer button {
    padding: 0 1rem;
  }
  .modal__footer button h5 {
    font-size: 1.125rem;
  }
  animation: modalanimation 250ms;
  will-change: opacity transform;
  @keyframes modalanimation {
    from {
      opacity: 0;
      transform: scale(1.1);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Modal: React.FC<IProps> = props => {
  const width = props.width || window.innerWidth / 2;
  const height = props.height || window.innerHeight / 2;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  return ReactDOM.createPortal(
    <>
      {props.open && <Mask onClick={props.onClickClose} />}
      {props.open && (
        <Styled style={{ top, left }}>
          <Card style={{ width, height, transition: 'none' }}>
            {props.children}
            <div className="modal__footer">{props.footer}</div>
          </Card>
        </Styled>
      )}
    </>,
    document.getElementById('modal') || document.body
  );
};

export default Modal;

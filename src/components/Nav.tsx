import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styled = styled.header`
  position: fixed;
  background: rgba(45, 45, 45, 0.98);
  width: 100vw;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;

  .nav__links__page {
    text-decoration: none;
    color: white;
    margin: 0 2rem;
    transition: 250ms opacity;
  }

  .nav__links__page:hover {
    opacity: 0.8;
  }
`;

const Nav: React.FC = () => {
  return (
    <Styled>
      <div className="nav__links">
        <Link className="nav__links__page" to="/">
          Home
        </Link>
      </div>
    </Styled>
  );
};

export default Nav;

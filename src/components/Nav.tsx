import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as colors from '../utils/colors';
import * as styles from '../utils/styles';
import Logo from './Logo';
import Bars from '../icons/Bars';
import Cross from '../icons/Cross';

const Styled = styled.header`
  position: fixed;
  width: 100vw;
  height: 3.75rem;
  padding: 0 30px;
  top: 0;
  left: 0;
  background: ${colors.WHITE()};
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  border-bottom: 1px solid ${colors.GRAY_2()};
  z-index: ${styles.ZINDEX_MASK + 5};
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .header__overflow {
    display: none;
    cursor: pointer;
  }
  .header__links--container {
    justify-content: center;
  }
  .header__links {
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
  }
  .header__links__link {
    opacity: 0.8;
    transition: 250ms all;
  }
  .header__links__link:hover {
    opacity: 1;
  }
  .header__links__link.active {
    opacity: 1;
  }
  .header__links__link.active h5 {
    color: ${colors.PURPLE_DARK()};
  }
  .header__links__exit {
    position: absolute;
    right: 2rem;
    top: 2rem;
    display: none;
  }
  .header__links__exit svg {
    width: 2rem;
    height: 2rem;
    fill: ${colors.GRAY_3()};
  }
  .header__cta {
    justify-content: flex-end;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
    grid-template-columns: 20px 1fr 1fr;
    .header__overflow {
      display: flex;
    }
    .header__logo svg {
      width: 75px;
    }
    .header__links--container {
      z-index: ${styles.ZINDEX_MASK_CONTENT};
      position: fixed;
      background: ${colors.WHITE(0.95)};
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      visibility: hidden;
      opacity: 0;
      transform: scale(1.2);
      transition: 250ms all;
      &.open {
        visibility: visible;
        opacity: 1;
        transform: scale(1);
      }
    }
    .header__links {
      flex-flow: column;
    }
    .header__links__exit {
      display: block;
    }
    .header__links a h5 {
      font-size: 3rem;
      margin: 1rem 0;
    }
  }
`;

interface IHeaderLinkProps {
  text: string;
  link: string;
}

const HeaderLink: React.FC<IHeaderLinkProps> = props => (
  <a href={props.link}>
    <h5 className="text-gray">{props.text}</h5>
  </a>
);

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Styled>
      <div className="header__overflow flex" onClick={() => setNavOpen(true)}>
        <Bars fill={colors.PURPLE_DARK()} />
      </div>
      <div className="header__logo flex">
        <Link to="/">
          <Logo width={110} />
        </Link>
      </div>
      <div
        className={`header__links--container flex ${
          navOpen ? 'open' : 'closed'
        }`}
      >
        <div className="header__links__exit" onClick={() => setNavOpen(false)}>
          <Cross />
        </div>
        <div className="header__links flex">
          <HeaderLink text="About" link="https://midtype.com/about" />
          <HeaderLink text="Docs" link="https://midtype.com/docs" />
          <HeaderLink text="Contact" link="https://midtype.com/contact" />
        </div>
      </div>
      <div className="header__cta flex" />
    </Styled>
  );
};

export default Header;

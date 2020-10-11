import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Logo } from "../components/Logo";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #464159;

  .logo {
    padding: 1rem 0;
  }

  nav {
    width: 100%;
    background: #6c7b95;
    padding: 0 4rem;
    padding-top: 10px;
    border-radius: 10px 10px 0 0;
    position: relative;
  }

  nav::after {
    content: "";
    width: 100%;
    height: 10px;
    background: #6c7b95 !important;
    position: absolute;
    left: 0;
    border-radius: 0 0 10px 10px;
    z-index: -1;
  }

  @media screen and (max-width: 1200px) {
    nav,
    nav::after {
      border-radius: 0;
    }
  }

  @media screen and (max-width: 800px) {
    nav {
      padding: 0 2rem;
    }
  }
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  width: 100%;
`;

const NavLi = styled.li`
  font-size: 32px;

  @media (max-width: 800px) {
    font-size: 24px;
  }

  a {
    transition: all 0.2s ease;
    font-family: "Redressed", cursive;
    border-radius: 10px;
    color: #fff;
    padding: 0.25rem 0.5rem;
    &:hover,
    :focus {
      color: #fff;
      background: #8bbabb;
      padding: 2rem;
      z-index: 99;
    }
  }
`;

export const Header = () => (
  <HeaderStyles>
    <Link className="logo" to="/">
      <Logo />
    </Link>

    <nav>
      <NavUl>
        <NavLi>
          <Link to="/blog">Blog</Link>
        </NavLi>
        <NavLi>
          <Link to="/about">About</Link>
        </NavLi>
        <NavLi>
          <Link to="/gear">Gear</Link>
        </NavLi>
        <NavLi>
          <Link to="/contact">Contact</Link>
        </NavLi>
      </NavUl>
    </nav>
  </HeaderStyles>
);

import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Logo } from "../components/Logo";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  background: #232931;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const NavUl = styled.ul`
  display: flex;
  padding: 1rem 0;
  width: 100%;
  justify-content: space-between;
`;

const NavLi = styled.li`
  font-size: 32px;

  @media (max-width: 800px) {
    font-size: 24px;
  }

  a {
    transition: all 0.2s ease;
    font-family: "Pompiere", cursive;
    border-radius: 10px;
    color: #232931;
    background: #4a94d9;
    padding: 0.25rem 0.5rem;
    &:hover {
      color: #393e46;
      background: #5aafff;
    }
    &:active {
      color: #fff;
      background: #34628e;
    }
  }
`;

export const Header = () => (
  <HeaderStyles>
    <Link to="/">
      <Logo />
    </Link>

    <nav>
      <NavUl>
        <NavLi>
          <Link to="/about">About</Link>
        </NavLi>
        <NavLi>
          <Link to="/blog">Blog</Link>
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

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
  background: linear-gradient(#536c84, #3a5772);
  border-bottom: ridge 10px #1d2b39;
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
    transition: all 0.4s ease;
    font-family: "Pompiere", cursive;
    border-radius: 10px;
    color: #fff;
    background: #1d2b39;
    padding: 0.5rem 1rem;
    &:hover {
      color: #1d2b39;
      background: #fff;
    }
    &:active {
      color: #1d2b39;
      background: #fff;
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

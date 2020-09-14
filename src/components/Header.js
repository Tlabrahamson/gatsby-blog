import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #3a5772;
`;

const LogoImg = styled.img`
  width: 100%;
  max-width: 300px;
`;

const NavUl = styled.ul`
  display: flex;
  padding: 1rem 0;
  width: 100%;
  justify-content: space-between;
  // border-top: solid 2px #1d2b39;
  // border-bottom: solid 2px #1d2b39;
`;

const NavLi = styled.li`
  font-size: 18px;
  font-family: sans-serif;

  a {
    color: #fff;
    transition: all 0.4s ease;
    font-family: "Varela", sans-serif;
    background: #1d2b39;
    padding: 0.5rem;
    border-radius: 10px;
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
      <LogoImg src={Logo} alt="Tim Abrahamson" />
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

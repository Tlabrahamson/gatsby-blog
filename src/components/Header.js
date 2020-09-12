import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  background: #3a5772;
`;

const LogoImg = styled.img`
  width: 100%;
  max-width: 200px;
`;

const NavUl = styled.ul`
  display: flex;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
`;

const NavLi = styled.li`
  // display: grid;
  // grid-template-columns: 1fr auto;
  // grid-column-gap: 2rem;
  font-size: 18px;
  font-family: sans-serif;

  a {
    color: #fff;
    transition: all 0.3s ease;
    &:hover {
      color: #1d2b39;
    }
  }
`;

export const Header = ({ siteTitle }) => (
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

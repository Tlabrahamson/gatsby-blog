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
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  border-top: solid 2px #1d2b39;
  border-bottom: solid 2px #1d2b39;
`;

const NavLi = styled.li`
  font-size: 18px;
  font-family: sans-serif;

  a {
    color: #fff;
    transition: all 0.3s ease;
    font-family: "Pompiere", cursive;
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

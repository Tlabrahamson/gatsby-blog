import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #eee;
`;

const NavUl = styled.ul`
  display: flex;
  width: 100%;
`;

const NavLi = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 2rem;
  font-size: 24px;
  font-family: sans-serif;

  a {
    color: #666;
  }
`;

export const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Link to="/">
      <img src={Logo} alt="Tim Abrahamson" />
    </Link>

    <nav>
      <NavUl>
        <NavLi>
          <Link to="/about">About</Link>
        </NavLi>
        <NavLi>
          <Link to="/blog">Blog</Link>
        </NavLi>
      </NavUl>
    </nav>
  </HeaderStyles>
);

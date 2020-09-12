import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  background: #3a5772;
  border-bottom: solid 0.25rem #243647;
  margin-bottom: 4rem;
`;

const LogoImg = styled.img`
  width: 100%;
  max-width: 200px;
`;

const NavUl = styled.ul`
  display: flex;
  width: 256px;
  background: #243647;
  padding: 1rem 1rem;
  margin-right: -4rem;
  border-radius: 10px;
`;

const NavLi = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 2rem;
  font-size: 24px;
  font-family: sans-serif;

  a {
    color: #fff;
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
      </NavUl>
    </nav>
  </HeaderStyles>
);

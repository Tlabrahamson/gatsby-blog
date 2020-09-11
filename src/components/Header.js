import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      <h1>{siteTitle}</h1>
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

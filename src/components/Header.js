import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  margin-bottom: 4rem;
`;

export const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Link to="/">
      <h1>{siteTitle}</h1>
    </Link>
  </HeaderStyles>
);

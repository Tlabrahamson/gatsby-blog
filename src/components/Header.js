import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

export const Header = ({ siteTitle, siteDescription }) => (
  <HeaderStyles>
    <Link to="/">
      <h1>{siteTitle}</h1>
    </Link>
  </HeaderStyles>
);

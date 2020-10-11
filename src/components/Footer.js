// import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background: #8bbabb;
  color: #fff;
  padding: 1rem 4rem;
  width: 100%;
  @media (max-width: 800px) {
    position: static;
  }
`;

const year = new Date().getFullYear();

export const Footer = () => (
  <FooterStyle>
    <h3>&copy; {year} Cooking With Code</h3>
  </FooterStyle>
);

// import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background: #1d2b39;
  color: #fff;
  padding: 2rem 4rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  @media (max-width: 800px) {
    position: static;
  }
`;

export const Footer = () => (
  <FooterStyle>
    <h3>Tim Abrahamson &copy; 2020</h3>
  </FooterStyle>
);

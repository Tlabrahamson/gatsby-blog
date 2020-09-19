// import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background: #232931;
  color: #fff;
  padding: 2rem 4rem;
  width: 100%;
  @media (max-width: 800px) {
    position: static;
  }
`;

export const Footer = () => (
  <FooterStyle>
    <h3>Tim Abrahamson &copy; 2020</h3>
  </FooterStyle>
);

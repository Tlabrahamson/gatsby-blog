// import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background: #1d2b39;
  color: #fff;
  padding: 2rem 4rem;
  width: 100%;
  h3 {
    font-family: "Varela", sans-serif;
    font-size: 24px;
  }
`;

export const Footer = () => (
  <FooterStyle>
    <h3>Tim Abrahamson &copy; 2020</h3>
  </FooterStyle>
);

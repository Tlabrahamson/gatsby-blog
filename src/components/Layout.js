import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import favicon from "../../static/favicon.svg";
import { Header } from "./Header";
import { Footer } from "./Footer";
import GlobalStyles from "./styles/GlobalStyles";

const AppStyles = styled.main`
  width: 800px;
  max-width: 100%;
  margin: 4rem auto;
  background: #eee;
  position: relative;
  min-height: 70vh;
`;

export const Layout = ({ children }) => {
  return (
    <main>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <GlobalStyles />
      <Header />
      <AppStyles>{children}</AppStyles>
      <Footer />
    </main>
  );
};

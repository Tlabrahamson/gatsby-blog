import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import favicon from "../../static/favicon.svg";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";
import { Footer } from "./Footer";
import GlobalStyles from "./styles/GlobalStyles";

const AppStyles = styled.main`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 4rem 0;
  position: relative;
  min-height: 100vh;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <main>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <GlobalStyles />
      <Header siteTitle={title} siteDescription={description} />
      <AppStyles>{children}</AppStyles>
      <Footer />
    </main>
  );
};

import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";
import { Footer } from "./Footer";
import GlobalStyles from "./styles/GlobalStyles";

const AppStyles = styled.main`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <Header siteTitle={title} siteDescription={description} />
        {children}
        <Footer />
      </AppStyles>
    </>
  );
};

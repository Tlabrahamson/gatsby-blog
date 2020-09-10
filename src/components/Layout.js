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
  background: #fff;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyles />
      <Header siteTitle={title} siteDescription={description} />
      <AppStyles>{children}</AppStyles>
      <Footer />
    </>
  );
};

import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Code from "./src/components/Code";

const components = {
  h2: ({ children }) => <h2 style={{ color: "#3a5772" }}>{children}</h2>,
  "p.inlineCode": props => (
    <code style={{ backgroundColor: "#eee" }} {...props} />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      );
    }
  }
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

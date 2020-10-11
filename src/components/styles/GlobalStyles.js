import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #eee;
}

main {
    position: relative;
}

nav {
    width: 100%;
    max-width: 1200px;
}

h1,h2,h3,h4,h5,h6 {
    font-family: 'Proza Libre', sans-serif;
    line-height: 1.5;
}

h1 {
    font-size: 36px;
    // color: #232931;
}

p {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.7;
    font-size: 18px;
    white-space: pre-line;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

hr {
    margin: 4rem 0rem;
}
`;

export default GlobalStyles;

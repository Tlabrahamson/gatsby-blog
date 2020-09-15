import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main {
    position: relative;
}

nav {
    width: 100%;
    max-width: 800px;
}

h1,h2,h3,h4,h5,h6 {
    font-family: 'Work Sans', sans-serif;
    line-height: 1.5;
}

p {
    font-family: 'Varela', sans-serif;
    line-height: 1.7;
    font-size: 18px;
}

a {
    text-decoration: none;
    font-size: 24px;
}

li {
    list-style: none;
}

hr {
    margin: 4rem 0rem;
}
`;

export default GlobalStyles;

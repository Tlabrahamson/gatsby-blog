import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
    font-family: 'Work Sans', sans-serif;
    line-height: 1.5em;
}

p {
    font-family: 'Varela', sans-serif;
}

a {
    font-family: 'Varela', sans-serif;
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

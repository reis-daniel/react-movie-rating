import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyle = createGlobalStyle`
body, *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`;

export default GlobalStyle;

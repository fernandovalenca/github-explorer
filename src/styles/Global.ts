import { createGlobalStyle } from "styled-components";

//import githubBackground from "../assets/github-background.svg";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        //background: #f3f3f5 url() no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }

    body , input , button {
        font-size: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    #root {
        max-width: 58rem;
        margin: 0 auto;
        padding: 2.5rem 1.25rem;
    }

    button {
        cursor: pointer;
    }
`;

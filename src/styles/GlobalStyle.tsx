import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #0082fa;
        --secondary-color:#6370f4;

        --text-color: #1c1c1c;
        --text-color-gray: #626262;
        --text-color-gray-light: #888;
        --text-color-white: #fff;

        --border-color-gray: #d0d0d0;
        --border-color-gray-light: #eaeaea;

        --body-background-color: #f7f7f7;
        --layout-background-color: #fff;
        --error-color: #e31111;
        
        --font-family: "Instrument Sans", system-ui, Arial;

        font-family: var(--font-family);
        background-color: var(--body-background-color);
        color: var(--text-color);
        font-size: 16px;
        line-height: 1.5;
        font-weight: 400;
        font-synthesis: none;
        font-optical-sizing: auto;
        font-style: normal;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
    }

    *,  
    *::before,  
    *::after {  
        box-sizing: border-box;  
    } 

    body {
        margin: 0;
    }
`;

export default GlobalStyle;

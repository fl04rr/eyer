import { createGlobalStyle } from "styled-components";
import ManropeRegular from "../assets/fonts/Manrope-Regular.ttf";
import ManropeMedium from "../assets/fonts/Manrope-Medium.ttf";
import ManropeBold from "../assets/fonts/Manrope-Bold.ttf";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Manrope';
    font-weight: 400;
    font-style: normal;
    font-display: block;
    src: url(${ManropeRegular});
}

@font-face {
    font-family: 'Manrope';
    font-weight: 500;
    font-style: normal;
    font-display: block;
    src: url(${ManropeMedium});
}

@font-face {
    font-family: 'Manrope';
    font-weight: 700;
    font-style: normal;
    font-display: block;
    src: url(${ManropeBold});
}

*{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    color: var(--color);
    font-family: 'Manrope';
    font-size: 8px;
    text-decoration: none;
}

label{
    cursor: pointer;
}

button{
    background-color: transparent;
    cursor: pointer;

    &:disabled{
        opacity: .5;
        cursor: default;
    }
}

:root{
    --background: #212121;
    --darken: #424242;
    --color: #fafafa;
    --accent: #7c4dff;
}

body{
    width: 300px;
    height: 450px;
    background-color: var(--background);
}
`;

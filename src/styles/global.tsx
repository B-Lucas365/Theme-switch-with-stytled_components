"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: ${(props) => props.theme.colors.bg100};
        color: ${(props) => props.theme.colors.text100};
    }
`;

export const GlobalStyles = () => {
  return <Globals />;
};

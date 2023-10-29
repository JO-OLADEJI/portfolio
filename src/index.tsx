import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

// contexts
import { GlobalContextProvider } from "./contexts/Global";

// fonts
import tyewriter from "./fonts/typewriter.ttf";
import courier from "./fonts/courier.ttf";
import courierBold from "./fonts/courier-bold.ttf";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'typewriter';
    src: url(${tyewriter}) format('truetype');
  }

  @font-face {
    font-family: 'courier';
    src: url(${courier}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'courier';
    src: url(${courierBold}) format('truetype');
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'courier';
  }

  .old-font, .old-font * {
    font-family: 'typewriter';
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);

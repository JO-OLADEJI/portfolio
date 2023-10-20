import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Error";

// fonts
import tyewriter from "./fonts/typewriter.ttf";
import courier from "./fonts/courier.ttf";
import courierBold from "./fonts/courier-bold.ttf";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);

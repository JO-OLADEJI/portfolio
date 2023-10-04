import React from "react";

// components
import Nav from "../components/Nav";

// types
import { Pages } from "../types";

const Home = (): JSX.Element => {
  return (
    <div>
      <h1>Homepage</h1>
      <Nav page={Pages.Home} />
      <ul>
        <li>Codeographer Introduction</li>
      </ul>
    </div>
  );
};

export default Home;

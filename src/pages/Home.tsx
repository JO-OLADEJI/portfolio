import React from "react";

// components
import Nav from "../components/Nav";
import Socials from "../components/Socials";

// types
import { Pages } from "../types";

const Home = (): JSX.Element => {
  return (
    <div>
      <Nav page={Pages.Home} />

      <ul>
        <li>Codeographer Introduction</li>
      </ul>

      <Socials />
    </div>
  );
};

export default Home;

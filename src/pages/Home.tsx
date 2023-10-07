import React from "react";

// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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

      <Footer />
    </div>
  );
};

export default Home;

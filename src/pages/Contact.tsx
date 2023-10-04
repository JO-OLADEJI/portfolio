import React from "react";
import styled from "styled-components";

// components
import Nav from "../components/Nav";
import Form from "../components/Form";
import Terminal from "../components/Terminal";
import Canvas from "../components/Canvas";
import Meeting from "../components/Meeting";

// types
import { Pages } from "../types";

const SocialProfiles = styled.div`
  margin-top: 5rem;
  text-align: center;
  height: 30rem;
`;

const Contact = (): JSX.Element => {
  return (
    <div>
      <h1>Contact</h1>
      <Nav page={Pages.Contact} />
      <ul>
        <li>Form (for normal people)</li>
        <li>Terminal (for nerds)</li>
        <li>Canvas (for novelty)</li>
        <li>
          Schedule a meeting (for novelty) - Have a video on ethical guidelines
          of scheduling a meeting with me and have a custom built calendar
        </li>
      </ul>

      <Form />
      <Terminal />
      <Canvas />
      <Meeting />

      <SocialProfiles>
        <h1>Socials</h1>
      </SocialProfiles>
    </div>
  );
};

export default Contact;

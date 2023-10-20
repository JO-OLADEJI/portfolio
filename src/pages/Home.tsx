import React from "react";
import styled from "styled-components";

// components
import Nav from "../components/Nav";
import Socials from "../components/Socials";

// assets
import dummyPrint from "../assets/dummy-print.png";
import barcode from "../assets/barcode.png";

// types
import { Pages } from "../types";

const Outline = styled.div``;

const FingerPrintPad = styled.div`
  margin: auto;
  position: relative;
  // border: 1px solid red;
  width: 30rem;
  text-align: center;

  h5 {
    margin-bottom: .5rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  ul {
    margin-left: 2.8rem;
  }

  li {
    text-align: left;
    list-style-type: none;
    margin-bottom: 0.7rem;
    font-size: 1rem;
  }

  > div {
    text-align: right;
  }

  > div p {
    margin-right: 1rem;
  }
`;

const DummyPrint = styled.img`
  position: absolute;
  top: .5rem;
  right: 1rem;
  width: 8rem;
  z-index: -1;
`;

const Barcode = styled.img`
  width: 50%;
  margin-right: 1rem;
`;

const Home = (): JSX.Element => {
  return (
    <Outline>
      <Nav page={Pages.Home} />

      <FingerPrintPad className="old-font">
        <DummyPrint src={dummyPrint} alt="fingerprint" />
        <h5>
          thecodeographer<span>&#174;</span>
        </h5>
        <h1>FingerPrint Pad</h1>
        <ul>
          <li>- lorem ipsum dolor sit amet.</li>
          <li>- clear, crisp imprint.</li>
          <li>- use on any paper.</li>
        </ul>
        <div>
          <p>Item #717061</p>
          <Barcode src={barcode} alt="" />
          <pre>73775 03027 269      3</pre>
        </div>
      </FingerPrintPad>

      <Socials />
    </Outline>
  );
};

export default Home;

import React from "react";
import styled from "styled-components";

// components
import Nav from "../components/Nav";
// import Socials from "../components/Socials";

// assets
import dummyPrint from "../assets/dummy-print.png";
import barcode from "../assets/barcode.png";
import fingerprint from "../assets/fingerprint.png";

// types
import { Pages } from "../types";

const Outline = styled.div`
  > div {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
`;

const FingerPrintPad = styled.div`
  position: relative;
  width: 30rem;
  text-align: center;

  h5 {
    margin-bottom: 0.5rem;
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
  top: 0.5rem;
  right: 1rem;
  width: 8rem;
  z-index: -1;
`;

const Barcode = styled.img`
  width: 50%;
  margin-right: 1rem;
`;

const FingerPrint = styled.div``;

const FingerPrintImg = styled.img`
  width: 27rem;
`;

const Home = (): JSX.Element => {
  return (
    <Outline>
      <Nav page={Pages.Home} />

      <div>
        <FingerPrintPad className="old-font">
          <DummyPrint src={dummyPrint} alt="dummy fingerprint" />
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
            <Barcode src={barcode} alt="barcode" />
            <pre>73775 03027 269 3</pre>
          </div>
        </FingerPrintPad>
        <FingerPrint>
          <FingerPrintImg
            src={fingerprint}
            alt="about Joshua Oladeji in thumbprint style"
          />
        </FingerPrint>
      </div>

      {/* <Socials /> */}
    </Outline>
  );
};

export default Home;

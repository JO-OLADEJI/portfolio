import React from "react";

// components
import Nav from "../components/Nav";

// assets
import dummyPrint from "../assets/dummy-print.png";
import barcode from "../assets/barcode.png";
import fingerprint from "../assets/fingerprint.png";

// styles
import {
  Outline,
  FingerPrintPad,
  DummyPrint,
  Barcode,
  FingerPrintImg,
} from "../styles/pages/home";

const Home = (): JSX.Element => {
  return (
    <Outline>
      <Nav page={"home"} />
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
        <div>
          <FingerPrintImg
            src={fingerprint}
            alt="about Joshua Oladeji in thumbprint style"
          />
        </div>
      </div>
    </Outline>
  );
};

export default Home;

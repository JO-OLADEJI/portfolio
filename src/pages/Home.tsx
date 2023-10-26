import React, { useContext } from "react";
import { isMobile } from "react-device-detect";

// context
import { GlobalContext } from "../contexts/Global";

// components
import Nav from "../components/Nav";
import RecordPlayer from "../components/RecordPlayer";

// assets
import dummyPrint from "../assets/dummy-print.png";
import barcode from "../assets/barcode.png";
import joshprint from "../assets/joshprint.webm";

// styles
import {
  ContentWrapper,
  FingerPrintPad,
  DummyPrint,
  Barcode,
  JoshPrint,
  PrintScanner,
} from "../styles/pages/home";

const Home = (): JSX.Element => {
  const globalContext = useContext(GlobalContext);

  return (
    <div>
      <Nav page={"home"} />
      <ContentWrapper $isMenuOpen={globalContext.isMenuOpen}>
        <FingerPrintPad className="old-font">
          <DummyPrint>
            <PrintScanner />
            <img src={dummyPrint} alt="dummy fingerprint" />
          </DummyPrint>
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
          <JoshPrint autoPlay={true} muted={true}>
            <source src={joshprint} type="video/webm" />
          </JoshPrint>
        </div>
      </ContentWrapper>

      {!isMobile && <RecordPlayer />}
    </div>
  );
};

export default Home;

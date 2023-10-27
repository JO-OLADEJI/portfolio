import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { isMobile } from "react-device-detect";

// context
import { GlobalContext } from "../contexts/Global";

// components
import Nav from "../components/Nav";
import RecordPlayer from "../components/RecordPlayer";

// utils
import { getDistanceToTopOfViewport } from "../utils";

// assets
import dummyPrint from "../assets/dummy-print.png";
import barcode from "../assets/barcode.png";
import joshprint from "../assets/joshprint.webm";
import downChevronS from "../assets/down-chevron-s.png";

// styles
import {
  ContentWrapper,
  FingerPrintPad,
  DummyPrint,
  Barcode,
  JoshPrint,
  PrintScanner,
  ScrollIndicator,
} from "../styles/pages/home";

const Home = (): JSX.Element => {
  const globalContext = useContext(GlobalContext);
  const [showScrollIndicator, setShowScrollIndicator] =
    useState<boolean>(false);
  const [videoHasEnded, setVideoHasEnded] = useState<boolean>(false);
  const scrollIndicator = useRef<HTMLDivElement>(null);
  const fingerprintVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    isMobile && fingerprintVideo.current?.pause();
    setTimeout(() => {
      setShowScrollIndicator(true);
    }, 3 * 1000);
  }, []);

  const handleScrollIndicatorFade = useCallback((): void => {
    if (!isMobile || !scrollIndicator.current || !fingerprintVideo.current)
      return;
    const distanceToTop = getDistanceToTopOfViewport(scrollIndicator.current);

    if (distanceToTop < window.innerHeight / 2) {
      setShowScrollIndicator(false);
      !videoHasEnded &&
        fingerprintVideo.current.paused &&
        fingerprintVideo.current.play();
    } else {
      setShowScrollIndicator(true);
      !videoHasEnded &&
        !fingerprintVideo.current.paused &&
        fingerprintVideo.current.pause();
    }
  }, [videoHasEnded]);

  useEffect(() => {
    document.addEventListener("scroll", handleScrollIndicatorFade);
    return () =>
      document.removeEventListener("scroll", handleScrollIndicatorFade);
  }, [handleScrollIndicatorFade]);

  return (
    <div>
      <Nav page={"home"} />
      <ContentWrapper
        $isMenuOpen={globalContext.isMenuOpen}
        onScroll={() => console.log("page scrolling")}
      >
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
        {isMobile && (
          <ScrollIndicator ref={scrollIndicator} $show={showScrollIndicator}>
            <img src={downChevronS} alt="scroll down" />
          </ScrollIndicator>
        )}
        {/* TODO: video not showing up in prod. */}
        <div>
          <JoshPrint
            ref={fingerprintVideo}
            autoPlay={true}
            muted={true}
            onEnded={() => setVideoHasEnded(true)}
          >
            <source src={joshprint} type="video/webm" />
          </JoshPrint>
        </div>
      </ContentWrapper>

      {!isMobile && <RecordPlayer />}
    </div>
  );
};

export default Home;

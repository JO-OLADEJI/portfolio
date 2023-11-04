import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { isMobile } from "react-device-detect";
import TypeIt from "typeit-react";
import ReactGA from "react-ga";

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
import joshprintM from "../assets/joshprint.webm";
import joshprint from "../assets/joshprint.mp4";
import downChevronS from "../assets/down-chevron-s.png";

// styles
import {
  ContentWrapper,
  FingerPrintPad,
  DummyPrint,
  Barcode,
  JoshPrint,
  ScrollIndicator,
} from "../styles/pages/home";

const Home = (): JSX.Element => {
  ReactGA.pageview(window.location.pathname);
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
    }, 4.5 * 1000);
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
      <ContentWrapper $isMenuOpen={globalContext.state.isMenuOpen}>
        <FingerPrintPad className="old-font">
          <DummyPrint>
            <img src={dummyPrint} alt="dummy fingerprint" />
          </DummyPrint>
          <h5>
            thecodeographer<span>&#174;</span>
          </h5>
          <h1>A Unique Print.</h1>
          <ul>
            <li>
              <TypeIt
                options={{
                  strings: ["- our fingerprints are exclusive,"],
                  speed: 50,
                  waitUntilVisible: true,
                  cursor: false,
                }}
              />
            </li>
            <li>
              <TypeIt
                options={{
                  strings: ["- which mirrors our uniqueness."],
                  speed: 50,
                  startDelay: 2000,
                  waitUntilVisible: true,
                  cursor: false,
                }}
              />
            </li>
            <li>
              <TypeIt
                options={{
                  strings: ["- here's an imprint unveiling mine."],
                  speed: 50,
                  startDelay: 3500,
                  waitUntilVisible: true,
                  cursor: false,
                }}
              />
            </li>
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
        <div>
          <JoshPrint
            ref={fingerprintVideo}
            autoPlay={true}
            muted={true}
            controls={false}
            playsInline={true}
            onEnded={() => setVideoHasEnded(true)}
          >
            <source src={joshprintM} type="video/webm" />
            <source src={joshprint} type="video/mp4" />
          </JoshPrint>
        </div>
      </ContentWrapper>

      {/* {!isMobile && <RecordPlayer />} */}
    </div>
  );
};

export default Home;

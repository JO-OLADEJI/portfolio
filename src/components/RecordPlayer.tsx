import React, { useContext } from "react";
import ReactGA from "react-ga";

// context
import { GlobalContext } from "../contexts/Global";

// assets
import disc from "../assets/rp-disc.png";
import tonearm from "../assets/rp-tonearm.png";
import play from "../assets/play-btn.png";
import stop from "../assets/stop-btn.png";

// styles
import {
  Outline,
  Disc,
  Tonearm,
  PlayPauseBtn,
} from "../styles/components/record-player";

const RecordPlayer = (): JSX.Element => {
  const globalContext = useContext(GlobalContext);

  return (
    <Outline>
      <div>
        <Disc
          src={disc}
          alt="record player disc"
          $isPlaying={globalContext.state.isMusicPlaying}
        />
        <Tonearm
          src={tonearm}
          alt="record player tonearm"
          $isPlaying={globalContext.state.isMusicPlaying}
        />
      </div>
      <div>
        <PlayPauseBtn
          src={globalContext.state.isMusicPlaying ? stop : play}
          alt={globalContext.state.isMusicPlaying ? "stop" : "play"}
          onClick={() => {
            globalContext.dispatch({ type: "TOGGLE_PLAYBACK" });
            ReactGA.event({
              category: "Record Player Interaction",
              action: "Playback Toggle",
            });
          }}
        />
      </div>
    </Outline>
  );
};

export default RecordPlayer;

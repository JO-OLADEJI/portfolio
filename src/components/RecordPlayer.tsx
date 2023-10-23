import React, { useState } from "react";

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
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  return (
    <Outline>
      <div>
        <Disc src={disc} alt="record player disc" $isPlaying={isPlaying} />
        <Tonearm
          src={tonearm}
          alt="record player tonearm"
          $isPlaying={isPlaying}
        />
      </div>
      <div>
        <PlayPauseBtn
          src={isPlaying ? stop : play}
          alt={isPlaying ? "stop" : "play"}
          onClick={() => setIsPlaying((prev) => !prev)}
        />
      </div>
    </Outline>
  );
};

export default RecordPlayer;

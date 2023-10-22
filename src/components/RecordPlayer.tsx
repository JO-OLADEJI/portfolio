import React from "react";

// assets
import disc from "../assets/rp-disc.png";
import tonearm from "../assets/rp-tonearm.png";

// styles
import { Outline, Disc, Tonearm } from "../styles/components/record-player";

const RecordPlayer = (): JSX.Element => {
  return (
    <Outline>
      <div>
        <Disc src={disc} alt="record player disc" />
        <Tonearm src={tonearm} alt="record player tonearm" />
      </div>
    </Outline>
  );
};

export default RecordPlayer;

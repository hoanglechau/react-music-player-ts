import React, { useMemo, useState } from "react";
import Track1 from "../audio/waterfall-140894.mp3";
import Track2 from "../audio/relaxed-vlog-night-street-131746.mp3";
import Track3 from "../audio/the-beat-of-nature-122841.mp3";
import Track4 from "../audio/only-forward-140896.mp3";
import Track5 from "../audio/inspiring-dream-140960.mp3";
import Track6 from "../audio/just-relax-11157.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Waterfall - RomanSenykMusic",
      file: Track1,
    },
    {
      name: "Relaxed Vlog - Ashot-Danielyan",
      file: Track2,
    },
    {
      name: "The Beat of Nature - Olexey",
      file: Track3,
    },
    {
      name: "Only Forward - RomanSenykMusic",
      file: Track4,
    },
    {
      name: "Inspiring Dream - AudioCoffee",
      file: Track5,
    },
    {
      name: "Just Relax - Lesfm",
      file: Track6,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

function MusicPlayerProvider({ children }) {
  const [state, setState] = useState(defaultValues);
  const value = useMemo(() => ({ state, setState }), [state]);

  return (
    <MusicPlayerContext.Provider value={value}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export { MusicPlayerContext, MusicPlayerProvider };

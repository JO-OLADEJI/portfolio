import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sound from "react-sound";
import { isMobile } from "react-device-detect";
import ReactGA from "react-ga";

// context
import { GlobalContext } from "./contexts/Global";

// config
import config from "./config.json";

// pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Error";

// components
import Slideshow from "./components/Slideshow";
import Footer from "./components/Footer";

// music
import aMillionDreams from "./assets/music/a-million-dreams.mp3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactGA.initialize(config["ga-tracking-id"]);

const App = (): JSX.Element => {
  const globalContext = useContext(GlobalContext);

  return (
    <div>
      <Slideshow />
      <Sound
        url={aMillionDreams}
        playStatus={globalContext.state.isMusicPlaying ? "PLAYING" : "PAUSED"}
        loop={true}
        volume={isMobile ? 10 : 30}
      />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;

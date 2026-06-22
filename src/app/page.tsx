'use client';

import { IridescenceBackground } from "./components/IridescenceBackground";
import Grid from "./components/grid/Grid";
import { TextEffect } from "./components/TextEffect";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Home = () => {

  return (
    <>
      <div className="min-h-screen flex justify-center items-center text-center">
        <IridescenceBackground />
        <header className="relative">
          <span className="uppercase tracking-widest text-xs text-center text-pink">Welcome to my Portfolio</span>
          <TextEffect
            words="Hello, World! I'm Lily."
          />
        </header>
      </div>
      <Grid />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;

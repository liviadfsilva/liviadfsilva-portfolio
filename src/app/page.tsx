'use client';

import { IridescenceBackground } from "./components/IridescenceBackground";
import Grid from "./components/grid/Grid";
import { TextEffect } from "./components/TextEffect";
import { useLanguage } from "./components/LanguageProvider"
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Home = () => {
    const { t, language } = useLanguage()

  return (
    <>
      <div className="min-h-screen flex justify-center items-center text-center">
        <IridescenceBackground />
        <header className="relative">
          <span className="uppercase tracking-widest text-xs text-center text-pink">{t.welcome}</span>
          <TextEffect
              key={language}
            words={t.heroWords} role={t.role}
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

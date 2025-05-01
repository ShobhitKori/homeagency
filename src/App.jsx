import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "@fontsource/epilogue";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import DesignAgency from "./components/About";
import Stats from "./components/Stats";
import HowWeWork from "./components/HowWeWork";
import VideoReel from "./components/VideoReel";
import Portfolio from "./components/Portfolio";
import GetStarted from "./components/GetStarted";
import OurTeam from "./components/OurTeam";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-[Epilogue]">
      <div className="bg-custom-purple">
        <Navbar />
        <Hero />
        <Companies />
        <DesignAgency />
        <Stats />
        <HowWeWork />
        <VideoReel />
        <Portfolio />
        <GetStarted />
        <OurTeam />
        <Pricing />
        <Faq />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}

export default App;

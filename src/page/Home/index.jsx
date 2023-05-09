import React, { useRef } from "react";
import MainTitleSection from "../../components/homeComponents/MainTitleSection";
import Services from "../../components/homeComponents/Services";
import Projects from "../../components/homeComponents/Projects";
import AboutUs from "../../components/homeComponents/AboutUs";
import Team from "../../components/homeComponents/Team/Team";
import useScrollSnap from "src/components/UI/UseScrollSnap/useScrollSnap";
// import useScrollSnap from "react-use-scroll-snap";

const Home = () => {
  let scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 1 });

  return (
    <div className="home-page" ref={scrollRef}>
      <MainTitleSection />
      <Services />
      <Projects />
      <Team />
      <AboutUs />
    </div>
  );
};

export default Home;

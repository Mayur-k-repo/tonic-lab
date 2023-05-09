import React from "react";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import topBgImg from "../../../assets/images/about-bg.png";
// import topBgImg from "../../../assets/images/about.png";
import "./styles.scss";

const AboutUs = () => {
  return (
    <div id="about"
      data-aos-duration="1000"
      data-aos="zoom-in-up"
    >
      <section className="aboutUs-wrapper">
        <Container maxWidth="false">
          <Grid container>
            <Grid item md={10} style={{ margin: 'auto' }}>
              <div className="relative">
                <div className="bg-light light-1" />
                <div className="bg-light light-2" />

                <div className="about-wrapper-bg">
                  <div className="bg-light light-1" />
                  <div className="bg-light light-2" />
                  <SectionTitle textAlign="left">About</SectionTitle>
                  <div className="top-design-1">
                    <img src={topBgImg} />
                  </div>
                  <p className="about-text"> TonicLABS is the unique intersection of our combined expertise and experiences.</p>
                  <p className="about-text mt-50">We are a collective of diverse and passionate professionals, with various expertise and years of experience in designs and builds for the motion picture, hospitality and entertainment industries. </p>
                  <p className="about-text mb-80 mt-50">Since 2018, we have successfully completed a few projects and IRL events with various artists. We've created everything out of nothing and now it's time to re-create for a decentralized future</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;

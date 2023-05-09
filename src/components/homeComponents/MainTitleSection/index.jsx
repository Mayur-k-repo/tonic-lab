import React from "react";
import { Container, Grid } from "@mui/material";
import "./styles.scss";
import bgImage from "../../../assets/images/bottom-home.png";

const MainTitleSection = () => {
  return (
    <>
      <section className="mainTitleSection" id="Home">
        <Container maxWidth="false">
          <Grid container spacing={2}>
            {/* <Grid item md={1}>
            <div className="bottom-home-bg-img" />
          </Grid> */}
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <h1 className="page-title">
                Shaping
                <br />
                the culture <br />of web3 for a <br /><span>de</span>centralized <br /> future
              </h1>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* <section className="section-2" id="Home">
        <img src={bgImage} alt="Background Image" />
      </section> */}
    </>
  );
};

export default MainTitleSection;

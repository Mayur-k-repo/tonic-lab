import React from "react";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo1 from "../../../assets/images/projects/project-logo-1.png";
import img1 from "../../../assets/images/projects/project-1.png";
import logo2 from "../../../assets/images/projects/project-logo-2.png";
import img2 from "../../../assets/images/projects/project-2.png";
import logo3 from "../../../assets/images/projects/project-logo-3.png";
import img3 from "../../../assets/images/projects/project-3.png";
import logo4 from "../../../assets/images/projects/project-logo-4.png";
import img4 from "../../../assets/images/projects/project-4.png";
import ProjectCard from "./ProjectCard";
import "./styles.scss";

const Projects = () => {
  const cards = [
    // {
    //   logo: logo1,
    //   img: img1,
    //   desc: "A community driven NFT project to kickstart the anti-crypto-bullying movement with real use case and utilities for token holders.",
    //   website: "https://conflictedgarys.com/",
    //   twitter: "https://twitter.com/ConflictedGarys",
    // },
    // {
    //   logo: logo2,
    //   img: img2,
    //   desc: "A smart-money tracking platform for NFTs with quantitative and qualitative data and technical analysis charts in real time.",
    //   website: "Open website",
    //   twitter: "https://twitter.com/",
    // },
    {
      logo: logo3,
      img: img3,
      desc: "A lifestyle community for the unapologetic, connected through fashionably curated digital art.",
      website: "https://starvingmodels.io/",
      twitter: "https://twitter.com/StarvingModels",
    },
    {
      logo: logo4,
      img: img4,
      desc: "An exclusive NFT curation and generation platform, designed to facilitate communication and negotiation of digital assets through transmission of programmable NFTs.",
      website: "https://boomerang.art/",
      twitter: "https://twitter.com/boomerangdapp",
    },
  ];

  return (
    <section className="project-wrapper" id="projects">
      {/* <SectionTitle>projects</SectionTitle> */}
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="false">
          <Grid container spacing={6}>
            <Grid item md={1} />
            <Grid item md={10}>
              <Grid container spacing={6}>
                {cards.map((project, i) => (
                  <ProjectCard project={project} key={i} />
                ))}
              </Grid>
            </Grid>
            <Grid item md={1} />
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Projects;

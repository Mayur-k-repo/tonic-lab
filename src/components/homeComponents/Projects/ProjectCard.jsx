import React from "react";
import Grid from "@mui/material/Grid";
import CustomButton from "../../UI/CustomButton";
import twitterLogo from "../../../assets/images/twitter.png";
import VanillaTiltCard from "../../UI/VanillaTiltCard";

const ProjectCard = ({ project }) => {
  const { img, desc, website, logo, twitter } = project;
  return (
    <Grid item md={6}>
      <VanillaTiltCard>
        <div
          className="project-card-wrapper"
          data-aos-duration="500"
          data-aos="zoom-in-up"
        >
          <div className="project-card-space">
            <div className="rectangle" />
            <div className="logo-height">
              <img src={logo} alt="project-logo" className="project-logo" />
            </div>
            <div className="d-flex justify-flex-end">
              <img src={img} className="project-img" alt="project" />
            </div>
          </div>

          {(desc || website || twitter) && (
            <div className="text-wrapper">
              <div className="px-25">
                {desc && <h3>{desc}</h3>}

                <div className="d-flex align-center mt-20">
                  {website && (
                    // <a href={website} target="_blank">
                    //   <CustomButton
                    //     variant="outlined"
                    //     sx={{ my: 2, display: "block" }}
                    //   >
                    //     Learn More
                    //   </CustomButton>
                    // </a>

                    <CustomButton
                      variant="outlined"
                      sx={{ my: 2, display: "block" }}
                    >
                      SOON!
                    </CustomButton>
                  )}

                  {twitter && (
                    <a href={twitter} target="_blank">
                      <CustomButton
                        sx={{
                          mt: 2,
                          mb: 2,
                          ml: 5,
                          display: "block",
                          padding: 0,
                          minWidth: 0,
                        }}
                      >
                        <img src={twitterLogo} />
                      </CustomButton>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </VanillaTiltCard>
    </Grid>
  );
};

export default ProjectCard;

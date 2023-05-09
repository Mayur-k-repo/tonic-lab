import React from "react";
import Grid from "@mui/material/Grid";
import cs from "classnames";
import { Container } from "@mui/material";

const JoinSectionCard = ({ data = {}, isHome = false }) => {
  const { img, name } = data;
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <div
        className={"joinSectionCardWrapper"}
        data-aos-duration="1500"
        data-aos="zoom-in-up"
      >
        <div className={cs("img-wrapper", { ["homeWrapper"]: isHome })}>
          <div className="img-wrapper-background" />
          <img src={img} alt={name} />
        </div>
        <h3 className={cs({ ["homeWrapper"]: isHome })}>{name}</h3>
      </div>
    </Grid>
  );
};

export default JoinSectionCard;

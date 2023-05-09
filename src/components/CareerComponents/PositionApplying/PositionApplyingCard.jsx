import React from "react";
import Grid from "@mui/material/Grid";
import cs from "classnames";
import "./styles.scss";
import { Container } from "@mui/material";

const PositionApplyingCard = ({ data, handleSelect }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <div
        className={cs("positionApplyingCardWrapper", {
          ["iaActive"]: data.isSelect,
        })}
        data-aos-duration="1500"
        data-aos="zoom-in-up"
        onClick={() => handleSelect(data)}
      >
        <div className="hover-round" />
        <h3>{data.name}</h3>
      </div>
    </Grid>
  );
};

export default PositionApplyingCard;

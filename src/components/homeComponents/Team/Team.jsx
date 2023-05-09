import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import "./styles.scss";
import { teamList } from "./dataList";
import TeamCard from "./TeamCard";

const Team = () => {

  const splitArrayDecreasing = (arr, nums) => {
    var result = [];
    var startIndex = 0;
    for (var i = 0; i < nums.length; i++) {
      var num = nums[i];
      var subarray = arr.slice(startIndex, startIndex + num);
      result.push(subarray);
      startIndex += num;
    }
    return result;
  }
  var target = splitArrayDecreasing(teamList, [3, 2, 1]);
  console.log("target", target);

  return (
    <section className="team-wrapper" id="team">
      {/* <SectionTitle>team</SectionTitle> */}
      {/* <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl" style={{ justifyContent: "center" }}>
          <Grid container>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <div className="team-list-wrapper">
                <div
                  className="container-element container-element-1 alignwide"
                  data-aos-duration="1500"
                  data-aos="zoom-in-up"
                >
                  {teamList.map((user, i) => (
                    <TeamCard key={i} user={user} />
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      <Container maxWidth="false">
        <div className="diamond-container"
          data-aos-duration="1000"
          data-aos="zoom-in-up"
        >
          {target.map((row, ri) => (
            <div key={ri} className="diamond-row">
              {
                row.map((user, ci) =>
                  <TeamCard key={`${ri}-${ci}`} user={user} />
                )
              }
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Team;

import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import hr from "../../../assets/images/hr.png";
import careers from "../../../assets/images/careers.png";
import challenging from "../../../assets/images/joinSection/challenging.png";
import collaborative from "../../../assets/images/joinSection/collaborative.png";
import competitive from "../../../assets/images/joinSection/competitive.png";
import health_medical from "../../../assets/images/joinSection/health_medical.png";
import paid_company from "../../../assets/images/joinSection/paid_company.png";
import workflexibility from "../../../assets/images/joinSection/workflexibility.png";
import "./styles.scss";
import JoinSectionCard from "./JoinSectionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import useWindowSize from "src/hooks";

const JoinSection = () => {
  const data = [
    { name: "New and challenging opportinities", img: challenging },
    { name: "Collaborative \n environment", img: collaborative },
    { name: "Health and  \n medical benefits", img: competitive },
    { name: "Paid company  \n retreats", img: health_medical },
    { name: "Work \n flexibility", img: paid_company },
    { name: "Competitive compensations", img: workflexibility },
  ];
  const { width } = useWindowSize();
  return (
    <section className="joinSection-wrapper">
      <div className="careers-img-wrapper relative">
        <div className="careers-img-one">
          <img src={careers} className="careers-img" alt="careers" />
        </div>
        <img src={hr} className="hr-img" alt="hr" />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="xxl">
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item md={2} />
            <Grid item md={8}>
              <p
                className="join-title"
                data-aos-duration="1500"
                data-aos="zoom-in-up"
              >
                Join our fast growing company and help bring decentralization to
                the world!
              </p>
            </Grid>
            <Grid item md={2} />
          </Grid>
        </Container>
        {width > 600 ? (
          <Container maxWidth="xxl">
            <Grid container spacing={2} style={{ justifyContent: "center" }}>
              <Grid item md={1} />
              <Grid item md={10}>
                <Grid
                  container
                  spacing={2}
                  style={{ justifyContent: "center", marginTop: 50 }}
                >
                  {data.map((d, i) => (
                    <JoinSectionCard key={i} data={d} />
                  ))}
                </Grid>
              </Grid>
              <Grid item md={1} />
            </Grid>
          </Container>
        ) : (
          <Swiper
            style={{ paddingBottom: 40 }}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.map((d, i) => (
              <SwiperSlide key={i}>
                <div className="p-10">
                  <JoinSectionCard data={d} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>
    </section>
  );
};

export default JoinSection;

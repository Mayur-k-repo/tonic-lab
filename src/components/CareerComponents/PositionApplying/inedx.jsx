import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PositionApplyingCard from "./PositionApplyingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import useWindowSize from "src/hooks";

const PositionApplying = ({ setPosition }) => {
  const initData = [
    { name: "Artist", id: 1, isSelect: false },
    { name: "Graphic Design", id: 2, isSelect: false },
    { name: "Software Development", id: 3, isSelect: false },
    { name: "Project Management", id: 4, isSelect: false },
    { name: "Research & Content Creation", id: 5, isSelect: false },
    { name: "Marketing", id: 6, isSelect: false },
    { name: "Community Management", id: 7, isSelect: false },
    { name: "Other", id: 8, isSelect: false },
  ];

  const [data, setData] = useState(initData);

  useEffect(() => {
    const list = data.filter((a) => a.isSelect).map((v) => v.name);
    if (setPosition) setPosition(list);
  }, [data]);

  const handleSelect = (val) => {
    const updateData = data.map((v) => {
      if (v.id === val.id)
        return {
          ...v,
          isSelect: !v.isSelect,
        };

      return {
        ...v,
      };
    });
    setData(updateData);
  };

  const { width } = useWindowSize();
  return (
    <Box sx={{ flexGrow: 1, marginTop: 5, marginBottom: 10 }}>
      <Container maxWidth="xxl">
        <Grid container spacing={5} style={{ justifyContent: "center" }}>
          <Grid item md={2} />
          <Grid item md={8}>
            <p className="join-title">
              Select the position you are applying for
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
              <Grid container spacing={2} style={{ justifyContent: "center" }}>
                {data.map((d, i) => (
                  <PositionApplyingCard
                    handleSelect={handleSelect}
                    key={i}
                    data={d}
                  />
                ))}{" "}
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
                <PositionApplyingCard data={d} handleSelect={handleSelect} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default PositionApplying;

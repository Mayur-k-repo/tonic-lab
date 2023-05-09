import React from "react";
import "./styles.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { Container } from "@mui/material";
import designImg from "../../../assets/images/service/Design.png";
import dataImg from "../../../assets/images/service/Data.png";
import developmentImg from "../../../assets/images/service/Development.png";
import NFTImg from "../../../assets/images/service/NFT.png";
import postLauchImg from "../../../assets/images/service/PostLauch.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import useWindowSize from "src/hooks";
import JoinSectionCard from "src/components/CareerComponents/JoinSection/JoinSectionCard";
import FlipCard from "../../UI/FlipCard";

const Services = () => {
  const data = [
    {
      name: "Design Creation",
      img: designImg,
      desc:
        "Partnering with a team of talented artists, specializing in a range of genres, our compa delivers exceptional design and creation services. Our artists are skilled in producing both trendy and timeless 2D and 3D digital artworks, and take pride in delivering only the highest quality work to our community and clients through close collaboration and an unwavering commitment to excellence.",
    },
    {
      name: "Post Lauch \nSupport",
      img: postLauchImg,
      desc:
        "This is built into every one of our projects.We believe communities with solid team, great artworks and real utilities, tend to have continuity and will prosper in the long run. Projects founded by tonicLABS are designed to be long-term, with real and lasting benefits for token holders as part of a broader and constantly-evolving ecosystem.\n\n" +
        "Our team members contact information will always be publicly available.",
    },
    {
      name: "Development",
      img: developmentImg,
      desc:
        "Specializing in developing decentralized applications and NFT collections using cutting-edge blockchain technology, our team of skilled developers design and implement sophisticated dApps as well as artwork by talented artists from around the world. The comprehensive development process includes in-house and external reviews and testing to ensure a bug-free, secure, and seamless final product.",
    },
    {
      name: "NFTs \nmarket",
      img: NFTImg,
      desc:
        "We believe art and utility can coexist.\n" +
        "Our team is committed to redefining the culture of NFTs through a series of well thought-out projects, as a way to cast a light on important and germane social and economic matters in the Metavserse and beyond.\n" +
        "Every one of our projects come with significant utilities for token holders across our entire ecosystem.",
    },
    {
      name: "Data \nAnalytics",
      img: dataImg,
      desc: "To enhance our research and improve efficiency, we built an advanced smart money tracking platform for NFT projects which analyzes pertinent quantitative and qualitative data flows across a wide range of metrics to streamline the NFT research process and increase profitability on trades and investments. Learn more about decrypt.ai platform below.",
    },
  ];
  const { width } = useWindowSize();
  return (
    <section className="servicesWrapper" id="services">
      {/* <SectionTitle>Services</SectionTitle> */}
      {/* <Box sx={{ flexGrow: 1 }}>
        {width > 600 ? (
          <Container maxWidth="xxl">
            <Grid container spacing={5} style={{ justifyContent: "center" }}>
              <Grid item xl={1} />
              <Grid item xl={10}>
                <Grid container spacing={5}>
                  <Grid item xs={5}>
                    <FlipCard
                      front={
                        <div className="dark-box-service">
                          <div className="background-card card-1" />
                          <div className="d-flex justify-flex-end ">
                            <div className="icon-wrapper ">
                              <img src={data[0].img} alt={"designImg"} />
                            </div>
                          </div>
                          <div>
                            <h4 className="card-title">{data[0].name}</h4>
                          </div>
                        </div>
                      }
                      back={
                        <div className="dark-box-service">
                          <div className="background-card card-3" />
                          <div className="d-flex justify-space-between align-end">
                            <div>
                              <h3 className="text-title">{data[0].name}</h3>
                              <p>{data[0].desc}</p>
                            </div>
                          </div>
                        </div>
                      }
                    />

                    <div className="mt-35">
                      <FlipCard
                        front={
                          <div className="dark-box-service">
                            <div className="background-card card-2" />
                            <div>
                              <div className="icon-wrapper ">
                                <img src={data[1].img} alt={"designImg"} />
                              </div>
                            </div>
                            <div className="d-flex justify-flex-end ">
                              <h4 className="card-title">{data[1].name}</h4>
                            </div>
                          </div>
                        }
                        back={
                          <div className="dark-box-service">
                            <div className="background-card card-3" />
                            <div className="d-flex justify-space-between align-end">
                              <div>
                                <h3 className="text-title">{data[1].name}</h3>
                                <p>{data[1].desc}</p>
                              </div>
                            </div>
                          </div>
                        }
                      />
                    </div>
                  </Grid>
                  <Grid item xs={7}>
                    <FlipCard
                      front={
                        <div className="dark-box-service">
                          <div className="background-card card-3" />
                          <div className="d-flex justify-space-between align-end mt-15 mb-12">
                            <div>
                              <h4 className="card-title mt-80">
                                {data[2].name}
                              </h4>
                            </div>
                            <div className="d-flex justify-flex-end ">
                              <div className="icon-wrapper ">
                                <img src={data[2].img} alt={"designImg"} />
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                      back={
                        <div className="dark-box-service">
                          <div className="background-card card-3" />
                          <div className="d-flex justify-space-between align-end">
                            <div>
                              <h3 className="text-title">{data[2].name}</h3>
                              <p>{data[2].desc}</p>
                            </div>
                          </div>
                        </div>
                      }
                    />

                    <div className="mt-35">
                      <Grid container spacing={5}>
                        <Grid item md={6}>
                          <FlipCard
                            front={
                              <div className="dark-box-service">
                                <div className="background-card card-4" />
                                <div className="mb-66">
                                  <h4 className="card-title ">
                                    {data[3].name}
                                  </h4>
                                </div>

                                <div className="d-flex justify-center mb-20">
                                  <div className="icon-wrapper ">
                                    <img src={data[3].img} alt={"designImg"} />
                                  </div>
                                </div>
                              </div>
                            }
                            back={
                              <div className="dark-box-service">
                                <div className="background-card card-3" />
                                <div className="d-flex justify-space-between align-end">
                                  <div>
                                    <h3 className="text-title">
                                      {data[3].name}
                                    </h3>
                                    <p>{data[3].desc}</p>
                                  </div>
                                </div>
                              </div>
                            }
                          />
                        </Grid>
                        <Grid item md={6}>
                          <FlipCard
                            front={
                              <div className="dark-box-service">
                                <div className="background-card card-1" />
                                <div className="d-flex justify-center pb-20 ">
                                  <div className="icon-wrapper ">
                                    <img src={data[4].img} alt={"designImg"} />
                                  </div>
                                </div>
                                <div className="mt-76">
                                  <h4 className="card-title">{data[4].name}</h4>
                                </div>
                              </div>
                            }
                            back={
                              <div className="dark-box-service">
                                <div className="background-card card-3" />
                                <div className="d-flex justify-space-between align-end">
                                  <div>
                                    <h3 className="text-title">
                                      {data[4].name}
                                    </h3>
                                    <p>{data[4].desc}</p>
                                  </div>
                                </div>
                              </div>
                            }
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={1} />
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
                  <FlipCard
                    front={
                      <div className="dark-box-service">
                        <div className="background-card card-1" />
                        <div className="d-flex justify-center pb-20 ">
                          <div className="icon-wrapper ">
                            <img src={d.img} alt={"designImg"} />
                          </div>
                        </div>
                        <div className="mt-10 text-center">
                          <h4 className="card-title">{d.name}</h4>
                        </div>
                      </div>
                    }
                    back={
                      <div className="dark-box-service">
                        <div className="background-card card-3" />
                        <div className="d-flex justify-space-between align-end">
                          <div>
                            <h3 className="text-title">{d.name}</h3>
                            <p>{d.desc}</p>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box> */}


      <Container maxWidth="false">
        <Grid container spacing={6}>
          <Grid item md={1} />
          <Grid item md={10}>
            <Grid container spacing={6}>
              <Grid item md={6} sm={12} xs={12}>
                <FlipCard
                  front={
                    <div className="dark-box-service"
                      data-aos-duration="500"
                      data-aos="zoom-in-up"
                    >
                      <div className="background-card card-1" />
                      <div className="d-flex justify-flex-end icon-container">
                        <div className="icon-wrapper ">
                          <img src={data[0].img} alt={"designImg"} />
                        </div>
                      </div>
                      <div>
                        <h4 className="card-title">{data[0].name}</h4>
                      </div>
                    </div>
                  }
                  back={
                    <div className="dark-box-service"
                      data-aos-duration="500"
                      data-aos="zoom-in-up"
                    >
                      <div className="background-card card-3" />
                      <div className="d-flex justify-space-between align-end">
                        <div>
                          <h3 className="text-title">{data[0].name}</h3>
                          <p className="flip-description">{data[0].desc}</p>
                        </div>
                      </div>
                    </div>
                  }
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <FlipCard
                  front={
                    <div className="dark-box-service"
                      data-aos-duration="500"
                      data-aos="zoom-in-up">
                      <div className="background-card card-1" />
                      <div className="d-flex justify-flex-end icon-container">
                        <div className="icon-wrapper ">
                          <img src={data[2].img} alt={"designImg"} />
                        </div>
                      </div>
                      <div>
                        <h4 className="card-title">{data[2].name}</h4>
                      </div>
                    </div>
                  }
                  back={
                    <div className="dark-box-service"
                      data-aos-duration="500"
                      data-aos="zoom-in-up"
                    >
                      <div className="background-card card-3" />
                      <div className="d-flex justify-space-between align-end">
                        <div>
                          <h3 className="text-title">{data[2].name}</h3>
                          <p className="flip-description">{data[2].desc}</p>
                        </div>
                      </div>
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={1} />
        </Grid>
      </Container>
    </section>
  );
};

export default Services;

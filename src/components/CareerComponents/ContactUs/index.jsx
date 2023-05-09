import React, { useState } from "react";
import InputMui from "../../UI/InputMui";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./styles.scss";
import TextArea from "../../UI/TextArea";
import InputFile from "../../UI/InputFile";
import SendBtn from "../../../assets/images/send-btn.png";
import PositionApplying from "../PositionApplying/inedx";

const ContactUs = () => {
  const [position, setPosition] = useState();

  return (
    <>
      <PositionApplying setPosition={setPosition} />
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="xxl">
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item md={3} />
            <Grid xs={12} item md={6}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <div
                    className="contact-wrapper"
                    data-aos-duration="1500"
                    data-aos="zoom-in-up"
                  >
                    <div className="contact-bg-effect shad-1" />
                    <div className="contact-bg-effect shad-2" />
                    <div className="contact-form">
                      <div className="input-control">
                        <InputMui type="text" placeholder="Name" />
                      </div>
                      <div className="input-control">
                        <InputMui type="email" placeholder="Email" />
                      </div>
                      <div className="input-control">
                        <InputMui
                          type="number"
                          placeholder="Phone (Optional)"
                        />
                      </div>

                      <div className="input-control">
                        <TextArea placeholder="Tell us more about you" />
                      </div>
                      <div className="input-control">
                        <InputFile placeholder="Tell us more about you" />
                      </div>

                      <div className="mt-15">
                        <img
                          src={SendBtn}
                          alt="SendBtn"
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactUs;

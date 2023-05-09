import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./styles.scss";
import Button from "@mui/material/Button";
import { ReactComponent as EmailIcon } from "../../../assets/images/mail.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/images/twitter.svg";
import footerFullImg from "../../../assets/images/footer-logo.png";

const Footer = () => {
  const navigation = [
    // { name: "Home", link: "/#Home" },
    // { name: "About us", link: "/#about" },
    { name: "Services", link: "/#services" },
    { name: "Projects", link: "/#projects" },
    { name: "Team", link: "/#team" },
  ];
  const products = [
    // { name: "Decrypt.ai", link: "https://decrypt.ai/" },
    // { name: "Conflicted Garys", link: "https://conflictedgarys.com/" },
    { name: "Starving  Models", link: "https://starvingmodels.io/" },
    { name: "Boomerang.art", link: "https://boomerang.art/" },
  ];

  const company = [
    {
      name: "Terms | Conditions",
      link: "/terms-and-conditions",
      isOpenNewTab: true,
    },
    { name: "Careers", link: "/career" },
  ];
  return (
    <div className="footer-wrapper">
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="false">
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item xl={12}>
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <div className="footer-link-wrapper">
                    <div className="navigation-link-wrapper">
                      <h4 className="text-anton font-regular">Navigation</h4>
                      <ul>
                        {navigation.map((n, i) => (
                          <li key={i}>
                            <a href={n.link} className="textDecoration text-inter">
                              <Button sx={{ my: 1, display: "block", fontFamily: 'inherit' }}>
                                {n.name}
                              </Button>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="navigation-link-wrapper">
                      <h4 className="text-anton font-regular">Products</h4>
                      <ul>
                        {products.map((n, i) => (
                          <li key={i}>
                            <a href={n.link} target="_blank" className="text-inter">
                              <Button sx={{ my: 1, display: "block", fontFamily: 'inherit' }}>
                                {n.name}
                              </Button>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="footer-link-wrapper mt-30">
                    <div className="navigation-link-wrapper">
                      <h4 className="text-anton font-regular">Company</h4>
                      <ul>
                        {company.map((n, i) => (
                          <a
                            className="textDecoration text-inter"
                            href={n.link}
                            target={n.isOpenNewTab ? "_blank" : ""}
                          >
                            <li key={i}>
                              <Button sx={{ my: 1, display: "block", fontFamily: 'inherit' }}>
                                {n.name}
                              </Button>
                            </li>
                          </a>
                        ))}
                      </ul>
                    </div>
                    <div className="navigation-link-wrapper">
                      <h4 className="text-anton font-regular">Social</h4>
                      <div className="d-flex social-wrapper">
                        <a href="https://twitter.com/Toniclabsio">
                          <TwitterIcon className="cursor-pointer" />
                        </a>
                        <a href="mailto:info@toniclabs.io">
                          <EmailIcon className="ml-10 cursor-pointer" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pb-30">
                    <p>© 2018-2023 tonicLABS.io. All rights reserved.</p>
                  </div>
                </Grid>
                <Grid
                  item
                  md={6}
                  style={{ alignItems: "end", display: "flex" }}
                >
                  <img src={footerFullImg} className="w-full full-img-logo" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;

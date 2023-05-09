import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { ReactComponent as AdbIcon } from "../../assets/images/logo/logo.svg";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import "./styles.scss";
import CustomButton from "../UI/CustomButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    // { label: "About us", link: "/#about" },
    { label: "Services", link: "/#services" },
    { label: "Projects", link: "/#projects" },
    { label: "Team", link: "/#team" },
  ];

  return (
    <AppBar
      position="static"
      className="appBarWrapper"
      style={{ background: "transparent" }}
    >
      <Container maxWidth="false">
        <Toolbar disableGutters className="justify-space-between w-full">
          <Link to={"/"}>
            <AdbIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              className="logo"
            />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
            className="linkNavWrapper"
          >
            {pages.map((page) => (
              <a className="textDecoration" key={page.label} href={page.link}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block", fontWeight: "400", fontFamily: "'Anton', 'Montserrat'", fontSize: '16px', color: '#CDCDCD' }}
                >
                  {page.label}
                </Button>
              </a>
            ))}
            {/*<CustomButton*/}
            {/*  variant="outlined"*/}
            {/*  onClick={handleCloseNavMenu}*/}
            {/*  sx={{ my: 2, display: "block" }}*/}
            {/*>*/}
            {/*  Contact us*/}
            {/*</CustomButton>*/}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <a key={page.label} href={page.link} className="color-unset">
                    <Typography textAlign="center">{page.label}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

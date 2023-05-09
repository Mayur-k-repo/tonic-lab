import React, { useState } from "react";
import mail from "../../../assets/images/mail.png";
import twitter from "../../../assets/images/twitter.png";
import { makeStyles } from "@mui/styles";
import { ClickAwayListener, Grow, Paper, Popper } from "@mui/material";

const useStyles = makeStyles(() => ({
  paper: {
    padding: '20px !important',
    background: '#111110 !important',
    boxShadow: '0px 4px 50px rgba(237, 235, 230, 0.2) !important',
    borderRadius: '35px !important',
    overflow: 'hidden',
    width: '400px !important',
    maxWidth: '300px !important',
    minWidth: '200px !important',
  }
}));

const TeamCard = ({ user }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);


  const handleOpen = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuOpen = () => {
    setOpen(true);
    setAnchorEl(anchorEl);
  };

  const handleClose = () => {
    // setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div className="grid-item">
      <div className="team-bg">
        <div className="team-user-info">

          <img
            alt="user-info"
            src={user.userImg}
            className={`cursor-pointer ${open ? "active" : ""}`}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          />


          <Popper open={open} anchorEl={anchorEl} placement="bottom" transition
            modifiers={[
              {
                name: 'offset',
                options: {
                  offset: [0, 10],
                },
              },
            ]}
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps} in={open}
                timeout={300}
                style={{ transformOrigin: '0 0 0' }} >
                <Paper classes={{ root: classes.paper }}
                  onAnimationEnd={() => !open && setAnchorEl(null)}
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <div className="user-info-popover"
                      onMouseEnter={handleMenuOpen}
                      onMouseLeave={handleClose}
                    >
                      <div className="d-flex align-center justify-space-between w-full">
                        <div className="user-name">
                          <h4 className="team-user-name">{user.name}</h4>
                          <p className="user-position">{user.position}</p>
                        </div>
                        {/* <div className="social-media-user">
                          {user.mail && (
                            <a href={user.mail} target="_blank">
                              <img
                                src={mail}
                                alt="mail-icon"
                                className="cursor-pointer mr-4"
                              />
                            </a>
                          )}

                          {user.twitter && (
                            <a href={user.twitter} target="_blank">
                              <img
                                src={twitter}
                                alt="twitter-icon"
                                className="cursor-pointer ml-4"
                              />
                            </a>
                          )}
                        </div> */}
                      </div>
                      {/* <p className="user-info-text">{user.userInfo}</p> */}
                    </div>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </div >
  );
};

export default TeamCard;

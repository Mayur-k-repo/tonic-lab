import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ children, ...res }) => {
  return <Button {...res}>{children}</Button>;
};

export default CustomButton;

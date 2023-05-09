import React from "react";
import NavBar from "../NavBar";
import Footer from "../homeComponents/Footer";

const PageWrapper = ({ children }) => {
  return (
    <div className="app-background">
      <NavBar />
      <div className="page-height">{children}</div>
      <Footer />
    </div>
  );
};

export default PageWrapper;

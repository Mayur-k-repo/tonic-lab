import React from "react";
import "./styles.scss";

const SectionTitle = ({ textAlign = "center", children }) => {
  return (
    <h2 className={`section-title text-${textAlign} text-uppercase text-anton`}>
      {children}
    </h2>
  );
};

export default SectionTitle;

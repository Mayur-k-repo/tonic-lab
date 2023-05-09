import React, { useRef } from "react";
import cs from "classnames";
import Choose from "../../../assets/images/choose.png";
import "./styles.scss";

const InputFile = ({
  placeholder = "Attach resume",
  value,
  className,
  ...res
}) => {
  const ref = useRef();
  const handleFileClick = () => {
    ref.current.click();
  };
  return (
    <div className={cs("input-file", { [className]: className })}>
      <input
        ref={ref}
        type="file"
        {...res}
        style={{ opacity: 0, visibility: "hidden", position: "absolute" }}
      />
      <div className="d-flex justify-space-between align-center">
        <div>{value ? value : placeholder}</div>
        <div>
          <img
            src={Choose}
            alt="Choose"
            className="cursor-pointer"
            onClick={handleFileClick}
          />
        </div>
      </div>
    </div>
  );
};

export default InputFile;

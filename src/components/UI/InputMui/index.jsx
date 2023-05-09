import React from "react";
import cs from "classnames";
import "./styles.scss";

const InputMui = ({ className, ...res }) => {
  return (
    <div>
      <input
        className={cs("input-design", { [className]: className })}
        {...res}
      />
    </div>
  );
};

export default InputMui;

import React from "react";
import cs from "classnames";

const TextArea = ({
  className,
  row = 12,
  value = "",
  placeholder = "",
  ...res
}) => {
  return (
    <textarea
      className={cs("input-design", { [className]: className })}
      rows={row}
      placeholder={placeholder}
      {...res}
    >
      {value ? value : ""}
    </textarea>
  );
};

export default TextArea;

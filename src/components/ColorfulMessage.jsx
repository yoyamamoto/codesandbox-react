import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentAbbr = {
    color
    // color : color
  };
  return <p style={contentAbbr}>{children}</p>;
};
export default ColorfulMessage;

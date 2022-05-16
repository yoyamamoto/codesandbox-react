import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const contentAbbr = {
    color: props.color
  };
  return <p style={contentAbbr}>{props.children}</p>;
};
export default ColorfulMessage;

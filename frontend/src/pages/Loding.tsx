import React from "react";
import spinner from "../images/loading.gif";
const style = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "70px",
  borderRadius: "5px",
};
const Loading = () => {
  return <img src={spinner} style={style} alt="Loading" />;
};

export default Loading;

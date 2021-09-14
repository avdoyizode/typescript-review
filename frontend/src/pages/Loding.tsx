import React from "react";
import spinner from "../images/loading.gif";

const Loading = () => {
  return (
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default Loading;

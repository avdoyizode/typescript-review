import React from "react";

import error from "../images/404.gif";
const style = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "75vw",
  height: "100vh",
  borderRadius: "5px",
};
const Error = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <img src={error} style={style} alt="error" />;
      </div>
    </>
  );
};

export default Error;

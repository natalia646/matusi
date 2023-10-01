import React from "react";
import error from "../assets/error.svg";

const style = {
  width: "52.84581rem",
  height: "31.375rem",
  display: 'block',
  margin: '4.5rem auto ',
  width: '50%',
};

const Error = () => {
  return <img style={style} src={error} alt="error"></img>;
};

export default Error;

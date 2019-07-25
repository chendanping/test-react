import React from "react";
import "./style.css";
import _ from "../util/underscore";

function d3() {
  console.log(_);
  return (
    <svg height="300" width="300">
      <rect width="10" height="23" x="0" y="0" />
      <rect width="20" height="23" x="0" y="25" />
      <rect width="30" height="23" x="0" y="50" />
    </svg>
  );
}

export default d3;

import React from "react";
import img from "./images/placeholder.png";

const ImgButton = () => (
  <button style={{ backgroundColor: "none", border: "0px" }}>
    <img src={img} alt={"placeholder"} /> Placeholder Button
  </button>
);

export { ImgButton };

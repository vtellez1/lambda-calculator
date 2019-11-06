import React from "react";
import { tsPropertySignature } from "@babel/types";

 const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button>{props.button}</button>}
    </>
  );
};export default NumberButton;

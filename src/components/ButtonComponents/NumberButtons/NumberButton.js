import React from "react"; 

const NumberButton = props => {
  return (
    <button className="buttons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.setNumberState}
    </button>
  );
};

export default NumberButton;

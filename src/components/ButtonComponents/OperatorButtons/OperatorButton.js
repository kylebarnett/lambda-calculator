import React from "react";

const OperatorButton = props => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.setOperatorState.char}
    </div>
  );
};

export default OperatorButton;
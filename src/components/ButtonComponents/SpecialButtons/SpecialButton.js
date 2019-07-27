import React from "react";

const SpecialButton = props => {
  return (
    <button className="special-buttons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.setSpecialsState}
    </button>
  );
};

export default SpecialButton
import React from "react";
import "./face.css";

const eyes = ["eye1", "eye2"];

const pupilStyle = (keyData) => {
  return {
    transform: `translate(${keyData.translateX * 2}%, ${
      keyData.translateY * 2
    }%)`
  };
};

export const Face = React.memo(
  ({ keyData = { translateX: 0, translateY: 0 } }) => {
    return (
      <div className="face">
        <div className="row">
          {eyes.map((index) => (
            <div className="eye" key={index}>
              <div className="pupil" style={pupilStyle(keyData)} />
            </div>
          ))}
        </div>
        <div className="nose" />
      </div>
    );
  }
);

import { keyData } from "../../utils/keyData";
import "./input.css";

export const Input = ({ keyPressed }) => {
  const handleKeyPressed = (keyCode) => {
    keyPressed(keyCode in keyData ? keyData[keyCode] : keyData["Reset"]);
  };

  return (
    <input
      className="input"
      type="text"
      placeholder="TYPE ON ME"
      onKeyDown={(e) => handleKeyPressed(e.code)}
      autoFocus
      value=""
      onBlur={handleKeyPressed}
    />
  );
};

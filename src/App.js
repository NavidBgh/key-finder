import { useState } from "react";
import { Face } from "./components/Face/Face";
import { Input } from "./components/Input/Input";
import "./styles.css";

const faceStyle = (keyData) => {
  return {
    transform: `skewY(${-keyData?.translateX / 30}deg)`
  };
};

export default function App() {
  const [keyData, setKeyData] = useState({});

  return (
    <div className="app" style={faceStyle(keyData)}>
      <Face keyData={keyData} />
      <Input keyPressed={setKeyData} />
    </div>
  );
}

import { useState } from "react";

export default function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <>
      <Light lightOn={lightOn} setLightOn={setLightOn} />
    </>
  );
}

const Light = ({ lightOn, setLightOn }) => {
  return (
    <>
      <LightBulb lightOn={lightOn} />
      <LightSwitch lightOn = {lightOn} setLightOn={setLightOn} />
    </>
  );
};

const LightBulb = ({ lightOn }) => {
  return (
    <>
      <div>{lightOn ? "Light On" : "Light off"}</div>
    </>
  );
};

const LightSwitch = ({ lightOn, setLightOn }) => {
  return (
    <>
      <button
        onClick={() =>
          setLightOn((current) => {
           return !current;
          })
        }
      >
        {lightOn ? "Turn Light Off" : "Turn Light On"}
      </button>     
    </>
  );
};

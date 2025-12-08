import { useState } from "react";

function App() {
  const [tabData, setTabData] = useState(1);

  return (
    <>
      <button
        onClick={() => setTabData(1)}
        style={{ color: tabData === 1 ? "blue" : "black" }}
      >
        Home
      </button>
      <button
        onClick={() => setTabData(2)}
        style={{ color: tabData === 2 ? "blue" : "black" }}
      >
        Notifications
      </button>
      <button
        onClick={() => setTabData(3)}
        style={{ color: tabData === 3 ? "blue" : "black" }}
      >
        Explore
      </button>
      <button
        onClick={() => setTabData(4)}
        style={{ color: tabData === 4 ? "blue" : "black" }}
      >
        Profile
      </button>
    </>
  );
}

export default App;

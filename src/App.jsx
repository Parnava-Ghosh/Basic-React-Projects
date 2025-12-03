import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          cursor: "pointer",
          border: "none",
          background: "transparent",
          position: "relative",
          padding: 0,
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/1827/1827422.png"
          alt="notifications"
          style={{
            width: "35px",
            aspectRatio: "1/1",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        {count > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              backgroundColor: "#ff3b30",
              color: "white",
              fontSize: "7px",
              fontWeight: "bold",
              minWidth: "10px",
              height: "10px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 6px",
              border: "2px solid white",
            }}
          >
            {count > 99 ? "99+" : count}
          </span>
        )}
      </button>
    </>
  );
}

export default App;

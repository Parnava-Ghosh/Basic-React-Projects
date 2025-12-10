import { useRef, useState } from "react";

export default function App() {
  // import { useEffect } from 'react';
  const [sec, setSec] = useState(0);
    const timer = useRef();
  function startClock() {
    let value = setInterval(() => {
      setSec((c) => c + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock(){
    clearInterval(timer.current);
  }

  return (
    <>
      <span>{sec}</span> <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </>
  );
}

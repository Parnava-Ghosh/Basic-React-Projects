import { useEffect, useRef, useState } from "react";

export default function App() {
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timer = useRef();

  // useEffect handles the interval logic based on isRunning state
  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setSec((c) => c + 1);
      }, 1000);
    }

    // Cleanup: clear interval when isRunning changes or component unmounts
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [isRunning]); // Re-run effect when isRunning changes

  function startClock() {
    setIsRunning(true);
  }

  function stopClock() {
    setIsRunning(false);
  }

  function resetClock() {
    setIsRunning(false);
    setSec(0);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Stopwatch
        </h1>
        
        <div className="text-7xl font-bold text-indigo-600 mb-8 text-center tabular-nums">
          {sec}<span className="text-4xl text-gray-400">s</span>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={startClock}
            disabled={isRunning}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 active:scale-95 transition disabled:bg-gray-300 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            Start
          </button>
          <button
            onClick={stopClock}
            disabled={!isRunning}
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 active:scale-95 transition disabled:bg-gray-300 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            Stop
          </button>
          <button
            onClick={resetClock}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 active:scale-95 transition"
          >
            Reset
          </button>
        </div>
        
        <div className="mt-6 text-sm text-gray-500 text-center">
          Status: <span className="font-semibold">{isRunning ? "Running" : "Stopped"}</span>
        </div>
      </div>
    </div>
  );
}
import { createContext, useContext, useState } from "react";
const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Show/>
    </CountContextProvider>
  );
}

function Increase() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Decrease() {
  const { count, setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount(count - 1)}>
      Decrease
    </button>
  );
}

function Show(){
  const {count} = useContext(CountContext);
  return(
    <>
      {`Value = ${count}`}
    </>
  )
}

function App() {
  return (
    <>
      <Counter />
    </>
  );
}
export default App;
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link> |
        <Link to="/neet/online-coaching-class-11">Class 11</Link>|
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11 />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12 />} />
        </Routes>
      </BrowserRouter>
    </>
  );

  function Home() {
    return (
      <>
        <h1 style={{ fontFamily: "system UI" }}>Home Page</h1>
      </>
    );
  }

  function Class11() {
    return(
    <>
      <h1 style={{ fontFamily: "system UI" }}>Class 11th</h1>;
    </>);
  }

  function Class12() {
    return(
    <>
      <h1 style={{ fontFamily: "system UI" }}>Class 12th</h1>;
    </>);
  }
}

export default App;

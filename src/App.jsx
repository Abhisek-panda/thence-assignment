import { Routes, Link, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <HomePage />
        </Route>
      </Routes>
    </>
  );
}

export default App;

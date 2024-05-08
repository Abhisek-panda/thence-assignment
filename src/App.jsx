import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/form" Component={FormPage} />
        <Route path="/success" Component={SuccessPage} />
      </Routes>
    </>
  );
}

export default App;

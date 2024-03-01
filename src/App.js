import "./index.css"
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Authcontextprovider } from "./context/Authcontext";

function App() {
  return (
    <>
    <Authcontextprovider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Authcontextprovider>
    </>
  );
}

export default App;

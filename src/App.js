import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./GlobalVariables.css";
import "./global.css";
import "./globalClasses.css";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const loader = document.getElementById("mainLoaderContainer");
    loader.style.display = "none";
  });
  return (
    <BrowserRouter className="App">
      <main className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

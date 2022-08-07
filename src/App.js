import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./GlobalVariables.css";
import "./global.css";
import "./globalClasses.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter className="App">
      <main className="App">
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

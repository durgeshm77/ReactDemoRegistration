import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Board from "./pages/Board";
import Investment from "./pages/Investment";
import Login from "./pages/Login";
import Challenge from "./pages/Challenge";
function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route exact path="/board" element={<Board />} />
            </Routes>
            <Routes>
                <Route exact path="/investment" element={<Investment />} />
            </Routes>
            <Routes>
                <Route exact path="/login" element={<Login />} />
            </Routes>
            <Routes>
                <Route exact path="/challenge" element={<Challenge />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;

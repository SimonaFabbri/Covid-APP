import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import State from "./pages/State";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:stateCode" element={<State />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

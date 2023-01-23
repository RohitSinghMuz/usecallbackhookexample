import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hochome from "./Hochome";
import Hocservice from "./Hocservice";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="" element={<Hochome />} />
          <Route path="/service" element={<Hocservice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

// pages import
import Home from "./pages/Home/Home";
import Idea from "./pages/Idea/Idea";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/idea/:id" element={<Idea />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components import
import Layout from "./Layout/Layout";

// pages import
import Home from "./pages/Home/Home";
import Idea from "./pages/Idea/Idea";
import Profile from "./pages/Profile/Profile";
import Post from "./pages/Post/Post";
import User from "./pages/User/User";

// route guard import
import { ProtectedRoute } from "./route-guards/Guards";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/idea/:id" element={<Idea />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/post" element={<Post />} />
          <Route path="/user/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

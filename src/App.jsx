import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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

// auth store import
import { useAuthStore } from "./store/useAuthStore";

import Loader from "./comman/Loader";

const App = () => {
  const { checkAuth, checkingAuth } = useAuthStore();
  React.useEffect(() => {
    checkAuth();
  }, []);

  if (checkingAuth) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#4ade80",
              secondary: "#000",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171",
              secondary: "#000",
            },
          },
        }}
      />
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
          <Route
            path="/post"
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            }
          />
          <Route path="/user/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

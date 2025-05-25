// React and Routing
import React from "react";
import { Link } from "react-router-dom";

// UI Components
import { Button } from "@/components/ui/button";

// Assets
import logo from "../assets/logo.png";

// Icons
import { FaGoogle } from "react-icons/fa";

// Stores
import { useAuthStore } from "@/store/useAuthStore";

/**
 * Navbar Component
 * - Responsive for all devices
 * - Shows logo and brand
 * - Shows user avatar and name if logged in, otherwise shows Sign Up button
 */
const Navbar = () => {
  const { user, signup, signingIn } = useAuthStore();

  // Handle Google signup
  const handleSignup = async () => {
    try {
      await signup();
    } catch (error) {
      // In production, use a toast or error boundary instead of console.log
      console.error("Signup failed:", error);
    }
  };

  return (
    <nav className="w-full h-16 bg-[#101010] flex items-center justify-between px-4 sm:px-6 md:px-16 border-b border-zinc-800 fixed z-20">
      {/* Logo and Brand */}
      <Link to="/" className="flex items-center gap-2 min-w-0">
        <div className="h-7 w-7 bg-white rounded-sm p-1 flex-shrink-0">
          <img src={logo} alt="Logo" className="h-full w-full object-contain" />
        </div>
        <h1 className="text-base text-white font-[Poppins] font-bold truncate">
          That-Idea
        </h1>
      </Link>

      {/* User Profile or Sign Up Button */}
      {user ? (
        <Link to="/profile" className="min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={user?.profilePicture}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover flex-shrink-0"
              referrerPolicy="no-referrer"
            />
            {/* Hide username on xs, show on sm+ */}
            <div className="hidden sm:flex flex-col min-w-0">
              <p className="text-xs font-[Inter] text-zinc-200">Hello</p>
              <h1 className="text-sm font-[Inter] text-white font-semibold truncate max-w-[100px]">
                {user?.username}
              </h1>
            </div>
          </div>
        </Link>
      ) : (
        <Button
          onClick={handleSignup}
          className="flex items-center rounded-sm cursor-pointer bg-white text-black hover:bg-white/80 px-4 py-2 text-sm"
          aria-label="Sign up with Google"
        >
          <FaGoogle className="text-black mr-2" />
          {signingIn ? "Wait..." : "Sign Up"}
        </Button>
      )}
    </nav>
  );
};

export default Navbar;

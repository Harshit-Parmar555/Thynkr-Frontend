// React and Routing
import React from "react";
import { useNavigate } from "react-router-dom";

// UI Components
import { Button } from "@/components/ui/button";
import IdeaCard from "@/comman/IdeaCard";

// Store
import { useAuthStore } from "@/store/useAuthStore";

/**
 * Profile Page
 * - Shows user info, avatar, and action buttons
 * - Lists user's ideas in a responsive grid
 * - Responsive and accessible
 */
const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  // Handle logout
  const handleLogout = () => {
    try {
      logout();
    } catch (error) {
      // In production, use a toast or error boundary instead of console.log
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="w-full pt-32 flex flex-col items-center">
      {/* Enhanced User Info Section */}
      <div className="w-[95%] lg:w-[60%] bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl shadow-xl p-8 flex flex-col  md:flex-row  items-center md:items-center justify-between gap-8 mb-12 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-700/20 rounded-full blur-2xl z-0"></div>

        {/* User Avatar and Info */}
        <div className="relative z-10 flex items-center md:items-center gap-6 w-full md:w-auto">
          <div className="relative">
            <img
              src={user.profilePicture}
              alt={`${user.username}'s avatar`}
              className="h-16 w-16  md:w-28 md:h-28 rounded-full border-2 border-zinc-600 shadow-lg object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-[Poppins] truncate max-w-[200px]">
              {user.username}
            </div>
            <div className="text-zinc-400 mt-1 flex items-center gap-2 font-[Inter] text-sm truncate max-w-[220px]">
              {user.email}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 z-10 md:justify-end md:items-start">
          <Button
            onClick={() => navigate("/post")}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-600/80 text-white px-8 py-3 rounded-md font-semibold shadow-md transition-all duration-200 font-[Inter] cursor-pointer"
          >
            + Add New Idea
          </Button>
          <Button
            onClick={handleLogout}
            className="w-full md:w-auto bg-red-600 hover:bg-red-600/80 text-white px-8 py-3 rounded-md font-semibold shadow-md transition-all duration-200 font-[Inter] cursor-pointer"
          >
            Logout
          </Button>
        </div>
      </div>

      {/* User's Ideas Section */}
      <div className="w-full max-w-7xl grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
        {user.ideas.length > 0 ? (
          user.ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} loggedInUser={user._id} />
          ))
        ) : (
          <div className="col-span-full text-center text-zinc-400">
            You haven't uploaded any ideas yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import { Button } from "@/components/ui/button";
import IdeaCard from "@/comman/IdeaCard";
import { useNavigate } from "react-router-dom";

// auth store import
import { useAuthStore } from "@/store/useAuthStore";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    try {
      logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="w-full pt-32 flex flex-col items-center">
      {/* Enhanced User Info Section */}
      <div className="w-full sm:w-[90%] lg:w-[60%] bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-700/20 rounded-full blur-2xl z-0"></div>

        {/* User Avatar with ring */}
        <div className="relative z-10 flex items-center gap-6">
          <div className="relative">
            <img
              src={user.profilePicture}
              alt={`${user.username}'s avatar`}
              className="w-28 h-28 rounded-full border-4 border-blue-600 shadow-lg object-cover"
            />
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight font-[Poppins]">
              {user.username}
            </div>
            <div className="text-zinc-400 mt-1 flex items-center gap-2 font-[Inter] text-sm">
              {user.email}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 z-10">
          <Button
            onClick={() => navigate("/post")}
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold shadow-md transition-all duration-200 font-[Lato]"
          >
            + Add New Idea
          </Button>
          <Button
            onClick={handleLogout}
            className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold shadow-md transition-all duration-200 font-[Lato]"
          >
            Logout
          </Button>
        </div>
      </div>

      {/* User's Ideas Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
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

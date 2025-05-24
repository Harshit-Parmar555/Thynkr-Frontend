import React, { useEffect } from "react";
import IdeaCard from "@/comman/IdeaCard";
import { useUserStore } from "@/store/useUserStore";
import { useParams } from "react-router-dom";

const User = () => {
  const { viewUser, fetchingUser, fetchUser } = useUserStore();
  const { id } = useParams();
  useEffect(() => {
    fetchUser(id);
  }, [fetchUser]);
  return (
    <div className="w-full pt-32 flex flex-col items-center min-h-screen">
      {/* User Info Section */}
      <div className="w-full sm:w-[90%] lg:w-[60%] bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-700/20 rounded-full blur-2xl z-0"></div>

        {/* User Avatar and Info */}
        <div className="relative z-10 flex items-center gap-6">
          <div className="relative">
            <img
              src={viewUser?.profilePicture}
              alt={`${viewUser?.username}'s avatar`}
              className="w-28 h-28 rounded-full border-4 border-blue-600 shadow-lg object-cover"
            />
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight font-[Poppins]">
              {viewUser?.username}
            </div>
            <div className="text-sm text-zinc-400 mt-1 flex items-center gap-2 font-[Inter]">
              {viewUser?.email}
            </div>
          </div>
        </div>
      </div>

      {/* User's Ideas Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
        {viewUser?.ideas?.length > 0 ? (
          viewUser?.ideas.map((idea) => <IdeaCard key={idea.id} idea={idea} />)
        ) : (
          <div className="col-span-full text-center text-zinc-400">
            This user hasn't uploaded any ideas yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default User;

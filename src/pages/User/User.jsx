// React and Routing
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// UI Components
import IdeaCard from "@/comman/IdeaCard";
import { IdeaCardSkeleton, UserProfileCardSkeleton } from "@/comman/Skeletons";

// Store
import { useUserStore } from "@/store/useUserStore";

/**
 * User Page
 * - Shows another user's profile and their ideas
 * - Responsive and accessible
 */
const User = () => {
  const { viewUser, fetchingUser, fetchUser } = useUserStore();
  const { id } = useParams();

  useEffect(() => {
    fetchUser(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="w-full pt-32 flex flex-col items-center min-h-screen">
      {/* User Info Section */}
      {fetchingUser || !viewUser ? (
        <>
          <UserProfileCardSkeleton />
          <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <IdeaCardSkeleton key={idx} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="w-[95%] lg:w-[60%] bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 relative overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-700/20 rounded-full blur-2xl z-0"></div>

            {/* User Avatar and Info */}
            <div className="relative z-10 flex items-center gap-6">
              <div className="relative">
                <img
                  src={viewUser?.profilePicture}
                  alt={`${viewUser?.username}'s avatar`}
                  className="h-16 w-16 md:w-28 md:h-28 rounded-full border-2 border-zinc-600 shadow-lg object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-[Poppins] truncate max-w-[200px]">
                  {viewUser?.username}
                </div>
                <div className="text-sm text-zinc-400 mt-1 flex items-center gap-2 font-[Inter] truncate max-w-[220px]">
                  {viewUser?.email}
                </div>
              </div>
            </div>
          </div>

          {/* User's Ideas Section */}
          <div className="w-full max-w-7xl grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
            {viewUser?.ideas?.length > 0 ? (
              viewUser.ideas.map((idea) => (
                <IdeaCard key={idea.id} idea={idea} />
              ))
            ) : (
              <div className="col-span-full text-center text-zinc-400">
                This user hasn't uploaded any ideas yet.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default User;

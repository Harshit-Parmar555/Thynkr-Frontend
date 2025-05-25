// React and Routing
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Store
import { useIdeaStore } from "@/store/useIdeaStore";

// Utilities
import { formatDate } from "@/utils/dateFormat";

// UI Components
import { IdeaSkeleton } from "@/comman/Skeletons";

/**
 * Idea Page
 * - Displays detailed view of a single idea
 * - Shows loading skeleton while fetching
 * - Responsive and accessible
 */
const Idea = () => {
  const navigate = useNavigate();
  const { getIdea, viewIdea, fetchingIdea } = useIdeaStore();
  const { id } = useParams();

  // Navigate to user profile on avatar/name click
  const handleUserClick = () => {
    if (viewIdea?.user?._id) {
      navigate(`/user/${viewIdea.user._id}`);
    }
  };

  // Fetch idea details on mount or id change
  useEffect(() => {
    getIdea(id);
    // eslint-disable-next-line
  }, [id]);

  // Show skeleton while loading
  if (fetchingIdea || !viewIdea) {
    return <IdeaSkeleton />;
  }

  return (
    <div className="w-full pt-32 flex flex-col items-center">
      {/* Banner */}
      <div className="w-[95%] lg:w-[60%] aspect-[16/9] rounded-md overflow-hidden shadow-lg border-[1px] border-zinc-800">
        <img
          src={viewIdea?.coverImage}
          alt="Idea Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* User info and date */}
      <div className="w-full sm:w-[90%] lg:w-[60%] flex justify-between items-center mt-8 px-2">
        <div
          className="flex items-center gap-3 cursor-pointer rounded-lg p-2 transition hover:bg-zinc-800/40"
          onClick={handleUserClick}
        >
          <img
            src={viewIdea?.user?.profilePicture}
            alt={`${viewIdea?.user?.username}'s avatar`}
            className="w-10 h-10 rounded-full"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="text-base font-semibold text-white font-[Poppins] truncate max-w-[120px]">
              {viewIdea?.user?.username}
            </div>
            <div className="text-sm text-zinc-400 font-[Inter] truncate max-w-[140px]">
              {viewIdea?.user?.email || "No email"}
            </div>
          </div>
        </div>
        <div className="text-sm text-zinc-400 font-[Inter]">
          {formatDate(viewIdea?.createdAt)}
        </div>
      </div>

      {/* Description and Pitch */}
      <div className="w-full sm:w-[90%] lg:w-[60%] mt-8 px-4 pb-6">
        <h2 className="text-xl font-bold text-white mb-2 font-[Poppins]">
          Description
        </h2>
        <p className="text-base text-zinc-300 mb-6 font-[Inter]">
          {viewIdea?.description}
        </p>
        <h2 className="text-xl font-bold text-white mb-2 font-[Poppins]">
          Pitch
        </h2>
        <p className="text-base text-zinc-300 font-[Inter]">
          {viewIdea?.pitch || "No pitch provided."}
        </p>
      </div>
    </div>
  );
};

export default Idea;

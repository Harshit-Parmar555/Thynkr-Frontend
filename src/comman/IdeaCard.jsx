import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { formatDate } from "@/utils/dateFormat";

const IdeaCard = ({ idea }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/idea/${idea._id}`);
  };

  const handleUserClick = (e) => {
    e.stopPropagation();
    if (idea?.user?._id) {
      navigate(`/user/${idea?.user?._id}`);
    }
  };

  return (
    <div className="relative max-w-sm rounded-2xl border border-zinc-800 p-4 shadow-md bg-zinc-950 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-700/20 rounded-full blur-2xl z-0"></div>
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-700/20 rounded-full blur-2xl z-0"></div>

      {/* Card Content */}
      <div className="relative z-10">
        {/* User profile, name, and date */}
        <div className="flex items-center justify-between mb-3">
          <div
            className="flex items-center gap-3 cursor-pointer rounded-lg p-1 transition"
            onClick={handleUserClick}
          >
            <img
              src={idea?.user?.profilePicture}
              alt={`${idea?.user?.username}'s avatar`}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-white font-[Poppins]">
              {idea?.user?.username}
            </span>
          </div>
          <span className="text-xs text-gray-400 font-[Inter]">
            {formatDate(idea?.createdAt)}
          </span>
        </div>

        {/* Idea name and description */}
        <h2 className="text-lg font-bold text-white mb-1 font-[Poppins]">
          {idea?.title}
        </h2>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2 font-[Inter]">
          {idea?.description}
        </p>

        {/* Cover image */}
        <img
          src={idea?.coverImage}
          alt={`${idea?.title} Cover`}
          className="w-full mb-4 rounded-md h-40 object-cover"
        />

        {/* Category badge and details button */}
        <div className="flex justify-between items-center">
          <span className="bg-zinc-800 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold font-[Inter]">
            {idea?.category}
          </span>
          <Button
            className="rounded-full px-4 py-1 text-sm font-[Lato] cursor-pointer"
            onClick={handleDetailsClick}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;

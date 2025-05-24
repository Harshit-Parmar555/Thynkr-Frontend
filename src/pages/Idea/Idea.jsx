import React from "react";
import { useNavigate } from "react-router-dom";

const Idea = () => {
  const navigate = useNavigate();

  const idea = {
    id: 1,
    user: {
      name: "Harshit Parmar",
      email: "parmarharshit441@gmai.com",
      avatar: "https://avatars.githubusercontent.com/u/000000?v=4",
      // Add a userId or username for navigation
      userId: "000000",
    },
    date: "December 4, 2024",
    title: "Scale AI",
    description:
      "Accelerates the development of AI applications by providing high-quality training data for machine learning models. This platform enables teams to build, iterate, and deploy AI solutions faster and more efficiently.",
    coverImage:
      "https://images.unsplash.com/photo-1726056652582-7c9d202d4018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    category: "Technology",
    pitch:
      "A platform that accelerates AI development by providing high-quality training data, enabling faster and more efficient deployment of AI solutions.",
  };

  const handleUserClick = () => {
    // Navigate to the user's profile page (adjust route as needed)
    navigate(`/user/${idea.user.userId}`);
  };

  return (
    <div className="w-full pt-32 flex flex-col items-center">
      {/* Banner */}
      <div className="w-full sm:w-[90%] lg:w-[60%] aspect-[16/9] rounded-md overflow-hidden shadow-lg border-[1px] border-zinc-800">
        <img
          src={idea.coverImage}
          alt="Idea Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* User info and date */}
      <div className="w-full sm:w-[90%] lg:w-[60%] flex justify-between items-center mt-8 px-2">
        <div
          className="flex items-center gap-3 cursor-pointer rounded-lg p-2 transition"
          onClick={handleUserClick}
        >
          <img
            src={idea.user?.avatar}
            alt={`${idea.user?.name}'s avatar`}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="text-base font-semibold text-white">
              {idea.user?.name}
            </div>
            <div className="text-sm text-zinc-400">
              {idea.user?.email || "No email"}
            </div>
          </div>
        </div>
        <div className="text-sm text-zinc-400">{idea.date}</div>
      </div>

      {/* Description and Pitch */}
      <div className="w-full sm:w-[90%] lg:w-[60%] mt-8 px-2 pb-6">
        <h2 className="text-xl font-bold text-white mb-2">Description</h2>
        <p className="text-base text-zinc-300 mb-6">{idea.description}</p>
        <h2 className="text-xl font-bold text-white mb-2">Pitch</h2>
        <p className="text-base text-zinc-300">
          {idea.pitch || "No pitch provided."}
        </p>
      </div>
    </div>
  );
};

export default Idea;

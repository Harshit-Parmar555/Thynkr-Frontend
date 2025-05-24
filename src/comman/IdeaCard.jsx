import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const IdeaCard = () => {
  return (
    <div className="max-w-sm rounded-2xl border border-zinc-800 p-4 shadow-md bg-zinc-950">
      {/* User profile, name, and date */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/000000?v=4"
            alt="Ramkrishna Swarnkar's avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-white">Harshit Parmar</span>
        </div>
        <span className="text-xs text-gray-400">December 4, 2024</span>
      </div>

      {/* Idea name and description */}
      <h2 className="text-lg font-bold text-white mb-1">Scale AI</h2>
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
        Accelerates the development of AI applications by providing high-quality
        training data for machine learning models. This platform enables teams
        to build, iterate, and deploy AI solutions faster and more efficiently.
      </p>

      {/* Cover image */}
      <img
        src="https://images.unsplash.com/photo-1726056652582-7c9d202d4018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt="Scale AI Cover"
        className="w-full mb-4 rounded-md h-40 object-cover"
      />

      {/* Category badge and details button */}
      <div className="flex justify-between items-center">
        <Badge>Technology</Badge>
        <Button className="rounded-full px-4 py-1 text-sm">Details</Button>
      </div>
    </div>
  );
};

export default IdeaCard;

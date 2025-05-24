import React from "react";
import { Button } from "@/components/ui/button";
import IdeaCard from "@/comman/IdeaCard";

// Mock user data
const user = {
  name: "Harshit Parmar",
  email: "parmarharshit441@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/000000?v=4",
};

// Mock user ideas (replace with API data in production)
const userIdeas = [
  {
    id: 1,
    user,
    date: "December 4, 2024",
    title: "Scale AI",
    description:
      "Accelerates the development of AI applications by providing high-quality training data for machine learning models.",
    coverImage:
      "https://images.unsplash.com/photo-1726056652582-7c9d202d4018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    category: "Technology",
  },
  {
    id: 2,
    user,
    date: "January 15, 2025",
    title: "GreenCharge",
    description:
      "A platform focused on smart grid technology that enables real-time electric vehicle charging optimization.",
    coverImage:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D",
    category: "Energy",
  },
  // ...add more ideas
];

const Profile = () => {
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
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="w-28 h-28 rounded-full border-4 border-blue-600 shadow-lg object-cover"
            />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-zinc-950 rounded-full"></span>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              {user.name}
            </div>
            <div className="text-base text-zinc-400 mt-1 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 10-8 0v4m8 0v4a4 4 0 01-8 0v-4"
                ></path>
              </svg>
              {user.email}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 z-10">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-8 py-3 rounded-xl font-bold shadow-md transition-all duration-200">
            + Add New Idea
          </Button>
          <Button className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-bold shadow-md transition-all duration-200">
            Logout
          </Button>
        </div>
      </div>

      {/* User's Ideas Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {userIdeas.length > 0 ? (
          userIdeas.map((idea) => <IdeaCard key={idea.id} {...idea} />)
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

import React from "react";
import IdeaCard from "@/comman/IdeaCard";

// Mock data for another user
const user = {
  name: "Ananya Sharma",
  email: "ananya.sharma@email.com",
  avatar: "https://avatars.githubusercontent.com/u/000001?v=4",
  bio: "Passionate about green tech and smart energy solutions.",
};

// Mock ideas uploaded by this user
const userIdeas = [
  {
    id: 1,
    user,
    date: "January 15, 2025",
    title: "GreenCharge",
    description:
      "A platform focused on smart grid technology that enables real-time electric vehicle charging optimization.",
    coverImage:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D",
    category: "Energy",
  },
  {
    id: 2,
    user,
    date: "March 2, 2025",
    title: "EcoMeter",
    description:
      "A smart device to monitor and reduce household energy consumption with real-time analytics.",
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60",
    category: "Technology",
  },
  // ...add more ideas if needed
];

const User = () => {
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
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="w-28 h-28 rounded-full border-4 border-blue-600 shadow-lg object-cover"
            />
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight font-[Poppins]">
              {user.name}
            </div>
            <div className="text-sm text-zinc-400 mt-1 flex items-center gap-2 font-[Inter]">
              {user.email}
            </div>
          </div>
        </div>
      </div>

      {/* User's Ideas Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
        {userIdeas.length > 0 ? (
          userIdeas.map((idea) => <IdeaCard key={idea.id} {...idea} />)
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

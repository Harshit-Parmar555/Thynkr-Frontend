import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import IdeaCard from "@/comman/IdeaCard";

// Example mock data, replace with API data in production
const ideas = [
  {
    id: 1,
    user: {
      name: "Ramkrishna Swarnkar",
      avatar: "https://avatars.githubusercontent.com/u/000000?v=4",
      id: "000000",
    },
    date: "December 4, 2024",
    title: "Scale AI",
    description:
      "Accelerates the development of AI applications by providing high-quality training data for machine learning models. This platform enables teams to build, iterate, and deploy AI solutions faster and more efficiently.",
    coverImage:
      "https://images.unsplash.com/photo-1726056652582-7c9d202d4018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    category: "Technology",
  },
  {
    id: 2,
    user: {
      name: "Ananya Sharma",
      avatar: "https://avatars.githubusercontent.com/u/000001?v=4",
      id: "000001",
    },
    date: "January 15, 2025",
    title: "GreenCharge",
    description:
      "A platform focused on smart grid technology that enables real-time electric vehicle charging optimization and reduces energy costs using AI-driven analytics.",
    coverImage:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D",
    category: "Energy",
  },
  {
    id: 3,
    user: {
      name: "Sarthak Mehta",
      avatar: "https://avatars.githubusercontent.com/u/000002?v=4",
      id: "000002",
    },
    date: "February 2, 2025",
    title: "SkillBridge",
    description:
      "Connects early-career developers with real-world freelance tasks and short-term internships to gain hands-on experience and build a professional portfolio.",
    coverImage:
      "https://images.unsplash.com/photo-1747595435884-29c6b5235030?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
    category: "Education",
  },
  {
    id: 4,
    user: {
      name: "Riya Verma",
      avatar: "https://avatars.githubusercontent.com/u/000003?v=4",
      id: "000003",
    },
    date: "March 12, 2025",
    title: "MediConnect",
    description:
      "A decentralized platform to connect rural patients with verified healthcare professionals, using blockchain for secure medical record sharing.",
    coverImage:
      "https://images.unsplash.com/photo-1726607962647-84ec2451d553?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    category: "Healthcare",
  },
  {
    id: 5,
    user: {
      name: "Aman Khurana",
      avatar: "https://avatars.githubusercontent.com/u/000004?v=4",
      id: "000004",
    },
    date: "April 8, 2025",
    title: "AgroTrack",
    description:
      "An IoT-based solution for real-time soil monitoring, crop health analysis, and weather prediction to improve agricultural productivity.",
    coverImage:
      "https://images.unsplash.com/photo-1728044849277-9cb3cd94e729?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    category: "Agriculture",
  },
];

const Home = () => {
  const [search, setSearch] = useState("");

  // Filter ideas based on search input
  const filteredIdeas = ideas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(search.toLowerCase()) ||
      idea.description.toLowerCase().includes(search.toLowerCase()) ||
      idea.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <div className="max-w-4xl w-full px-4">
        <Input
          className="w-full h-14 border-zinc-800 text-white font-[Inter]"
          placeholder="Search Ideas . . ."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search Ideas"
        />
      </div>
      <div className="max-w-7xl w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
        {filteredIdeas.length > 0 ? (
          filteredIdeas.map((idea) => <IdeaCard key={idea.id} {...idea} />)
        ) : (
          <div className="col-span-full text-center text-zinc-400">
            No ideas found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

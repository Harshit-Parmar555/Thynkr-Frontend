import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import IdeaCard from "@/comman/IdeaCard";

// idea store import
import { useIdeaStore } from "@/store/useIdeaStore";

const Home = () => {
  const { fetchIdeas, ideas, fetchingIdeas } = useIdeaStore();

  React.useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <div className="max-w-4xl w-full px-4">
        <Input
          className="w-full h-14 border-zinc-800 text-white font-[Inter]"
          placeholder="Search Ideas . . ."
          aria-label="Search Ideas"
        />
      </div>
      <div className="max-w-7xl w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
        {ideas.length > 0 ? (
          ideas.map((idea) => <IdeaCard key={idea.id} idea={idea} />)
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

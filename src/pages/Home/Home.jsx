import React, { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import IdeaCard from "@/comman/IdeaCard";
import { useAuthStore } from "@/store/useAuthStore";
import { useIdeaStore } from "@/store/useIdeaStore";
import { IdeaCardSkeleton } from "@/comman/Skeletons";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { user } = useAuthStore();
  const { fetchIdeas, ideas, fetchingIdeas } = useIdeaStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(query);
  const [hasSearched, setHasSearched] = useState(false);
  const initialMount = useRef(true);

  useEffect(() => {
    if (initialMount.current && !query) {
      initialMount.current = false;
      setHasSearched(false);
      return;
    }
    fetchIdeas(query);
    setHasSearched(true);
  }, [query]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue !== query) {
      setSearchParams(inputValue ? { q: inputValue } : {});
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <div className="max-w-4xl w-full px-4">
        <div className="relative flex">
          <Input
            className="w-full h-14 border-zinc-800 text-white font-[Inter] pr-12"
            placeholder="Search Ideas . . ."
            aria-label="Search Ideas"
            onChange={handleInputChange}
            value={inputValue}
            autoComplete="off"
            onKeyDown={handleKeyDown}
          />
          <Button
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={handleSearch}
            variant="secondary"
            aria-label="Search"
            disabled={inputValue === query}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="max-w-7xl w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
        {fetchingIdeas ? (
          Array.from({ length: 6 }).map((_, idx) => (
            <IdeaCardSkeleton key={idx} />
          ))
        ) : ideas.length > 0 ? (
          ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} loggedInUser={user._id} />
          ))
        ) : hasSearched ? (
          <div className="col-span-full text-center text-zinc-400">
            No ideas found.
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;

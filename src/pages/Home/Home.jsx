import React, { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import IdeaCard from "@/comman/IdeaCard";
import { useAuthStore } from "@/store/useAuthStore";
import { useIdeaStore } from "@/store/useIdeaStore";
import { IdeaCardSkeleton } from "@/comman/Skeletons";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const {user} = useAuthStore();
  const { fetchIdeas, ideas, fetchingIdeas } = useIdeaStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const debouncedSearch = useRef();

  // Always debounce, even on mount
  useEffect(() => {
    if (debouncedSearch.current) clearTimeout(debouncedSearch.current);
    debouncedSearch.current = setTimeout(() => {
      fetchIdeas(query);
    }, 500);
    return () => clearTimeout(debouncedSearch.current);
  }, [query]);

  const handleInputChange = (e) => {
    setSearchParams(e.target.value ? { q: e.target.value } : {});
  };

  const handleClear = () => setSearchParams({});

  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <div className="max-w-4xl w-full px-4">
        <div className="relative">
          <Input
            className="w-full h-14 border-zinc-800 text-white font-[Inter] pr-12"
            placeholder="Search Ideas . . ."
            aria-label="Search Ideas"
            onChange={handleInputChange}
            value={query}
            autoComplete="off"
          />
          {query && (
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              onClick={handleClear}
              aria-label="Clear search"
              tabIndex={0}
              type="button"
            >
              ×
            </button>
          )}
        </div>
      </div>
      <div className="max-w-7xl w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
        {fetchingIdeas && ideas.length === 0 ? (
          Array.from({ length: 6 }).map((_, idx) => (
            <IdeaCardSkeleton key={idx} />
          ))
        ) : ideas.length > 0 ? (
          ideas.map((idea) => <IdeaCard key={idea.id} idea={idea} loggedInUser={user._id} />)
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

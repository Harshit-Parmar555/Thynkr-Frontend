export const IdeaCardSkeleton = () => (
  <div className="relative max-w-sm rounded-2xl border border-zinc-800 p-4 shadow-md bg-zinc-950 overflow-hidden animate-pulse">
    {/* Decorative gradients */}
    <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-700/20 rounded-full blur-2xl z-0"></div>
    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-700/20 rounded-full blur-2xl z-0"></div>

    {/* Card Content */}
    <div className="relative z-10">
      {/* User profile, name, and date */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
          <div className="h-4 w-20 bg-zinc-700 rounded"></div>
        </div>
        <div className="h-3 w-12 bg-zinc-700 rounded"></div>
      </div>

      {/* Idea name and description */}
      <div className="h-5 w-32 bg-zinc-700 rounded mb-2"></div>
      <div className="h-4 w-full bg-zinc-700 rounded mb-1"></div>
      <div className="h-4 w-3/4 bg-zinc-700 rounded mb-4"></div>

      {/* Cover image */}
      <div className="w-full mb-4 rounded-md h-40 bg-zinc-700"></div>

      {/* Category badge and details button */}
      <div className="flex justify-between items-center">
        <div className="bg-zinc-800 w-16 h-6 rounded-full"></div>
        <div className="rounded-full px-4 py-1 h-8 w-20 bg-zinc-700"></div>
      </div>
    </div>
  </div>
);

export const IdeaSkeleton = () => (
  <div className="w-full pt-32 flex flex-col items-center animate-pulse">
    {/* Banner Skeleton */}
    <div className="w-full sm:w-[90%] lg:w-[60%] aspect-[16/9] rounded-md overflow-hidden shadow-lg border-[1px] border-zinc-800 bg-zinc-800 mb-8">
      <div className="w-full h-full bg-zinc-700" />
    </div>

    {/* User info and date Skeleton */}
    <div className="w-full sm:w-[90%] lg:w-[60%] flex justify-between items-center mt-8 px-2">
      <div className="flex items-center gap-3 rounded-lg p-2">
        <div className="w-10 h-10 rounded-full bg-zinc-700" />
        <div>
          <div className="h-4 w-32 bg-zinc-700 rounded mb-2"></div>
          <div className="h-3 w-24 bg-zinc-700 rounded"></div>
        </div>
      </div>
      <div className="h-3 w-20 bg-zinc-700 rounded"></div>
    </div>

    {/* Description and Pitch Skeleton */}
    <div className="w-full sm:w-[90%] lg:w-[60%] mt-8 px-2 pb-6">
      <div className="h-6 w-32 bg-zinc-700 rounded mb-4"></div>
      <div className="h-4 w-full bg-zinc-700 rounded mb-2"></div>
      <div className="h-4 w-3/4 bg-zinc-700 rounded mb-6"></div>
      <div className="h-6 w-24 bg-zinc-700 rounded mb-4"></div>
      <div className="h-4 w-full bg-zinc-700 rounded mb-2"></div>
      <div className="h-4 w-2/3 bg-zinc-700 rounded"></div>
    </div>
  </div>
);

export const UserProfileCardSkeleton = () => (
  <div className="w-full sm:w-[90%] lg:w-[60%] bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 relative overflow-hidden animate-pulse">
    {/* Decorative background shapes */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-2xl z-0"></div>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-700/20 rounded-full blur-2xl z-0"></div>

    {/* Avatar and user info */}
    <div className="relative z-10 flex items-center gap-6">
      <div className="relative">
        <div className="w-28 h-28 rounded-full border-4 border-blue-600 shadow-lg bg-zinc-700" />
        <span className="absolute bottom-2 right-2 w-4 h-4 bg-zinc-700 border-2 border-zinc-950 rounded-full"></span>
      </div>
      <div>
        <div className="h-8 w-40 bg-zinc-700 rounded mb-2"></div>
        <div className="h-4 w-32 bg-zinc-700 rounded"></div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col md:flex-row gap-4 z-10">
      <div className="h-12 w-36 bg-zinc-700 rounded-xl"></div>
      <div className="h-12 w-36 bg-zinc-700 rounded-xl"></div>
    </div>
  </div>
);

import { create } from "zustand";
import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";

export const useIdeaStore = create((set) => ({
  ideas: [],
  fetchingIdeas: false,

  fetchIdeas: async () => {
    try {
      set({ fetchingIdeas: true });
      const response = await axiosInstance.get("/idea/fetch-all-ideas");
      set({ ideas: response.data.ideas });
    } catch (error) {
      toast.error("Failed to fetch ideas");
    } finally {
      set({ fetchingIdeas: false });
    }
  },

  
}));

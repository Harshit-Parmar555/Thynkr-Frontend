import { create } from "zustand";
import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";

export const useIdeaStore = create((set) => ({
  ideas: [],
  fetchingIdeas: false,
  viewIdea: null,
  fetchingIdea: false,

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

  getIdea: async (id) => {
    try {
      set({ fetchingIdea: true });
      const response = await axiosInstance.get(`/idea/fetch-idea-by-id/${id}`);
      set({ viewIdea: response.data.idea });
    } catch (error) {
      toast.error("Failed to fetch idea");
    } finally {
      set({ fetchingIdea: false });
    }
  },
}));

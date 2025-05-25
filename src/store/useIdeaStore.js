import { create } from "zustand";
import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";

export const useIdeaStore = create((set) => ({
  ideas: [],
  fetchingIdeas: false,
  viewIdea: null,
  fetchingIdea: false,
  postingIdea: false,

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

  postIdea: async (ideaData) => {
    try {
      set({ postingIdea: true });
      const response = await axiosInstance.post("/idea/post-idea", ideaData);
      set((state) => ({
        ideas: [...state.ideas, response.data.idea],
      }));

      toast.success("Idea posted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to post idea");
    } finally {
      set({ postingIdea: false });
    }
  },
}));

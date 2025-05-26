import { create } from "zustand";
import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";

import { useAuthStore } from "./useAuthStore";

export const useIdeaStore = create((set) => ({
  ideas: [],
  fetchingIdeas: false,
  viewIdea: null,
  fetchingIdea: false,
  postingIdea: false,
  deletingIdea: false,

  fetchIdeas: async (query) => {
    try {
      set({ fetchingIdeas: true });
      const endPoint = query
        ? `/idea/fetch-all-ideas?query=${query}`
        : "/idea/fetch-all-ideas";
      const response = await axiosInstance.get(endPoint);
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

  deleteIdea: async (id) => {
    try {
      set({ deletingIdea: true });
      const response = await axiosInstance.delete(`/idea/delete-idea/${id}`);
      set((state) => ({
        ideas: state.ideas.filter((idea) => idea._id !== id),
      }));
      useAuthStore.setState((state) => ({
        user: {
          ...state.user,
          ideas: state.user.ideas.filter((idea) => idea._id !== id),
        },
      }));

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete idea");
    } finally {
      set({ deletingIdea: false });
    }
  },
}));

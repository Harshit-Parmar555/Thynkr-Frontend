import { create } from "zustand";
import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";

import { useAuthStore } from "./useAuthStore";

export const useUserStore = create((set) => ({
  viewUser: null,
  fetchingUser: false,
  fetchingLoggedInUser: false,

  fetchLoggedInUser: async () => {
    try {
      set({ fetchingLoggedInUser: true });
      const user = useAuthStore.getState().user;
      const response = await axiosInstance.get(`/user/fetch-user/${user._id}`);
      useAuthStore.setState({ user: response.data.user });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch logged in user"
      );
    } finally {
      set({ fetchingLoggedInUser: false });
    }
  },

  fetchUser: async (id) => {
    try {
      set({ fetchingUser: true });
      const response = await axiosInstance.get(`/user/fetch-user/${id}`);
      set({ viewUser: response.data.user });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch user");
    } finally {
      set({ fetchingUser: false });
    }
  },
}));

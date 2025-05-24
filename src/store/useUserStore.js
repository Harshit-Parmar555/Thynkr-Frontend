import { create } from "zustand";
import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";

export const useUserStore = create((set) => ({
  viewUser: null,
  fetchingUser: false,

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

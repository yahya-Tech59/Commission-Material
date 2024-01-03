import { create } from "zustand";
import axios from "./axiosConfig";

const useUsersStore = create((set) => ({
  users: [],
  loading: true,
  fetchUser: async (page) => {
    set({ loading: true });
    try {
      const res = await axios.get(`/api/v1/users?page=${page}`);
      set({ users: res.data.data, loading: false });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useUsersStore;

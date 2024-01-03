import { create } from "zustand";
import axios from "./axiosConfig";

const useAgentsStore = create((set) => ({
  agents: [],
  loading: true,
  fetchAgent: async (page) => {
    set({ loading: true });

    try {
      const res = await axios.get(`/api/v1/agents?page=${page}`, {});
      set({ agents: res.data.data, loading: false });
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  },
}));

export default useAgentsStore;

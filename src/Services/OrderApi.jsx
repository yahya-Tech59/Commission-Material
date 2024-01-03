import { create } from "zustand";
import axios from "./axiosConfig";

const useOrdersStore = create((set) => ({
  orders: [],
  loading: true,
  fetchOrder: async (page) => {
    set({ loading: true });
    try {
      const res = await axios.get(`/api/v1/orders?page=${page}`);
      set({ orders: res.data.data, loading: false });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useOrdersStore;

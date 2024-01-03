import { create } from "zustand";
import axios from "./axiosConfig";

const useCustomersStore = create((set) => ({
  customers: [],
  loading: true,
  fetchCustomer: async (page) => {
    set({ loading: true });
    try {
      const res = await axios.get(`/api/v1/customers?page=${page}`);
      set({ customers: res.data.data, loading: false });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCustomersStore;

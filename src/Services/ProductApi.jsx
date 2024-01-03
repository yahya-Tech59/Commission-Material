import { create } from "zustand";
import axios from "./axiosConfig";

const useProductsStore = create((set) => ({
  products: [],
  loading: true,
  fetchProduct: async (page) => {
    set({ loading: true });
    try {
      const res = await axios.get(`/api/v1/products?page=${page}`);
      set({ products: res.data.data, loading: false });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProductsStore;

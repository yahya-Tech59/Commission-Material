import React, { useMemo, useState, useEffect, useContext } from "react";

import { columns } from "./ProductColumn";
import { Header } from "../../layouts/Header";
// import { Table } from "../../components/Table";
import { DataGrid } from "@mui/x-data-grid";
import { AddProduct } from "../../Models/Product/AddProducts";
import { IoMdAdd } from "react-icons/io";
import { Context } from "../../Context/Context";
import useProductsStore from "../../Services/ProductApi";
import { Box, Button, Icon, Typography } from "@mui/material";
import { Search } from "../../components/Search";
import { Pagination } from "../../components/Pagination";

export const Products = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const { products, loading, fetchProduct } = useProductsStore();

  const { currentPage } = useContext(Context);

  useEffect(() => {
    fetchProduct(currentPage);
  }, [currentPage]);

  if (loading === true) {
    return (
      <Typography variant="h2" sx={{ mr: "43rem" }}>
        Loading...
      </Typography>
    );
  }

  return (
    <Box>
      <Header />
      <Box
        bgcolor="white"
        width={{ md: "96rem", sm: "46rem" }}
        mt={3}
        mb={6}
        mr={7}
        boxShadow="0px 4px 6px rgba(156, 163, 175, 0.15)"
        pb={3}
        // ml={{ sm: -5 }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, pt: 3, ml: 4 }}>
          Products
        </Typography>

        <Box sx={{ ml: { md: "71rem", sm: "25rem" }, mb: 4.3 }}>
          <Button
            onClick={() => setShowAddProduct(true)}
            sx={{
              position: "absolute",
              display: "flex",
              gap: 1,
              bgcolor: "#3A57E8",
              color: "white",
              borderRadius: 2,
              ":hover": {
                bgcolor: "#4762e9",
              },
              cursor: "pointer",
            }}
          >
            Add Product
            <Icon sx={{ mb: 1 }}>
              <IoMdAdd className=" text-2xl" />
            </Icon>
          </Button>
          {showAddProduct && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "full",
                height: "full",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                zIndex: 10,
              }}
            >
              <AddProduct onClose={() => setShowAddProduct(false)} />
            </Box>
          )}
        </Box>

        <Box sx={{ mb: 2 }} className="mb-2">
          <Search label="Search" size="small" />
        </Box>

        <Box sx={{ height: 630, width: "95%", ml: { md: 5, sm: 3 }, mb: 4 }}>
          <DataGrid
            rows={products}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </Box>

        <Box sx={{ mt: 3, pb: 1 }}>
          <Pagination />
        </Box>
      </Box>
    </Box>
  );
};

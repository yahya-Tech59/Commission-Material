import React, { useState, useEffect, useContext } from "react";

import { columns } from "./OrderColumns";
import { Header } from "../../layouts/Header";
import { DataGrid } from "@mui/x-data-grid";
import { AddOrder } from "../../Models/Order/AddOrder";
import { IoMdAdd } from "react-icons/io";
import { Context } from "../../Context/Context";
import useOrdersStore from "../../Services/OrderApi";
import { Box, Button, Icon, Typography } from "@mui/material";
import { Search } from "../../components/Search";
import { Pagination } from "../../components/Pagination";

export const Orders = () => {
  const [showAddOrder, setShowAddOrder] = useState(false);
  const { orders, loading, fetchOrder } = useOrdersStore();

  const { currentPage } = useContext(Context);

  useEffect(() => {
    fetchOrder(currentPage);
  }, [currentPage]);

  if (loading === true) {
    return (
      <Typography variant="h2" sx={{ mr: "43rem" }}>
        Loading...
      </Typography>
    );
  }

  return (
    <Box sx={{ ml: 3 }}>
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
          Orders
        </Typography>

        <Box sx={{ ml: { md: "72.5rem", sm: "25rem" }, mb: 4.3 }}>
          <Button
            onClick={() => setShowAddOrder(true)}
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
            Add Order
            <Icon sx={{ mb: 1 }}>
              <IoMdAdd className=" text-2xl" />
            </Icon>
          </Button>
          {showAddOrder && (
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
              <AddOrder onClose={() => setShowAddOrder(false)} />
            </Box>
          )}
        </Box>

        <Box sx={{ mb: 2, ml: { sm: -2 } }}>
          <Search label="Search" size="small" />
        </Box>

        <Box sx={{ height: 630, width: "95%", ml: 5, mb: 4 }}>
          <DataGrid
            rows={orders}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </Box>

        <Box sx={{ mt: 3, pb: 1, mr: { sm: 5 } }}>
          <Pagination />
        </Box>
      </Box>
    </Box>
  );
};

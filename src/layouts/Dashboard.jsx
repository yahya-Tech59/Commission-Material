import React from "react";
import { Box, Grid, Typography, Select, Stack } from "@mui/material";
import { DashboardCard } from "../components/DashboardCard";
import { Chart } from "./Chart/Chart";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Dashboard = () => {
  return (
    <Box
      color="gray.400"
      display="flex"
      flexDirection="column"
      overflowX="hidden"
    >
      <Box px={{ xs: 2, sm: 2, md: 4 }} pb={{ xs: 4, sm: 4, md: 0 }}>
        <Stack mt={{ xs: 2, sm: 2, md: 0 }} mb={2}>
          <Header />
        </Stack>

        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
          justifyContent={{ md: "space-between", sm: "center" }}
          mt={{ md: 7, sm: 4 }}
          px={{ md: 4, sm: 0 }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: 24, sm: 30 }, fontWeight: 500, mb: 2 }}
          >
            Dashboard
          </Typography>
          <select
            defaultValue=""
            style={{
              height: 20,
              border: "none",
              color: "#3A57E8",
              bgcolor: "#fdfdfd",
              // width: 100,
            }}
          >
            <option value="">Last 30 Days</option>
          </select>
        </Box>

        <Box
          display="flex"
          flexDirection={{ md: "row", sm: "column" }}
          gap={{ md: 2, sm: 2 }}
          mt={2}
          ml={{ md: 5, sm: 2 }}
        >
          <Box display={{ sm: "flex" }} gap={{ sm: 2 }}>
            <DashboardCard
              hide="Hide"
              year="Yearly"
              value="2,590"
              tableName="Agency"
            />

            <DashboardCard
              hide="Hide"
              year="Yearly"
              value="10,000"
              tableName="Customers"
            />
          </Box>

          <Box display={{ sm: "flex" }} gap={{ sm: 2 }}>
            <DashboardCard
              hide="Hide"
              year="Yearly"
              value="100"
              tableName="Products"
            />

            <DashboardCard
              hide="Hide"
              year="Yearly"
              value="150"
              tableName="Orders"
            />
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" mt={2} mr={{ md: 4, sm: 2 }}>
          <Chart />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

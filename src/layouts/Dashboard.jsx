import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
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
      <Box ml={2}>
        <Stack overflow="hidden">
          <Header />
        </Stack>

        <Box display="flex" justifyContent="space-between" mt={4} px={2}>
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
            }}
          >
            <option value="">Last 30 Days</option>
          </select>
        </Box>
        <Grid
          container
          columnSpacing={-4.8}
          rowSpacing={3}
          ml={5}
          sx={{
            position: { sm: "relative" },
            right: { sm: 48, xs: 240 },
          }}
        >
          <Grid item xs={12} sm={3} md={3}>
            <DashboardCard
              title="Hide"
              subtitle="Yearly"
              value="2,590"
              tableName="Agency"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <DashboardCard
              title="Hide"
              subtitle="Yearly"
              value="10,000"
              tableName="Customers"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              position: { sm: "relative" },
              right: { sm: 380 },
              top: { sm: 170 },
            }}
          >
            <DashboardCard
              title="Hide"
              subtitle="Yearly"
              value="100"
              tableName="Products"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Hide"
              subtitle="Yearly"
              value="150"
              tableName="Orders"
            />
          </Grid>
        </Grid>
        <Box display="flex" flexDirection="column">
          <Chart />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

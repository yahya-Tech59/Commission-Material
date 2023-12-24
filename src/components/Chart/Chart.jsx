import React, { useState } from "react";
import { LineChart } from "./LineChart";
import { UserData } from "./Data";
import { Box, Select, Typography } from "@mui/material";

export const Chart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });
  return (
    <>
      <Box
        sx={{
          width: "96rem",
          height: "35rem",
          borderRadius: 10,
          mb: 6,
          mt: "1.5rem",
          bgcolor: "white",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: 20 }}>
          User
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: -4 }}
          className="flex justify-end gap-2 -mt-8"
        >
          <h2>Sort By :</h2>
          <Select
            sx={{
              bgcolor: "blue.600",
              color: "white",
              height: 25,
              borderRadius: 2,
              gap: 2,
            }}
          >
            <option value="year">Year</option>
            <option value="month">Month</option>
            <option value="day">Day</option>
          </Select>
        </Box>

        <Box sx={{ ml: 16 }}>
          <LineChart chartData={userData} />
        </Box>
      </Box>
    </>
  );
};

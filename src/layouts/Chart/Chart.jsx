import React, { useState } from "react";
import { LineChart } from "./LineChart";
import { UserData } from "./Data";
import { Box, Typography } from "@mui/material";

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
    <Box
      sx={{
        width: "95rem",
        height: "39rem",
        borderRadius: "0.5rem",
        mb: 6,
        mt: "1.5rem",
        ml: 5,
        bgcolor: "white",
      }}
    >
      <Typography variant="h5" sx={{ pt: 3, pl: 5 }}>
        Users
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: -4,
          pr: 5,
        }}
      >
        <Typography variant="h6" sx={{ color: "#ADB5BD", fontSize: 18 }}>
          Sort By :
        </Typography>
        <select
          style={{
            backgroundColor: "#3A57E8",
            color: "white",
            height: 28,
            width: 65,
            borderRadius: 2,
            gap: 2,
            marginTop: 2,
            padding: 5,
          }}
        >
          <option value="year">Year</option>
          <option value="month">Month</option>
          <option value="day">Day</option>
        </select>
      </Box>

      <Box sx={{ ml: 6, pb: 6 }}>
        <LineChart chartData={userData} />
      </Box>
    </Box>
  );
};

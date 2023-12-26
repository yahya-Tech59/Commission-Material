import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "../../api/axiosConfig";
import { IoCloseOutline } from "react-icons/io5";
import SubmitButton from "../../components/SubmitButton";
import ClearButton from "../../components/ClearButton";
import useAddAgent from "../../hooks/useAddAgent";
import {
  Box,
  Input,
  InputLabel,
  Typography,
  Button,
  Icon,
} from "@mui/material";

export const AddAgent = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [business, setBusiness] = useState("");
  const [contact, setContact] = useState("");

  const handleClear = () => {
    setName("");
    setDescription("");
    setBusiness("");
    setContact("");
  };

  const schema = yup.object().shape({
    fullname: yup.string().required(),
    description: yup.string().required(),
    business: yup.string().required(),
    phone: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { loading, addAgent } = useAddAgent(onClose);

  if (loading === true) {
    return <Typography variant="h1">Loading...</Typography>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="form"
        onSubmit={handleSubmit(addAgent)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          bgcolor: "white",
          boxShadow: 2,
          width: "35rem",
          height: "35rem",
          borderRadius: 2,
          p: 3,
        }}
      >
        <Box sx={{ mt: 4 }}>
          <Box sx={{ display: "flex", gap: 5 }}>
            <Typography variant="h4" sx={{ ml: 10 }}>
              Add New Agent
            </Typography>
            <Button
              onClick={onClose}
              sx={{
                bgcolor: "#3A57E8",
                height: 40,
                width: 30,
                ml: 16,
                "&:hover": {
                  bgcolor: "#647ae6",
                },
              }}
            >
              <Icon sx={{ color: "white", pb: 1 }}>
                <IoCloseOutline />
              </Icon>
            </Button>
          </Box>

          <Box sx={{ my: 6 }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, my: 3 }}
            >
              <InputLabel>Name</InputLabel>
              <Input
                type="text"
                {...register("fullname")}
                sx={{
                  bgcolor: "#F9F9F9",

                  mr: 1,
                  borderRadius: "0.5rem",
                  width: "34rem",
                  "::placeholder": {
                    pl: 2,
                    color: "#8A92A6",
                  },
                }}
                placeholder="john"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, my: 3 }}
            >
              <InputLabel>Description</InputLabel>
              <Input
                type="text"
                {...register("description")}
                sx={{
                  bgcolor: "#F9F9F9",

                  mr: 1,
                  borderRadius: "0.5rem",
                  width: "34rem",
                  "::placeholder": {
                    pl: 2,
                    color: "#8A92A6",
                  },
                }}
                placeholder="description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, my: 3 }}
            >
              <InputLabel>Business </InputLabel>
              <Input
                type="text"
                {...register("business")}
                sx={{
                  bgcolor: "#F9F9F9",

                  mr: 1,
                  borderRadius: "0.5rem",
                  width: "34rem",
                  "::placeholder": {
                    pl: 2,
                    color: "#8A92A6",
                  },
                }}
                placeholder="web..."
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
              />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, my: 3 }}
            >
              <InputLabel>Contact </InputLabel>
              <Input
                type="string"
                {...register("phone")}
                sx={{
                  bgcolor: "#F9F9F9",

                  mr: 1,
                  borderRadius: "0.5rem",
                  width: "34rem",
                  "::placeholder": {
                    color: "#8A92A6",
                  },
                }}
                placeholder="123456789"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 40,
              ml: 2,
            }}
          >
            <SubmitButton label="Submit" />
            <ClearButton label="Clear" onClick={handleClear} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

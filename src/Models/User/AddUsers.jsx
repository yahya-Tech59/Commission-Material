import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "../../api/axiosConfig";
import { IoCloseOutline } from "react-icons/io5";
import SubmitButton from "../../components/SubmitButton";
import ClearButton from "../../components/ClearButton";
import {
  Box,
  Button,
  Icon,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

export const AddUser = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [role, setRole] = useState([]);
  const [agent, setAgents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    roles: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRoles("");
  };

  useEffect(() => {
    const fetchRoles = async () => {
      const res = await axios.get(`/api/v1/roles`);

      if (res.status === 200) {
        const roleData = await res.data;
        setRole(roleData.data);
      }
    };

    fetchRoles();
  }, []);

  const addUser = async (data) => {
    setLoading(true);
    const res = await axios.post("/api/v1/users", data);

    if (res.status === 200) {
      alert("User Registered successfully");
      setUsers(res.data);
      onClose();
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="form"
        onSubmit={handleSubmit(addUser)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          bgcolor: "white",
          boxShadow: 2,
          width: "35rem",
          height: "32rem",
          p: 3,
        }}
      >
        <Box sx={{ pb: 16, ml: 5, mt: 4 }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h4" sx={{ ml: 10 }}>
              Add New User
            </Typography>
            <Button
              onClick={onClose}
              sx={{
                bgcolor: "#3A57E8",
                height: 40,
                width: 30,
                ml: 14,
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

          <Box sx={{ py: 6 }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, py: 1 }}
            >
              <InputLabel>Name</InputLabel>
              <Input
                type="text"
                {...register("name")}
                sx={{
                  bgcolor: "#F9F9F9",
                  ":placeholder": {
                    color: "#707070",
                  },
                  mr: 1,
                  width: "32rem",
                }}
                placeholder="john"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>

            <Box className="flex flex-col gap-1">
              <InputLabel>Email</InputLabel>
              <Input
                type="text"
                {...register("email")}
                sx={{
                  bgcolor: "#F9F9F9",
                  ":placeholder": {
                    color: "#707070",
                  },
                  mr: 1,
                  width: "32rem",
                }}
                placeholder="$xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, py: 1 }}
            >
              <InputLabel>Password</InputLabel>
              <Input
                type="password"
                {...register("password")}
                sx={{
                  bgcolor: "#F9F9F9",
                  ":placeholder": {
                    color: "#707070",
                  },
                  mr: 1,
                  width: "32rem",
                }}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            <Box
              clsx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                py: 0.5,
              }}
            >
              <select
                {...register("roles")}
                defaultValue={roles}
                onChange={(e) => setRoles(e.target.value)}
                style={{
                  placeholder: "#707070",
                  mr: 1,
                  width: "32rem",
                  height: 32,
                  marginTop: 16,
                  boxShadow: "0, 4px, 6px, rgba(0, 0, 0, 1.5)",
                }}
              >
                <option value="" disabled>
                  Select Role
                </option>
                {role.map((rol) => (
                  <option key={rol.id} value={rol.id}>
                    {rol.title}
                  </option>
                ))}
              </select>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 32 }}>
            <SubmitButton label="Submit" />
            <ClearButton label="Clear" onClick={handleClear} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

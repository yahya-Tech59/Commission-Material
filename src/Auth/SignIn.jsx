import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Google,
  facebook,
  hope,
  hope_ui,
  instagram,
  linkedin,
} from "../assets/img";
import { MdError } from "react-icons/md";
import axios from "../Services/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  Button,
  Grid,
  Container,
  Avatar,
  Stack,
  CssBaseline,
  Input,
  Alert,
  Icon,
  AlertTitle,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("email format is not valid")
      .required("email is required"),
    password: yup.string().min(4).max(15).required("password is required"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const fetchLogin = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(`/api/auth/login`, data);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
        // alert("logged in Successfuly");
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      if (error.response) {
        // The request was made and the server responded with a status code
        setShowError(error.response.data.message || "An error occurred");
      } else if (error.request) {
        // The request was made but no response was received
        setShowError("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setShowError("An error occurred");
      }
    }
  };

  if (loading === true) {
    return (
      <Typography
        variant="h1"
        sx={{ fontSize: "20", fontWeight: 600, marginLeft: "53rem" }}
      >
        Loading...
      </Typography>
    );
  }

  // const FullScreen = styled.div({
  //   display: "flex",
  //   bgcolor: "#f8fafc",
  // });

  return (
    <Box display="flex" height="100%" bgcolor="#f8fafc" overflow="hidden">
      <Box>
        <Box
          display="flex"
          width={{ md: "10rem", sm: "2rem" }}
          mt={10}
          ml={10}
          position="absolute"
        >
          <img src={hope_ui} alt="" />
        </Box>
        <Box position="absolute" height={600} mr={690} ml={-8}></Box>
        <img src={hope} alt="" />
      </Box>

      <Box sx={{ position: "absolute", right: 325 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          {showError && (
            <Alert
              severity="error"
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                borderRadius: "0.5rem",
                backgroundColor: "#f8d7da",
                color: "#721c24",
                fontWeight: 600,
                width: 420,
              }}
            >
              {showError}
            </Alert>
          )}
        </Box>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(fetchLogin)}
        sx={{
          p: 5,
          height: "38rem",
          width: "30rem",
          borderRadius: "0.5rem",
          boxShadow: 2,
          bgcolor: "white",
          position: "relative",
          top: 80,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Sign In
          </Typography>
          <Typography variant="body1" sx={{ mb: 5 }}>
            Sign In to stay Connected
          </Typography>
        </Box>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email")}
            sx={{
              backgroundColor: "#F9F9F9",
              "&::placeholder": {
                color: "#F9F9F9",
              },
              padding: "0.75rem",
              marginRight: "0.25rem",
              borderRadius: "0.5rem",
              width: "30rem",
              height: "2.75rem",
              border: "none",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email?.message && (
            <FormHelperText error>{errors.email.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            {...register("password")}
            margin="normal"
            variant="outlined"
            sx={{
              backgroundColor: "#F9F9F9",
              "&::placeholder": {
                color: "text-slate-400",
              },
              padding: "0.75rem",
              marginRight: "0.25rem",
              borderRadius: "0.5rem",
              width: "30rem",
              height: "2.75rem",
              border: "none",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password?.message && (
            <FormHelperText error>{errors.password.message}</FormHelperText>
          )}
        </FormControl>

        {/* Remember me and forget password */}
        <Box display="flex" justifyContent="space-between" gap="2.375rem">
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <ListItemButton
            button
            component={Link}
            to="/forgotPassword"
            variant="body1"
            label="Forget Password?"
            sx={{
              color: "#3A57E8",
              fontFamily: "inter",
              fontWeight: 400,
              textDecoration: "none",
              ml: 16,
            }}
          >
            <ListItemText primary="Forget Password" />
          </ListItemButton>
        </Box>

        <Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: "2.75rem",
              mb: 1,
              ml: 25,
              width: "6.375rem",
              bgcolor: "#3A57E8",
              fontFamily: "inter",
            }}
          >
            Sign In
          </Button>

          <Typography variant="body1" sx={{ textAlign: "center" }}>
            or Sign In with other Account?
          </Typography>
        </Box>

        <Grid
          sx={{ display: "flex", mt: 2, gap: "1.5rem" }}
          justifyContent="center"
        >
          <Avatar variant="contained" src={Google} />
          <Avatar
            variant="contained"
            src={facebook}
            sx={{ height: 24, width: 24, mt: 0.5 }}
          />
          <Avatar variant="contained" src={instagram} />
          <Avatar variant="contained" src={linkedin} />
        </Grid>

        <Box display="flex" ml={12}>
          <Typography variant="body1" sx={{ mt: 1.7, textAlign: "center" }}>
            Don't have an account?
          </Typography>
          <ListItemButton
            button
            component={Link}
            to="/signUp"
            variant="body2"
            sx={{ color: "#3A57E8" }}
          >
            <ListItemText primary="Click here to sign up" />
          </ListItemButton>
        </Box>
      </Box>
    </Box>
  );
};

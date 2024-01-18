import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import {
  Google,
  facebook,
  hope,
  hope_ui,
  instagram,
  linkedin,
} from "../assets/img";
import { Link } from "react-router-dom";
import axios from "../Services/axiosConfig";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match")
      .required(),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const fetchRegister = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(`/api/auth/register`, data);

      localStorage.setItem("token", res.data.token);

      if (res.status === 200) {
        alert("Resgistration successful");
      }
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  if (loading === true) {
    return <h1 className="text-3xl font-semibold ml-[53rem]">Loading...</h1>;
  }

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
      <Box
        component="form"
        onSubmit={handleSubmit(fetchRegister)}
        sx={{
          p: 5,
          height: "45rem",
          width: "34rem",
          borderRadius: "0.5rem",
          boxShadow: 2,
          bgcolor: "white",
          position: "relative",
          left: 52,
          top: 60,
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
            Sign Up
          </Typography>
          <Typography variant="body1" sx={{ mb: 5 }}>
            Create your Hope UI account
          </Typography>
        </Box>

        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            {...register("name")}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormHelperText error>{errors.name?.message}</FormHelperText>
        </FormControl>

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

        <FormControl>
          <FormLabel>Confirm password</FormLabel>
          <Input
            type="password"
            {...register("ConfirmPassword")}
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
          />
          <FormHelperText error>
            {errors.ConfirmPassword?.message}
          </FormHelperText>
        </FormControl>

        <Box ml={16}>
          <FormControlLabel
            control={<Checkbox />}
            label="I agree with the terms of use "
          />
        </Box>

        <Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: "1.75rem",
              mb: 1,
              ml: 25,
              width: "6.375rem",
              bgcolor: "#3A57E8",
              fontFamily: "inter",
            }}
          >
            Sign Up
          </Button>

          <Typography variant="body1" sx={{ textAlign: "center" }}>
            or Sign Up with other Account?
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
            Already have an Account
          </Typography>
          <ListItemButton
            button
            component={Link}
            to="/signIn"
            variant="body2"
            sx={{ color: "#3A57E8" }}
          >
            <ListItemText primary="Click here to sign In" />
          </ListItemButton>
        </Box>
      </Box>
    </Box>
  );
};

import React, { Fragment, useState } from "react";

import {
  Avatar,
  Paper,
  Box,
  Grid,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Head from "next/head";
import Image from "next/image";

import Copyright from "@components/copyright/Copyright";
import LoginForm from "@components/login/LoginForm";
import IEM_FACULTIES_PHOTO from "./public/iem_faculties.jpg";

export default function SignInSide() {
  const [loginType, setLoginType] = useState("faculty");

  const handleLoginTypeChange = (event, newLoginType) => {
    setLoginType(newLoginType);
  };

  return (
    <Fragment>
      <Head>
        <title>IEM | FACULTY BOOK | LOGIN</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            /*"url(https://source.unsplash.com/random)"*/
            backgroundImage:
              "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {"Sign in"}
            </Typography>
            <Box pt={2}>
              <ToggleButtonGroup
                color="primary"
                value={loginType}
                exclusive
                onChange={handleLoginTypeChange}
              >
                <ToggleButton value="faculty">{"Faculty"}</ToggleButton>
                <ToggleButton value="admin">{"Admin"}</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <LoginForm loginType={loginType} />
            {/*             <Grid container>
              <Grid item xs>
                <MuiLink href="#" variant="body2">
                  {"Forgot password?"}
                </MuiLink>
              </Grid>
              <Grid item>
                <MuiLink href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </MuiLink>
              </Grid>
            </Grid> */}
            <Copyright sx={{ mt: 8 }} />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}

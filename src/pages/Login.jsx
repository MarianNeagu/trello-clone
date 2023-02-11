import React from "react";
import Header from "../components/Header";
import { auth } from "../firebase_setup/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { TextField, Grid } from "@material-ui/core";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Root = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 30%;
  max-width: 400px;
  min-width: 300px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <Header />

      <Root>
        <FormContainer>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Helvetica",
              marginBottom: 10,
              textAlign: "center",
              color: "#494949",
            }}
          >
            Welcome
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  <Typography sx={{ fontFamily: "Helvetica" }}>
                    Login
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography
            sx={{
              fontFamily: "Helvetica",
              marginTop: 3,
              textAlign: "center",
              color: "#494949",
            }}
          >
            Not registered? <Link to="/signup">Sign Up</Link>
          </Typography>
        </FormContainer>
      </Root>
    </>
  );
};

export default Login;

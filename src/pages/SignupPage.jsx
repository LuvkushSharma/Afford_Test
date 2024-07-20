import React, { useState } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";

/*

{
	    "firstname": "Luvkush",
	    "lastname": "Sharma",
	    "email": "luvkush.sharma_cs.h21@gla.ac.in",
	    "password": "test@1234"
}


*/

const SignupPage = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [timeStarts, setTimeStarts] = useState(false);

  const baseUrl = "http://localhost:3030";

  const handleSignUp = async () => {
    try {
      const data = { firstname, lastname, email, password };

      const response = await axios.post(`${baseUrl}/signup`, data, {
        withCredentials: true,
      });

      console.log("response : ", response);

      setTimeStarts(true);

      setTimeout(() => {
        console.log("Successfully Signup !!!");
        setTimeStarts(false);
      }, 2000);
    } catch (err) {
      console.error("err : ", err);
    }
  };

  return (
    <Box>
      {timeStarts && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Successfully Signed Up
        </Alert>
      )}

      <Typography variant="h1" component="h2">
        SignupPage
      </Typography>

      <TextField
        label="First Name"
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="contained" onClick={handleSignUp}>
        SignUp
      </Button>
    </Box>
  );
};

export default SignupPage;

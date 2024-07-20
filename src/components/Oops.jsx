import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Oops = () => {
  const navigate = useNavigate();

  const handleFunc = () => {
    navigate("/signup"); // By default i am navigating the user to the signup page.
  };

  return (
    <>
      <center>
        <Typography variant="h1" component="h2">
          Oops you had visited the wrong page !!!
        </Typography>
      </center>

      <Button onClick={handleFunc}></Button>
    </>
  );
};

export default Oops;

import React , {useState} from "react";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

    const navigate = useNavigate();

    const handleLogin = () => {

         navigate ("/login");

    }

    const handleSignUp = () => {

        navigate ("/signup");
        
   }

    return <>
       <Button onClick={handleLogin}>Go to LoginPage Page</Button>
       <Button onClick={handleSignUp}>Go to SignUp Page</Button>
    </>
}

export default HomePage;
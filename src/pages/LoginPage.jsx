import React , {useState} from "react";
import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

/*

{
    "password" : "test@1234"
}


*/


const LoginPage = () => {
    
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [timeStarts , setTimeStarts] = useState(false);

    const baseUrl = "http://localhost:3030";

    const handleLogin = async () => {

        try {

            const data = {password};

            const response = await axios.post(`${baseUrl}/users/${email}/login` , data, {withCredentials: true});
    
            console.log('response : ' , response);

            setTimeStarts (true);

            setTimeout(() => {

                 console.log('Successfully Logined in !!!');
                 setTimeStarts (false);
                 
            } , 2000);
           
        } catch (err) {

             console.error("err : " , err);
        }

        
    }

    return <Box>

       {timeStarts && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">Successfully Loggedin !!!</Alert>}

       <Typography variant="h1" component="h2">
        LoginPage
      </Typography>

       <TextField label="Email" id="outlined-basic"  variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
       <TextField label="Password" id="outlined-basic"  variant="outlined" onChange={(e) => setPassword(e.target.value)}/>

       <Button variant="contained" onClick={handleLogin}>Login</Button>
    </Box>
     
}

export default LoginPage;
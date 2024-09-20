import React, { useState } from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';

const Auth = () =>{
    const [isSignUp , setIsSignup] = useState(false);
    const [input , setInput] = useState({name:"",email:"",password:""});
    const handleChange = (event:any) => {setInput((prevState)=> ({...prevState,[event.target.name] : event.target.value}))}
    const handleSubmit = (event:any) =>{event.preventDefault();console.log(input);}
    const resetState = ()=>{setIsSignup(!isSignUp); setInput({name:"",email:"",password:""});}
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems= "center" justifyContent={"center"} margin = "auto" marginTop = {5} padding = {5} borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"} sx={{":hover" : {boxShadow: "10px 10px 20px #ccc",}}}>
              <Typography variant="h2" padding={3} textAlign={'center'}>{isSignUp ? "SignUp" : "Login"}</Typography>
               {isSignUp && <TextField name="name"value={input.name} onChange={handleChange} margin = 'normal' type  = 'text' variant='outlined' placeholder='Name'/>}
               <TextField  name="email" value={input.email} onChange={handleChange} margin = 'normal' type = 'email'  variant='outlined' placeholder='Email'/>
               <TextField  name ="password" value={input.password}onChange={handleChange}  margin = 'normal' type = 'password' variant='outlined' placeholder='Password'/>
               <Button  type={'submit'}sx ={{marginTop:3,borderRadius:3}} variant='contained' color='warning'>{isSignUp?"Sign Up":"Login"}</Button>
               <Button onClick ={resetState} sx ={{marginTop:3,borderRadius:3}}>Change To {isSignUp?"Login" : "SignUp"}</Button>
            </Box>
        </form>
    </div>
    );
};

export default Auth;
import React, { Component } from 'react';
import {Link, Navigate } from "react-router-dom";
import Protect from './Protcet';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Demo.css"
import { toast, ToastContainer } from "react-toastify";

 class Signup extends Component {

  constructor(){
    super();

    this.state={
        email_id:"",
        Password_id:"",
        page:"",
        d:"",
        name:"karthi"
        
    }
}
componentDidUpdate(prevProps,prevState){
  //this.setState({name:"mathan"});
  console.log(prevState);
//  return true
this.timeout = setTimeout(() => {
      this.setState({name:"mathan"});
      

    }, 2000);return true
    
}

componentWillUnmount() {
  clearInterval(this.timeout);
}
validatelogin = (e) => {
  e.preventDefault();
  this.setState({ name: this.state.name });
  const { email_id, Password_id } = this.state;
  let b = JSON.parse(localStorage.getItem("details"));
  toast.success("Login Scuessfull ");
  let validate = b.some((x) => {
    return x.email === email_id && x.password === Password_id;
  });
  console.log(validate);
  if (validate === true) {


    localStorage.setItem("set","ok");
    this.setState({page:<Navigate to="/Demo"></Navigate>})
    
  } else {
    alert("Email does not match");
  }

  
};
  render() {
    if(localStorage.getItem("set")!==null){
      return <Navigate to="/Demo"/>
  }

    return (
      <div className="details" >
         <Avatar sx={{ ml: 83, alignItems:"center", bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon  />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box  onSubmit={this.validatelogin} noValidate sx={{ mt: 4 }}>
        {/* <h1>{this.state.name}</h1> */}
      <form onSubmit={this.valdatelogin}> 
 
  <TextField 
    type="text" name="email"
    onChange={(e) => this.setState({ email_id: e.target.value })}
        placeholder="Enter email" 
    />

    <div>
       
        <TextField type="password" name="password"
onChange={(e) => this.setState({ Password_id: e.target.value })}
        placeholder='Password' />
    </div>
    
      <div>
          <Button variant="contained" color='primary' type="submit">Login</Button>
         
        </div>
        <br/><br/>
        <p>{this.state.page}</p>
        <div>
            <h3>New user</h3>
        <Button variant="contained"   sx={{ mt: 3, mb: 2 }} color='primary' type="button"><Link to="/Loginform" style={{ textDecoration: 'none',color:"white" }}>SIGN UP</Link></Button>
        </div>
    </form>
    </Box>
  
 
   
</div>
    )
  }
}
export default Signup
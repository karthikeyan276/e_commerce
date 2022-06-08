import React, { Component } from 'react'
import Navbar from './Navbar'
import "./Demo.css"
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { Box } from '@mui/system';
import {  ToastContainer } from "react-toastify";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class Process extends Component {


  constructor() {
    super();
    this.state = {


      show: true,
      not:true,
      id: "",
      price: "",
      title: "",
      details: "",
      cart: 0,



    }
  }
  showSuccess = () => {
    toast.success("Payment Sucess",{autoClose:2000});
  };

 
 
  

  render() {
    let total = JSON.parse(localStorage.getItem("amount"));
    console.log(total)
    let bynow = JSON.parse(localStorage.getItem("bynow"))
    console.log(bynow);

  
    return (
      <div className='process'>
        
        <div className='container'>
          <div className='row col-md-12'>
          {
            console.log("paticaular" , bynow.price)
          }
            
          {

bynow.map((x)=>{
  return(
    <div>
      {total} 
<Card sx={{ display: 'flex' ,width: "fit-content" }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
      
      <CardMedia 
                            component="img"
                            image= {x.pic}
                            sx={{ width: 151 }}/>
        
        
      </CardContent>
     
    </Box>
    <Typography variant="subtitle1"  component="div">
    <h4>Name:{x.title}</h4>
    <h4>  Price:₹  {x.price} </h4>
    <Link to="/Sucess">
         <Button variant="contained"  onClick={this.showSuccess} style={{ textDecoration: 'none' }} color="success">Pay Now</Button>

           </Link>
           <ToastContainer closeButton={false} position="top-right" />
        </Typography>
  </Card>
  
      </div>
  )
})

}

          </div>
        </div>


            <Navbar/>
   
        <div className='process'>

        {/* <h1> Total Amount : ₹{total}</h1>  */}
        {/* <Link to="/Sucess">
                <Button    variant="contained" color="success">
                    
                    
                     PayNow</Button>

        </Link> */}
       
        </div>
<div>
            
    {/* <h1>{bynow}</h1> */}
</div>
      </div>
    )
  }
}

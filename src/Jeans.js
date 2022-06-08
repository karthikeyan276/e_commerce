import React, { Component } from 'react'
import Leather from "./Leather.json";
import "./Main.css"
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import { Link, Navigate } from 'react-router-dom';
import Hide from './Hide';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Navbar from './Navbar';
import { toast, ToastContainer } from "react-toastify";
import { CardContent, CardMedia, Typography } from '@mui/material';


export default class Jeans extends Component {

  constructor() {
    super();
    this.state = {


      show: true,
      id: "",
      price: "",
      title: "",
      details: "",
      cart: 0,



    }
  }
  get = (id, price, title, details) => {
    this.setState({
      id, price, title, details, show: false
    });
    // <Navigate to="/Jeandetails"></Navigate>
  }

  sett = (x) => {

    let jeans = []


    jeans.push({ title: x.title, id: x.id, price: x.price, details: x.details, pic: x.pic })
    localStorage.setItem("Jean1", JSON.stringify(jeans));
  }


  gtt = () => {
    this.setState({
      cart: this.state.cart += 1

    })
  }
  set = (x) => {

    let datas = JSON.parse(localStorage.getItem("Jean")) || []


    datas.push({ title: x.title, id: x.id, price: x.price, pic: x.pic, details: x.details })
    localStorage.setItem("Jean", JSON.stringify(datas));
    toast.success("Item Added ", {autoClose:1000});
  }
bynow = (x)=>{
  let jeans = []


  jeans.push({  price: x.price, pic: x.pic,title: x.title })
  localStorage.setItem("bynow", JSON.stringify(jeans));


}

  navigate = () => {
    <Navigate to="/Jeandetails"></Navigate>
  }

  render() {


    return (

      <div className='check' >


        <div>

         <Navbar /> 
        </div>
        

       
        <div className='container '>
       
          
          <div className='row  col-md-12'>
          <center> <h1>Brand Jean</h1> </center>

            {
              Leather && this.state.show && Leather.map(Leather => {

                return (

                  <div className='col-md-4' >
                    <Card sx={{ display: 'flex' ,width: "fit-content",p:2 }}>

                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>


                     <CardContent  sx={{ flex: '2 0 auto' }}>

                    <Link to="/Jeandetails">
                      <CardMedia 
                       onClick={() => this.sett(Leather)}
                       component="img"
                            image= {Leather.pic}
                            sx={{ width: 151 }}/>
                    </Link>
                     
                       
                       
                    
                     </CardContent>

                     </Box>
                       <Typography  variant="subtitle1"  component="div">
                       <p > {Leather.title}</p>

{/* <p className='hq' >id: {Leather.id} </p>  */}
{/* <h1>{this.get(Leather.id,Leather.price,Leather.title,Leather.details)} </h1> */}




<p className='price'>Price  : ₹ {Leather.price}</p>
{/* <Link to="/Jeandetails">
<Button  onClick={()=>this.navigate}>
View details

</Button>
</Link> */}
  <div className='new_button'>

<Button variant="contained" sx={{mt:1,width:'px'}} color="success" onClick={() => this.set(Leather)}>

  Add To Cart
</Button>
<Link to='/Process'>

  <Button onClick={()=>this.bynow(Leather)} sx={{mt:1,width:'px'}} variant='contained' color="primary">Buy Now</Button>
</Link>

  </div>
                         
                       </Typography>
                        
                       


                      
                      
                    </Card>











                  </div>

                )
              })
            }

          </div>
          <div className='detta'>
            {this.state.show ? null : this.state.id} <br />
            {this.state.show ? null : this.state.price} <br />
            {this.state.show ? null : this.state.title} <br />
            {this.state.show ? null : this.state.details}
          </div>
        </div>
      </div>
    )
  }
}

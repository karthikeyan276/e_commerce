import React, { Component } from "react";
import Stack from '@mui/material/Stack';

import Button from "@mui/material/Button";
import "./Main.css";
import HomeIcon from "@mui/icons-material/Home";

import { Navigate, Link, Routes } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Shoesnew from "./Shoesnew";
import Watchnew from "./Watchnew";
import Jeans from "./Jeans";
import Home1 from "./Home1";
import Shoes from "./Shoes";
import Watchs from "./Watch";
import Avatar from '@mui/material/Avatar';
import { deepOrange, lightBlue } from '@mui/material/colors'



export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      showJean: false,
      showTshirt: false,
      showBelt: false,
      showHome: false,
    };
  }

  click1 = () => {
    this.setState({
      showJean: true,
      showTshirt: false,
      showBelt: false,
    });
  };

  click2 = () => {
    this.setState({
      showJean: false,
      showTshirt: true,
      showBelt: false,
    });
  };

  click3 = () => {
    this.setState({
      showJean: false,
      showTshirt: false,
      showBelt: true,
    });
  };

  click4 = () => {
    this.setState({
      showJean: false,
      showTshirt: false,
      showBelt: false,
      showHome: true,
    });
  };

  render() {
    if(localStorage.getItem("set")==null){

      return <Navigate to="/"/>

  }

 let  remov = ()=>{
    localStorage.removeItem("set")
  }
    return (
      <div  className="color">
        
        <nav> 

        

        <div>
          <img className='cc' src='https://valorpaytech.com/wp-content/uploads/2021/01/Valor-PayTech-Logo-Small.png?x59950'/>

          <div className='navbar'>
<Link to="/Orders">
<ShoppingBasketIcon sx={{mx:1}} className="ic" color="primary" style={{fontSize:"70px"}}/>

</Link>

<Link to="/">

<HomeIcon color="sucess"className="ic" sx={{mx:1}} style={{fontSize:"70px"}} />



</Link>

           <Button onClick={this.click1}  variant="contained" sx={{mx:1}}> Jean
           
           </Button> 
       
          
          <Button onClick={this.click2}  variant="contained" sx={{mx:1}} >Shoes
          </Button>  
          
     
    
        <Button onClick={this.click3}  variant="contained" sx={{mx:1}} > Watch

        </Button>
         
        

          
            <Button variant="contained" style={{fontSize:"25px",textDecoration: 'none' }}  color="error" sx={{mx:1}}   onClick={remov}>
            <Link to="/Loginform"  style={{ textDecoration: 'none',color:"white" }}
              
             
            >
              Log out
              </Link>
            </Button>
          
      </div>
        
        </div>
        </nav>
        {this.state.showJean ? <Home1 /> : null}
        {this.state.showTshirt ? <Shoes /> : null}
        {this.state.showBelt ? <Watchs /> : null}
        
      </div>
    );
  }
}

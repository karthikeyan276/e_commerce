import React, { Component } from 'react'
import { Link ,Navigate} from 'react-router-dom';
import "./Main.css";
import Demo from './Demo';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { toast, ToastContainer } from "react-toastify";


export default class Navbar extends Component {
  render() {
    if(localStorage.getItem("set")==null){

      return <Navigate to="/"/>

  }

 let  remov = ()=>{
    localStorage.removeItem("set")
    toast.success("Logged Out ");
  }
    return (
      <div className='Nav'>


<nav className='navbar'> 
  
<img className='cc'  src='https://valorpaytech.com/wp-content/uploads/2021/01/Valor-PayTech-Logo-Small.png?x59950'/>


<div >
 
    
    
<Link to="/Jeans"  style={{ textDecoration: 'none' }}>
           <Button variant="contained" sx={{mx:1}}> Jean
           
           </Button> 
          </Link>
          <Link to="/Shoesnew"  style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{mx:1}} >Shoes
          </Button>  
          
          </Link>
         
          <Link to="/Watchnew"  style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{mx:1}} > Watch

        </Button>
        <Link to="/Process">
<Button variant="contained"  >Checkout</Button>
</Link>
         
          </Link>

          <Link to="/Signup" style={{ textDecoration: 'none' }}>
        <Button variant="contained"   color="error" sx={{mx:1}}  onClick={remov}> Logout

        </Button>
        
          </Link>
          <Link to="/Orders">
  <ShoppingBasketIcon sx={{mx:1}} className="ic" color="primary" style={{fontSize:"60px"}}/>

  </Link>

<Link to="/">

<HomeIcon color="sucess"className="ic" sx={{mx:1}} style={{fontSize:"70px"}} />


</Link >


          </div>
        </nav> 
      </div>
    )
  }
}

import React, { Component } from 'react'
import Leather from "./Leather.json";
import "./Main.css"
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Jeans from "./Jeans"
import Jeandetails from './Jeandetails';

export default class Home1 extends Component {

  
  render() {
    return (
      
        <div className='check'>
          <Navbar />
          
          <Button variant="contained" color="primary">
          <Link to="/Jeandetails">
          Jean details
          </Link>
                    </Button>
          
         
         
       
      <div className='home1'>
      </div>
      </div>
    )
  }
}

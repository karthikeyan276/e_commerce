import React, { Component } from 'react';
import {Routes,Route,Link,Navigate} from "react-router-dom"
import Main from './Main';
import "./Demo.css"

import Hide from './Hide'
import Home1 from './Home1';
import Shoes from './Shoes';
import Watchs from './Watch';
import Orders from './Orders';
import Navbar from './Navbar';
import { Button, Card, CardMedia, Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/system';


export default class Demo extends Component {


  render() {
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    if(localStorage.getItem("set")==null){

      return <Navigate to="/"/>

  }

 let  remov = ()=>{
    localStorage.removeItem("set")
  }
 
  
    return (
    
      <div className='process'>
        
       
       

        <Navbar />
        <Routes>
         
          <Route path='/Home1' element={<Home1/>}/>
          <Route path='/Shoes' element={<Shoes/>}/>
          <Route path="/Watch" element={<Watchs/>}/>
          <Route path='/Orders' element={<Orders/>}/>
        </Routes>
       
      <div className='process'>


 
      
<Card sx={{ width: '75%',height:""}}  className='demo_image'>
  
<Card  >

        <img className='demo_image' src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17491834/2022/3/12/6120aa09-7465-43e9-9784-4eeff1a9bd561647061575003FEVERMenBlueHeavyFadeJeans1.jpg"/>
       <Link to='/Jeans'>
       <Button variant='contained'>View More</Button>
       </Link> 
</Card>

      <Card  >
              <img className='demo_image' src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/9/24/27d5775c-75c1-4276-b773-dd6e62645deb1569286562440-2.jpg"/>
             <Link to="/Shoesnew">
             <Button variant='contained'>View More</Button>
             </Link> 
      </Card>
      <Card  >
              <img className='demo_image' src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7569986/2018/10/8/fc7019a2-c80c-45d4-b9f3-dc66ed5a56731538974797616-WM-Black-Dial-Silver-Stainless-Steel-Strap-Watch--for-Men-and-Boys-7201538974797498-1.jpg"/>
             <Link to='/Watchnew'>
             <Button variant='contained'>View More</Button>
             </Link> 
      </Card>


  


  
  

              

      </Card>

       




      
      </div>
               </div>  
               
               
      


    )
  }
}

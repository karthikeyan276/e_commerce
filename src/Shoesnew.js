import React, { Component } from 'react'
import Shooes from "./Shoes.json";

import Navbar from './Navbar';
import Button from '@mui/material/Button';
import "./Demo.css"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";

export default class Shoesnew extends Component {
  constructor(){
    super();
    this.state = {
        
        
        show:true,
        id:"",
        price:"",
        title:"",
        details:""
        
        

    }
}

bynow = (x)=>{
  let jeans = []


  jeans.push({  price: x.price, pic: x.pic,title: x.title })
  localStorage.setItem("bynow", JSON.stringify(jeans));

}
sett =(x) =>{

  let jeans = []
        
   
  jeans.push({ title:x.title,id:x.id,price:x.price,details:x.details,pic:x.pic  })
               localStorage.setItem("Shoes", JSON.stringify(jeans));
 }
 
 set = (x)=>{
    
  let datas = JSON.parse(localStorage.getItem("Jean")) || []
     

  datas.push({ title:x.title,id:x.id,price:x.price,pic:x.pic  })
            localStorage.setItem("Jean", JSON.stringify(datas));
            
            toast.success("Item Added ",{autoClose:1000});
}
get = (id,price,title,details) =>{
  this.setState({
    id,price,title,details,show:false
  })


}
  render() {
  
    return (
      <div className='check'>
   <Navbar />
       
          <div className='container '>
          <div className=' row  col-md-12' >

{
    Shooes &&this.state.show&& Shooes.map(Shoes=>{
        return(
            <Card className='col-md-4 '>
           <div className='details'>
           <Link to="/Shoesdetails">
           <img className='homegrid1' onClick={()=>this.sett(Shoes)} src={Shoes.pic}/>

           </Link>
           <p className='hq'>Name: {Shoes.title}</p> 
          
           {/* <p className='hq'> id: {Shoes.id} </p>  */}
         
         
          <p  className='price'>Price  : ₹ {Shoes.price}</p>  
          
       
          <Button className='cll' sx={{mx:2}} variant="contained" color="success" onClick={()=>this.set(Shoes)}>Add To Cart</Button>  

          <Link to='/Process'>
                    <Button variant='contained' onClick={()=>this.bynow(Shoes)}> Buy Now</Button>

          </Link>
         
         </div>
         
          
            </Card>
            
        )
    })
}

</div >
            </div>
          
<div className='detta'>
{this.state.show ?  null : this.state.id} <br/> 
   {this.state.show ?  null : this.state.price} <br/>
   {this.state.show ?  null : this.state.title} <br/>
   {this.state.show ? null:this.state.details}
</div>

</div>
    
    )
  }
}

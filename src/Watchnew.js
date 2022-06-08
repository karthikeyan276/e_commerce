import React, { Component } from 'react'
import Watch from "./Watch.json"
import "./Main.css"
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Hide from './Hide';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";

export default class Watchnew extends Component {
  constructor(){
    super();
    this.state = {
        
        // title:false,
        // details:false,
        show:true,
        id:"",
        price:"",
        title:"",
        details:""
        
        

    }
}
// hideAll =()=>{
//   this.setState({details:true,id:true,title:false})
  

// }
get = (id,price,title,details) =>{
  this.setState({
    id,price,title,details,show:false
  })


}
sett =(x) =>{

  let jeans = []
        
   
  jeans.push({ title:x.title,id:x.id,price:x.price,details:x.details,pic:x.pic  })
               localStorage.setItem("Watch", JSON.stringify(jeans));
 }

 bynow = (x)=>{
  let jeans = []


  jeans.push({  price: x.price, pic: x.pic,title: x.title })
  localStorage.setItem("bynow", JSON.stringify(jeans));
  

}


 set = (x)=>{
    
  let datas = JSON.parse(localStorage.getItem("Jean")) || []
     

  datas.push({ title:x.title,id:x.id,price:x.price,pic:x.pic  })
            localStorage.setItem("Jean", JSON.stringify(datas));
            toast.success("Item Added ",{autoClose:1000});
}

  render() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e5faf4',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
      <div className='check' >
       <Navbar/>
        <div className='hw'>
        <center>
           <h1 style={{color:"black"}}>Branded  Watchs Available </h1></center>
        </div>
          <div className='home1'>
          <div className='container '>
            <div className=' row  col-md-12' >
            {
   Watch&&this.state.show&& Watch.map(Watch=>{
        return(
            <Card sx={{p:1}} className='col-md-4'>
               
              
                  
               <Link to='/Watchdetails'>
               
                        <img onClick={()=>this.sett(Watch)}  className='Watch_image'   src={Watch.pic}/>
   
                
        </Link>
                 
               

         <div className='details'>

         <h5 className='hq'>Name: {Watch.title}</h5> 
          
          {/* <p className='hq'>id: {Watch.id} </p>  */}
          <div  className="">     
                  </div>
         <div >
         
           </div>
           
         <p className='price'> Price  : ₹ {Watch.price}</p>  

           <br />
     

           <Button className='cll' variant="contained" onClick={()=>this.set(Watch)} sx={{mx:2}} color="success">Add To Cart </Button>  

           <Link to="/Process">
            <Button variant="contained" onClick={()=>this.bynow(Watch)}>Buy Now</Button>
           
           </Link>
           

         </div>
            
           
           
            </Card>
            
        )
    })
}

          </div>
          </div>
           


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

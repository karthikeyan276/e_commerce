import React, { Component } from 'react'
import Hide from "./Hide"
import "./Demo.css"
import Navbar from './Navbar'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import "./Demo.css"
import { Link } from 'react-router-dom';

export default class Orders extends Component {
  constructor(){
    super();
    this.state={
      todos:[],
      count:0,
      products: [], total: 0,
      
      reload:false
      

    }
  }
hw(e){
e.preventDefault()
}

// componentDidMount() {
//   let cart = localStorage.getItem('cart');
//   if (!cart) return; 
//   getCartProducts(cart).then((products) => {
//     let total = 0;
//     for (var i = 0; i < products.length; i++) {
//       total += products[i].price * products[i].qtsy;
//     }
//     this.setState({ products, total });
//     });
// }
componentDidUpdate(){
  let total = JSON.parse(localStorage.getItem("Jean"));
let amount=total.map(e=>e.price).reduce((last,curr)=>last+curr)

        localStorage.setItem("amount",amount)
        console.log(amount);
}

  set = (x)=>{

    
    let datas = JSON.parse(localStorage.getItem("Jean")) || []
   
  
    datas.push({ title:x.title,id:x.id,price:x.price,pic:x.pic,details:x.details  })
              localStorage.setItem("Jean", JSON.stringify(datas));
this.setState({reload:true})
          if(this.state.reload==true){
              this.componentDidUpdate()
          }

              

              
  }
  
  handle=(index,x)=>{
       
    let datas = JSON.parse(localStorage.getItem("Jean")) || []
   
  
    datas.push({ title:x.title,id:x.id,price:x.price,pic:x.pic,details:x.details  })
              localStorage.setItem("Jean", JSON.stringify(datas));

              
  }
  clearCart = () => {
    localStorage.removeItem('Jean');
    this.setState({products: []});
  }
  removeFromCart = () => {
    // let products = this.state.products.filter((item) => item.id !== product.id); 
    // let cart = JSON.parse(localStorage.getItem('Jean'));
    
    // localStorage.setItem('Jean', JSON.stringify(cart));
    // let total =  this.state.total+ (product.price  )
    // this.setState({products, total});
    // console.log(total);

// let nre =  JSON.parse(localStorage.getItem("Jean"));

//     const totalPrice = nre.reduce((acc, curr)=>{ //calculate total
//       let cur =curr.price.match(/\d./g).join('') //parse string to integer(cost)
//       console.log(totalPrice);
    
//         return acc + Number(cur);   console.log("sdis",acc);
//       }, 0)
//     console.log("total:", totalPrice);

let total = JSON.parse(localStorage.getItem("Jean"));
let amount=total.map(e=>e.price).reduce((last,curr)=>last+curr)

        localStorage.setItem("amount",amount)
        console.log(amount);
  }

  render() {
    let Jean = JSON.parse(localStorage.getItem("Jean"));
    let bynow = JSON.parse(localStorage.getItem("bynow"))
    let total = JSON.parse(localStorage.getItem("amount"));
    console.log(bynow);
    //  const st = JSON.parse(localStorage.getItem("Jeans"))
  // console.log(Jean);
    return (
      
      <div >
        
        <div className='order'>

          <Navbar />
        </div>
          
       
       <div className='orderh1'> 
         
         <h2>Your Cart </h2>
       </div>
       <center>
           <Link to="/Process">
             
           <Button onClick={()=>this.removeFromCart()}   sx={{alignContent:"center"}} variant='contained'>
         processed to checkout

       </Button>
           </Link>
            
            
       
         
       </center>
          <div className=''>
          <div className='container '>
          <div className=' row  col-md-12'>
            
          {/* <div className='col-md-4'> */}
          {
           Jean.map((x)=>{
             return (
               <div className='col-md-3' >
                  
               <Card sx={{pt:2}} className='card1'>
               <img className='homegrid' src ={x.pic}/><br/>
               <div className='details'>
                 
               <h5> Title: {x.title}</h5>  
              <h5> Id: {x.id} </h5>  
               <h5> Price:₹ {x.price} </h5>  
                 
                 
                 <button style={{margin:"5px"}} onClick={()=>this.set(x)} className='btn btn-success'> 
            Add
          </button>  
          <button onClick={()=>this.removeFromCart(x)} className='btn btn-danger'>
            Remove
          </button>

               </div>
               

               </Card>

         
          <div> </div>
          
                 {/* <h4>Details:{x.details}</h4> */}
                 
                 </div>
                
             )
           })
         }
         
       
          {/* </div> */}
          </div>
         
          </div>
          </div>
          
       
              </div>
    )
  }
}

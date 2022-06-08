import React, { Component } from 'react'
import Hide from "./Hide"
import "./Demo.css"
import Navbar from './Navbar'

export default class Shoesdetails extends Component {
  
  render() {
    let Jean = JSON.parse(localStorage.getItem("Shoes"));
    //  const st = JSON.parse(localStorage.getItem("Jeans"))
  console.log(Jean);
    return (
      
      <div className='color'>
          <Navbar />
         
         {
           Jean.map((x)=>{
             return (
               <div>

            <h1>Titile:  {x.title}<br/></h1>   
         <h1>    Id:    {x.id}<br/></h1>    
         <h1>  Price:    {x.price} </h1>    
           <h1> Details: </h1>  {x.details}<br/>    
                 <div className='home__image'>
            Images:   <img className='homegrid1'src=  {x.pic}/>
               </div>
                 </div>
             )
           })
         }
       
         
              </div>
    )
  }
}

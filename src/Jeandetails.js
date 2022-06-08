import React, { Component } from 'react'
import Hide from "./Hide"
import "./Demo.css"
import Navbar from './Navbar'
import { Button } from '@mui/material';

export default class Orders extends Component {
  constructor(){
    super();
    this.state={
      todos:[]
    }
  }
  componentDidMount(x){
    // this.setState({
      
    // })
    // let datas = JSON.parse(localStorage.getItem("Jean")) || []
       
  
    // datas.push({ title:x.title,id:x.id,price:x.price  })
    //           localStorage.setItem("Jean", JSON.stringify(datas));
    const todos1 = localStorage.getItem("Jean");
     this.setState({ todos: JSON.parse(todos1) });
    
  }
  handle=()=>{
    let Jean = JSON.parse(localStorage.getItem("Jean"));

    let dat = Jean.findIndex((x)=>{
     return dat.some((y)=>{
        return x.id===y.id
      })
    })
  }
  render() {
    let Jean = JSON.parse(localStorage.getItem("Jean1"));
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
         <div className='home__image'>
            Images:   <img className='home__image' src=  {x.pic}/>
               </div>
           <h1> Details: </h1>  {x.details}<br/>    
               
                 </div>
             )
           })
         }
       
         
              </div>
    )
  }
}

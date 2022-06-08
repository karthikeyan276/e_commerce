import React, { Component } from 'react'
import Watch from "./Watch.json"
import "./Main.css"
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Watchnew from './Watchnew';

export default class Watchs extends Component {
 
// hideAll =()=>{
//   this.setState({details:true,id:true,title:false})
  

// }



  render() {
    return (
      <div className='check' >
      <Watchnew/>
      </div>
    )
  }
}

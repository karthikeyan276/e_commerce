import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div>
          <h1>Click To See Products</h1>
          <Link to="/Home1">
           <button className='button'> Jean
           
           </button> 
          </Link>
          <Link to="/Shoes">
          <button className='button'>Shoes
          </button>  
          
          </Link>
         
          <Link to="/Watch">
        <button className='button'> Watch

        </button>
         
          </Link>
          <Link to="/Watch">
        <button className='button'> Logout

        </button>
         
          </Link>
      
          
      </div>
    )
  }
}

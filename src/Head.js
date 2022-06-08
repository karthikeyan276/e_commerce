import React, { Component } from 'react'
import Home1 from "./Home1"
import Shoes from './Shoes';
import Watch from "./Watch"
import Watch1 from "./Watch.json"

export default class Head extends Component {
        constructor(){
            super();
            this.state = {
              show:true,
              id:"",
              prize:""
        
                

            }
        }

    Show1 = () =>{
        this.setState({Jean1:true,Watch1:false,Shoes1:false})
    };

    Show2=()=>{
        this.setState({Jean1:false,Watch1:true,Shoes1:false})
    };
    Show3=()=>{
        this.setState({Jean1:false,Watch1:false,Shoes1:true})
    }
    hideAll =()=>{
          this.setState({Jean1:false,Watch1:false,Shoes1:false})
    }
    details = (id,prize,name) =>{
      this.setState({
        id,prize,name,show:false
      })
  console.log("id=>>>>>",id)
  console.log("prize",prize)
    }
  
  render() {
    return (
      <div>
        {
    Watch1 && this.state.show && Watch1.map(Watch=>{
        return(
            <div >
              <img onClick={()=>this.details(Watch1.id)}   className='home__image' src={Watch1.pic}/>

         
            
          
          
            </div>
            
        )
    })
}

            <button onClick={this.Show1}>Jean</button>
            <button onClick={this.Show2}>Watch</button>
            <button onClick={this.Show3}>Shoes</button>
            <h1 onClick={this.hideAll}>Hide all</h1>
            <h1>  ID: {this.state.show ?  null : this.state.id}<br/></h1> 
            {this.state.Jean1 ?  <Home1/>:null}
            {this.state.Watch1 ?  <Watch/>:null}
            {this.state.Shoes1 ?  <Shoes/>:null}

      </div>
    )
  }
}

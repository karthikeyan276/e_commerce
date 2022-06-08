import React from "react";
import {Link} from "react-router-dom"


class Example extends React.Component {
constructor(){
  super();
  this.state={
    data:"karthi",
    date:12
  }
}
updateData(){
  alert("karthikeyan")
  this.setState({data:"welcome"})
}



    render() {
      return (
        <div >
          <h1> {this.props.name}</h1>
          <h2> {this.props.email}</h2>
          <h1>{this.state.data}</h1>
          <button onClick={()=>this.updateData()}> Click here</button>
          <button onClick={()=>this.updateData()}>Change</button>

          <nav>
<Link to="/Testnav" >test
  </Link>
  </nav>
        </div>
      );
    }
  }


  export default Example
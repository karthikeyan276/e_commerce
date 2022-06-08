import React from "react";

class Testnav extends React.Component {
constructor(){
  super();

  this.state = {
    name:"karthi"
  };
}

 

  // componentDidMount() {
  //   this.timeout = setTimeout(() => {
  //     this.setState({name:"mathan"});
  //   }, 3000);

  //   console.log("did");
  // }
  componentDidUpdate(prevProps,prevState){
    //this.setState({name:"mathan"});
    console.log(prevState);
  //  return true
  this.timeout = setTimeout(() => {
        this.setState({name:"mathan"});
        

      }, 2000);return true
      
      
  
  }
  handleIncrement = () => {
    this.setState({ name: this.state.name });
  };

  // componentWillUnmount() {
  //   console.log("Will");
  //   clearTimeout(this.timeout);
  // }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <button onClick={this.handleIncrement}>change</button>
      </div>
    );
  }
}

export default Testnav;
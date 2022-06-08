import React, { Component } from 'react'

export default class Comp extends Component {
constructor(props){
    super(props);
    this.state = {
        counter : 0,
        mount:true,
        
    };
    this.Test();
    console.log("constructor");
    this.mountCounter = ()=>this.setState({mount:true})
    this.unmountCounter = ()=>this.setState({mount:false})

}



// its only run one time only 
shouldComponentUpdate(){
    console.log("mountupdd");
}

componentDidMount(){
    console.log("did mount");
}
// its setstate will update time its calling refer perv props preState and snapshot
componentDidUpdate(){
    console.log("componentDidUpdate");
}
componentWillUnmount(){
    console.log("unmount");
}
Test(){
this.setState({counter:this.state.counter +1})
}
    
  render() {
      console.log("render");
    return (
      <div>
          Comp {this.props.index} <br />
          Counter:{this.state.counter}
            <button onClick={this.Test.bind(this)}>+ </button>




            <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
            <button onClick={this.unmountCounter} disabled={!this.state.mount}>unMount</button>
      </div>
    )
  }
}

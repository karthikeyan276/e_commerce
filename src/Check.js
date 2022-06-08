import React from 'react';
  
class Email extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    
  }
     
  handleChange=(event) =>{
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit=(event) =>{
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        
        input["email"] = "";
        input["paswd"] = "";
        input["confirmpwd"] = "";
        this.setState({input:input});
  
        alert('Form Submited');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
  
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";

        }
      }
  
      if (!input["paswd"]) {
        isValid = false;
        errors["paswd"] = "Please enter your password.";
      }
  
      if (!input["confirmpwd"]) {
        isValid = false;
        errors["confirmpwd"] = "Please enter your confirm password.";
      }
  
      if ( input["paswd"] !== "undefined" &&  input["confirmpwd"] !== "undefined") {
          
        if (input["paswd"] != input["confirmpwd"]) {
          isValid = false;
          errors["paswd"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
  
          
  
          <div >
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              
              placeholder="Enter email" 
              id="email" />
  
              <div>{this.state.errors.email}</div>
          </div>
   
          <div >
            Password:
            <input 
              type="password" 
              name="paswd" 
              value={this.state.input.paswd}
              onChange={this.handleChange}
              
              placeholder="Enter password" 
              />
  
              <div >{this.state.errors.confirmpwd}</div>
          </div>
  
          <div >
            Confirm Password:
            <input 
              type="password" 
              name="confirmpwd" 
              value={this.state.input.confirmpwd}
              onChange={this.handleChange}
               
              placeholder="Enter confirm password" 
              />
  
              <div>{this.state.errors.confirmpwd}</div>
          </div>
              
          <input type="submit" value="Submit"  />
          <h1>{JSON.stringify(this.state)}</h1>
        </form>
      </div>
    );
  }
}
  
export default Email;
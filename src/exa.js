import { Component } from "react";
import { Link , Navigate} from "react-router-dom";

class Login1 extends Component {
  constructor() {
    super();
    this.state = {
      e_mail: "",
      passw: "",
      nav:""
    };
  }
  validatelogin = (e) => {
    e.preventDefault();
    const { e_mail, passw } = this.state;
    let b = JSON.parse(localStorage.getItem("details"));
    let validate = b.some((x) => {
      return x.email === e_mail && x.password === passw;
    });
    console.log(validate);
    if (validate === true) {
      // <Navigate to="/">SIGN IN</Navigate>
      this.setState({nav:<Navigate to="welcome"></Navigate>})
      // document.getElementById("root").innerHTML = "LOGIN SUCCESSFULL";
    } else {
      alert("EMAIL ID OR PASSWORD DOES NOT MATCH");
    }

    // let mail=localStorage.getItem("Email");
    // let pass=localStorage.getItem("Password");

    // if((e_mail!=details1.email)||passw!=details1.password){
    //     alert("EMAIL ID OR PASSWORD DOES NOT MATCH")
    // }
    // else{
    //     document.getElementById("root").innerHTML="LOGIN SUCCESSFULL";
    // }
  };
  render() {
    return (
      <form onSubmit={this.validatelogin}>
        

        <h1>LOG IN</h1>
        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="enter your mail id"
            onChange={(e) => this.setState({ e_mail: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="enter the password"
            onChange={(e) => this.setState({ passw: e.target.value })}
          />
        </div>
        <br/>
        <div>
          <button type="submit">Login</button>
        </div>
        <br/><br/>
        <p>{this.state.nav}</p>
        <div>
            <h3>NEW REGISTRATION?</h3>
        <button type="button"><Link to="/signup">SIGN UP</Link></button>
        </div>
      </form>
    );
  }
}

export default Login1;

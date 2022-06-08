import { Component } from 'react';
import { Link } from "react-router-dom"





class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmpassword: '',
            
        }
    }

   
    validateForm = (e) => {
        e.preventDefault();
        
        let datas = JSON.parse(localStorage.getItem("details")) || []
        let emails = datas.map((x) => x.email);
        const { email, password, confirmpassword } = this.state;
        let emailexp = ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!email.match(emailexp)) {
            alert("Please enter valid email id")
        }


        else if (password.length < 4) {
            alert("password  4 charecters")
        }
        else if (password !== confirmpassword) {
            alert("password  not match")
        }
        else if (emails.includes(email)) {
            alert("sorry email id already exists!!!")
        }
        else {
            datas.push({ email: this.state.email, password: this.state.password })
            localStorage.setItem("details", JSON.stringify(datas));
            // localStorage.setItem("Password",password);
        }
    }

    render() {
        return (
            <form onSubmit={this.validateForm}>
                  
                <h1>localStorage</h1>
                <div>
                    <label>Email: </label>
                    <input type="email" placeholder="enter  mail id"
                        onChange={e => this.setState({ email: e.target.value })} />
                </div><br />


                <div>
                    <label>Password: </label>
                    <input type="password"
                        placeholder="enter the password"
                        onChange={e => this.setState({ password: e.target.value })} />
                </div><br />
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" placeholder="Re enter password "
                        onChange={e => this.setState({ confirmpassword: e.target.value })} />
                </div><br />
                <div>
                                 
                                       
                            <button >Register</button>

              
                    <nav>
                    <button>
                    <Link to="/Signup" > login
                    </Link>
                    </button>
                    </nav>
                    </div>
            </form>

        )

    }
}

export default LoginForm

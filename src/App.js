import React from 'react';
import Main from './Main';
import Signup from "./Signup";
import Jeans from "./Jeans";
import Home1 from "./Home1"
import Watch from "./Watch"
import Shoedetails from './Shoedetails'
import Demo from "./Demo"
import Watchdetails from './Watchdetails'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Routes,Route,Link} from "react-router-dom"
import Shoes from './Shoes';
import Navbar from './Navbar';
import LoginForm from "./LoginForm"
import Orders from './Orders';
import Jeandetails from './Jeandetails';
import Shoesnew from './Shoesnew';
import Watchnew from './Watchnew';
import Process from './Process';
import Sucess from './Sucess';

function App() {
  return (
    <div>
    
    <ToastContainer closeButton={false}  position="top-right" />
<Routes>
    <Route path ="/" element={<Signup/>}/>
    <Route path ="/Jeans" element={<Jeans/>}/>
    <Route path ="/Home1" element={<Home1/>}/>
    <Route path ="/Watch" element={<Watch/>}/>
    <Route path ="/Shoesnew" element={<Shoesnew/>}/>
    <Route path='/Demo' element={<Demo/>}/>
<Route path = "/LoginForm" element={<LoginForm/>}/>
<Route path = "/Signup" element={<Signup/>}/>
<Route path='/Orders' element={<Orders/>}/>

<Route path='/Shoesdetails' element={<Shoedetails/>}/>
<Route path='/Jeandetails' element={<Jeandetails/>}/>

<Route path="/Watchnew" element={<Watchnew/>}/>

<Route path='/Watchdetails' element={<Watchdetails/>} />
<Route path='/Process' element={<Process/>}/>
<Route path='/Sucess' element={<Sucess/>}/>



</Routes>

    </div>
  )
}

export default App
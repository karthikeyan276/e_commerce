import React from 'react';
import {Link} from "react-router-dom"

 function Contain (){

 
    function great(){
        console.log("hhi");
    }
    function reply(){
        console.log('hello');
    }
    return(
        <button  onClick={()=>[great(),reply()]}>Click</button>
    )
}
<nav>
<Link to="./Testnav" >test
  </Link>
  </nav>
export default Contain
import React, { useEffect, useState } from 'react'

function Home() {
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    const [name,setName]=useState("")

useEffect(()=>{

    console.log(`the name changed: ${name}`);
    
},[name])
  return (
    <div>Home
        




    </div>
  )
}

export default Home
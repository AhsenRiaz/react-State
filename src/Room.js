import React, { useState } from 'react';
import './Room.css'

function Room(){
    // console.log(state)
    
     var [isLit, setLit] = useState(true)

     var [isAge , setAge] = useState(19)
      
        function toggle(){
             setLit(!isLit)
        }


     
     function updateAge(){
         
        setAge(--isAge)         
     }

     
    return (   

    <div className = {`room ${isLit? "lit": "Dark"}`}>
        This room is {isLit? "lit": "Dark"} 
        {/*Using Arrow Function it is useful for one line of code and to not use lot of curly braces*/}
        <button  onClick  = {toggle} >Change background Color</button> 
        {/*  */}
        <br/>
        <br/>
        My age is {isAge}
        <button  onClick ={updateAge} >decrease Age Button Button</button>

        
    </div>
  
    );
}

export default Room;
import React, { useState } from 'react';

function Room(){
    // console.log(state)
    
     var [isLit, setLit] = useState(true)
     var [isAge , setAge] = useState(19)
      
        


     
     function updateAge(){
         
        setAge(++isAge)         
     }

     
    return (   

    <div>
        This room is {isLit? "lit": "Dark"} 
        {/*Using Arrow Function it is useful for one line of code and to not use lot of curly braces*/}
        <button  onClick  = {()=> setLit(!isLit)} >Toggle Button</button> 
        {/*  */}
        <br/>
        My age is {isAge}
        <button  onClick ={updateAge} >Increase Age Button Button</button>

        
    </div>
  
    );
}

export default Room;
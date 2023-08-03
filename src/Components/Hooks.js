import React from 'react';
import { useState } from 'react';

function  Hooks () {
    const [number,setNumber]=useState(0);
    function handleClicker(){
        setTimeout(()=>{
            setNumber(number=>number+1);
        },2000)
//  1               console.log(number);
                
    }
  return (
    <div>
        {number}
        <button className='button1' onClick={handleClicker}>click</button>


    </div>
  )
}

export default Hooks;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// import {useEffect} from 'react';




function Home ()  {


    const [text,changetext]=useState("Anjali jangid");

    const[count,setCount]=useState();
    useEffect(()=>{
      setTimeout(()=>{
        setCount((count)=>count+1);
      })
    }
    )
    
    // const[inputValue,setInputValue]=useState("");
    // const count1 =useRef(0);
    // useEffect(()=>
    // count.current=count.current+1
    // )    

    return (
      
      <div>

    
        <div className='background'>
            <ul>
                <li><Link className="active" to="/Home">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li> 
                <li><Link to="/Form">Form</Link></li>    
            </ul>
          
           
            <div className='hide'>
              <h1 className='h'>Name:{text}</h1>
              <h1 className='h' id='demo'>Subject:Reactjs</h1>
              <h1 className='h'>count:{count}</h1>
              {/* <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              /> */}
              {/* <h1 className='h'>Render count:{count.current}</h1> */}
              <div className='buttonrow'>

             <button className='button1'onClick={()=> changetext("Anji")}>Text</button>
             <button className='button1' onClick={()=> setCount(0)}>Count</button>
             {/* <button className='button1' onClick={()=>setinputvalue()}>click</button> */}
             </div>
            </div>

        </div>
    </div>
  )
}
export default Home;

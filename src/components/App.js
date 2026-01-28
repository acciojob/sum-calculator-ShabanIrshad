
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [total,setTotal]=useState(0);
  const [array,setArray]=useState([]);
  useEffect(()=>{
    let sum = 0;
    // console.log(array);

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    // console.log(sum);
    setTotal(sum)
  },[array]);
  return (
    <div>
       <h1>Sum Calculator</h1>
       <input type="number" onChange={(e)=>setArray([...array,Number(e.target.value)])}/>
       <p>Sum:{total}</p>
    </div>
  )
}

export default App

import React from "react";
import { useState } from "react";
import './Fibo.css'
const Fibo = (e) => {
    
    let [taskData,setTaskData] = useState("");
    const [total, setTotal] = useState();
  
    function fibonacci() {
  
        let a=0,b=1,c=0;
        
        for(let i = 2; i <= taskData; i++) {
          c=a+b;
          a=b;
          b=c;
        }
        
        setTotal(a);
        setTaskData("")
      }
    
    return(
    <div>
       
          <input
          type="text"
          value={taskData}
          onChange={e => setTaskData(e.target.value)}
          
        />
        <button className="btn" onClick={fibonacci}> submit </button>
        <h2>Value:- {total}</h2>
    </div>
    )
}

export default Fibo;

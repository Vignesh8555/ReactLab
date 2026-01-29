import React, { useState } from "react";

function Calculator(){
    const [num1,setNum1]=useState("")
    const [num2,setNum2]=useState("")

    const a=Number(num1);
    const b=Number(num2);
    return(
        <div>
            <h1 style={{textDecoration:"underline"}}>calculator</h1>
            <input type="number" placeholder='enter the first value'
             onChange={(e)=>setNum1(e.target.value)}/>
            <input type="number" placeholder='enter the second value' 
            onChange={(e)=>setNum2(e.target.value)}/>
            <div style={{height:"140px",
            width:"200px",
            border:"9px solid",
            marginLeft:"20px",
            backgroundColor:"lightblue" ,
            textAlign:"left"}}>
                <h3>Result:</h3>

                <p><strong>Addition:</strong>{a+b}</p>
                <p><strong>Subtraction:</strong>{a-b}</p>
                <p><strong>multiplication:</strong>{a*b}</p>
                <p><strong>division:</strong>
                {b==0 ? "cannot divide by zero":a/b}
                </p>

            </div>
        </div>
    )

}

export default Calculator;
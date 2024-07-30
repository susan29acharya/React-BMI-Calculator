"use client"
import { useState } from "react";
const Bmi = () => {
    const [weight,setweight] = useState("");
    const [height,setheight] = useState("");
    const [bmi,setbmi]=useState()
    const [span,setspaan] = useState()
 
  const handlecalculation =(e) =>{
    e.preventDefault();
    calculate();
  }



  const calculate=()=>{

     const bmiformula = weight / (height * height);
     setbmi(bmiformula);
  

    if(bmi<25)
    {
      setspaan("you are underweight");
    }
    else if(bmi>=25 || bmi <=30)
    {
      setspaan("you are healthy");
    }
    else{
      setspaan("you are unhealthy go to hospital");
    }

  }


  return (
    <>
        <div className='bmi-heading'>
            <h1>BMI Calculator</h1>
        </div>

        <div className='bmi-form'>
        <form onSubmit={handlecalculation}>
            <input type='number' onChange={(e)=>setweight(e.target.value)} placeholder='Enter your Weight (KG)'/><br/>
            <input type='number' onChange={(e)=>setheight(e.target.value)} placeholder='Enter your Height (METER)'/><br/>
            <button onClick={calculate}>Calculate</button>
            <h3>Your BMI :{bmi}</h3>
            <span >{span}</span>
            
        </form>

        </div>
    </>
  )
}

export default Bmi
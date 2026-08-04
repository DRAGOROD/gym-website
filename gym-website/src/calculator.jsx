import React from 'react'
import { useState } from 'react'
import CalculatorBG from './assets/calculator-background3.png'

const calculator = () => {

let [bmi,setBmi]=useState(null);
let [heightUnit,setHeightUnit]=useState("cm");
let [height,setHeight]=useState(0);
let [weightUnit,setWeightUnit]=useState("kg");
let [weight,setWeight]=useState(0);
let [age,setAge]=useState(0);
let [gender,setGender]=useState("male");
let [activity,setActivity]=useState("1.2");
let [calories,setCalories]=useState(0);


function calculateBmi(){
 return setBmi((weightUnit=== "lbs" ? (weight/2.20462):weight) / ((heightUnit==="cm"? height/100:height)**2))

}

/*
Men:
Daily Calories = ((10 *weight in kg) + (6.25 *height in cm) - (5 *age in years) + 5)*activity point
Women:
Daily Calories = ((10 *weight in kg) + (6.25 *height in cm) - (5 * age in years) - 161)*activity point 
*/

function calculateCalories(){
return setCalories(
gender==="male"?((10*(weightUnit==="lbs"?weight/2.20462:weight))+(6.25*(heightUnit==="m"?height*100:height))+(5*age)+5)*activity:((10*(weightUnit==="lbs"?weight/2.20462:weight))+(6.25*(heightUnit==="m"?height*100:height))+(5*age)-161)*activity
)
}

{/*(calories<10? because even after leaving the input empty the calculation coming as 6)*/}

  return (
    <div id="calculator-container" style={{backgroundImage:`url(${CalculatorBG})`,backgroundSize:"cover",backgroundPosition:"center"}}>
      <hr/>
      <div id="calculator-box">
        <h1>BMI CALCULATOR</h1>
        <form>
           <div><input className='calculator-animation' type="number" required placeholder='Height' onChange={(e)=>setHeight(Number(e.target.value))}/><select className='calculator-animation' onChange={(e)=>setHeightUnit(e.target.value)}>
                                                                                                        <option value="cm">CM</option>
                                                                                                        <option value="m">M</option>
                                                                                                     </select></div> 
            <div><input  className='calculator-animation'type="number" required placeholder='Weight' onChange={(e)=>setWeight(Number(e.target.value))}/><select className='calculator-animation'  onChange={(e)=>setWeightUnit(e.target.value)} id="weight-unit">
                                                                                                        <option value="kg">KG</option>
                                                                                                        <option value="lbs">LBS</option>
                                                                                                      </select></div> 
            <input  className='calculator-animation' type="number" required placeholder='Age.....' onChange={(e)=>setAge(e.target.value)}/>
            <label>Gender:
               <select className='calculator-animation' onChange={(e)=>setGender(e.target.value)}>
                 <option value="male">Male</option>
                 <option value="female">Female</option>
               </select>
            </label>
            <label>Activity Level:
            <select  className='calculator-animation' onChange={(e)=>setActivity(Number(e.target.value))}>
              <option value="1.2">No Activity(No Exercise)</option>
              <option value="1.375">Light Activity(1-3 Days/Week)</option>
              <option value="1.55">Modarate Activity(3-5Days/Week)</option>
              <option value="1.725">Very Activity(6-7 Days/Week)</option>
            </select>
            </label>
            <button  className='calculator-animation' type='button' onClick={()=>{calculateBmi();calculateCalories();}}>Calculate BMI</button>
        </form>
        <div id="display-bmi" hidden={bmi === null}>
        <div className='show-box' hidden={calories<10}>{bmi?bmi.toFixed(2):0}<span>Kg/M<sup>2</sup></span></div>
        <div className='show-box' style={{color: bmi >= 40 ? "darkred" : bmi >= 35 ? "red" : bmi >= 30 ? "orange" : bmi >= 25 ? "yellow" : bmi >= 18.4 ? "green" : bmi>=16? "red": bmi>0?"darkred":"white"}}>
            ({bmi>=40?"Morbid Obesity":bmi>=35 && bmi<=39.9?"Obesity Class II":bmi>=30 && bmi<=34.9?"Obesity Class I":bmi>=25 && bmi<=29.9?"Overweight":bmi>=18.4 && bmi<=24.9?"Healthy Weight":bmi>=16.9 && bmi<18.4?"Mild Thinness":bmi>16?"Moderate Thinness":bmi>0?"Severe Thinness":"Enter Valid Input"})
        </div>
        <div className='show-box' hidden={calories<10}>{calories<10?0:Math.round(calories)}<span>Kcal/Day</span></div>
        <div id="diet-cards">
          <div id="left-card" hidden={calories<10}>
          <h3>To Lose Weight</h3>
           <div className="card-infos">
            <div>
              <span style={{color:'green'}}>Slow:<span style={{color:'white'}}>{calories<10?0:Math.round(calories-300)}Kcal</span></span>
              <span style={{color:'skyblue'}}>Modarate:<span style={{color:'white'}}>{calories<10?0:Math.round(calories-500)}Kcal</span></span>
              <span style={{color:'red'}}>Aggressive:<span style={{color:'white'}}>{calories<10?0:Math.round(calories-800)}Kcal</span></span>
            </div>
            <div>
              <span style={{color:'orangered'}}>Protine:<span style={{color:'white'}}>{calories<10?0:Math.round(weight*1.2)}g</span></span>
              <span style={{color:'orangered'}}>Protine:<span style={{color:'white'}}>{calories<10?0:Math.round(weight*1.2)}g</span></span>
              <span style={{color:'orangered'}}>Protine:<span style={{color:'white'}}>{calories<10?0:Math.round(weight*1.2)}g</span></span>
            </div>
            <div>
              <span style={{color:'orangered'}}>Fat:<span style={{color:'white'}}>{Math.round(((calories<10?0:(calories-300))*0.25)/9)}g</span></span>
              <span style={{color:'orangered'}}>Fat:<span style={{color:'white'}}>{Math.round(((calories<10?0:(calories-500))*0.25)/9)}g</span></span>
              <span style={{color:'orangered'}}>Fat:<span style={{color:'white'}}>{Math.round(((calories<10?0:(calories-300))*0.25)/9)}g</span></span>
            </div>
            <div>
              <span style={{color:'orangered'}}>Carb:<span style={{color:'white'}}>{calories<10?0:Math.round(((calories-300)-((weight*1.2)*4)-(((calories-300)*0.25)/9)*9)/4)}g</span></span>
              <span style={{color:'orangered'}}>Carb:<span style={{color:'white'}}>{calories<10?0:Math.round(((calories-500)-((weight*1.2)*4)-(((calories-500)*0.25)/9)*9)/4)}g</span></span>
              <span style={{color:'orangered'}}>Carb:<span style={{color:'white'}}>{calories<10?0:Math.round(((calories-800)-((weight*1.2)*4)-(((calories-800)*0.25)/9)*9)/4)}g</span></span>
            </div>
             </div>
          </div>
          <div id="right-card" hidden={calories<10}>
              <h3>To Gain Weight</h3>
           <div className="card-infos">
            <div>
              <span style={{color:'green'}}>Lean:<span style={{color:'white'}}>{calories<10?0:Math.round(calories+300)}Kcal</span></span>
              <span style={{color:'skyblue'}}>Modarate:<span style={{color:'white'}}>{calories<10?0:Math.round(calories+500)}Kcal</span></span>
              <span style={{color:'red'}}>Aggressive:<span style={{color:'white'}}>{calories<10?0:Math.round(calories+800)}Kcal</span></span>
            </div>
            <div>
              <span style={{color:'orangered'}}>Protine:<span style={{color:'white'}}>{calories<10?0:Math.round(weight*1.2)}g</span></span>
              <span style={{color:'orangered'}}>Protine:<span style={{color:'white'}}>{calories<10?0:Math.round(weight*1.2)}g</span></span>
              <span style={{color:'orangered'}}>Protine:<span style={{color:'white'}}>{calories<10?0:Math.round(weight*1.2)}g</span></span>
            </div>
            <div>
              <span style={{color:'orangered'}}>Fat:<span style={{color:'white'}}>{Math.round(((calories<10?0:(calories+300))*0.25)/9)}g</span></span>
              <span style={{color:'orangered'}}>Fat:<span style={{color:'white'}}>{Math.round(((calories<10?0:(calories+500))*0.25)/9)}g</span></span>
              <span style={{color:'orangered'}}>Fat:<span style={{color:'white'}}>{Math.round(((calories<10?0:(calories+800))*0.25)/9)}g</span></span>
            </div>
            <div>
              <span style={{color:'orangered'}}>Carb:<span style={{color:'white'}}>{calories<10?0:Math.round(((calories+300)-((weight*1.2)*4)-(((calories+300)*0.25)/9)*9)/4)}g</span></span>
              <span style={{color:'orangered'}}>Carb:<span style={{color:'white'}}>{calories<10?0:Math.round(((calories+500)-((weight*1.2)*4)-(((calories+500)*0.25)/9)*9)/4)}g</span></span>
              <span style={{color:'orangered'}}>Carb:<span style={{color:'white'}}>{calories<10?0:Math.round(((calories+800)-((weight*1.2)*4)-(((calories+800)*0.25)/9)*9)/4)}g</span></span>
            </div>
             </div>
          </div>
        </div>
        </div>
        </div>
        <hr/>
    </div>
  )
}

export default calculator
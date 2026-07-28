import React from 'react'
import { useState } from 'react'
const calculator = () => {

let [bmi,setBmi]=useState(null);
let [height,setHeight]=useState(0);
let [weight,setWeight]=useState(0);
let [age,setAge]=useState(0);
let [gender,setGender]=useState("male");
let [calories,setCalories]=useState(0);

function calculateBmi(){
  setBmi(weight / ((height/100)**2))
}


  return (
    <div id="calculator-container">
        <h1>BMI CALCULATOR</h1>
        <form>
            <input type="number" placeholder='Height in cm.....' onChange={(e)=>setHeight(e.target.value)}/>
            <input type="number" placeholder='Weight in kg.....' onChange={(e)=>setWeight(e.target.value)}/>
            <input type="number" placeholder='Age.....' onChange={(e)=>setAge(e.target.value)}/>
            <select onChange={(e)=>setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input type="number" placeholder='Calories..(Optional)...' onChange={(e)=>setCalories(e.target.value)}/>
            <button type='button' onClick={calculateBmi}>Calculate BMI</button>
        </form>
        <div id="display-bmi">
        <div>{bmi}</div>
        <div>{bmi>=40?"Morbid Obesity":bmi>=35 && bmi<=39.9?"Obesity Class II":bmi>=30 && bmi<=34.9?"Obesity Class I":bmi>=25 && bmi<=29.9?"Overweight":bmi>=18.4 && bmi<=24.9?"Healthy Weight":bmi>=16.9 && bmi<18.4?"Mild Thinness":bmi>=16?"Moderate Thinness":"Severe Thinness"}</div>
        </div>
    </div>
  )
}

export default calculator
import React from 'react'
import BarbalePic from './assets/barbale.webp'

const reviews = () => {

let clientReviews = [
  {
    image: "https://i.pravatar.cc/100?img=21",
    statement: "“The trainers are incredibly supportive and helped me stay consistent. I've lost 12 kg in just a few months!”",
    name: "Aarav Sharma",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=22",
    statement: "“Clean equipment, motivating atmosphere, and friendly staff. One of the best gyms I've joined.”",
    name: "Priya Mehta",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=23",
    statement: "“Excellent strength training program. I've seen noticeable muscle gains in only eight weeks.”",
    name: "Rohan Verma",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=24",
    statement: "“The personal trainer customized every workout for my goals. Highly recommended!”",
    name: "Sneha Kapoor",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=25",
    statement: "“Great selection of machines and free weights. It never feels overcrowded.”",
    name: "Aditya Singh",
    ratings: "⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=26",
    statement: "“Love the group fitness classes! The instructors keep every session energetic and fun.”",
    name: "Neha Gupta",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=27",
    statement: "“Affordable membership with premium facilities. Definitely worth every penny.”",
    name: "Karan Das",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=28",
    statement: "“Locker rooms are always clean, and the gym has a positive environment for beginners.”",
    name: "Ananya Roy",
    ratings: "⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=29",
    statement: "“The nutrition guidance paired with workouts helped me transform my lifestyle completely.”",
    name: "Vikram Patel",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=30",
    statement: "“Equipment is well maintained, and there's always someone available to assist if needed.”",
    name: "Ishita Nair",
    ratings: "⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=31",
    statement: "“Fantastic gym with plenty of space. I never have to wait long for equipment.”",
    name: "Rahul Choudhary",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=32",
    statement: "“I've gained strength, confidence, and better endurance thanks to the amazing coaching team.”",
    name: "Pooja Sen",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=33",
    statement: "“Everything from cardio machines to weightlifting equipment is top quality. Great experience!”",
    name: "Dev Malhotra",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=34",
    statement: "“Friendly community and motivating trainers. I actually look forward to working out every day.”",
    name: "Simran Kaur",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=35",
    statement: "“Excellent facilities, flexible timings, and knowledgeable trainers. Perfect gym for all fitness levels.”",
    name: "Arjun Mishra",
    ratings: "⭐⭐⭐⭐⭐"
  }
];

  return (
    <>
       <div id="review-head">
        <span id="upper-text">GYM</span>
        <img src={BarbalePic}/>
        <span id="lower-text">REVIEW</span>
      </div>
    <div id="review-container">
     {clientReviews.map((v,i)=>(
        <div className="card" key={i}>
            <img src={v.image}/>
            <h5>{v.name}</h5>
            <p>{v.statement}</p>
            <p>{v.ratings}</p>
        </div>
     ))}
     </div>
    </>
  )
}

export default reviews
import React from 'react'
import {useState} from 'react'
import ChestTab from './assets/chesttab.png'
import BackTab from './assets/backtab.png'
import AbsTab from './assets/abstab.png'
import LegsTab from './assets/legtab.png'
import ShoulderTab from './assets/shouldertab.png'
import BicepTab from './assets/biceptab.png'
import TricepTab from './assets/triceptab.png'


const exercises = () => {

const workoutExercises = [
  {
    id:'mg1',
    muscleGroup: "Chest",
    icon: ChestTab,
    exercises: [
      {
        name: "Barbell Bench Press",
        src: {}
      },
      {
        name: "Incline Dumbbell Press",
        src: {}
      },
      {
        name: "Chest Fly",
        src: {}
      },
      {
        name: "Push-Up",
        src: {}
      },
      {
        name: "Cable Crossover",
        src: {}
      },
      {
        name: "Decline Bench Press",
        src: {}
      }
    ]
  },
  {
    id:'mg2',
    muscleGroup: "Back",
    icon: BackTab,
    exercises: [
      {
        name: "Pull-Up",
        src: {}
      },
      {
        name: "Lat Pulldown",
        src: {}
      },
      {
        name: "Barbell Row",
        src: {}
      },
      {
        name: "Seated Cable Row",
        src: {}
      },
      {
        name: "Deadlift",
        src: {}
      },
      {
        name: "T-Bar Row",
        src: {}
      }
    ]
  },
  {
    id:'mg3',
    muscleGroup: "Shoulders",
    icon: ShoulderTab,
    exercises: [
      {
        name: "Overhead Press",
        src: {}
      },
      {
        name: "Lateral Raise",
        src: {}
      },
      {
        name: "Front Raise",
        src: {}
      },
      {
        name: "Reverse Pec Deck",
        src: {}
      },
      {
        name: "Arnold Press",
        src: {}
      },
      {
        name: "Upright Row",
        src: {}
      }
    ]
  },
  {
    id:'mg4',
    muscleGroup: "Biceps",
    icon: BicepTab,
    exercises: [
      {
        name: "Barbell Curl",
        src: {}
      },
      {
        name: "Hammer Curl",
        src: {}
      },
      {
        name: "Preacher Curl",
        src: {}
      },
      {
        name: "Concentration Curl",
        src: {}
      },
      {
        name: "Cable Curl",
        src: {}
      },
      {
        name: "Incline Dumbbell Curl",
        src: {}
      }
    ]
  },
  {
    id:'mg5',
    muscleGroup: "Triceps",
    icon: TricepTab,
    exercises: [
      {
        name: "Tricep Pushdown",
        src: {}
      },
      {
        name: "Overhead Tricep Extension",
        src: {}
      },
      {
        name: "Close Grip Bench Press",
        src: {}
      },
      {
        name: "Skull Crusher",
        src: {}
      },
      {
        name: "Bench Dip",
        src: {}
      },
      {
        name: "Cable Kickback",
        src: {}
      }
    ]
  },
  {
    id:'mg6',
    muscleGroup: "Legs",
    icon: LegsTab,
    exercises: [
      {
        name: "Barbell Squat",
        src: {}
      },
      {
        name: "Leg Press",
        src: {}
      },
      {
        name: "Romanian Deadlift",
        src: {}
      },
      {
        name: "Walking Lunge",
        src: {}
      },
      {
        name: "Leg Extension",
        src: {}
      },
      {
        name: "Hack Squat",
        src: {}
      }
    ]
  },
  {
    id:'mg7',
    muscleGroup: "Abs",
    icon: AbsTab,
    exercises: [
      {
        name: "Crunch",
        src: {}
      },
      {
        name: "Hanging Leg Raise",
        src: {}
      },
      {
        name: "Cable Crunch",
        src: {}
      },
      {
        name: "Plank",
        src: {}
      },
      {
        name: "Russian Twist",
        src: {}
      },
      {
        name: "Ab Wheel Rollout",
        src: {}
      }
    ]
  }
];

let [activeId,setActiveId]=useState(workoutExercises[0].id)

let activeTab=workoutExercises.find(exercise=>exercise.id===activeId);

  return (
    <>
    <div id="exercise-heading">Exercises</div>
         <div id="exercise-container">
          <div id="exerciseIcon-container">
           {workoutExercises.map(exercise=>(<img key={exercise.id} src={exercise.icon} alt={exercise.muscleGroup} onClick={()=>setActiveId(exercise.id)}/>))}
          </div>
           <div id="workouts-container">
              {activeTab.exercises.map((v,i)=>(
                <div key={i}>
                <h3>{v.name}</h3>
                <img src={v.src} alt={v.name} width="250px"/>
                </div>
              ))}
           </div>
         </div>
    </>
  )
}

export default exercises
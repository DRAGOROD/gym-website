import React from 'react'
import {useState} from 'react'

/*Import TabPics */
import ChestTab from './assets/chesttab.png'
import BackTab from './assets/backtab.png'
import AbsTab from './assets/abstab.png'
import LegsTab from './assets/legtab.png'
import ShoulderTab from './assets/shouldertab.png'
import BicepTab from './assets/biceptab.png'
import TricepTab from './assets/triceptab.png'

/*Import Chest Ex */
import BBP from './assets/bbp.png'
import IDP from './assets/idp.png'
import CF from './assets/cp.png'
import PU from './assets/pu.png'
import CCc from './assets/ccC.png'
import DBP from './assets/dbp.png'

/*Import Back Ex */
import PUb from './assets/puB.png'
import LP from './assets/lp.png'
import BR from './assets/br.png'
import SCR from './assets/scr.png'
import DL from './assets/dl.png'
import TBR from './assets/tbr.png'

/*Import Shoulder Ex */
import OP from './assets/op.png'
import LR from './assets/lr.png'
import FR from './assets/fr.png'
import RPD from './assets/rpd.png'
import AP from './assets/ap.png'
import UR from './assets/ur.png'

/*Import Bicep Ex */
import BC from './assets/bc.png'
import HC from './assets/hc.png'
import PC from './assets/pc.png'
import CCb from './assets/ccB.png'
import CCb2 from './assets/ccB2.png'
import IDC from './assets/idc.png'

/*Import Tricep Ex */
import TP from './assets/tp.png'
import OTE from './assets/ote.png'
import CGBP from './assets/cgbp.png'
import SC from './assets/sc.png'
import BD from './assets/bd.png'
import CK from './assets/ck.png'

/*Import Legs Ex */
import BS from './assets/bs.png'
import LPl from './assets/lpL.png'
import RD from './assets/rd.png'
import WL from './assets/wl.png'
import LE from './assets/le.png'
import HS from './assets/hs.png'

/*Import Abs Ex */
import C from './assets/c.png'
import HLR from './assets/hlr.png'
import CCa from './assets/ccA.png'
import P from './assets/p.png'
import RT from './assets/rt.png'
import AWR from './assets/awr.png'


const Exercises = () => {

const workoutExercises = [
  {
    id:'mg1',
    muscleGroup: "Chest",
    icon: ChestTab,
    exercises: [
      {
        name: "Barbell Bench Press",
        src: BBP
      },
      {
        name: "Incline Dumbbell Press",
        src: IDP
      },
      {
        name: "Chest Fly",
        src: CF
      },
      {
        name: "Push-Up",
        src: PU
      },
      {
        name: "Cable Crossover",
        src: CCc 
      },
      {
        name: "Decline Bench Press",
        src: DBP
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
        src: PUb
      },
      {
        name: "Lat Pulldown",
        src: LP
      },
      {
        name: "Barbell Row",
        src: BR
      },
      {
        name: "Seated Cable Row",
        src: SCR
      },
      {
        name: "Deadlift",
        src: DL
      },
      {
        name: "T-Bar Row",
        src: TBR
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
        src: OP
      },
      {
        name: "Lateral Raise",
        src: LR
      },
      {
        name: "Front Raise",
        src: FR
      },
      {
        name: "Reverse Pec Deck",
        src: RPD
      },
      {
        name: "Arnold Press",
        src: AP
      },
      {
        name: "Upright Row",
        src: UR
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
        src: BC
      },
      {
        name: "Hammer Curl",
        src: HC
      },
      {
        name: "Preacher Curl",
        src: PC
      },
      {
        name: "Concentration Curl",
        src: CCb
      },
      {
        name: "Cable Curl",
        src: CCb2
      },
      {
        name: "Incline Dumbbell Curl",
        src: IDC
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
        src: TP
      },
      {
        name: "Overhead Tricep Extension",
        src: OTE
      },
      {
        name: "Close Grip Bench Press",
        src: CGBP
      },
      {
        name: "Skull Crusher",
        src: SC
      },
      {
        name: "Bench Dip",
        src: BD
      },
      {
        name: "Cable Kickback",
        src: CK
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
        src: BS
      },
      {
        name: "Leg Press",
        src: LPl
      },
      {
        name: "Romanian Deadlift",
        src: RD
      },
      {
        name: "Walking Lunge",
        src: WL
      },
      {
        name: "Leg Extension",
        src: LE
      },
      {
        name: "Hack Squat",
        src: HS
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
        src: C
      },
      {
        name: "Hanging Leg Raise",
        src: HLR
      },
      {
        name: "Cable Crunch",
        src: CCa
      },
      {
        name: "Plank",
        src: P
      },
      {
        name: "Russian Twist",
        src: RT
      },
      {
        name: "Ab Wheel Rollout",
        src: AWR
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
           {workoutExercises.map(exercise=>(<img key={exercise.id} src={exercise.icon} alt={exercise.muscleGroup} onClick={()=>setActiveId(exercise.id)} style={activeId===exercise.id?{backgroundColor:"rgb(31, 68, 31)",borderRadius:"20%",boxShadow: "inset 3px 3px 14px 4px gray"}:{}}/>))}
          </div>
           <div id="workouts-container">
              {activeTab.exercises.map((v,i)=>(
                <div key={i} className="workout-cards">
                <h3>{v.name}</h3>
                <img src={v.src} alt={v.name}/>
                </div>
              ))}
           </div>
         </div>
    </>
  )
}

export default Exercises
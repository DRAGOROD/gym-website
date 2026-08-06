import React from 'react'
import {useState} from 'react'

/*Import TabPics */
import ChestTab from './assets/chesttab.webp'
import BackTab from './assets/backtab.webp'
import AbsTab from './assets/abstab.webp'
import LegsTab from './assets/legtab.webp'
import ShoulderTab from './assets/shouldertab.webp'
import BicepTab from './assets/biceptab.webp'
import TricepTab from './assets/triceptab.webp'

/*Import Chest Ex */
import BBP from './assets/bbp.webp'
import IDP from './assets/idp.webp'
import CF from './assets/cp.webp'
import PU from './assets/pu.webp'
import CCc from './assets/ccC.webp'
import DBP from './assets/dbp.webp'

/*Import Back Ex */
import PUb from './assets/puB.webp'
import LP from './assets/lp.webp'
import BR from './assets/br.webp'
import SCR from './assets/scr.webp'
import DL from './assets/dl.webp'
import TBR from './assets/tbr.webp'

/*Import Shoulder Ex */
import OP from './assets/op.webp'
import LR from './assets/lr.webp'
import FR from './assets/fr.webp'
import RPD from './assets/rpd.webp'
import AP from './assets/ap.webp'
import UR from './assets/ur.webp'

/*Import Bicep Ex */
import BC from './assets/bc.webp'
import HC from './assets/hc.webp'
import PC from './assets/pc.webp'
import CCb from './assets/ccB.webp'
import CCb2 from './assets/ccB2.webp'
import IDC from './assets/idc.webp'

/*Import Tricep Ex */
import TP from './assets/tp.webp'
import OTE from './assets/ote.webp'
import CGBP from './assets/cgbp.webp'
import SC from './assets/sc.webp'
import BD from './assets/bd.webp'
import CK from './assets/ck.webp'

/*Import Legs Ex */
import BS from './assets/bs.webp'
import LPl from './assets/lpL.webp'
import RD from './assets/rd.webp'
import WL from './assets/wl.webp'
import LE from './assets/le.webp'
import HS from './assets/hs.webp'

/*Import Abs Ex */
import C from './assets/c.webp'
import HLR from './assets/hlr.webp'
import CCa from './assets/ccA.webp'
import P from './assets/p.webp'
import RT from './assets/rt.webp'
import AWR from './assets/awr.webp'

/*Animated Hands */
import RightHand from'./assets/righthand.webp'
import LeftHand from'./assets/lefthand.webp'

/*BackGround*/
import ExBg from './calculator-background2.webp'

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
    <div id="exercise-head">
      <img src={LeftHand} alt="exercise-hands" id="left-hand"/>
    <div id="exercise-heading">Exercises</div>
      <img src={RightHand} alt="exercise-hands" id="right-hand"/>
    </div>
         <div id="exercise-container" style={{backgroundImage:`url(${ExBg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
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
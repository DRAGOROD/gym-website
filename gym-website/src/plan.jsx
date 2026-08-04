import React from 'react'
import PlanBg from './assets/planbg.png'

const plan = () => {

let planObj=[
        {month:1,
          cost:'₹1100',
          f1:'✔️ All Classes',
          f2:'✔️ All member events',
          f3:'✔️ Full gym access'
        },
        {month:6,
          cost:'₹900',
          f1:'✔️ All Classes',
          f2:'✔️ All member events',
          f3:'✔️ Full gym access'
        },
        {month:12,
          cost:'₹800',
          f1:'✔️ All Classes',
          f2:'✔️ All member events',
          f3:'✔️ Full gym access'
        }
    ]

  return (
    <>
    <div id="plan-head">
    <h3>Membership Plan</h3>
    <p>Crushing your health and fitness goals starts here...</p>
    </div>
    <div id="plan-container" style={{backgroundImage:`url(${PlanBg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
      {planObj.map((v,i)=>(
        <div className='plan-card' key={i}>
            <h4>{v.month} Month Membership</h4>
            <p><span>{v.cost}</span>/mo</p>
            <p>{v.f1}</p>
            <p>{v.f2}</p>
            <p>{v.f3}</p>
            <div>Charges every {v.month} month<br/>
unless you cancel</div>
            <div id="trial-btn">Start 7 Days Free Trial</div>
        </div>
      ))}
    </div>
    </>
  )
}

export default plan
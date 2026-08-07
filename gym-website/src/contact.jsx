import React from 'react'
import { useState } from 'react';
import FacebookIcon from './assets/feacebookicon.webp'
import InstaIcon from './assets/instagramicon.webp'
import TwitterIcon from './assets/twittericon.webp'
import ContactBg from './assets/contactbg.webp'

const contact = () => {

let gymFaqs = [
  { 
    id:'a1',
    question: "Can I get a free trial before joining?",
    answer: "Yes! We offer a complimentary 7 days trial session so you can explore our facilities, meet our trainers, and experience the gym before choosing a membership plan."
  },
  {
    id:'a2',
    question: "What membership plans do you offer?",
    answer: "We offer flexible monthly, quarterly, half-yearly, and annual membership plans. You can choose the option that best fits your budget and fitness goals."
  },
  {
    id:'a3',
    question: "Are personal training sessions available?",
    answer: "Yes. Our certified personal trainers provide one-on-one coaching, customized workout routines, nutrition guidance, and regular progress tracking to help you achieve your goals faster."
  },
  {
    id:'a4',
    question: "What facilities are included with my membership?",
    answer: "Your membership includes access to modern strength and cardio equipment, free weights, functional training areas, locker rooms, changing rooms, and group exercise classes depending on your plan."
  },
  {
    id:'a5',
    question: "What are your operating hours?",
    answer: "Our gym is open Monday through Sunday from 5:00 AM to 11:00 PM, giving you the flexibility to work out whenever it fits your schedule."
  }
];

let socialMediaLinks = [FacebookIcon,InstaIcon,TwitterIcon];


let [openId,setOpenId]=useState(null)

function handleClick(id){
 setOpenId(openId===id?null:id)
}

  return (
    <>
    <div id="contact-heading-container">
    <h3 id='contact-heading'>Contact Us</h3>
    </div>
    <div id="contact-container" style={{backgroundImage:`url(${ContactBg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
        <div id="faq-section">
           {gymFaqs.map(v=>(
            <div  key={v.id}>
                <button onClick={()=>handleClick(v.id)}>{v.question}<span style={{display:'inline-block',transition:'transform 0.3s ease',transform: openId === v.id ? "rotate(180deg)" : "rotate(0deg)"}}>⏫</span></button>
                {openId===v.id && (<p>{v.answer}</p>)}
            </div>
           ))}
           <h5 className='sih-animation'>Connect With Us</h5>
           <div className="sm-icons">
            {socialMediaLinks.map((v,i)=>(
              <span key={i} className='si-animation'><img src={v} alt="Social Media Icons"/></span>
            ))}
           </div>
        </div>
        <div id="contact-form">
        <form >
          <h4 className='form-scroll' >Claim Your 7 Day<br/> Free Trial.......</h4>
          <div className='form-scroll' >
           <input type='text'/>
           <label for="">Name</label>
           </div>
           <div className='form-scroll' > 
           <input type='email'/>
           <label for="email">Email</label>
           </div>
           <div className='form-scroll' >
           <input type='number' />
           <label for="number">Ph.Number</label>
           </div>
           <select className='form-scroll' >
               <option>Membership interest.....</option>
               <option>1 Month</option>
               <option>6 Month</option>
               <option>12 Month</option>
           </select>
           <button className='form-scroll'>Claim Trial</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default contact
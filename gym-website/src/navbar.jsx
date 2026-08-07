
import react, { createContext, useRef, useState } from 'react';
import GymRatLogo from './assets/gymratlogo.webp';
import Home from './home.jsx';
import Reviews from './reviews.jsx';
import Plan from './plan.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx';
import Exercises from './exercises.jsx';

/*exporting the navigation for Calculator*/
export const navContext=createContext(null)

const Navbar = () => {

let tabs=[
    {id:"t1",
      label:"Home",
      content:Home
    },
    {id:"t2",
      label:"Exercises",
      content:Exercises
    },
    {id:"t3",
      label:"Reviews",
      content:Reviews
    },
    {id:"t4",
      label:"Plan",
      content:Plan
    },
    {id:"t5",
      label:"Contact",
      content:Contact
    }
  ]

  let [activeId,setActiveId]=useState(tabs[0].id);
  let [visible,setVisible]=useState(true);
  let calRef=useRef(null);


  let activeTab=tabs.find(tab=>tab.id===activeId);


  function changeTab(id){
    if(id===activeId) return;
    setVisible(false)
    setTimeout(()=>{
      setActiveId(id)
      setVisible(true)
    },300)
  }

  return (
    <>
    <navContext.Provider value={calRef}>
    <div id="nav-container">
        <img src={GymRatLogo} id="logo" alt="Gym Rat Logo" />
        <ul id="nav-links">
          {tabs.map((tab,i)=>(<li className={activeId===tab.id?'active-tab':""} key={i} onClick={()=>changeTab(tab.id)}>{tab.label}</li>))}
        </ul>
       {/*<span id="calculator-btn" hidden={activeId!=="t1"} onClick={()=>calRef.current.scrollIntoView({behavior:"smooth"})}>Calculator</span>*/}
        <div id="login-btn">Join Us</div>
    </div>
    {activeTab && 
    <div id="content-container" className={visible?"page-show":"page-hide"}>
    <activeTab.content/>
    </div>}
    </navContext.Provider>
<Footer/>
    </>
  );
};

export default Navbar;

import react from 'react';
import GymRatLogo from './assets/gymratlogo.png';
import HeroSection from './Hero.jsx';
import Calculator from './calculator.jsx';
import Reviews from './reviews.jsx'
import Plan from './plan.jsx'

const Navbar = () => {


  return (
    <>
    <div id="nav-container">
        <img src={GymRatLogo} id="logo" alt="Gym Rat Logo" />
        <ul id="nav-links">
            <li>Home</li>
            <li>Calculator</li>
            <li>Exercises</li>
            <li>Plan</li>
            <li>Reviews</li>
            <li>Contact</li>
        </ul>
        <div id="login-btn">Join Us</div>
    </div>
<HeroSection/>
<Calculator/>
<Reviews/>
<Plan/>
    </>
  );
};

export default Navbar;
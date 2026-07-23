
import react from 'react';
import GymRatLogo from './assets/gymratlogo.png';
import HeroSection from './Hero.jsx';

const Navbar = () => {
  return (
    <>
    <div id="nav-container">
        <img src={GymRatLogo} id="logo" alt="Gym Rat Logo" />
        <ul id="nav-links">
            <li>Home</li>
            <li>Calculator</li>
            <li>Exercises</li>
            <li>About</li>
            <li>Plan</li>
            <li>Reviews</li>
            <li>Contact</li>
        </ul>
        <div id="login-btn">Join Us</div>
    </div>
<HeroSection/>
    </>
  );
};

export default Navbar;
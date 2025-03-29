import React, { useState, useEffect } from 'react';
import logo from '../../assets/image/logo.png';
import bannerImg from '../../assets/image/banner-main.png';
import bgShadow from '../../assets/image/bg-shadow.png';
import { FaBitcoin } from "react-icons/fa";
import './Header.css';

const Header = ({balance, handleClaimCredit}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='md:container mx-auto relative'>
      

      {/* Navbar */}
      <div
        className={`sticky navbar text-black shadow-sm mb-4 top-0 z-30 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-transparent' : 'bg-white'
        }`}
      >
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Fixture</a></li>
            <li><a>Terms</a></li>
            <li><a>Schedules</a></li>
          </ul>
          <a className="btn text-black transition-colors duration-300 ease-in-out" style={{ backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'white' }}>
            {balance} coin <FaBitcoin />
          </a>
        </div>
      </div>

      {/* Glassmorphism Background Layer for Sticky Nav */}
      {isScrolled && (
        <div
          className="sticky top-0 left-0 w-full h-23 bg-white/20 backdrop-filter backdrop-blur-md z-20 shadow-md transition-opacity"
        ></div>
      )}

      {/* hero section */}
      <div className="hero mb-20 bg-black min-h-screen rounded-4xl" style={{ backgroundImage: `url(${bgShadow})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content text-center w-full">
          <div className="my-5">
            <img src={bannerImg} alt="" className="mx-auto block mb-8" />
            <h1 className="font-bold text-3xl leading-10 tracking-widest">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="py-6">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="button-container">
              <button className="claim-button" onClick={handleClaimCredit}>Claim Free Credit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


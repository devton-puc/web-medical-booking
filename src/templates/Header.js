import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Login from "./Login";
import { ReactComponent as LogoSVG } from '../assets/logo.svg';
import { ReactComponent as LogoMobSVG } from '../assets/logo-mob.svg';

const Header = () => {


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
<div className="navbar navbar-expand-lg navbar-primary-custon bg-primary-custom" aria-label="Eighth navbar example">
  <div className="container d-flex justify-content-between align-items-center">
    <div className="logo-custom navbar navbar-brand">
          {isMobile ? 
              <LogoMobSVG className="logo-image-mob" /> 
            : 
              <LogoSVG className="logo-image" />
          }
    </div>
    <Login/>
    <Navbar/>
  </div>
</div>

  );
};

export default Header;

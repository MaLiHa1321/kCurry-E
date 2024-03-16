import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import Banner from "../../Pages/Banner/Banner";


const Layout = () => {
    const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <div>
            <Banner />
      {showNavbar && <Navbar />}
      <div className="content h-screen"><Outlet></Outlet></div>
    </div>
          
            
    
    );
};

export default Layout;
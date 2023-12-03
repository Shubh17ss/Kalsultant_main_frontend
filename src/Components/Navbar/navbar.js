import React, { useState, useEffect } from 'react'
import {
  Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, Button, NavLinks,
  NavLinks2, NavLinks3, NavBtn, NavBtnLink, NavItem2
} from './elements';
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/KalSultant_website_transparent_logo.webp'
import './navbar.css';

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const userLoggedIn = window.localStorage.getItem("userAuth");
  const userName = localStorage.getItem('userName');
  const navigate = useNavigate();
  const changeNav = () => {

    if (window.scrollY >= 80) {
      setScrollNav(true);
    }
    else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop({
      duration: 450
    });
  }

  const goToPricing = () => {
    navigate('/pricing');
  }

  const gotoVastu=()=>{
    navigate('/Vastu');
  }

  return (

    <>
      <Nav ScrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            <img src={logo} alt='/' style={{ width: '38px', height: '38px' }} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about' smooth={true} duration={300} spy={true}
                exact={true} offset={-60}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="hiw" smooth={true} duration={300} spy={true}
                exact={true} offset={-50}>Astrology</NavLinks>
            </NavItem>  
            <NavItem>
              <NavLinks onClick={gotoVastu} smooth={true} duration={300} spy={true}
                exact={true} offset={-60}>Vastu</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks onClick={goToPricing} smooth={true} duration={300} spy={true}
                exact={true} offset={-58}>Pricing</NavLinks>
            </NavItem>

          </NavMenu>

          <NavBtn style={userLoggedIn?{border:'none'}:{}} onClick={()=>{!userLoggedIn?navigate('/signin'):navigate('/profile',{state:{ isBooked: false }})}}>
            {userLoggedIn ? <NavItem>
              <NavLinks3 to="/profile" state={{ isBooked: false }}
              >
                <div style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                  <h1 style={{ color: '#fff', fontSize: '1.7rem' }} className='user_profile_logo'>{userName.charAt(0)}</h1>
                </div>
              </NavLinks3>
            </NavItem>
              :
              <NavItem2>
                <NavLinks2 to="/signin"
                >Login</NavLinks2>
              </NavItem2>
            }
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}
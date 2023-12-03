import React, { useState } from 'react'
import './mobileProfile.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/images/KalSultant_website_transparent_logo.webp'
import { IoHome } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TbHexagonLetterS } from "react-icons/tb";

//importing the components

import { Session } from './components/sessionComponent/session';
import { Settings } from './components/Settings/settings';
import { Home } from './components/homeComponent/home';

export const MobileProfile = () => {

    const navigate = useNavigate();
    const userId = localStorage.getItem('userAuth');
    const userName = localStorage.getItem('userName');

    const [comp, setComp] = useState(1);

    const navigateToLanding=()=>{
        navigate('/');
    }
    



    return (
        <div className='profile_container_mb'>
            <div className='top_bar'>
                <img src={logo} alt='/' style={{ width: '38px', height: '38px' }} onClick={navigateToLanding}/>
            </div>

            <div className='profile_info_section'>
                {comp == 1 ? <Session userId={userId} /> : comp == 0 ? <Home name={userName}/> : <Settings/>}
            </div>

            <div className='bottom_tab_navigator'>
                {comp == 0 ?
                    <IoHome style={{ color: '#fff', fontSize: '1.8rem' }} />
                    :
                    <IoHomeOutline style={{ color: '#fff', fontSize: '1.8rem' }} onClick={() => { setComp(0) }} />
                }

                <TbHexagonLetterS style={{ color: comp != 1 ? 'rgba(255,255,255,0.5)' : '#fff', fontSize: '3rem', marginBottom: '0.5rem' }} onClick={() => { setComp(1) }} />

                {comp == 2 ?
                    <IoSettings style={{ color: '#fff', fontSize: '1.8rem' }} />
                    :
                    <IoSettingsOutline style={{ color: '#fff', fontSize: '1.8rem' }} onClick={() => { setComp(2) }} />
                }
            </div>

        </div>
    )
}

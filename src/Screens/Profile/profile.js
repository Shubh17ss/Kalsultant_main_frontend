import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import "./profile.css";

import { SuccessToast } from '../../Components/Toast/Toast';
import { toast } from 'react-toastify';
import { Footer } from '../../Components/Footer/footer';
import { MobileProfile } from './MobileProfile/mobileProfile';
import { getAuth, signOut } from 'firebase/auth';

import logo from '../../Assets/images/KalSultant_website_transparent_logo.webp';
import axios from 'axios';

export const Profile = () => {
    const userId = localStorage.getItem('userAuth');
    const userName = localStorage.getItem('userName');
    console.log(userId, " ", userName);
    const isMobileScreen = window.innerWidth < 950 ? true : false;
    const navigate = useNavigate();



    const [index, setIndex] = useState(-1);
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        if (!userId) {
            navigate('/signin');
            return;
        }
        window.scrollTo(0, 0);


    }, [])


    const handleLogOut = () => {
        localStorage.removeItem("userAuth");
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        navigate('/');
        window.location.reload(false);  
   }

    const showSessions = () => {
        console.log('Function hit');
        //implement axios api to get sessions for the userId
        axios.get(`/api/session/getUserSessions?user_id=${userId}`).then((response) => {
            console.log(response.data);
            setSessions(response.data);
            setIndex(0);
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
            <SuccessToast />
            {
                isMobileScreen ?
                    <MobileProfile />
                    :
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <div className='profile_navbar'>
                                <div style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }}>
                                    <img src={logo} alt='/' style={{ width: '38px', height: '38px' }} />
                                </div>
                                <button className='profile_logout_button' onClick={showSessions}>
                                    <p style={{ fontSize: '1rem', fontWeight: '500', }}>Sessions</p>
                                </button>
                                <button className='profile_logout_button' onClick={handleLogOut}>
                                    <p style={{ fontSize: '1rem', fontWeight: '500', }}>Log out</p>
                                </button>
                            </div>
                            <div className='profile_information_area'>
                                {sessions.map((item, index) => {
                                    return (
                                        <div className='session_card'>
                                            <p style={{ width: '2%' }}>{index + 1}</p>
                                            <p style={{ width: '15%' }}>{item.firstname} {item.lastname}</p>
                                            <p style={{ width: '20%' }}>{item.email}</p>
                                            <p style={{ width: '10%' }}>{item.session_date}</p>
                                            <p style={{ width: '10%' }}>{item.session_slot}</p>
                                            <button>Details</button>
                                            <button style={{ backgroundColor: item.status === "Completed" ? '#50C87880' : '#0096FF90' }}
                                                onClick={() => { window.open(item.invite_link, '_blank') }} disabled={item.status === "Completed" ? true : false}>{item.status === "Completed" ? 'Completed' : 'Join'}</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <Footer />
                    </>
            }


        </>

    )
}
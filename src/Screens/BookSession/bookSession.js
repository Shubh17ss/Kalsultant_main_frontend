import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './bookSession.css';
import { Footer } from '../../Components/Footer/footer';
import { StepperForm } from '../../Components/Stepper/stepper';
import { MobileStepperForm } from '../../Components/Stepper/mobileStepper';
import { SessionContext } from '../../Context/SessionContext';

import Lottie from 'lottie-react';
import loading_animation from '../../Assets/images/loading_anim.json';
import logo from '../../Assets/images/KalSultant_website_transparent_logo.webp';

export const BookSession = () => {

    const navigate = useNavigate();
    const { setName, setEmail, setArea } = useContext(SessionContext);
    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState();
    console.log('Screen width is ', width);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone === 'Asia/Calcutta') {
        setArea('India');
    }

    useEffect(() => {
        const userLoggedIn = localStorage.getItem("userAuth");
        if (userLoggedIn == null) {
            navigate('/signIn');
        }
        setName(localStorage.getItem('userName'));
        setEmail(localStorage.getItem('userEmail'));
        setWidth(window.innerWidth);
        setLoading(false);
        window.scrollTo(0, 0);


    }, [])

    return (
        <>
            {loading ?
                <div className='loading_container'>
                    <Lottie loop={true} animationData={loading_animation} style={{ height: '12rem' }} />
                </div>
                :
                <div className='container_book_session'>
                    <div className='book_session_navbar'>
                        <Link to='/' style={{ textDecoration: 'none', border: 'none' }}>
                            <img src={logo} alt='/' style={{ width: '38px', height: '38px' }} />
                        </Link>
                    </div>
                    {
                        width <= 850 ? <MobileStepperForm /> : <StepperForm />
                    }

                </div>
            }
            <Footer />

        </>
    )
}
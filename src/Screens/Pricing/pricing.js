import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './pricing.css'
import logo from '../../Assets/images/KalSultant_website_transparent_logo.webp'
import { FaRupeeSign, FaUser } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { Footer } from '../../Components/Footer/footer';
import { SessionContext } from '../../Context/SessionContext';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

export const Pricing = () => {

    const navigate = useNavigate();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userName = localStorage.getItem('userName');
    console.log('Username received is', userName);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className='pricing_area_page'>
                <div className='pricing_navbar_container'>
                    <img src={logo} alt='/' style={{ width: '36px', height: '36px', cursor: 'pointer' }} onClick={() => { navigate('/') }} />
                    <h1 style={{ color: '#fff', fontSize: '1.8rem', cursor: 'pointer', marginTop: '1rem' }} className='user_profile_logo' onClick={() => { navigate('/profile', { state: { isBooked: false } }); }}>{userName != null ? userName.charAt(0) : <AiOutlineUser />}</h1>
                </div>

                <div className='pricing_info_container'>
                    <strong>Plans and Pricing that fit your pockets</strong>
                    <p>You can now consult for as low as {timeZone === "Asia/Calcutta" ? <p className='price_text'><MdOutlineCurrencyRupee />1099/-</p> : <p className='price_text'><BsCurrencyDollar />14.99/-</p>}</p>
                    <label style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
                        (Conversion rate and tax applicable)
                    </label>
                    <button onClick={()=>{navigate('/book_session')}}>Consult now</button>
                </div>


            </div >
            <Footer />
        </>
    )
}


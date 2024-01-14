import React from 'react';
import './contactUs.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export const ContactUs = () => {


    const navigate=useNavigate();

    const goToWhatsApp=()=>{
       window.open("https://wa.me/918126464372", '_blank');
    }

    const mailHandler=()=>{
        window.open('mailto:kalsultant@gmail.com','_blank');
    }

    const goBack=()=>{
        navigate(-1);
    }

    return (
        <div className='contactUsScreen'>
            <IoIosArrowRoundBack style={{
                color:'#fff',
                position:'absolute',
                top:'20',
                left:'20'
            }}
                onClick={goBack}
                className='goBackArrow'
            />
            <div className='heading_area'>
                <strong>Contact team KalSultant</strong>
            </div>
            <div className='info_area'>
                <div className='box' onClick={goToWhatsApp}>
                    <MdOutlineLocalPhone style={{ color: '#f9f6eecc', fontSize: '2rem' }} />
                    <p>+91-8126464372</p>
                </div>
                <div className='box' onClick={mailHandler}>
                    <IoMailOutline style={{ color: '#f9f6eecc', fontSize: '2rem' }} />
                    <p style={{ letterSpacing: '0.04cm' }}>contact@kalsultant.com</p>
                </div>
                <div className='box'>
                    <IoLocationOutline style={{ color: '#f9f6eecc', fontSize: '2rem' }} />
                    <p style={{ letterSpacing: '0.04cm' }}>Dehradun, India</p>
                </div>
            </div>
        </div>
    )
}

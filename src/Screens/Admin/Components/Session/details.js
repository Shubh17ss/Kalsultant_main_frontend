import React, { useEffect, useState } from 'react'
import './details.css'
import { AiOutlineClose } from 'react-icons/ai';
import { RxCalendar } from 'react-icons/rx';
import { BsClockHistory } from 'react-icons/bs';
import { FaUserAlt, FaBirthdayCake } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { IoCall } from 'react-icons/io5';
import { BiSolidCake } from 'react-icons/bi';
import {GiSandsOfTime} from 'react-icons/gi';

import GoogleMeet from '../../../../Assets/images/google-meet.svg';
import GoogleCalendar from '../../../../Assets/images/google-calendar.svg';
import Globe from '../../../../Assets/images/globe.svg';
import Gender from '../../../../Assets/images/gender.png';
import NotePad from '../../../../Assets/images/notepad.png';
import { GrStatusGoodSmall } from 'react-icons/gr';

export const Details = (props) => {

    const closeModal = () => {
        let setShowDetails = props.data[1];
        setShowDetails(-1);
    }
    const handleEscapeKeyPress = (event) => {
        if (event.key == "Escape") {
            closeModal();
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleEscapeKeyPress, false);

    }, [])




    let session = props.data[0];
    console.log(session);
    return (
        <div className='admin_details_container'>
            <AiOutlineClose className='crossIcon' onClick={closeModal} />
            <div className='admin_info_container'>
                <div className='top_area'>
                    <p style={{}}><FaUserAlt style={{ fontSize: '24px', color: 'rgba(255,255,255,0.3)', marginRight: '1rem' }} /> {session.firstname} {session.lastname}</p>
                    <p><RxCalendar style={{ fontSize: '36px', color: 'rgba(255,255,255,0.3)', marginRight: '1rem' }} />{session.session_date}</p>
                    <p><BsClockHistory style={{ fontSize: '36px', color: 'rgba(255,255,255,0.3)', marginRight: '1rem' }} />{session.session_slot}</p>
                </div>
                <div className='second_area'>
                    <div className='box'>
                        <p><HiMail style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.3)', marginRight: '1rem' }} /> {session.email}</p>
                        <p><IoCall style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.3)', marginRight: '1rem' }} /> +91-{session.contact_number}</p>
                        <p><GrStatusGoodSmall style={{ fontSize: '2rem', marginRight: '1rem', color: session.status === "Completed" ? '#00FF00' : session.status === 'Scheduled' ? '#DCD427' : '#FF3333' }} /> {session.status}</p>
                        <a href={session.invite_link} target='_blank'>
                            <p className='GoogleMeetLink'><img src={GoogleMeet} style={{ width: '6%', marginRight: '1rem' }} />Google meet invite link</p>
                        </a>
                        <a href='https://calendar.google.com'>
                            <p className='GoogleMeetLink'><img src={GoogleCalendar} style={{ width: '6%', marginRight: '1rem' }} />Edit in google calendar</p>
                        </a>
                    </div>
                    <div className='box'>
                        <p><BiSolidCake style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.3)', marginRight: '1rem' }} /> {session.dob}</p>
                        <p><GiSandsOfTime style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.3)', marginRight: '1rem' }} /> {session.tob}</p>
                        <p><img src={Globe} style={{ width: '6%', marginRight: '1rem' }} />{session.city} {session.state} {session.country}</p>
                        <p><img src={Gender} style={{ width: '6%', marginRight: '1rem' }} />{session.gender}</p>
                        <p><img src={NotePad} style={{ width: '6%', marginRight: '1rem' }} />Health Issues, Career</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


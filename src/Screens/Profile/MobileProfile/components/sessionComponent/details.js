import React from 'react';
import './session.css';
import { IoChevronBackCircleSharp } from "react-icons/io5";

export const Details = (props) => {

    let session = props.data[0];
    console.log(session);
    const closeModal = () => {
        let setShowDetails = props.data[1];
        setShowDetails(-1);
    }

    return (
        <div className='mb_details_container'>
            <IoChevronBackCircleSharp style={{ color: 'rgba(255,255,255,0.4)', fontSize: '2.5rem', marginLeft: '1rem', marginTop: '1rem' }} onClick={closeModal} />
            <p>{session.email}</p>
            <p>{session.city}</p>
            <p>{session.contact_number}</p>
            <p>{session.firstname}</p>
            <p>{session.lastname}</p>
            <p>{session.session_date}</p>
            <p>{session.session_slot}</p>
            <p>{session.tob}</p>
            <p>{session.dob}</p>
        </div>
    )
}
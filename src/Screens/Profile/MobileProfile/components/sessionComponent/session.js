import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './session.css';
import axios from 'axios';

import { FaRegCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

//importing the details component
import { Details } from './details';
//importing the bar loader component
import BarLoader from 'react-spinners/BarLoader';



export const Session = ({ userId }) => {

    const [sessions, setSessions] = useState([]);
    const [showDetails, setShowDetails] = useState(-1);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/session/getUserSessions?user_id=${userId}`).then((response) => {
            console.log(response.data);
            setSessions(response.data);

        }).catch((error) => {
            console.log(error);
            alert(error);
        })
    }, [])

    return (
        <div className='mb_sessions_container'>
            <p>My Sessions</p>
            {
                sessions.length == 0 ?
                    <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <p style={{ fontSize: '0.8rem', margin: 0, marginBottom: '0.4rem' }}>Fetching data</p>
                        <BarLoader loading={sessions.length == 0} height={2} color={'#fff'} speedMultiplier={1} />
                    </div>
                    :
                    <div className='sessions_flatlist_container'>
                        {sessions.map((item, index) => {
                            return (
                                <div className='mb_session_card'>
                                    <p><FaRegCalendarDays style={{ marginRight: '0.5rem' }} />{item.session_date}</p>
                                    <p><FaClock style={{ marginRight: '0.5rem' }} />{item.session_slot}</p>
                                    <p><FaUser style={{ marginRight: '0.5rem' }} />{item.firstname} {item.lastname}</p>
                                    <div className='button_container'>
                                        <button className='btn1' onClick={() => { setShowDetails(index) }}>Details</button>
                                        <button
                                            className='btn2' disabled={item.status === "Completed" ? true : false}
                                            onClick={() => { window.open(item.invite_link, '_blank') }}
                                            style={{backgroundColor:item.status==="Completed"?'#cf142a92':'#50c878cc'}}
                                        >
                                            {item.status==="Completed"?'Over':'Join'}
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            }
            <button className='new_session_button' onClick={()=>{navigate('/book_session')}}><span>New Session</span></button>
            {
                showDetails != -1 ? <Details data={[sessions[showDetails], setShowDetails]} /> : <></>
            }
        </div>
    )
}

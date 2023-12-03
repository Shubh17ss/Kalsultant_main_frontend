import React, { useEffect, useState } from 'react';
import './session.css';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { BiRefresh } from 'react-icons/bi';
import axios from 'axios';
import { ChangeStatusView } from './changeStatusVIew';
import { Details } from './details';

export const Session = ({ jwt }) => {

    const [sessionData, setSessionData] = useState([]);
    const [showDetails, setShowDetails] = useState(-1);

    const [showChangeStatusView, setShowChangeStatusView] = useState(-1);

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    const getData = (search) => {
        const body = {
            JWT: jwt
        }
        axios.post(`/api/session/getAllSessions?search=${search}`,body,config).then((response) => {
            setSessionData(response.data.result);
        }).catch((error) => {
            alert(error.response.data.error);
            if(error.response.data.error=="Token expired"){
               window.location.reload();
            }
        })
    }

    const getLocalDate = (date) => {
        var local = new Date(date);
        local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
        let localString = local.toISOString();
        return localString.substring(0, 10).split('-').reverse().join('/');
    }


    return (
        <div className='admin_data'>
            <div className='header_section'>
                <p className='header_text'>Sessions</p>
                <div style={{ width: '40%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'row', height: '45%', justifyContent: 'space-between', alignItems: 'center', borderRadius: '0.6rem', padding: '0 1rem' }}>
                    <BiRefresh onClick={() => { getData("") }} className='refresh_icon' />
                    <div className='button_container'>
                        <PiMagnifyingGlassBold style={{ fontSize: '18px' }} />
                        <input type="text" placeholder="Search by name or email" onChange={(e) => { getData(e.target.value) }} />
                    </div>
                </div>
            </div>

            <div className='session_data_area'>
                <div className='data_box'>
                    <div className='row_heading'>
                        <div id='shape_rect'></div>
                        <p>Username</p>
                        <p style={{ minWidth: '18%' }}>Email</p>
                        <p>Booked on</p>
                        <p>Scheduled Date</p>
                        <p style={{ marginLeft: '2rem' }}>Scheduled Slot</p>
                        <p style={{ marginLeft: '2rem', cursor: 'pointer' }} >Status</p>
                        <p style={{ minWidth: '8%' }}>Action</p>
                    </div>

                    <div className='data_rows_container'>
                        {showDetails == -1 ?
                            <>
                                {sessionData.map((item, index) => {
                                    return (
                                        <div className='row_heading row_data' key={index}>
                                            <div id='shape_rect'></div>
                                            <p>{item.firstname} {item.lastname}</p>
                                            <p style={{ minWidth: '18%' }}>{item.email}</p>
                                            <p>{getLocalDate(item.created_at)}</p>
                                            <p>{item.session_date}</p>
                                            <p style={{ marginLeft: '2rem' }}>{item.session_slot}</p>
                                            <p style={{ marginLeft: '2rem', color: item.status === 'Completed' ? '#a3f7bf' : '#f35b25', cursor: 'pointer' }} onClick={() => { setShowChangeStatusView(index) }}>{item.status}</p>
                                            <p style={{ minWidth: '8%', textDecoration: 'underLine', cursor: 'pointer' }} onClick={() => { setShowDetails(index) }}>Details</p>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            <>
                                <Details data={[sessionData[showDetails], setShowDetails,jwt]} />
                            </>
                        }

                    </div>
                </div>
            </div>

            {showChangeStatusView != -1 ? <ChangeStatusView data={[sessionData[showChangeStatusView], setShowChangeStatusView,jwt]} /> : <></>}
        </div>

    )
}


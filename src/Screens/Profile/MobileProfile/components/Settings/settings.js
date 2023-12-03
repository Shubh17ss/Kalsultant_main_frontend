import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './settings.css';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BarLoader from 'react-spinners/BarLoader';

export const Settings = () => {

    const navigate = useNavigate();
    const userId = localStorage.getItem('userAuth');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/api/user/getUserData?userId=${userId}`).then((response) => {
            setData(response.data);
        }).catch((error) => {
            alert(error);
        })
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem("userAuth");
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        navigate('/');
        window.location.reload(false);
    }

    return (
        <div className='mb_settings_container'>
            <p className='header_para_tag'>Settings</p>
            {data.length == 0 ?
                <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <p style={{ fontSize: '0.8rem', margin: 0, marginBottom: '0.4rem',color:'#f9f6eecc' }}>Fetching data</p>
                    <BarLoader loading={data.length == 0} height={2} color={'#fff'} speedMultiplier={1} />
                </div>
                :
                <div className='mb_settings_info_container'>
                    <p>{data[0].name}<MdOutlineKeyboardArrowRight /></p>
                    <p>{data[0].email} <MdOutlineKeyboardArrowRight /></p>
                    <p>******* <MdOutlineKeyboardArrowRight /></p>
                    <p
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', paddingBottom: '1rem', color: '#d21504ab' }}
                        onClick={handleLogOut}
                    >
                        Sign out <MdOutlineKeyboardArrowRight style={{ color: 'rgba(255,255,255,0.4)' }} /></p>
                </div>
            }
        </div>
    )
}
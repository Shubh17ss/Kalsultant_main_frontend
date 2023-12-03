import React, { useEffect, useState } from 'react'
import './admin.css';
import { MdSpaceDashboard, MdPayments } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaUserShield } from 'react-icons/fa';
import { FiPower } from 'react-icons/fi';
import { Session } from './Components/Session/session';
import { Dashboard } from './Components/Dashboard/dashboard';
import { Slots } from './Components/Slots/slots';
import axios from 'axios';

export const Admin = () => {

    const [index, setIndex] = useState(0);
    const [jwt, setJwt] = useState('');

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');


    const handleLogOut=()=>{
        setEmail('');
        setPassword('');
        setJwt('');


    }

    const validateAdmin=()=>{
         
        const body={
            email:email,
            password:password,
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post('/api/admin/validateAdmin',body,config).then((response)=>{
            setJwt(response.data.jwt);
        }).catch((error)=>{
            console.log(error);
            alert('Wrong Email or password');
        })
        
    }   


    return (
        <>
            {
                jwt.length === 0 ?
                    <div className='admin_screen'>
                        <div className='login_admin_container'>
                            <strong>Enter username & password</strong>
                            <input type='text' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            <input type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            <button onClick={validateAdmin}>Verify</button>
                        </div>
                    </div>
                    :
                    <div className='admin_screen'>
                        <div className='admin_navbar'>
                            <p className='user_para_tag'>Shubh Sharma</p>
                            <div onClick={() => { setIndex(0) }} className={index == 0 ? 'current' : ''}>
                                <MdSpaceDashboard />
                                <p>Dashboard</p>
                            </div>
                            <div onClick={() => { setIndex(1) }} className={index == 1 ? 'current' : ''}>
                                <BsFillCameraVideoFill />
                                <p>Sessions</p>
                            </div>
                            <div onClick={() => { setIndex(2) }} className={index == 2 ? 'current' : ''}>
                                <MdPayments />
                                <p>Payments</p>
                            </div>
                            <div onClick={() => { setIndex(3) }} className={index == 3 ? 'current' : ''}>
                                <FaUserShield />
                                <p>Users</p>
                            </div>
                            <div onClick={() => { setIndex(4) }} className={index == 4 ? 'current' : ''}>
                                <IoIosSettings />
                                <p>Slots</p>
                            </div>

                            <button onClick={handleLogOut}>
                                <FiPower style={{ fontSize: '16px' }} />
                                <p>Logout</p>
                            </button>
                        </div>
                        {index == 0 ? <Dashboard /> : index == 1 ? <Session jwt={jwt}/> : <Slots jwt={jwt}/>}

                    </div>
            }
        </>

    )
}


import React, { useEffect, useState, useContext } from 'react'
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import Tooltip from '@mui/material/Tooltip';
import { db } from '../../../Firebase/connection';
import { SessionContext } from '../../../Context/SessionContext';
import './MySessions.css';
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export const MySessions = () => {
    const userLoginId = localStorage.getItem('userAuth');
    const { userSessions, setUserSessions } = useContext(SessionContext);
    const theme = createTheme({
        components: {
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        fontSize: "0.7em",
                        fontWeight:'600',
                        color: "#fff",
                        backgroundColor: "#318CE7",
                        borderRadius:'7px',
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                    },
                    arrow:{
                        color:'#318CE7'
                    }
                }
            }
        }
    });
    useEffect(() => {
        console.log('Code came here');
       const getData = async () => {
            if (userSessions.length === 0) {
                const Ref = collection(db, "sessions");
                const q = query(Ref, where("user_Id", "==", userLoginId), where("payment_status", "==", true), orderBy("created_at"))
                const snapShot = await getDocs(q);
                let arr = [];
                snapShot.forEach((doc) => {
                    console.log(doc.data().session_date);
                    const seconds=doc.data().session_date.seconds;
                    let date=new Date(seconds*1000);
                    date=date.toDateString();
                    console.log(date);
                    let object={
                        inviteLink:doc.data().inviteLink,
                        FirstName:doc.data().firstName,
                        lastName:doc.data().lastName,
                        session_type:doc.data().session_type,
                        session_time:doc.data().session_time,
                        session_date:date,

                    }
                    arr.push(object);
                })

                console.log( 'Array is ',arr);
                arr.reverse();
                setUserSessions(arr);
               
            }
        }
        getData();


    }, [])



    return (
        <div className='sessions_container'>
            {
                userSessions.map((item, index) => (
                    <ThemeProvider theme={theme} key={index}>
                        <Tooltip title='Join session' arrow>
                            <a href={item.inviteLink} className='session_invite_link' target='_blank'>
                                <div className='session_container'>
                                    <h3>{item.firstName} {item.lastName} <label style={{ fontSize: '1rem' }}> ( {item.session_type} )</label></h3>
                                    <p> {item.email}</p>
                                    <p> Time: {item.session_time}</p>
                                    <p> Date: {item.session_date}</p>
                                </div>
                            </a>
                        </Tooltip>
                    </ThemeProvider>
                ))
            }

        </div>
    )
}


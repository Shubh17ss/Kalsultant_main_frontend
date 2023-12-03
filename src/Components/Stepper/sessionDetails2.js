import React, { useState, useContext, useEffect } from 'react'
import './session.css';
import { Box } from '@mui/material';
import Calendar from 'react-calendar';
import { TimeSlot } from './timeSlot';
import { SessionContext } from '../../Context/SessionContext';
import { SuccessToast } from '../../Components/Toast/Toast';
import { toast } from 'react-toastify';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import axios from 'axios';




export const SessionDetails2 = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { area, activeStep, setActiveStep, selectedSession, setSelectedSession, setSessionDate, sessionDate, timeSlots, setTimeSlots, setSessionTime, sessionTime } = useContext(SessionContext);
    const isMobileScreen = window.innerWidth < 950 ? true : false;
    const [loading, setLoading] = useState(false);
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let calendarDate;



    // ERROR HANDLING
    const [e1, setE1] = useState(false);
    const [e2, setE2] = useState(false);
    const [e3, setE3] = useState(false);

    // ERROR HANDLING ENDS

    const onChangeHandler = (date) => {
        setSessionTime(-1);
        setE2(false);
        setLoading(true);
        console.log(date);
        let day = date.getDate();
        let month = parseInt(date.getMonth()) + 1;
        let year = date.getFullYear();
        let sessionDateTemp = day + " / " + month + " / " + year;
        //call apis to get available slots
        let body = {
            date: sessionDateTemp
        }
        
        axios.post('api/session/getBookedSlots',body,config).then((response)=>{
                console.log(response);
                if(response.data.slots.length==0){
                    toast.error('No slots are availabe for this date',{
                        position:toast.POSITION.TOP_CENTER
                    });
                }
                setTimeSlots(response.data.slots);
        }).catch((error)=>{
            console.log(error);
        })

        setSessionDate(sessionDateTemp);
    }

    const tileDisabled = ({ activeStartDate, date, view }) => {
        return date < new Date();
    }
    const handleNext = () => {

        if (!sessionDate) {
            toast.error('Please select a date', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        else if (sessionTime === -1) {
            toast.error('Please select a slot', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }

        const newStep = activeStep + 1;
        setActiveStep(newStep);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: isMobileScreen ? 'fit-content' : '75vh', paddingBottom: isMobileScreen ? '2rem' : '0px' }} className='session_details_screen'>
            <SuccessToast />
            <div className='session_container2'>

                <div className='date_picker_container' >
                    <Calendar tileDisabled={tileDisabled} onClickDay={onChangeHandler} showNeighboringMonth={false} defaultValue={calendarDate} />
                    {sessionDate ? <TimeSlot date={sessionDate} /> : <TimeSlot er={e3} />}
                </div>
            </div>
            <Box sx={[{ display: 'flex', flexDirection: 'row', pt: 2, width: '90%', alignSelf: 'center', justifyContent: 'space-between' }, isMobileScreen ? { marginTop: '20px' } : {}]}>
                <button onClick={() => setActiveStep(activeStep - 1)} className='next_button'
                    style={{ color: '#f9f6ee', background: 'transparent', borderWidth: 1 }}>
                    <BsArrowLeft style={{ marginRight: '0.5rem' }} />
                    Personal Details
                </button>


                <button onClick={handleNext} className='next_button' style={{ border: 'none', backgroundColor: '#131315' }}>
                    Checkout
                    <BsArrowRight style={{ marginLeft: '0.5rem' }} />
                </button>
            </Box>
        </div>
    )
}


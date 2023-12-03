import React, { useState } from 'react'
import './slots.css'
import Calendar from 'react-calendar';
import axios from 'axios';
import { useScroll } from 'framer-motion';


export const Slots = ({ jwt }) => {
    let calendarDate;

    const [slots, setSlots] = useState([]);
    const [errorText, setErrorText] = useState('');
    const [addSlot, setAddSlot] = useState(false);
    const [slotValue, setSlotValue] = useState('');
    const [sessionDate, setSessionDate] = useState();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const onChangeHandler = (date) => {
        setSlots([]);
        setSlotValue('');
        setAddSlot(false);
        console.log(date);
        let day = date.getDate();
        let month = parseInt(date.getMonth()) + 1;
        let year = date.getFullYear();
        let sessionDateTemp = day + " / " + month + " / " + year;
        console.log(sessionDateTemp);
        setSessionDate(sessionDateTemp);

        getSlots(sessionDateTemp);



    }

    const getSlots = (sessionDateTemp) => {
        setAddSlot(false);
        let body = {
            JWT: jwt,
            date: sessionDateTemp
        }


        axios.post('/api/slots/getslots', body, config).then((response) => {
            console.log(response.data);
            if (response.data.results.length == 0) {
                setErrorText(`No slots have been scheduled for ${sessionDateTemp}`);
            }
            else {
                setSlots(response.data.results);
            }
        }).catch((error) => {
            console.log(error);
            if (error.response.data.error == "Token expired") {
                alert("Token expired...Login Again");
                window.location.reload();
            }
        })
    }

    const handleButtonClick = () => {
        setAddSlot(true);
    }

    const addSlotToDatabase = () => {
        let body = {
            JWT: jwt,
            date: sessionDate,
            slot: slotValue
        }

        axios.post('/api/slots/addSlot', body, config).then((response) => {
            alert('Slot Added Successfully');
            getSlots(sessionDate);

        }).catch((error) => {
            if (error.response.data.error == "Token expired") {
                alert("Token expired...Login Again");
                window.location.reload();
            }
        })
    }


    return (
        <div className='slots_screen'>
            <div style={{ width: '48%', height: '50%' }}>
                <Calendar onClickDay={onChangeHandler} showNeighboringMonth={false} defaultValue={calendarDate} />
            </div>
            <div className='slots_area'>
                {addSlot ?
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <input type="text" placeholder=' Format : 10:00 AM' className='input_container222' onChange={(e) => { setSlotValue(e.target.value) }} value={slotValue} />
                        <button onClick={addSlotToDatabase}>Add</button>
                    </div>
                    :
                    <>
                        {slots.length == 0 ?
                            <>
                                {errorText.length > 0 ?
                                    <>
                                        <p>{errorText}</p>
                                        <button onClick={handleButtonClick}>Add a slot</button>

                                    </>
                                    :
                                    <p>Please select a date</p>
                                }
                            </>
                            :
                            <>
                                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', marginTop: '5%' }}>
                                    {slots.map((item, index) => {
                                        return (
                                            <p style={{ marginTop: '5px', width: '30%', height: '46px' }}>{item.slot}</p>
                                        )
                                    })}
                                </div>
                                <button onClick={handleButtonClick}>Add a slot</button>
                            </>}
                    </>
                }

            </div>

        </div>
    )
}


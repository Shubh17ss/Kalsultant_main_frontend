import React, { useState, useContext, useEffect } from 'react';
import { SessionContext } from '../../Context/SessionContext';
import './timeSlot.css';
import Lottie from 'lottie-react';
import sadEmojiAnimation from '../../Assets/animations/sad_emoji_animation.json';


export const TimeSlot = ({ date }) => {

    const { sessionTime, setSessionTime, timeSlots} = useContext(SessionContext);
    return (
        <>
            {timeSlots.length > 0 ?
                <div className='timeSlot_container'>
                    {timeSlots.map((item, index) => (
                        <div className='each_slot_wrapper' key={index}
                            onClick={() => { setSessionTime(item.slot); }}
                            style={item.slot === sessionTime ? { backgroundColor: ' #006edc', color: '#f9f6ee' } : {}}
                        >
                            <h5>{item.slot}</h5>
                        </div>
                    ))
                    }
                </div>
                :
                <>
                </>
            }
        </>
    )
}


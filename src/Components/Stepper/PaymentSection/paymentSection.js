import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './paymentSection.css';
import { AiFillHome, AiOutlineLink } from 'react-icons/ai';
import { SessionContext } from '../../../Context/SessionContext'


export const PaymentSection = (props) => {

    const navigate = useNavigate();
    const {email,setActiveStep, timeSlots, sessionDate, sessionTime}=useContext(SessionContext);
    let months=['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
    let dateArray=sessionDate.split("/");
    const isMobileScreen=window.innerWidth<950?true:false;
    
    return (
        <div className='paymentContainer'>
            <strong>Congratulations..!</strong>
            <p>Your <a style={{ color: '	#DB4437' }} href="https://calendar.google.com" target='_blank'>Google</a> calendar is booked for</p>
            <strong className='date_strong'>{months[parseInt(dateArray[1])-1]} {dateArray[0]}</strong>
            <strong style={{ fontSize: '32px' }}>{timeSlots[sessionTime]}</strong>
            <div className='ps_button_container'>
                <button onClick={() => { navigate('/'); setActiveStep(0); }}>
                    <AiFillHome style={{ fontSize: '16px', marginBottom: '2px', marginRight: '10px' }} />
                    <p>Home</p>
                </button>
                <a style={{width:'45%',height:'100%'}} href={props.url} target="_blank">
                    <button style={{width:'100%',height:'100%'}}>
                        <p>Session Link</p>
                        <AiOutlineLink style={{ fontSize: '16px', marginBottom: '2px', marginLeft: '10px' }} />
                    </button>
                </a>
            </div>
            <p style={{fontSize:isMobileScreen?'10px':'12px',marginTop:'7rem'}}>The invite has been sent to {email}</p>
        </div>
    )
}


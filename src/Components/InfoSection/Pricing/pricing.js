import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../../../Context/SessionContext';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './pricing.css'

export const Pricing = () => {
    const { area, setSelectedSession } = useContext(SessionContext);
    const navigate = useNavigate();

    return (
        <div className='pricing_container' id='pricing'>
            <div className='heading_container'>
                <h1>Sessions that suit your pockets</h1>
            </div>
            <div className='plans_container'>
                <div className='each_plan_card'>
                    <h1>Intro Session</h1>
                    <div className='currency_container'>
                        <label style={{ color: '#f9f6ee', fontSize: '2.5rem' }}>{area === 'India' ? <>&#8377;</> : <>&#36;</>}</label>
                        <h1 style={{ fontSize: '2rem', marginLeft: '0.5rem' }}>{area === 'India' ? '1099/-' : '31/-'}</h1>
                    </div>
                    <div className='details_container'>
                        <ul>
                            <li>A 30 minute session</li>
                            <li>A brush up session that wraps up everything you need to know for the coming week.</li>
                        </ul>
                    </div>

                 
                    <button className='button_element' onClick={(e)=>{setSelectedSession(0);navigate('/book_session');}}>
                        Book
                        <NavigateNextIcon sx={{fontSize:'24px',marginLeft:'12px'}}/>
                    </button>
                   

                </div>

                <div className='each_plan_card card2'>
                    <h1>Thorough Session</h1>
                    <div className='currency_container'>
                        <label style={{ color: '#0f0f0f', fontSize: '2.5rem' }}>{area === 'India' ? <>&#8377;</> : <>&#36;</>}</label>
                        <h1 style={{ fontSize: '2rem', marginLeft: '0.5rem' }}>{area === 'India' ? '1999/-' : '39/-'}</h1>
                    </div>
                    <div className='details_container thoroughList'>
                        <ul>
                            <li>A  one hour session</li>
                            <li>Astrologer is open to all of your queries.</li>
                            <li>A detailed session that covers almost everything you would ever want.</li>
                        </ul>
                    </div>
                    <button className='button_element thoroughButton' style={{color:'#0f0f0f'}}
                            onClick={(e)=>{setSelectedSession(2);navigate('/book_session');}}   
                            >
                        Book
                        <NavigateNextIcon sx={{fontSize:'24px',marginLeft:'12px'}}/>
                    </button>
                </div>

                <div className='each_plan_card'>
                    <h1>Follow-up Session</h1>
                    <div className='currency_container'>
                        <label style={{ color: '#f9f6ee', fontSize: '2.5rem' }}>{area === 'India' ? <>&#8377;</> : <>&#36;</>}</label>
                        <h1 style={{ fontSize: '2rem', marginLeft: '0.5rem' }}>{area === 'India' ? '999/-' : '29/-'}</h1>
                    </div>
                    <div className='details_container'>
                        <ul>
                            <li>A 30 minute session</li>
                            <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>
                        </ul>
                    </div>
                    <button className='button_element'
                             onClick={(e)=>{setSelectedSession(1);navigate('/book_session');}} 
                            >
                        Book
                        <NavigateNextIcon sx={{fontSize:'24px',marginLeft:'12px'}}/>
                    </button>

                </div>
            </div>





        </div>
    )
}


import React, { useContext, useEffect, useState, CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import heartAnimation from '../../Assets/animations/heart_animation.json';
import careerAnimation from '../../Assets/animations/career_animation.json';
import moneyAnimation from '../../Assets/animations/money_animation.json';
import healthAnimation from '../../Assets/animations/health_animation.json';
import { SuccessToast } from '../Toast/Toast';
import { toast } from 'react-toastify';
import { SessionContext } from '../../Context/SessionContext'
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase/connection';
import './confirmDetails.css';
import axios from 'axios';
import { BsArrowLeft } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { PaymentSection } from './PaymentSection/paymentSection';
import { MoonLoader } from 'react-spinners';

export const ConfirmDetails = () => {



    const [showPaymentSection, setShowPaymentSection] = useState();
    const isMobileScreen = window.innerWidth < 950 ? true : false;


    useEffect(() => {

        window.addEventListener('popstate', () => {
            alert('Changes made might not be saved...');
        })



    }, [showPaymentSection])


    const navigate = useNavigate();

    //local useState variables
    const [Loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [googleMeetUrl, setGoogleMeetUrl] = useState("");

    const { area, setLoading, gender, activeStep, setActiveStep, name, email, day, month, year, hour, minutes, ampm, countryContext, stateContext, cityContext, sessionTime, selectedSession, sessionDate, timeSlots, setSelectedSession, setSessionDate, setSessionTime, contactNumber } = useContext(SessionContext);
    const slot = sessionTime;
    const sessionType = "Intro Session";
    //const sessionType = sessionTypes[selectedSession].Name;
    let slotDate = sessionDate != null ? sessionDate.toString() : '';
    slotDate = slotDate.split(' ');

    const currency = area === 'India' ? "₹" : "$";
    let amount = area === "India" ? 1099 : 14.99;


    let tax = amount * .025;
    tax = tax.toFixed(2);
    tax = parseFloat(tax);
    const toPay = amount + tax;

    const handleBook = async () => {

        setLoader(true);

        let userId = localStorage.getItem('userAuth');
        console.log(userId);
        let nameArr = name.split(' ');
        let dob = day + '/' + month + '/' + year;
        let tob = hour + ':' + minutes + ' ' + ampm;
        console.log(gender);
        console.log(cityContext);
        console.log(stateContext);
        console.log(countryContext);
        console.log(sessionType);
        console.log(sessionDate);
        console.log(slot);
        let body = {
            id: userId,
            firstname: nameArr[0],
            lastname: nameArr[1],
            email: email,
            dob: dob,
            tob: tob,
            gender: gender,
            city: cityContext,
            state: stateContext,
            country: countryContext,
            session_type: sessionType,
            session_slot: slot,
            session_date: sessionDate,
            contact_number: contactNumber,
        }
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post('/api/session/createSession', body, config).then((res) => {
            const sessionId = res.data.sessionId;
            createMeetingInvite(sessionId);
        }).catch((err) => {
            console.log(err);
            setTimeout(() => {
                setLoader(false);
            }, 4000)

            setTimeout(() => {
                setFailure(true);
            }, 4000)

        })





    }

    const createMeetingInvite = (sessionId) => {
        console.log('Meeting invite Console elements required');
        console.log(name);
        console.log(email);
        const date = sessionDate.split('/');
        const yy = date[2];
        let mm = parseInt(date[1]);
        let dd = parseInt(date[0]);

        if (mm < 10) {
            mm = '0' + mm;
        }
        if (dd < 10) {
            dd = '0' + dd;
        }

        let calendarDate = yy + '-' + mm + '-' + dd;
        let temp = slot.split(' ');
        let clock = temp[1];
        let hour = parseInt(temp[0].substring(0, 2));
        let minutes = parseInt(temp[0].substring(3));
        if (clock == "PM") {
            if (hour != 12)
                hour = 12 + hour;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        let startTime = hour + ':' + minutes + ':00';
        hour = hour + 1;
        let endTime = hour + ':' + minutes + ':00';



        let body = {
            name: name,
            email: email,
            date: calendarDate,
            start_time: startTime,
            end_time: endTime
        };

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        //api call here

        axios.post('/api/session/createMeetingInvite', body, config).then((response) => {
            setGoogleMeetUrl(response.data.response.data.hangoutLink);
            let body = {
                sessionId: sessionId,
                url: response.data.response.data.hangoutLink,
            }
            axios.post('/api/session/setMeetingLink', body, config).then((response) => {
                setSuccess(true);
                setLoader(false);
                //here redirect to payment's page (OPTIONAL)   
                setTimeout(() => {
                    setShowPaymentSection(true);
                    if (!isMobileScreen)
                        window.scrollTo(0, 240);
                    else
                        window.scrollTo(0, 10);
                }, 1500);

            }).catch((error) => {
                alert(error.message);
            })

        }).catch((error) => {
            console.log(error);
        })
    }



    return (
        <>
            <SuccessToast />
            {
                showPaymentSection ?
                    <>
                        <PaymentSection url={googleMeetUrl} />
                    </>
                    :
                    <div className='confirm_details_container'>
                        {isMobileScreen ?
                            <></>
                            :
                            <div className='session_benefits'>
                                <h2>This session will be about your...</h2>
                                <div className='categories_container'>
                                    <div className='each_category'>
                                        <Lottie loop={true} animationData={heartAnimation} style={{ height: '10rem', marginBottom: '4rem', overflow: 'hidden' }} />
                                        <h1>Relationship</h1>
                                    </div>
                                    <div className='each_category'>
                                        <Lottie loop={true} animationData={careerAnimation} style={{ height: '5rem', overflow: 'hidden' }} />
                                        <h1>Career</h1>
                                    </div>
                                    <div className='each_category'>
                                        <Lottie loop={true} animationData={moneyAnimation} style={{ height: '7rem', width: '6rem', overflow: 'hidden' }} />
                                        <h1>Finance</h1>
                                    </div>
                                    <div className='each_category'>
                                        <Lottie loop={true} animationData={healthAnimation} style={{ height: '6rem', overflow: 'hidden' }} />
                                        <h1>Health</h1>
                                    </div>
                                </div>
                                {!isMobileScreen ?
                                    <button className='previousBtn' onClick={() => { setActiveStep(activeStep - 1) }}>
                                        <BsArrowLeft style={{ marginRight: '0.5rem' }} />
                                        Schedule Session
                                    </button>
                                    :
                                    <></>}

                            </div>
                        }

                        <div className='session_details'>
                            <h1>Your session</h1>
                            <div className='user_details'>
                                <div className='each_detail'>
                                    <h6>Name</h6>
                                    <h5>{name}</h5>
                                </div>
                                <div className='each_detail'>
                                    <h6>Email</h6>
                                    <h5>{email}</h5>
                                </div>
                            </div>
                            <div className='user_details' style={{ height: '14vh' }}>
                                <div className='each_detail'>
                                    <h6>Date of Birth</h6>
                                    <h5>{month}, {day}, {year}</h5>
                                </div>
                                <div className='each_detail'>
                                    <h6>Time of Birth</h6>
                                    <h5>{hour}:{minutes}</h5>
                                </div>
                                <div className='each_detail'>
                                    <h6>Place of Birth</h6>
                                    <h5>{cityContext} {stateContext} {countryContext}</h5>
                                </div>
                            </div>
                            <div className='user_details'>
                                <div className='each_detail'>
                                    <h6>Session</h6>
                                    <h5>{sessionType}</h5>
                                </div>
                                <div className='each_detail'>
                                    <h6>Scheduled for</h6>
                                    <h5>{slot}, {sessionDate}</h5>
                                </div>
                            </div>
                            <div className='user_details' style={{ height: '14vh' }}>
                                <div className='each_detail'>
                                    <h6>Amount:</h6>
                                    <h5>{currency}{amount}/-</h5>
                                </div>
                                <div className='each_detail'>
                                    <h6>Tax (GST - 5%):</h6>
                                    <h5>{currency}{tax}/-</h5>
                                </div>
                                <div className='each_detail'>
                                    <h6>Total price:</h6>
                                    <h5>{currency}{toPay}/-</h5>
                                </div>
                            </div>

                            <div className='user_details' style={{ border: 'none', height: '6vh', justifyContent: 'space-between', flexDirection: 'row', paddingLeft:isMobileScreen?'': '0.8rem' }}>
                                <button className='bookPayButton' onClick={handleBook} style={failure ? { color: 'crimson' } : {}} disabled={failure || success}>
                                    {Loader ?
                                        <>
                                            <label style={{ marginRight: '1rem' }}>
                                                Checking Availability
                                            </label>
                                            <MoonLoader loading={Loader} size={18} color={'#fff'} speedMultiplier={0.7} />
                                        </>
                                        :
                                        <>
                                            {success
                                                ?
                                                <>
                                                    Session Booked
                                                    <AiFillCheckCircle style={{ marginLeft: '1rem', fontSize: '1rem' }} />                                                </>
                                                :
                                                <>
                                                    {
                                                        failure ?
                                                            <>
                                                                Session Already Booked
                                                            </>
                                                            :
                                                            <>
                                                                Book Session
                                                                {/* < BsArrowRight style={{ marginLeft: '0.5rem' }} /> */}
                                                            </>
                                                    }

                                                </>
                                            }
                                        </>
                                    }
                                </button>

                            </div>

                        </div>
                        {
                            isMobileScreen ?
                                <div
                                    style={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row',
                                    }}
                                    onClick={() => { setActiveStep(activeStep - 1) }}
                                >
                                    <BsArrowLeft style={{ color: 'rgba(255,255,255,0.2)', marginRight: '0.5rem' }} />
                                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>Go back</p>
                                </div>
                                :
                                <></>
                        }

                    </div>

            }
        </>


    )
}

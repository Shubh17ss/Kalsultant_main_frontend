import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import './stepper.css';
import { TextField, Box, Button, FormControl, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material';
import { SessionContext } from '../../Context/SessionContext';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import birthTimeImg from '../../Assets/images/birthtimeImage.png';
import { BsArrowRight } from 'react-icons/bs';
import { SuccessToast } from '../Toast/Toast';
import { toast } from 'react-toastify';



export const PersonalDetails = () => {


    useEffect(() => {

        console.log("Use effect running");
        window.scrollTo(0, 0);
    }, []);


    const { activeStep, setActiveStep, name, email, setName, globalStates,
        setEmail,
        globalCities,
        setGlobalStates,
        setGlobalCities,
        countryContext,
        stateContext,
        cityContext,
        setcountryContext,
        setstateContext,
        setcityContext,
        setSessionDate,
    } = useContext(SessionContext);


    const regex = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    const [e1, setE1] = useState(false);
    const [e2, setE2] = useState(false);
    const [e3, setE3] = useState(false);
    const [e4, setE4] = useState(false);
    const [e5, setE5] = useState(false);
    const [e6, setE6] = useState(false);
    const [e7, setE7] = useState(false);
    const [e8, setE8] = useState(false);
    const [rangePicker, setRangePicker] = useState(false);

    const isMobileScreen = window.innerWidth < 950 ? true : false;



    //DATE OF BIRTH CONTROLLER
    const { month, day, days, year, hour, minutes, setMonth, setDay, setDays, setYear, setHour, setMinutes, gender, setGender, contactNumber, setContactNumber } = useContext(SessionContext);
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const current_year = new Date().getFullYear();
    const years = 120;

    const handleMonths = (e) => {
        setMonth(e.target.value);
        const index = months.indexOf(e.target.value);
        console.log(index);
        if (index == 0 || index == 2 || index == 4 || index == 6 || index == 7 || index == 9 || index == 11)
            setDays(31);
        else {
            if (e.target.value === 'Febuary')
                setDays(29);
            else
                setDays(30);
        }
    }

    // DATE OF BIRTH CONTROLLER ENDS

    // PLACE OF BIRTH CONTROLLER
    const [data, setData] = useState([]);
    const country = [...new Set(data.map(item => item.country))];
    country.sort();


    const handleNext = () => {

        if (contactNumber === '') {
            toast.error('Please enter contact number', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        if (contactNumber != '') {
            if (contactNumber.charAt(0) != '+') {
                toast.error('Please include country code with the number beginning with +', {
                    position: toast.POSITION.TOP_CENTER
                });
                return;
            }
        }
        if (gender === '') {
            toast.error('Please select a gender', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        if (month === '') {
            toast.error('Please enter birth month', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        else if (day === '') {
            toast.error('Please enter birth day', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        else if (year === '') {
            toast.error('Please enter birth year', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        else if (hour === '') {
            toast.error('Please enter hour of birth', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        else if (minutes === '') {
            toast.error('Please enter minutes of birth', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }



        let newStep = activeStep + 1;
        setActiveStep(newStep);

    }



    return (
        <>
            <SuccessToast />
            <div className='form_container'>
                <div className='information_container'>
                    <div className='input_container'>
                        <div className='each_input_field_container nameField'>
                            <label className='input_label'>Your name</label>
                            <input type='text' value={name} placeholder='' className='input_area_field' onChange={(e) => { setName(e.target.value) }}></input>
                        </div>
                        <div className='each_input_field_container emailField'>
                            <lable className='input_label'>Your Email</lable>
                            <input type='email' value={email} placeholder='' className='input_area_field' onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>
                    </div>

                    <div className='input_container gender_container'>

                        <div style={{ width: isMobileScreen ? '100%' : '50%' }}>
                            <input type='text' value={contactNumber} placeholder='Contact Number' className='input_area_field' onChange={(e) => { setContactNumber(e.target.value) }}></input>
                        </div>


                        <div className='gender_box' onClick={() => setGender('Male')} style={gender == 'Male' ? { borderColor: '#f9f6eecc', marginTop:isMobileScreen?'2rem':'0rem' } : { marginTop: isMobileScreen?'2rem':'0rem' }} >
                            {
                                gender !== 'Male' ?
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }} />
                                    :
                                    <CircleIcon sx={{ fontSize: '16px', color: 'rgba(255,255,255,1)' }} />
                            }
                            <h3 style={gender != 'Male' ? { color: 'rgba(255,255,255,0.8)' } : { color: 'rgba(255,255,255,1)' }}>Male</h3>
                        </div>
                        <div className='gender_box' onClick={() => setGender('Female')} style={gender == 'Female' ? { borderColor: '#f9f6eecc' } : {}} >
                            {
                                gender !== 'Female' ?
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }} />
                                    :
                                    <CircleIcon sx={{ fontSize: '16px', color: 'rgba(255,255,255,1)' }} />

                            }
                            <h3 style={gender != 'Female' ? { color: 'rgba(255,255,255,0.8)' } : { color: 'rgba(255,255,255,1)' }}>Female</h3>
                        </div>
                        <div className='gender_box' onClick={() => setGender('Trans')} style={gender == 'Trans' ? { borderColor: '#f9f6eecc' } : {}} >
                            {
                                gender !== 'Trans' ?
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }} />
                                    :
                                    <CircleIcon sx={{ fontSize: '16px', color: 'rgba(255,255,255,1)' }} />
                            }
                            <h3 style={gender != 'Trans' ? { color: 'rgba(255,255,255,0.8)' } : { color: 'rgba(255,255,255,1)' }}>Other</h3>

                        </div>



                    </div>


                    <div className='input_container birth_container' style={{ marginTop: '40px', height: 'fit-Content',flexDirection:isMobileScreen?'column':'row' }}>

                        <div style={isMobileScreen ? { width: '100%', display: 'flex', flexDirection: 'column', paddingLeft: '0.5rem' } : { display: 'flex', flexDirection: 'column', width: '60%' }}>
                            <label className='input_label' style={{ marginBottom: isMobileScreen ? '2%' : '0%', fontSize: '1rem', marginLeft: '2%' }}>When is your birthday?</label>
                            <div className='input_container' style={isMobileScreen ? { marginTop: '0' } : {}}>
                                <FormControl style={isMobileScreen ? { width: '40%' } : { width: '40%' }} sx={[{ overflow: 'visible', borderRadius: '0.8rem', border: '1.6px solid rgba(255, 255, 255, 0.1)' }, isMobileScreen ? { margin: '3px' } : { marginRight: '1%' }]} error={e1 ? 'error' : ''} size={'small'}>
                                    <InputLabel id="demo-simple-select-label" sx={{ fontFamily: 'Libre Baskerville, serif', color: '#f9f6eecc' }}>Month</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Country"
                                        value={month}
                                        onChange={(e) => { handleMonths(e); setE1(false) }}
                                        sx={{ fontFamily: 'Libre Baskerville, serif', borderRadius: '0.8rem', height: '2.7rem', fontWeight: '600', color: '#f9f6ee' }}
                                    >
                                        {months.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                                    </Select>
                                </FormControl>

                                <FormControl style={isMobileScreen ? { width: '80px' } : { width: '20%' }} sx={[{ overflow: 'visible', borderRadius: '0.8rem', border: '1.6px solid rgba(255, 255, 255, 0.1)' }, isMobileScreen ? { margin: '3px' } : { marginRight: '1%' }]} error={e2 ? 'error' : ''} size={'small'}>
                                    <InputLabel id="demo-simple-select-helper-label" sx={{ fontFamily: 'Libre Baskerville, serif', color: '#f9f6eecc' }}>Day</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select-helper"
                                        label="Country"
                                        value={day}
                                        onChange={(e) => { setDay(e.target.value); setE2(false) }}
                                        sx={{ fontFamily: 'Libre Baskerville, serif', borderRadius: '0.8rem', height: '2.7rem', fontWeight: '600', color: '#f9f6ee' }}
                                    >
                                        {[...Array(days)].map((e, i) => <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>)}

                                    </Select>
                                </FormControl>

                                <FormControl style={isMobileScreen ? { width: '100px' } : { width: '30%' }} sx={[{ overflow: 'visible', borderRadius: '0.8rem', border: '1.6px solid rgba(255, 255, 255, 0.1)' }, isMobileScreen ? { margin: '3px' } : { marginRight: '1%' }]} error={e3 ? 'error' : ''} size={'small'}>
                                    <InputLabel id="demo-simple-select-helper-label" sx={{ fontFamily: 'Libre Baskerville, serif', color: '#f9f6eecc' }}>Year</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select-helper"
                                        label="Country"
                                        value={year}
                                        onChange={(e) => { setYear(e.target.value); setE3(false) }}
                                        sx={{ fontFamily: 'Libre Baskerville, serif', borderRadius: '0.8rem', height: '2.7rem', fontWeight: '600', color: '#f9f6ee' }}
                                    >
                                        {[...Array(years)].map((e, i) => <MenuItem key={i} value={current_year - i + ''}>{current_year - i}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>


                        <div style={isMobileScreen ? { width: '100%', display: 'flex', flexDirection: 'column', paddingLeft: '0.5rem', paddingTop: '10%' } : { display: 'flex', flexDirection: 'column', marginLeft: '5%' }}>

                            <label className='input_label' style={{ marginBottom: isMobileScreen ? '0%' : '0%', fontSize: '1rem', marginLeft: '2%', width: '100%' }}>What is your time of birth?</label>
                            <div className='input_container' style={{ marginBottom: '5%', height: '2rem' }}>
                                <FormControl style={isMobileScreen ? { width: '40%' } : { width: '50%' }} sx={[{ overflow: 'visible', borderRadius: '0.8rem', border: '1.6px solid rgba(255, 255, 255, 0.1)' }, isMobileScreen ? { margin: '3px' } : { marginRight: '1%' }]} error={e1 ? 'error' : ''} size={'small'}>
                                    <InputLabel id="demo-simple-select-label" sx={{ fontFamily: 'Libre Baskerville, serif', color: '#f9f6eecc' }}>Hour</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Country"
                                        value={hour}
                                        onChange={(e) => { setHour(e.target.value); setE1(false) }}
                                        sx={{ fontFamily: 'Libre Baskerville, serif', borderRadius: '0.8rem', height: '2.7rem', fontWeight: '600', color: '#f9f6ee' }}
                                    >
                                        {[...Array(24)].map((e, i) => <MenuItem key={i} value={i + ''}>{i}</MenuItem>)}
                                    </Select>
                                </FormControl>
                                <label style={{ marginRight: '1%', fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}>{rangePicker ? '-' : ':'}</label>
                                {
                                    rangePicker ?
                                        <FormControl style={isMobileScreen ? { width: '40%' } : { width: '50%' }} sx={[{ overflow: 'visible', borderRadius: '0.8rem', border: '1.6px solid rgba(255, 255, 255, 0.1)' }, isMobileScreen ? { margin: '3px' } : { marginRight: '1%' }]} error={e1 ? 'error' : ''} size={'small'}>
                                            <InputLabel id="demo-simple-select-label" sx={{ fontFamily: 'Libre Baskerville, serif', color: '#f9f6eecc' }}>Hour</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Country"
                                                value={(parseInt(hour) + 1) % 24}
                                                onChange={(e) => { setHour(e.target.value); setE1(false) }}
                                                sx={{ fontFamily: 'Libre Baskerville, serif', borderRadius: '0.8rem', height: '2.7rem', fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                                            >
                                                {[...Array(24)].map((e, i) => <MenuItem key={i} value={i + ''}>{i}</MenuItem>)}
                                            </Select>
                                        </FormControl>
                                        :
                                        <FormControl style={isMobileScreen ? { width: '40%' } : { width: '50%' }} sx={[{ overflow: 'visible', borderRadius: '0.8rem', border: '1.6px solid rgba(255, 255, 255, 0.1)' }, isMobileScreen ? { margin: '3px' } : { marginRight: '1%' }]} error={e2 ? 'error' : ''} size={'small'}>
                                            <InputLabel id="demo-simple-select-helper-label" sx={{ fontFamily: 'Libre Baskerville, serif', color: '#f9f6eecc' }}>Minutes</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select-helper"
                                                label="Country"
                                                value={minutes}
                                                onChange={(e) => { setMinutes(e.target.value); setE2(false) }}
                                                sx={{ fontFamily: 'Libre Baskerville, serif', borderRadius: '0.8rem', height: '2.7rem', fontWeight: '600', color: '#f9f6ee' }}
                                            >
                                                {[...Array(60)].map((e, i) => <MenuItem key={i} value={i + ''}>{i}</MenuItem>)}

                                            </Select>
                                        </FormControl>
                                }
                            </div>

                        </div>
                    </div>



                    <div className='last_section_button_container'>
                        <div className='input_container' style={{ marginTop: isMobileScreen ? '5%' : '5%', width:isMobileScreen?'100%':'50%' }}>
                            <div className='each_input_field_container' style={{ width: '100%' }}>
                                <label className='input_label' style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Please provide your place of birth</label>
                                <input type='text' value={cityContext} placeholder='City, State, Country' className='input_area_field' onChange={(e) => { setcityContext(e.target.value) }}></input>
                            </div>
                        </div>
                        <button className='next_button' onClick={handleNext}>
                            Schedule Session
                            <BsArrowRight style={{ marginLeft: '0.5rem' }} />
                        </button>
                    </div>





                </div>

                {/* <div className='content_container'>
                       <img src={birthTimeImg} alt=''/>         
                </div> */}



            </div>
        </>
    )
}

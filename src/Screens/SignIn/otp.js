import React, { useRef, useState } from 'react'
import './otp.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { ParticlesBackground } from './Particles/particlesBackground';
import { ContactPageSharp, DockOutlined } from '@mui/icons-material';
import axios from 'axios';


export const Otp = () => {

  //useState to store the 6 digit 
  const [otp, setOtp] = useState("");
  const navigate=useNavigate();

  const location = useLocation();
  let {email, redirect} = location.state;
 

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");
    console.log(value);
    let fieldIntIndex = parseInt(fieldIndex);
    let temp = otp + value;
    setOtp(temp);
    if (fieldIntIndex < 6 && e.target.value != "") {
      const nextField = document.querySelector(`input[name=i-${fieldIntIndex + 1}]`);
      if (nextField !== null) {
        nextField.focus();
      }
    }

    if (e.target.value == "")//means backspace is pressed
    {
      setOtp(otp.substring(0, otp.length - 1));
      const prevField = document.querySelector(`input[name=i-${fieldIntIndex - 1}]`)
      if (prevField !== null) {
        prevField.focus();
      }
    }

  }

  const handleSubmit = () => {
    
    let body = {
      otp: otp
    };
    body=JSON.stringify(body);

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios.post('/api/user/verifyOtpForEmail',body,config).then((res)=>{
          if(redirect=="passwordResetAuth"){
            navigate('/passwordResetAuth',{state:{reset:true, resetEmail:email}});
          }
          else
          {
            navigate('/signIn');
          }
    }).catch((err)=>{
        alert('Oops..OTP could not be verified.');
    })



  }

  return (
    <>
      <ParticlesBackground />
      <div className='otpScreen'>
        <div className='otpFormContainer'>
          <p style={{ color: '#f9f6ee', fontSize: '1.4rem' }}>OTP Verfication</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1.6rem', fontSize: '1.1rem' }}>Enter the code received on
            <br />
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{email}</p>
          </p>

          <div className='input_container'>
            <input type="number" className='input_field' maxLength={1} style={{ marginLeft: 0 }} name="i-1"
              onKeyDown={(e) => { if (e.keyCode === 9) e.preventDefault() }}
              onChange={(e) => handleChange(e)} />
            <input type="number" className='input_field' maxLength={1} name="i-2" onChange={(e) => handleChange(e)}
              onKeyDown={(e) => { if (e.keyCode === 9) e.preventDefault() }} />
            <input type="number" className='input_field' maxLength={1} name="i-3" onChange={(e) => handleChange(e)}
              onKeyDown={(e) => { if (e.keyCode === 9) e.preventDefault() }} />
            <input type="number" className='input_field' maxLength={1} name="i-4" onChange={(e) => handleChange(e)}
              onKeyDown={(e) => { if (e.keyCode === 9) e.preventDefault() }} />
            <input type="number" className='input_field' maxLength={1} name="i-5" onChange={(e) => handleChange(e)}
              onKeyDown={(e) => { if (e.keyCode === 9) e.preventDefault() }} />
            <input type="number" className='input_field' maxLength={1} name="i-6" onChange={(e) => handleChange(e)}
              onKeyDown={(e) => { if (e.keyCode === 9) e.preventDefault() }} />
          </div>

          <button className='OTPVerifyButton' onClick={handleSubmit}>Confirm</button>

        </div>
      </div>
    </>
  )
}


import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ParticlesBackground } from './Particles/particlesBackground';
import { auth } from '../../Firebase/connection';
import { HiMail } from 'react-icons/hi';
import './signIn.css';
import './forgotPassword.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import Lottie from 'lottie-react';
import loading_animation from '../../Assets/images/loading_anim.json';
import axios from 'axios';
import { AiOutlineGoogle, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { PasswordTwoTone } from '@mui/icons-material';


export const ForgotPassword = () => {

    const isMobileScreen = window.innerWidth <= 950 ? true : false;

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { reset, resetEmail } = location.state;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const ResetPassword = () => {

        if (email === '') {
            setError(true);
            return;
        }
        setLoading(true);

        let body = {
            email: email,
        }
        body = JSON.stringify(body);

        axios.post('/api/user/forgotPassword', body, config).then((res) => {
            console.log(res);
            setLoading(false);
            navigate('/auth/verifyemail/otp', { state: { email: email, redirect: 'passwordResetAuth' } });
        }).catch((err) => {
            console.log(err);
        })




    }

    const resetPasswordDb = () => {
        
        if (password.length < 6 || password.length > 12) {
            alert('Password either too short or too long');
            return;
        }

        let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (regex.test(password) == false) {
            alert('Password not too strong');
            return;
        }

        let body = {
            email: resetEmail,
            password: password,
        };


        axios.post('/api/user/resetpassword', body, config).then((res) => {
            console.log(res);
            alert('Password reset successfull');
            navigate('/signIn');
        }).catch((err) => {
            alert(err);
        })


    }


     return (
        <main className="main">
            <ParticlesBackground />
            <div className="container" style={{ alignItems: "flex-start" }}>
                <Link to='/' style={{ color: '#fff' }}>
                    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                        <h2 style={{ letterSpacing: '4px' }} className='signinPage_logo'>KALSULTANT</h2>
                    </div>
                </Link>
                {
                    loading ?
                        <div className='loading_container'>
                            <Lottie loop={true} animationData={loading_animation} width={500} height={500} />
                        </div>
                        :
                        <div className='forgot_password_content_container'>
                            <h3>Reset Password</h3>
                            {reset ?
                                <h2>Please provide a new password<label>.</label></h2>
                                :
                                <h2>Please provide your Email Id<label>.</label></h2>}
                            <div className='input_field'>
                                {reset ? <p>Password</p> : <p>Email</p>}
                                {reset ?
                                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    :
                                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                }

                                {reset ?
                                    <>
                                        {showPassword == false ? <AiFillEye style={{ fontSize: '1.2rem', position: 'absolute', color: '#f9f6eedd', left: isMobileScreen ? '87%' : '44%', marginTop: '0.8rem' }} onClick={() => { setShowPassword(true) }} /> : <AiFillEyeInvisible style={{ fontSize: '1.2rem', position: 'absolute', color: '#f9f6eedd', left: isMobileScreen ? '87%' : '44%', marginTop: '0.8rem' }} onClick={() => { setShowPassword(false) }} />}
                                    </>
                                    :
                                    <HiMail style={{ color: '#f9f6ee', position: 'absolute', left: isMobileScreen ? '90%' : '43%', marginTop: '0.8rem', fontSize: '1.2rem' }} />}
                            </div>

                            <div style={{ width: isMobileScreen ? '100%' : '46%', textAlign: 'right', marginTop: '0.3rem' }}>
                                {reset ? <></> : <p style={{ fontSize: '0.8rem', color: '#f9f6eedd', cursor: 'pointer' }} onClick={() => { navigate('/signin') }}>Nevermind, I got it.</p>}
                            </div>
                            <button onClick={reset ? resetPasswordDb : ResetPassword}>{reset ? <label>Confirm</label> : <label>Proceed</label>}</button>
                        </div>
                }
            </div>
        </main>
    )
}

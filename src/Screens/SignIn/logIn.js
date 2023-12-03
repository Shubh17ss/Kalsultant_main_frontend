import React, { useState, useEffect, useContext } from 'react'
import { SessionContext } from '../../Context/SessionContext';
import { useNavigate, Link } from 'react-router-dom';
import './logIn.css';
import { ParticlesBackground } from './Particles/particlesBackground';
import { AiOutlineGoogle, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { FaFacebook } from 'react-icons/fa';
import axios from 'axios';

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup, FacebookAuthProvider,
    createUserWithEmailAndPassword,
    sendEmailVerification, updateProfile
} from 'firebase/auth'
import { auth } from '../../Firebase/connection';

import Lottie from 'lottie-react';
import loading_animation from '../../Assets/images/loading_anim.json';



export const LogIn = () => {

    const isMobileScreen = window.innerWidth < 950 ? true : false;

    const { setName, setEmail, setUserId } = useContext(SessionContext);
    const [signIn, setSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(true);

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setInputEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    
    
    useEffect(()=>{
        let userAuth=localStorage.getItem('userAuth');
        if(userAuth!=null){
            navigate('/');
        }
        setLoading(false);
    },[])
    
    
    const goHome = () => {
        navigate('/');
    }
    const handleForgotPassword = () => {
        navigate('/passwordResetAuth',{state:{reset:false}});
    }
    const googleAuthProvider = new GoogleAuthProvider();
    // Auth Login With Google and facebook
    const handleGoogleSignIn = async () => {

        setLoading(true);
        signInWithPopup(auth, googleAuthProvider).then(function (result) {
            let responseData = result._tokenResponse;
            let name = responseData.fullName;
            let email = responseData.email;

            let body = {
                name: name,
                email: email,
                provider: 'Google'
            }
            body = JSON.stringify(body);
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            axios.post('/api/user/handleproviderauth', body, config).then((res) => {
                 let userObject=res.data
                setUserId(userObject.userId);
                localStorage.setItem("userAuth", userObject.userId);
                localStorage.setItem("userName", userObject.username);
                localStorage.setItem('userEmail', userObject.email);
                setName(userObject.username);
                setEmail(userObject.email);
                navigate('/');

            }).catch((err) => {
                console.log(err);
                alert(err.response.data.error);
            })


            setLoading(false);
        })
            .catch(function (error) {
                console.log(error.message);
                setLoading(false);
                alert(error.message);
            })
    }

    const handleFacebookSignIn = () => {
        alert("Facebook login currently unavailable");
        // setLoading(true);
        // const facebookAuthProvider = new FacebookAuthProvider();
        // signInWithPopup(auth, facebookAuthProvider).then(function (result) {
        //     var user = result.user;
        //     setUserId(user.uid);
        //     localStorage.setItem("userAuth", user.uid);
        //     localStorage.setItem("userName", user.displayName);
        //     localStorage.setItem('userEmail', user.email);
        //     setName(user.displayName);
        //     setEmail(user.email);
        //     navigate('/');  
        //     setLoading(false);
        // }).
        //     catch(function (error) {
        //         console.log(error.message);
        //         setLoading(false);
        //         alert(error.message);
        //     })
    }

    // Auth Login With Google and facebook




    const loginUser = () => {
        setLoading(true);

        //replace this code with code for own server
        let body = {
            email: email,
            password: password,
        }
        body = JSON.stringify(body);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };


        axios.post('/api/user/signin', body, config).then((res) => {
            const authData = res.data.userId;
            localStorage.setItem('userAuth', authData);
            localStorage.setItem('userName', res.data.username);
            localStorage.setItem('userEmail', res.data.email);
            navigate('/');


        }).catch((err) => {
            alert(err.response.data);
            setLoading(false);
        })

    }



    //Create user with name, email and password
    const createUser = () => {
        let fullName = firstName + ' ' + lastName;
        console.log('Code came here');
        setLoading(true);
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let body = { name: fullName, email: email, password: password };
        body = JSON.stringify(body);

        axios.post('/api/user/createUserUsingEmail', body, config).then((response) => {
            setLoading(false);
            navigate('/auth/verifyemail/otp', { state:{email:email, redirect:'signIn'}});
        }).catch((error) => {
            alert('Internal Server Error');
            setLoading(false);
        })

    }


    //Create user with name, email and password

    return (
        <>
            <ParticlesBackground />
            <div className='login_logo' onClick={goHome}>
                <h2>KALSULTANT</h2>
            </div>
            {loading ?
                <div className='loading_container'>
                    <Lottie loop={true} animationData={loading_animation} style={{ height: '12rem' }} />
                </div>
                :
                <div className='login_content_area'>
                    <div className='heading_area'>
                        {signIn ? <h3>Sign In</h3> : <h3>Sign Up</h3>}
                        {signIn ? <h2>Great to have you back<label style={{ fontSize: isMobileScreen ? '2rem' : '2.7rem' }}>.</label></h2> : <h2>Create new account<label style={{ fontSize: '2.7rem' }}>.</label></h2>}
                        {signIn ? <h4>Don't have an account ? <label onClick={() => { setSignIn(false) }}>Create one</label></h4> : <h4>Already A Member ? <label onClick={() => { setSignIn(true) }}>Sign In</label></h4>}
                    </div>
                    <div className='input_area_container'>
                        {
                            signIn == false ?
                                <div className='input_name_area'>
                                    <div className='input_field2'>
                                        <p>First name</p>
                                        <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                                    </div>
                                    <div className='input_field2'>
                                        <p>Last name</p>
                                        <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                                    </div>
                                </div>
                                :
                                <></>
                        }
                        <div className='input_field'>
                            <p>Email</p>
                            <input type="email" value={email} onChange={(e) => { setInputEmail(e.target.value) }} />
                            <HiMail style={{ color: '#fff', position: 'absolute', left: isMobileScreen ? '87%' : '75%', marginTop: '1rem', fontSize: '1.2rem' }} />
                        </div>
                        <div className='input_field'>
                            <p>Password</p>
                            <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            {showPassword == false ? <AiFillEye style={{ fontSize: '1.2rem', position: 'absolute', color: '#f9f6eedd', left: isMobileScreen ? '87%' : '75%', marginTop: '0.8rem' }} onClick={() => { setShowPassword(true) }} /> : <AiFillEyeInvisible style={{ fontSize: '1.2rem', position: 'absolute', color: '#f9f6eedd', left: isMobileScreen ? '87%' : '75%', marginTop: '0.8rem' }} onClick={() => { setShowPassword(false) }} />}
                        </div>
                        {signIn ? <div style={{ width: isMobileScreen ? '100%' : '80%', display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', marginBottom: '1rem' }}>
                            <p onClick={handleForgotPassword} className='forgottenPasswordLink'>Forgotten your password ?</p>
                        </div> : <></>}
                        {!signIn ? <p className='TCLine'>By signing up, you confirm that you have read and agree to
                            our <Link to='/Terms&Conditions' style={{ color: '#6CB4EE', textDecoration: 'underLine' }}>Terms of Use</Link>, <Link to='/PrivacyPolicy' style={{ color: '#6CB4EE', textDecoration: 'underLine' }}>Privacy Policy</Link> and <Link to='/RefundPolicy' style={{ color: '#6CB4EE', textDecoration: 'underLine' }}>Refund Policy</Link>.
                        </p> : <></>}
                        {signIn ? <button onClick={loginUser}><label>Sign In</label></button> : <button onClick={createUser}><label>Create Account</label></button>}
                    </div>
                    <div className='social_logins_container'>
                        {signIn ?
                            <>
                                <button onClick={handleGoogleSignIn} ><AiOutlineGoogle style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} /><label>Login With Google</label></button>
                                <button onClick={handleFacebookSignIn}><FaFacebook style={{ fontSize: '1.4rem', marginRight: '0.5rem' }} /><label>Login With Facebook</label></button>
                            </>
                            :
                            <>
                                <button onClick={handleGoogleSignIn}><AiOutlineGoogle style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} /><label>Create With Google</label></button>
                                <button onClick={handleFacebookSignIn}><FaFacebook style={{ fontSize: '1.4rem', marginRight: '0.5rem' }} /><label>Create With Facebook</label></button>
                            </>
                        }

                    </div>
                </div>
            }

        </>

    )
}


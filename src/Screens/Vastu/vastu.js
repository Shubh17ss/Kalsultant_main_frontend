import React from 'react'
import './vastu.css';
import logo from '../../Assets/images/KalSultant_website_transparent_logo.webp'
import { useNavigate } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai';


export const Vastu = () => {

  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  return (
    <div className='vastu_screen'>
      <div className='vastu_navbar'>
        <img src={logo} alt='/' style={{ width: '36px', height: '36px', cursor: 'pointer' }} onClick={() => { navigate('/') }} />
        <h1 style={{ color: '#fff', fontSize: '1.8rem', cursor: 'pointer', marginTop: '1rem' }} className='user_profile_logo' onClick={() => { navigate('/profile', { state: { isBooked: false } }); }}>{userName != null ? userName.charAt(0) : <AiOutlineUser />}</h1>
      </div>

      <div className='firstSection'>
        <div style={{width:'40%'}}>
          <strong>Shaping Spaces For Prosperity</strong>
        </div>

      </div>

    </div>

  )
}


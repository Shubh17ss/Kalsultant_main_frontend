import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export const Home = ({name}) => {
    
    const navigate=useNavigate();

    return (
        <div className='mb_home_container'>
             <p className='header_para_tag'>Hi, {name}</p>
             <div className='mb_home_info_container'>
                <p>We are currently working on this section...</p>
                <button className='back_button' onClick={()=>{navigate('/')}}>Take me back</button>
             </div>
        </div>
    )
}

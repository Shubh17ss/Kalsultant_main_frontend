import React from 'react';
import './services.css';
import { AiOutlineCheck } from 'react-icons/ai';
import Check from '../../../Assets/images/check_ks1.png'
import { BsArrowRight } from 'react-icons/bs';

export const Services = () => {

  const name = localStorage.getItem('userName');

  const handleGetPatrika = () => {
    alert("We are working on this product, will notify you when it's done :)");
  }

  return (
    <div className='services_container'>
      <div className='inner_container'>
        <div className='left_area'>
          <strong>Astrological analysis, done right</strong>
          <p style={{lineHeight:'1.5rem'}}>KalSultant combines the expertise and experience of the astrologer with
            it's highly advanced software tools to provide you with the best possible explanations
            and remedies in the form of a <label style={{ color: '#fff' }}>Patrikaa</label>.
          </p>
          <div className='points_container'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '0.5rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Analysis of your career</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '0.5rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Analysis of your health</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '0.5rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Analysis of your relationship</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '0.5rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Your favourable color, day, number</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '0.5rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Answers to your questions, if any</p>
            </div>
          </div>
          <button onClick={handleGetPatrika}>Get Patrikaa <BsArrowRight style={{ marginLeft: '0.5rem' }} /></button>
        </div>

        <div className='right_area'>
          <p>{name ? name : 'Above & Beyond'}</p>
        </div>
      </div>
    </div>
  )
}


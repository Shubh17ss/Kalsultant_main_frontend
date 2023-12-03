import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion';
import sample from '../../../Assets/images/astrology_chart.webp';


import './hiw.css';


export const HIW = () => {

  return (
    <div className='hiw_container' id='hiw'>
    
          <motion.strong
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className='reflected_text'
            data-text='Charts that reflect reality.'
          >
            Charts that reflect reality.
          </motion.strong>
          <motion.p
            initial={{y:60,opacity:0}}
            animate={{y:0}}
            whileInView={{opacity:1}}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Whether you'd like to simply look up new career options, or analyze tricky relationships — we got you covered.
          </motion.p>


          <img src={sample} alt='/'/>

          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            style={{marginTop:'8rem'}}
            className='para_under_image'
          >
            These charts depict the effects that each planet has on you.
          </motion.p>


        
    </div>


  )
}


import React, { useState } from 'react'
import { motion } from 'framer-motion'
import KnowYourself from '../../../Assets/images/knowYourself.webp';
import './section2.css';



export const Section2 = () => {
    const isMobileScreen = window.innerWidth < 950 ? true : false;
    return (
        <div className='section2_container'>
            <motion.img src={KnowYourself} alt='/'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 2.5 }} />

            <div className='content_container'>
                <div className='heading_area'>
                    <motion.strong
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 }}>
                        Know
                    </motion.strong>
                    <motion.strong style={{ marginLeft:isMobileScreen?'1rem': '1.8rem' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1 }}>
                        yourself
                    </motion.strong>
                </div>

                <div className='para_area'>
                    <motion.strong
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.2 }}
                    >
                        It's what you would call our manifesto. We truly believe that you can achieve, overcome
                        anything in life, if you <label style={{ color: '#fff' }}>know yourself</label>.
                    </motion.strong>
                </div>
            </div>
        </div>
    )
}


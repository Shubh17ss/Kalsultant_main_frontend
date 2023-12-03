import React, { useState } from 'react'
import { motion } from 'framer-motion';
import './section1.css'

export const Section1 = () => {
 
    const isMobileScreen=window.innerWidth<950?true:false;

    return (
        <div className='section1_container' id='about'>
            <motion.strong
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
            >
                Everything is {isMobileScreen?<br/>:<></>}time bound
            </motion.strong>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}>
                Astrology can provide insights into the best times for starting something new.
            </motion.p>
            <button>Know more</button>
            <motion.strong style={{ marginTop: '6rem' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
            >
                Be it your
            </motion.strong>

            <div className='images_section_container'>

                <motion.div className='each_image_card card1'
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <strong>#LoveLife</strong>
                    </div>
                </motion.div>

                <motion.div className='each_image_card card2'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay:isMobileScreen?0:0.5 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <strong>#AwaitedGoal</strong>
                    </div>
                </motion.div>

                <motion.div className='each_image_card card3'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay:isMobileScreen?0:1}}
                    viewport={{ once: true }}
                >
                    <div>
                        <strong>#HardShips</strong>
                    </div>
                </motion.div>

            </div>

        </div>

    )
}


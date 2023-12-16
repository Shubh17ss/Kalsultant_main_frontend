import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { HeroContainer, HeroBg, VideoBg, HeroContent } from './elements'
import Wallpaper from '../../Assets/images/kal_home_wallpaper_optimised.webp';
import './heroSection.css';
import { SessionContext } from '../../Context/SessionContext';
import { motion } from 'framer-motion';
import BarLoader from 'react-spinners/BarLoader';

export const HeroSection = () => {

    const { imageLoading, setImageLoading } = useContext(SessionContext);
    const [localImage, setLocalImage] = useState(true);
    const isMobileScreen = window.innerWidth <= 950 ? true : false;
    const navigate = useNavigate();
    const userLoggedIn = localStorage.getItem("userName");
    let username;
    if (userLoggedIn) {
        username = userLoggedIn.split(' ');
    }

    useEffect(() => {
        window.scrollTo(0, 0,);
    }, [])




    return (
        <>
            {imageLoading || localImage ?
                <div className='loading_container_home_page'>
                    <h4 style={{ marginBottom: '1rem' }}>Kalsultant.....Consult your way</h4>
                    <BarLoader loading={imageLoading || localImage} height={2} color={'#fff'} speedMultiplier={1} />
                </div>
                :
                <></>
            }
            <HeroContainer>
                <HeroBg>
                    <VideoBg src={Wallpaper} onLoad={() => { setImageLoading(false); setLocalImage(false) }} />
                </HeroBg>
                <HeroContent>
                    <div className='heroSection_Content'>
                        <motion.strong
                            initial={{ opacity: 0 }}
                            animate={{ y: -20 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className='strong1'
                        >
                            The destiny written in stars, {isMobileScreen ? 'awaits your revelation' : ''}
                        </motion.strong>
                        <motion.strong
                            initial={{ opacity: 0 }}
                            animate={{ y: -20 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.8 }}>
                            {isMobileScreen ? '' : 'awaits your revelation.'}
                        </motion.strong>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ y: -20 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: isMobileScreen ? 0.8 : 1.2 }}>
                            "KalSultant charts your path through the Cosmos."
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 1.6 }}
                            onClick={() => { navigate('/book_session') }}
                        >
                            Get Started
                        </motion.button>
                    </div>


                </HeroContent>
            </HeroContainer>
        </>
    )
}
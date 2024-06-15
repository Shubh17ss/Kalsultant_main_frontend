import React, { useContext, useState } from 'react'
import { Navbar } from '../Components/Navbar/navbar'
import { Sidebar } from '../Components/SideBar/sideBar';
import { HeroSection } from '../Components/HeroSection/heroSection';
import { Footer } from '../Components/Footer/footer';
import { Section1 } from '../Components/InfoSection/Section1/section1';
import { Section2 } from '../Components/InfoSection/Section2/section2';
import { HIW } from '../Components/InfoSection/HIW/hiw';
import { Review } from '../Components/InfoSection/Review/review';
import { Services } from '../Components/InfoSection/Services/services';



import { SessionContext } from '../Context/SessionContext';

export const Home = () => {

    const { setArea,imageLoading } = useContext(SessionContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone === 'Asia/Calcutta') {
        setArea('India');
    }

    const isMobileScreen=window.innerWidth<950?true:false;

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            {imageLoading===false?<Navbar toggle={toggle} />:<></>} 
            <HeroSection/>
            <Section1/>
            <Section2/>
            <HIW/>
            {isMobileScreen?  <Review/>:<></>}
            <Services/>
            <Footer />
          

        </>
    )
}


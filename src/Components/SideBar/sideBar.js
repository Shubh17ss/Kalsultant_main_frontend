import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLink2, SideBtnWrap, SidebarRoute } from './elements';

export const Sidebar = ({ isOpen, toggle }) => {

    const navigate = useNavigate();
    const gotoBookSession = () => {
        navigate('/book_session');
        toggle();
    }
    const goToPricing = () => {
        navigate('/pricing');
        toggle();
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink onClick={gotoBookSession}>
                        Book Session
                    </SidebarLink>
                    <SidebarLink to='hiw' onClick={toggle}>
                        How it works
                    </SidebarLink>
                    <SidebarLink onClick={goToPricing}>
                        Pricing
                    </SidebarLink>
                    <SidebarLink2 to='/profile' state={{ isBooked: false }} onClick={toggle}>
                        Profile
                    </SidebarLink2>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}


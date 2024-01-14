import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

import {
    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,
    FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights,
    SocialIcons, SocialIconLink
} from './elements'

import logo from '../../Assets/images/KalSultant_website_transparent_logo.webp';

import { animateScroll as scroll } from 'react-scroll';

export const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop({
            duration: 450
        });
    }
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Blog</FooterLink>
                                <FooterLink to="/RefundPolicy">Refund Policy</FooterLink>
                                <FooterLink to="/PrivacyPolicy">Privacy Policy</FooterLink>
                                <FooterLink to="/Terms&Conditions">Terms & Conditions</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/Contact-us">Contact</FooterLink>
                                <FooterLink to="/Contact-us">Support</FooterLink>
                            </FooterLinkItems>

                        </FooterLinksWrapper>

                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Business</FooterLinkTitle>
                                <FooterLink to="/signin"></FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                <img src={logo} style={{ width: '32px', height: '32px' }} />
                            </SocialLogo>
                            <WebsiteRights>
                                KALSULTANT © {new Date().getFullYear()}
                                &nbsp;
                                All rights reserved.
                            </WebsiteRights>

                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="//www.instagram.com/your_kalsultant/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="//www.twitter.com/kalsultant" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>

                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}


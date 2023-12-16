import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer=styled.footer`

    background-color:#0f0f0f;
    
`;

export const FooterWrap=styled.div`

    padding:48px 24px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;

    @media screen  and (max-width:820px){
        padding:0;
    }
   
`;


export const FooterLinksContainer=styled.div`

    display:flex;
    justify-content:center;
    

    @media screen and (max-width:820px) {

        padding-top:32px;
        width:'100%';

    }
`;

export const FooterLinksWrapper=styled.div`

    display:flex;
 

    @media screen and (max-width: 820px) {
        
        flex-direction:column;
    }
`;

export const FooterLinkItems=styled.div`
    
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:16px;
    text-align:left;
    width:160px;
    box-sizing:border-box;
    color:#fff;

    @media screen and (max-width: 420px){
        
        margin:0;
        padding:10px;
        width:100%;

    }
`;

export const FooterLinkTitle=styled.h1`

    font-size:14px;
    margin-bottom:16px;
`;

export const FooterLink=styled(Link)`

    color:#fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    font-size:14px;
    
    &:hover{
        color:#FFEAB2;
        transition:0.3s ease-out;
    }

`;

export const SocialMedia=styled.section`

    max-width:1000px;
    width:100%;
   
`;

export const SocialMediaWrap=styled.div`

        display:flex;
        justify-content:space-between;
        align-items:center;
        max-width:1100px;
        margin:40px auto 0 auto;
        

        @media screen  and (max-width:820px){

            flex-direction:column;
            width:'100%';
        }

`;

export const SocialLogo=styled(Link)`

    //color:#FFEAB2;
    justify-self:start;
    cursor:pointer;
    text-decoration:none;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-bottom:16px;
    font-weight:bold;
    letter-spacing:4px;
    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
`;

export const WebsiteRights=styled.small`

    color:#fff;
    margin-bottom:16px;

`;

export const SocialIcons=styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    width:240px;
`;

export const SocialIconLink=styled.a`

        color:#fff;
        font-size:24px;
        
`;
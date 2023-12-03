import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`

    background:${({ ScrollNav }) => (ScrollNav ? 'rgba(0,0,0,0.4)' : 'transparent')};
    height:60px;
    margin-top:-80px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index: 10;
    backdrop-filter:blur(20px);
   
    
    
        

    @media screen and (max-width: 960px) {
        
        transition:0.8s ease;
    }

`;

export const NavbarContainer = styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 44px;
    
    

    @media screen and (max-width:760px) {
        
        justify-content:space-between;
        align-items:center;
        padding-right:10px;
        padding-left:10px;
    }
`;

export const NavLogo = styled(LinkR)`

    justify-self:flex-start;
    cursor: pointer;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    letter-spacing:4px;
    margin-left:14px;
    font-weight:bold;
    text-decoration:none;
    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    @media screen and (max-width: 860px){
        font-size:1.2rem;
    }

`;

export const MobileIcon = styled.div`

    display:none;
    @media screen and (max-width: 760px) {
        display:flex;
        font-size:1.8rem;
        cursor:pointer;
        color:white;
    }
`;

export const NavMenu = styled.ul`

    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;

    


    @media screen and (max-width: 760px) {
        display:none
    }

`;

export const NavItem = styled.li`

    height:100%;
    margin-right:20px;

`
export const NavItem2 = styled.li`

    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const NavLinks = styled(LinkS)`

    color:rgba(255,255,255,0.5);
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0  1.2rem;
    height:100%;
    cursor:pointer;
    transition:0.3s ease;
    font-size:0.8rem;

    


     /* &.active {
        border-bottom: 3px solid transparent;
        border-image: linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0));        border-image-slice:1;
                
        }  */

        &:hover{
            color:rgba(255,255,255,1);
        }
        &:active{
            transform:scale(95%);
        }

`;

export const NavLinks2 = styled(LinkR)`

   
    display:flex;
    font-size:0.8rem;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    font-weight:bolder;
    cursor:pointer;
    transition:0.3s ease-in-out;
    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

  
    
     
`;

export const NavLinks3 = styled(LinkR)`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    
`;


export const NavBtn = styled.nav`

    display:'flex';
    justify-content:'center';
    align-items:'center';
    background-color:transparent;
    height:36px;
    border:2px solid rgba(255,255,255,0.1);
    width:7%;
    border-radius:0.6rem;
    transition:0.3s ease;
    

    @media screen and (max-width: 760px) {
        display:none;
    }

    &:hover{
        border:2px solid rgba(255,255,255,0.4);
    }

`;

export const NavBtnLink = styled(LinkR)`

    border-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    padding:10px  22px;
    color:#010606;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    margin:10px;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
        
    }
`;

export const Button = styled.button`
    border-radius:50px;
    background:#FFEAB2;
    white-space:nowrap;
    padding:10px  22px;
    color:#010606;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    margin:10px;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
        
    }
`;
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(LinkR)`

    border-radius:50px;
    background:${({ primary }) => (primary ? '#FFEAB2' : '#010606')} ;
    white-space:nowrap;
    padding:${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color:${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size:${({ fontBig }) => (fontBig ? '20px' : '16px')};
    font-family: 'Libre Baskerville', serif;
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.2s  ease-in-out;


    &:hover{
        transition:all 0.3s ease-in-out;
        background:${({ primary }) => (primary ? '#fff' : '#FFEAB2')} ;
    }
`;

export const Button2 = styled(LinkR)`

     appearance: none;
     /* background: linear-gradient(to right, #d9a7c7, #fffcdc); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
     border: 2px solid #1A1A1A;
    border-radius: 15px;
    box-sizing: border-box;
    color: #171A20;
    cursor: pointer;
    font-family: 'Libre Baskerville', serif;
    font-size:18px;
    font-weight:500;
    margin: 0;
    max-height:70px;
    outline: none;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    touch-action: manipulation;
    width: 100%;
    will-change: transform;
    


    &:hover{
       box-shadow: rgba(255, 255, 255, 0.25) 0 8px 15px;
       transform: translateY(-2px);
       
    }
    &:active{
        box-shadow: none;
        transform: scale(95%);
    }
`; 
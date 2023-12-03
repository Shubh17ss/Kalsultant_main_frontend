import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './checkout.css';

export const Checkout = () => {

    const location = useLocation();
    const sessionId = location.state == null ? null : location.state.sessionId;
    const navigate = useNavigate();
    console.log('Session Id in checkout js ', sessionId);


    //   useEffect(()=>{
    //         if(location.state==null)
    //         navigate('/');
    //   },[])



    return (
        <div>
            Checkout
        </div>
    )
}


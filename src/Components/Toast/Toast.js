import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';


export const SuccessToast=()=>{
    return(
        <ToastContainer toastStyle={{backgroundColor:'#0f0f0f',color:'#f9f6ee'}}/>
    )
}

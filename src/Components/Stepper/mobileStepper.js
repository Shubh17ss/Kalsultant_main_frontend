import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { PersonalDetails } from './personalDetails';
import { SessionDetails2 } from './sessionDetails2';
import { ConfirmDetails } from './confirmDetails';
import { SessionContext } from '../../Context/SessionContext';
import Lottie from 'lottie-react';
import loading_animation from '../../Assets/images/loading_anim.json';
import './stepper.css';

const steps = [
    {
        label: 'Personal Details',
        description: <PersonalDetails />,
    },
    {
        label: 'Schedule Session',
        description: <SessionDetails2 />,
    },
    {
        label: 'Book & Pay',
        description: <ConfirmDetails />,
    },

];

export const MobileStepperForm = () => {
    const theme = useTheme();
    const { activeStep, loading } = useContext(SessionContext);
    const maxSteps = steps.length;

    return (
        <>
        {
        loading?
            <div className='loading_container' style={{border:'none'}}>
              <h5 style={{color:'#f9f6ee',fontSize:'1rem',fontWeight:'lighter'}}>Checking session availability...</h5>
                < Lottie loop={true} animationData={loading_animation} style={{width:'170px',height:'170px'}}/>
            </div >
            :
            <Box sx={{ width: '100%', flexGrow: 1, boxShadow: 2, borderRadius: '16px', marginBottom: 3,backgroundColor:'transparent',fontFamily: 'Libre Baskerville, serif'  }}>
            {/* <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'transparent',
                    color:'rgba(255,255,255,0.3)'
                }}
            >
                <Typography sx={{ fontWeight: 'light', fontSize: '20px',fontFamily: 'Libre Baskerville, serif' }}>{steps[activeStep].label}</Typography>
            </Paper> */}
            <Box sx={{ height: 'fit-content', width: '100%', }}>
                {steps[activeStep].description}
            </Box>
    
        </Box>
        }
     
        </>
   
    );
}
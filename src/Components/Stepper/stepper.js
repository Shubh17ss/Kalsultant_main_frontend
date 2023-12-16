import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { PersonalDetails } from './personalDetails';
import { SessionDetails2 } from './sessionDetails2';
import { ConfirmDetails } from './confirmDetails';
import { SessionContext } from '../../Context/SessionContext';
import Lottie from 'lottie-react';
import loading_animation from '../../Assets/images/loading_anim.json';
import './stepper.css';
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const steps = ['Personal Details', 'Schedule Session', 'Book Session'];


export const StepperForm = () => {

  const { activeStep, loading } = useContext(SessionContext);
  const theme = createTheme({
    typography: {
      fontFamily: 'Libre Baskerville, serif',
    },
    palette:{
      primary:{
        main:'#000'
      }
    }
    
  })


  return (
    <div style={{width:'80%', height:'100vh',marginTop:'3rem',overflow:'hidden'}}>
      {loading ?
        <div className='loading_container' style={{border:'none'}}>
          <h5 style={{color:'#f9f6ee',fontSize:'1rem'}}>Checking session availability...</h5>
          <Lottie loop={true} animationData={loading_animation} width={500} height={500} />
        </div>
        :


        <Box sx={{ minWidth: '80%', boxShadow: 2,height:'fitContent' ,borderRadius: '16px', backgroundColor: 'transparent', fontFamily: 'Libre Baskerville, serif'}} mt={2} p={4}>
          <Stepper activeStep={activeStep} >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}
                  sx={{
                    '& .MuiStepLabel-label.Mui-disabled':{
                      color:'rgba(255,255,255,0.2)'
                    },
                    '& .MuiStepLabel-root .Mui-completed': {
                      color: 'white', // circle color (COMPLETED)
                    },
                    '& .MuiStepLabel-root .Mui-active': {
                      color: 'rgba(255,255,255,0.4)', // circle color (ACTIVE)
                    },
                    '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                      fill: '#fff', // circle's number (ACTIVE)
                    },
                  }}

                >
                  <ThemeProvider theme={theme}>
                    <StepLabel {...labelProps} >{label}</StepLabel>
                  </ThemeProvider>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 ? <PersonalDetails /> : activeStep === 1 ? <SessionDetails2 /> : activeStep === 2 ? <ConfirmDetails /> : <></>}

            </React.Fragment>
          )}
        </Box>

      }
    </div>

  );
}
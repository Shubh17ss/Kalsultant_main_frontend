import React,{useState} from 'react'
import './Account.css'
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PublicIcon from '@mui/icons-material/Public';
import { TextField, FormControl, InputLabel, Select, MenuItem, ThemeProvider, createTheme } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

export const Account = ({ username }) => {
    const isMobileScreen = false;
    const e1 = false;
    const theme = createTheme({
        components: {
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        fontSize: "0.7em",
                        fontWeight: '600',
                        color: "#fff",
                        backgroundColor: "#171A20",
                        borderRadius: '7px',
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                    },
                    arrow: {
                        color: '#318CE7',

                    }
                }
            }
        }
    });
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const current_year = new Date().getFullYear();
    const years=120;

    return (
        <div className='account_info_container'>
            <h3>Hi, {username}</h3>
        </div>
    )
}

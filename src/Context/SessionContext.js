import { useState, createContext } from 'react';

export const SessionContext = createContext();


export const SessionProvider = ({ children }) => {
   
   

    const [activeStep, setActiveStep] = useState(0);
    const [userId, setUserId] = useState('');
    const [name, setName]=useState();
    const [email, setEmail] = useState('');
    const [day, setDay] = useState('');
    const [days, setDays] = useState(0);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');
    const [ampm, setAmpm] = useState('');
    const [gender, setGender] = useState('');
    const [countryContext, setcountryContext] = useState('');
    const [stateContext, setstateContext] = useState('');
    const [cityContext, setcityContext] = useState('');
    const [selectedSession, setSelectedSession]=useState(-1);
    const [sessionDate, setSessionDate] = useState();
    const [sessionTime, setSessionTime] = useState();
    const [paymentStatus, setPaymentStatus] = useState(false);
    const [paymentId, setPaymentId] = useState('');
    const [globalStates, setGlobalStates] = useState([]);
    const [globalCities, setGlobalCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [dialogue, setDialogue] = useState(false);
    const [area, setArea] = useState('');
    const [userSessions,setUserSessions]=useState([]);
    const [timeSlots,setTimeSlots]=useState([]);
    const [imageLoading, setImageLoading]=useState(true);
    const [contactNumber, setContactNumber]=useState("");

    return (
        <SessionContext.Provider
            value={{
                activeStep,
                userId,
                name,
                email,
                day,
                days,
                month,
                year,
                hour,
                minutes,
                ampm,
                gender,
                countryContext,
                stateContext,
                cityContext,
                area, setArea,
                dialogue, setDialogue,
                error, setError,
                globalStates, globalCities,
                loading, setLoading,
                setGlobalStates, setGlobalCities,
                selectedSession, setSelectedSession,
                sessionDate,
                sessionTime,
                paymentStatus,
                paymentId,
                setActiveStep,
                setUserId,
                setName,
                setEmail,
                setDay,
                setDays,
                setMonth,
                setYear,
                setHour,
                setMinutes,
                setAmpm,
                setGender,
                setcountryContext,
                setstateContext,
                setcityContext,
                setSessionDate,
                setSessionTime,
                setPaymentStatus,
                setPaymentId,
                userSessions,setUserSessions,
                timeSlots, setTimeSlots,
                imageLoading,setImageLoading,
                contactNumber,setContactNumber
            }}
        >
            {children}
        </SessionContext.Provider>
    )
}




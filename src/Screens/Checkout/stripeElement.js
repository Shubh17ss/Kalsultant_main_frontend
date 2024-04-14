import React, {useState} from 'react'
import { PaymentElement, useStripe, useElements} from '@stripe/react-stripe-js';




export const StripeElement = () => {
    
    const stripe=useStripe();
    const elements=useElements();
    const [errorMessage, setErrorMessage]=useState(null);

    const handleSubmit= async (event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const {error}=await stripe.confirmPayment({
            elements,
            confirmParams:{
                return_url:'https://kalsultant.com/'
            }
        });

        if(error){
            setErrorMessage(error.message);
        }
        else{
            //the customer will be redirected to the specified url on line 21
        }

    }

    return (
        <form>
            <PaymentElement />
            <button disabled={!stripe} onClick={handleSubmit} className='payment_button_stripe'>Pay Now</button>
        </form>

    )
}


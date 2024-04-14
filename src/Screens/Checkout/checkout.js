import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './checkout.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StripeElement } from './stripeElement';

const stripePromise = loadStripe('pk_test_51KRCZgSHIWJCaDoU3ak1Gv3ZSPqvMtN6qD1dfGDr3mtjcsXam4pN2EEfq28vp7fRfqOIovUVbyJ4aHeBalH8Eb7g00ttrrnSBN');




export const Checkout = () => {

    const [options, setOptions] = useState(null);
    useEffect(() => {
        console.log('useEffect is called');
        axios.get('/api/payment/createIntent').then((res) => {
            console.log(res.data.client_secret);
            let tempOptions = {
                clientSecret: res.data.client_secret,
                appearance: {
                    theme: 'night',
                    variables: {
                        colorPrimary: '#0570de',
                        colorBackground: '#ffffff',
                        colorText: '#f9f6ee',
                        colorDanger: '#df1b41',
                        fontFamily: 'Libre Baskerville, sans-serif',
                        spacingUnit: '4px',
                        borderRadius: '4px',
                        gridColumnSpacing: '25px',
                        gridRowSpacing: '4px',
                        // See all possible variables below
                    },
                    rules: {
                        '.Tab': {
                            color: 'crimson'
                        },
                        '.Input': {
                            color: '#000'
                        },

                    }

                },

            }
            setOptions(tempOptions);


        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (options == null ? <></> : <div className='stripeFormContainer'>
        <Elements stripe={stripePromise} options={options}>
            <StripeElement />
        </Elements>
    </div>
    )
}


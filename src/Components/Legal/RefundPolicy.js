import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Kalsultant_logo from '../../Assets/images/kalsultant_icon_small.webp'
import { AiOutlineClose } from 'react-icons/ai';
import { BsJournalArrowUp } from 'react-icons/bs';
import './style.css';

export const RefundPolicy = () => {
    const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);
    
    const data=[
        {
            heading:'BANK ACCOUNT INFORMATION',
            content:'The User is under an obligation to provide his banking information as and when required. For that purpose, the obligation of the User are:-',
            content2:'The User may pay the fees required, to the Website by using a debit/credit card or through online banking account. The User warrants, agrees and confirms that when he/ she initiates a payment transaction and/or issues an online payment instruction and provides his/ her card / bank details:',
            content3:'The User is fully and lawfully entitled to use such credit / debit card, bank account for such transactions. The User is responsible to ensure that the card/ bank account details provided by him/ her are accurate.',
            content4:'The User is responsible to ensure sufficient credit is available on the nominated card/ bank account at the time of making the payment to permit the payment of the dues payable or the bill(s) selected by the User inclusive of the applicable Fee.',
            content5:'The User further agrees that if any part of these Terms of Usage are determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth herein, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of these Terms of Usage shall continue in effect.',
            content6:'',
            content7:'',
            content8:'',
            content9:'',
            content10:'',
            content11:'',
            content12:'',
        },
        {
            heading:'DELIVERY, CANCELLATION AND REFUND',
            content:'No refund shall be processed on the order of any reports or any cancelled session under any circumstances if the order has reached the “processing” (Assigned to an Astrologer) stage. The risk and liability of placing order in a haste and careless manner totally lies with the User and the Website is not responsible for any refund once the processing stage has started.',
            content2:'No refund shall be processed once the Order has been placed and executed. However, if the User intends to cancel a successfully scheduled session before execution, the User is required to contact the customer care team within 1 (one) hour of making the payment, whereafter it is totally at the discretion of the Website whether to issue refund.',
            content3:'No refund shall be processed for the reason that in-correct information or data has been provided by You. The User agrees to be careful while providing any information to the Website and must re-check the information filled before clicking on “Submit”. The User can request for change in the in-correct information or data entered provided, the request for such change has been made with the customer care within 1 (one hour) of execution of the service rendered by the service provider.',
            content4:'The services offered are strictly not meant to replace any philosophical, emotional or medical treatment. The Website holds no responsibility or liability about the reality or reliability of the astrological effects on the human physiology, The User is advised to exercise discretion in such case and no refund shall be issued on such grounds.',
            content5:'The refunds, if any, shall be processed after deduction of the transaction charges levied by the Bank and/or the Payment Gateway, to & from cost of the shipping and/or courier charges (With regard to purchase of a product listed on the Website), customs duty (if levied) and/or any other charges that may have been incurred by the Website during processing and/or delivering the service, as applicable.',
            content6:'In case the Website or Payment gateway’s webpage, that is linked to the Website, is experiencing any server related issues like ‘slow down’ or ‘failure’ or ‘session timeout’, the User shall, before initiating the second payment, check whether his/her Bank Account has been debited or not and accordingly resort to one of the following options: In case the Bank Account appears to be debited, ensure that you do not make the payment twice and immediately thereafter contact the Website via customer care to confirm payment. In case the Bank Account is not debited, the User may initiate a fresh transaction to make payment.',
            content7:'However, refund for multiple payment, if any, even after the above precaution against the same order shall be refunded in full without deduction of the transaction charges as mentioned above. The Website shall only retain the cost of one single order as intended to be placed by the User.',
            content8:'If there are sessions that the Website is unable to accept and must cancel, the Website at its sole discretion, reserves the right to refuse or cancel any order for any reason whatsoever. Some situations may result in the order being cancelled and include, without limitation, non-availability of the service, inaccuracy, error in pricing information or other problems as identified. If the User’s session is cancelled after charges being paid against the said service, the said amount paid for booking shall be refunded or the User may be asked to reschedule for another time.',
            content9:'By requesting for refund, user is agreeing to provide Kalsultant’s quality audit team permission to access the chat/call recording of the consultation for which refund has been requested, in order to determine whether the case is eligible for refund or not.',
            content10:'Note: All refunds will be credited to user’s bank account through which the payment was made.',
            content11:'Refunds will only be considered in the following cases: Network issue due to which session was affected in between or there was a weak signal, background noise, inaudible consultant etc during the video/normal call sessions . Consultant is taking inordinately long enough to respond back to the user',
            content12:'Please Note: No refund will be given in case of lack of accuracy of any consultation. Kalsultant takes no responsibility for factual accuracy on any consultations.'

        }
    ]
    
    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', () => {
            //console.log('Scrolling');
            if (window.scrollY > 700)
                setScroll(true);
            else if (window.scrollY <= 700)
                setScroll(false);
        })
    }, []);

    const takeToTop = () => {
        window.scrollTo(0, 0);
    }

  
    return (

   <div className='legal_container'>
            <div className='legal_navbar'>
                <img src={Kalsultant_logo} alt='/' />
                <AiOutlineClose style={{ fontSize: '32px', cursor: 'pointer' }} onClick={() => { navigate('/'); }} />
            </div>
            <div className='legal_content_area'>
                <strong>Cancellation & Refund Policy Statement.</strong>

                <p style={{ marginTop: '2.5rem' }}>
                    This privacy policy statement describes how Kalsultant USA LLC referred to as ‘Kalsultant’ or
                    ‘Kalsultant LLC’ or ‘we’ or ‘website’collect, maintains, uses and shares the information collected
                    from its users.
                </p>

                {data.map((item, index) => (
                    <div className='each_content_section'>
                        <h2>{index + 1}. {item.heading}</h2>
                        <p>{item.content}</p>
                        {item.content2.length > 0 ?
                            <p>{item.content2}</p>
                            :
                            <></>}
                        {item.content3.length > 0 ?
                            <p>{item.content3}</p>
                            :
                            <></>
                        }
                        {item.content4.length > 0 ?
                            <p>{item.content4}</p>
                            :
                            <></>
                        }
                        {item.content5.length > 0 ?
                            <p>{item.content5}</p>
                            :
                            <></>
                        }
                        {item.content6.length > 0 ?
                            <p>{item.content6}</p>
                            :
                            <></>
                        }
                         {item.content7.length > 0 ?
                            <p>{item.content7}</p>
                            :
                            <></>
                        }
                         {item.content8.length > 0 ?
                            <p>{item.content8}</p>
                            :
                            <></>
                        }
                         {item.content9.length > 0 ?
                            <p>{item.content9}</p>
                            :
                            <></>
                        }
                         {item.content10.length > 0 ?
                            <p>{item.content10}</p>
                            :
                            <></>
                        }
                         {item.content11.length > 0 ?
                            <p>{item.content11}</p>
                            :
                            <></>
                        }
                         {item.content12.length > 0 ?
                            <p>{item.content12}</p>
                            :
                            <></>
                        }


                    </div>
                ))}

            </div>

            <strong>KALSULTANT © 2023  All rights reserved.</strong>
            <BsJournalArrowUp
                style={{
                    position: 'fixed',
                    bottom: 40,
                    right: 40,
                    fontSize: '28px',
                    cursor: 'pointer',
                    opacity: scroll ? 1 : 0,
                    color: '#131722'
                }}

                onClick={takeToTop}
            />
        </div>
  )
}


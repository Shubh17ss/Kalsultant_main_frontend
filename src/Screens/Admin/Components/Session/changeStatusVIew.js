import React, { useEffect } from 'react'
import './changeStatusView.css';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';

export const ChangeStatusView = (props) => {

  console.log(props);
  const closeModal = () => {
    let setShowChangeStatusView = props.data[1];
    setShowChangeStatusView(-1);
  }

  const handleEscapeKeyPress = (event) => {
    if (event.key == "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKeyPress, false);

  }, [])

  const changeStatus = (status) => {

    let body = {
      JWT: props.data[2],
      id: props.data[0].id,
      status: status,

    }

    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios.put('/api/session/updateSessionStatus', body, config).then((response) => {
      closeModal();
    }).catch((error) => {
      alert(error);
    })
  }



  return (
    <div className='changeStatusView'>
      <AiOutlineClose className='closeIcon' onClick={closeModal} />
      <p style={{ color: '#f9f6ee', fontSize: '16px' }}>Change {props.data[0].firstname}'s session status to</p>
      <div>
        <button onClick={() => changeStatus('Scheduled')}>Scheduled</button>
        <button onClick={() => changeStatus('Cancelled')}>Cancelled</button>
        <button onClick={() => changeStatus('Completed')}>Completed</button>
      </div>
    </div>
  )
}


import React from 'react'
import './Loader.css'
import { BarLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <div className='loading'>
    </div>
  )
}

export const SmallLoader = () => {
  return (
    <div className='loading_small'>

    </div>
  )
}

export const CustomBarLoader = () => {
  return (
    <div  className='barLoaderContainer'>
      <p style={{color:'rgba(255,255,255,0.8)',marginBottom:'1rem'}}>Loading Content</p>
      <BarLoader loading={true} height={2} color={'#fff'} speedMultiplier={1} />
    </div>
  )
}


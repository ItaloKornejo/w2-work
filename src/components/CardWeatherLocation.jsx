import React, { useEffect, useState } from 'react'

const CardWeatherLocation = ({weatherCondition}) => {

  const [gradient,setGradient] = useState()
  
  const backgorundGradient = {
    backgroundImage: gradient
  }

  useEffect(()=>{
    if(weatherCondition){
      setGradient(weatherCondition[1][1])
    }
    }
  ,[weatherCondition])

  return (
    <div className="location-container">
      <button className="location-button" style={backgorundGradient}>
        <i data-feather="map-pin"></i>
        <span>Change Location</span>
      </button>
    </div>
  )
}

export default CardWeatherLocation
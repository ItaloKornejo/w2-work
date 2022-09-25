import React, { useState } from 'react'
import CardWeatherSide from './CardWeatherSide'
import CardWeatherInfo from './CardWeatherInfo'

const CardWeather = ({weather,weatherWeek,weatherCondition}) => {
  const [isCelcius,setIsCelcius] = useState(true)
  const handleScale = () => setIsCelcius(!isCelcius)
  

  return (
    <div className="container">
        <CardWeatherSide 
          weather={weather}
          isCelcius={isCelcius}
          handleScale={handleScale}
          weatherCondition={weatherCondition}
        />
        <CardWeatherInfo
         weather={weather}
         weatherWeek={weatherWeek}
         isCelcius={isCelcius}
         weatherCondition={weatherCondition}
        />
    </div>
  )
}

export default CardWeather
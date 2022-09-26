import React from 'react'
import CardWeatherInfoToday from './CardWeatherInfoToday'
import CardWeatherLocation from './CardWeatherLocation'
import CardWeatherWeek from './CardWeatherWeek'

const CardWeatherInfo = ({weather,weatherWeek,isCelcius,weatherCondition,setNewCoords}) => {
  return (
    <div className='info-side'>
      <CardWeatherInfoToday
        weather={weather}
      />
      <CardWeatherWeek
        weatherWeek={weatherWeek}
        isCelcius={isCelcius}
      />
      <CardWeatherLocation
        weatherCondition={weatherCondition}
        setNewCoords={setNewCoords}
      />
    </div>
  )
}

export default CardWeatherInfo
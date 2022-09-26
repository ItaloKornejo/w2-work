import React, { useEffect, useState } from 'react'

const CardWeatherInfoToday = ({weather}) => {

const [wind,setWind] = useState()

useEffect(()=>{
  if(weather){
    const cardinals = {
      North:[335,360],
      NortH:[0,20],
      Northeast:[20,65],
      East:[65,110],
      Southeast:[110,155],
      South:[155,200],
      Southwest:[200,245],
      West:[245,290],
      Northwest:[290,335],
    }
    const wind={}
    for (const cardinal in cardinals) {
      if(weather.wind.deg>cardinals[cardinal][0] && weather.wind.deg<cardinals[cardinal][1])
      wind.direction=cardinal
    }
    wind.speed=((weather.wind.speed*36)/10).toFixed(1)
    console.log( weather.wind.deg,wind);
    setWind(wind)
  }
},[weather])

  return (
    <div className='today-info-container'>
      <div className="today-info">
          <div className="humidity">
            <span className="title">HUMIDITY</span>
            <span className="value">{weather?.main.humidity} %</span>
            <div className="clear"></div>
          </div>
          <div className="wind">
            <span className="title">WIND SPEED</span>
            <span className="value">{wind?.speed} km/h</span>
            <div className="clear"></div>
          </div>
          <div className="precipitation">
            <span className="title">WIND DIRECTION</span>
            <span className="value">{wind?.direction}</span>
            <div className="clear"></div>
          </div>
        </div>

    </div>
  )
}

export default CardWeatherInfoToday
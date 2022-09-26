import React, { useEffect, useState } from 'react'

const CardWeatherSide = ({weather,isCelcius,handleScale,weatherCondition}) => {

  const [weatherInfo,setWeatherInfo] = useState()
  const [currentWeatherCondition,setCurrentWeatherCondition] = useState()
  const [gradient,setGradient] = useState()

  const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


  const backgorundSide = {
    backgroundImage: currentWeatherCondition
  }

  const backgorundGradient = {
    backgroundImage: gradient
  }
  
  useEffect(()=>{
    if(weather){
    const info={
      celcius:(weather.main.temp-273.15).toFixed(0)+'°C',
      farenheit: (1.8*(weather.main.temp-273) + 32).toFixed(0)+'°F',
      dayCurrent: dayName[(new Date(weather.dt*1000)).getDay()],
      dateCurrent: new Date(weather.dt*1000).toString().slice(4,15),
      icon: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
      }
      setWeatherInfo(info)
    }
  },[weather])

  useEffect(()=>{
    if(weatherCondition){
      setCurrentWeatherCondition(weatherCondition[0][1])
      setGradient(weatherCondition[1][1])
    }
    }
  ,[weatherCondition])

  const handleOnChange = () => {
    handleScale()
    console.log('Scale from Side on Handle: ',isCelcius)
  };

  console.log(weatherCondition)

  return (
    <div className='weather-side' style={backgorundSide} >
      <div className="weather-gradient" style={backgorundGradient}></div>
      <div className="date-container">
        <h2 className="date-dayname">{weatherInfo?.dayCurrent}</h2>
        <span className="date-day">{weatherInfo?.dateCurrent}</span>
        <i className="location-icon" data-feather="map-pin">
        </i><span className="location">{weather?.name}, {weather?.sys.country}</span>
      </div>
      <div className="weather-big_icon" ><img src={weatherInfo?.icon}  /></div>
      <div className="weather-container">
        <i className="weather-icon" data-feather="sun"></i>
        <h1 className="weather-temp">{isCelcius ? weatherInfo?.celcius : weatherInfo?.farenheit}</h1>
        <h3 className="weather-desc">{weather?.weather[0].main}</h3>
      </div>
      <div className="switch-toggle">
                <input type="checkbox" id="scale" checked={!isCelcius} onChange={handleOnChange}/>
                <label htmlFor="scale"></label>
      </div>

    </div>
  )
}

export default CardWeatherSide
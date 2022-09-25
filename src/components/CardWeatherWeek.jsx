import React, { useEffect, useState } from 'react'

const CardWeatherWeek = ({weatherWeek,isCelcius}) => {

  const [weeklyWeather,setWeeklyWeather] = useState(0)

  useEffect(()=>{
    if(weatherWeek){
      const tempWeek = weatherWeek.list.filter(time => time.dt_txt.slice(11,16) == '12:00')
      const days=[]
      for (const day of tempWeek) {
        days.push({
          icon : `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png `,
          day : (new Date(day.dt_txt)).toDateString().slice(0,3),
          celsius : (day.main.temp-273.15).toFixed(0)+'°C',
          Fahrenheit : (1.8*(day.main.temp-273) + 32).toFixed(0)+'°F'
        })
      }  
      console.log(days)
      setWeeklyWeather(days)
    }
  },[weatherWeek])

console.log('from week is celcius; ', isCelcius);
  return (
    <div className="week-container">
      <ul className="week-list">
          <li className="active">
            <img src={weeklyWeather[0]?.icon} />
            <span className="day-name">{weeklyWeather[0]?.day}</span>
            <span className="day-temp">{isCelcius ? weeklyWeather[0]?.celsius : weeklyWeather[0]?.Fahrenheit}</span>
          </li>
          <li>
          <img src={weeklyWeather[1]?.icon} />
            <span className="day-name">{weeklyWeather[1]?.day}</span>
            <span className="day-temp">{isCelcius ? weeklyWeather[1]?.celsius : weeklyWeather[1]?.Fahrenheit}</span>
          </li>
          <li>
          <img src={weeklyWeather[2]?.icon} />
            <span className="day-name">{weeklyWeather[2]?.day}</span>
            <span className="day-temp">{isCelcius ? weeklyWeather[2]?.celsius : weeklyWeather[2]?.Fahrenheit}</span>
          </li>
          <li>
          <img src={weeklyWeather[3]?.icon} />
            <span className="day-name">{weeklyWeather[3]?.day}</span>
            <span className="day-temp">{isCelcius ? weeklyWeather[3]?.celsius : weeklyWeather[3]?.Fahrenheit}</span>
          </li>
          <div className="clear"></div>
        </ul>
    </div>
  )
}

export default CardWeatherWeek
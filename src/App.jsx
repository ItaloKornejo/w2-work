import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardWeather from './components/CardWeather'
import Github from './components/Github'

function App() {

  const [coords, setCoords] = useState()
  const [newCoords,setNewCoords] = useState()
  const [weather,setWeather] = useState()
  const [country,setCountry] = useState()
  const [weatherWeek,setWeatherWeek] = useState()
  const [weatherCondition,setWeatherCondition] = useState()

  const APIKEY='7c86c50ce13ad7f4790c616e1331c17c'

  const weatherTime = [
    {'01d': `url(${'../../public/1_clearsky.jpg'})`,'01n': `url(${'../../public/1_clearsky.jpg'})`, gradientd : 'var(--gradient1)',gradientn : 'var(--gradient1)'},
    {'02d': `url(${'../../public/2_fewclouds.jpg'})`,'02n': `url(${'../../public/2_fewclouds.jpg'})`, gradientd : 'var(--gradient2)',gradientn : 'var(--gradient2)'},
    {'03d': `url(${'../../public/3_scatteredclouds.jpg'})`,'03n': `url(${'../../public/3_scatteredclouds.jpg'})`, gradientd : 'var(--gradient2)',gradientn : 'var(--gradient2)'},
    {'04d': `url(${'../../public/4_brokenclouds.jpg'})`, '04n': `url(${'../../public/4_brokenclouds.jpg'})`, gradientd : 'var(--gradient3)',gradientn : 'var(--gradient3)'},
    {'09d': `url(${'../../public/5_showerrain.jpg'})`,'09n': `url(${'../../public/5_showerrain.jpg'})`, gradientd : 'var(--gradient4)',gradientn : 'var(--gradient4)'},
    {'10d': `url(${'../../public/6_rain.jpg'})`,'10n': `url(${'../../public/6_rain.jpg'})`, gradientd : 'var(--gradient5)',gradientn : 'var(--gradient5)'},
    {'11d': `url(${'../../public/7_snow.jpg'})`,'11n': `url(${'../../public/7_snow.jpg'})`, gradientd : 'var(--gradient6)',gradientn : 'var(--gradient6)'},
    {'13d': `url(${'../../public/8_mist.jpg'})`, '13n': `url(${'../../public/8_mist.jpg'})`, gradientd : 'var(--gradient7)',gradientn : 'var(--gradient7)'},
    {'50d': `url(${'../../public/9_storm.jpg'})`, '50n': `url(${'../../public/9_storm.jpg'})`, gradientd : 'var(--gradient8)',gradientn : 'var(--gradient8)'},
  ]

  useEffect(()=>{
    if(newCoords){
      const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${newCoords.lat}&lon=${newCoords.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => setWeather(res.data) )
        .catch(err => console.log(err))
      
      const NURL=`https://api.openweathermap.org/data/2.5/forecast?lat=${newCoords.lat}&lon=${newCoords.lon}&appid=${APIKEY}`
      axios.get(NURL)
        .then(res => setWeatherWeek(res.data) )
        .catch(err => console.log(err))
    }

  },[newCoords])

useEffect(()=>{
  const success = (pos) => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(obj)
  }
  navigator.geolocation.getCurrentPosition(success)
},[])


useEffect(()=>{
  if(weather){
    const currentCondition = weatherTime.filter(item => Object.keys(item)[0]==weather.weather[0].icon || Object.keys(item)[1]==weather.weather[0].icon)
    const ccArray = Object.entries(currentCondition[0]);
    const currentConditionDay = ccArray.filter(([key, value]) =>  key[key.length-1] == 'd');
    setWeatherCondition(currentConditionDay)
  }
},[weather])

useEffect(()=>{
  if(coords){
    const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(URL)
      .then(res => setWeather(res.data) )
      .catch(err => console.log(err))

    const NURL=`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(NURL)
        .then(res => setWeatherWeek(res.data) )
        .catch(err => console.log(err))
  }
},[coords])

// useEffect(()=>{
//   if(coords){
//     const URL=`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
//     axios.get(URL)
//       .then(res => setWeatherWeek(res.data) )
//       .catch(err => console.log(err))
//   }
// },[coords])

console.log('>>>> ',newCoords);

return (
    <div className="App">
      <CardWeather 
        weather={weather}
        weatherWeek={weatherWeek}
        weatherCondition={weatherCondition}
        setNewCoords={setNewCoords}
      />
      <Github/>
    </div>
  )
}

export default App

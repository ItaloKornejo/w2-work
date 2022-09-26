import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardWeather from './components/CardWeather'
import Github from './components/Github'
import Loading from './components/Loading'

function App() {

  const [coords, setCoords] = useState()
  const [newCoords,setNewCoords] = useState()
  const [weather,setWeather] = useState()
  const [loader,setLoader] = useState()
  const [weatherWeek,setWeatherWeek] = useState()
  const [weatherCondition,setWeatherCondition] = useState()

  const APIKEY='7c86c50ce13ad7f4790c616e1331c17c'

  const weatherTime = [
    {'01d': `url(${'/1_clearsky.jpg'})`,'01n': `url(${'/1n_clearsky.jpg'})`, gradientd : 'var(--gradient1)',gradientn : 'var(--gradient1n)'},
    {'02d': `url(${'/2_fewclouds.jpg'})`,'02n': `url(${'/2n_fewclouds.jpg'})`, gradientd : 'var(--gradient2)',gradientn : 'var(--gradient2)'},
    {'03d': `url(${'/3_scatteredclouds.jpg'})`,'03n': `url(${'/3n_scatteredclouds.jpg'})`, gradientd : 'var(--gradient2)',gradientn : 'var(--gradient2n)'},
    {'04d': `url(${'/4_brokenclouds.jpg'})`, '04n': `url(${'/4n_brokenclouds.jpg'})`, gradientd : 'var(--gradient3)',gradientn : 'var(--gradient3n)'},
    {'09d': `url(${'/5_showerrain.jpg'})`,'09n': `url(${'/5n_showerrain.jpg'})`, gradientd : 'var(--gradient4)',gradientn : 'var(--gradient4n)'},
    {'10d': `url(${'/6_rain.jpg'})`,'10n': `url(${'/6n_rain.jpg'})`, gradientd : 'var(--gradient4)',gradientn : 'var(--gradient4n)'},
    {'11d': `url(${'/7_snow.jpg'})`,'11n': `url(${'/7n_snow.jpg'})`, gradientd : 'var(--gradient5)',gradientn : 'var(--gradient5n)'},
    {'13d': `url(${'/8_mist.jpg'})`, '13n': `url(${'/8n_mist.jpg'})`, gradientd : 'var(--gradient6)',gradientn : 'var(--gradient6n)'},
    {'50d': `url(${'/9_storm.jpg'})`, '50n': `url(${'/9n_storm.jpg'})`, gradientd : 'var(--gradient7)',gradientn : 'var(--gradient7n)'},
  ]


useEffect(()=>{
  if(weather){
    setTimeout(() => {
      setLoader(1)
    }, 800);
  }
},[weather])

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
    const currentConditionDay = ccArray.filter(([key, value]) =>  key[key.length-1] == weather.weather[0].icon[2]);
    console.log('From APPJX ',weather.weather[0].icon);
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

return (
    <div className="App">
      {
      loader ?  
      <CardWeather weather={weather} weatherWeek={weatherWeek} weatherCondition={weatherCondition} setNewCoords={setNewCoords} />: <Loading/>
      }
      <Github/> 
    </div>
  )
}

export default App

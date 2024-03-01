import React, { useContext, useEffect } from 'react'
import WeatherContext from '../WheatherContext/Context'
import { Fetchwheather } from '../WheatherContext/Action'

const WeatherCard = () => {

  const {weatherdispatch,weather} =useContext(WeatherContext)

  const getweather = async(place)=>{
    const data = await Fetchwheather(place);
    const weatherdata = {
      city : data.location.name,
      temp_c: data.current.temp_c,
      icon : data.current.condition.icon,
      feel : data.current.condition.text,
    }
    weatherdispatch ({
      type : "GET_WEATHER",
      payload : weatherdata,
    })
  }
  useEffect(()=>{
    getweather("Indore")
  },[])

  return (
    <div className='container bg-primary p-5 text-light rounded-2'>
    <div className="d-flex align-items-center justify-content-between">
    <span>
        <h1 className='display-1'>{weather.temp_c}° C</h1>
        <p className='display-5 '>{weather.city}</p>
    </span>
    <span>
        <img src={weather.icon} alt="img" />
        <p className='text-center'>{weather.feel}</p>
    </span>
    </div>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-warning" type="submit">Search</button>
      </form>
    </div>
    // https://api.weatherapi.com/v1/current.json?key=91ef6b7fa3624b73bee201649240801&q=India&aqi=yes
  )
}

export default WeatherCard

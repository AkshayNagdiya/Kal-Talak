import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import { WeatherProvider } from './WheatherContext/Context'


const App = () => {
  return (
    <WeatherProvider>
      <Navbar/>
      <Home/>
    </WeatherProvider>
  )
}

export default App

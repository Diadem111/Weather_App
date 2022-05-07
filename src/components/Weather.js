import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Axios } from 'axios'



export default function Weather() {
  const [data, setdata] = useState({})
  const [location, setlocation] = useState('')
  let key = "36a47a7c42159ed9f5a06d982678629e";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}` 
const getLocation  = ((event)=>{
  if (event.key ==='Enter') {
    axios.get(url).
    then((response)=>{
      setdata(response.data);
      console.log(response.data);
    })
    setlocation('')
  }
 
})
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition((res)=>{
      console.log(res);
  })
  }else{
      console.log('browser not supported');
  }
  return (
    <div className='weather'>
      <div className="search">
        <input type="text" name="" id=""placeholder='Enter city' value={location} onChange= {event =>setlocation(event.target.value)} onKeyPress={getLocation}/>
      </div>
   <div className="container">
      <div className="top">
        <div className="location">
          <p >{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()} &deg;F</h1> : null
          }
          
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> :null
          }
        </div>
      </div>
      {data.name != 'undefined' && 
       <div className="bottom">
       <div className="feels">
         {data.main ? <p className='bold'>{data.main.feels_like.toFixed()} &deg;F</p> : null}
         <p>feels_like </p>
       </div>
       <div className="humidity">
         {data.main ? <p className='bold'>{data.main.humidity}%</p>
         :null}
         <p>humidity</p>
       </div>
       <div className="wind">
         {data.wind ? <p>{data.wind.speed.toFixed()}MPH</p> 
         :null }
         <p>Wind Speed</p>
       </div>
       <div className='sunrise'>
         {data.sys ? <p>{new Date(data.sys.sunrise * 1000). toLocaleTimeString('en-IN')}</p>
        : null }
        <p>Sunrise</p>
       </div>
       <div className='sunset'>
         {data.sys ? <p>{new Date(data.sys.sunset * 1000). toLocaleTimeString('en-IN')}</p>
        :null}
        <p>Sunset</p>
       </div>
     </div>
      }
     
    </div>
    </div>
  )
}

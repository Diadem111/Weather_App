import React from 'react'
import { useState } from 'react';
import { Navigator } from 'react-router-dom';
import { useEffect } from 'react';
import axios, { Axios } from 'axios';
import Weather from './Weather';
import Moment from 'react-moment';
import 'moment-timezone'

export default function Home() {
  const web = window.location.origin + "/images/wea.png";
  let  REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5";
  let REACT_APP_API_KEY = "36a47a7c42159ed9f5a06d982678629e";
  let REACT_APP_ICON_URL = 'https://openweathermap.org/img/w';
  
  const [lat, setlat] = useState([])
  const [long, setlong] = useState([])
  const [data, setdata] = useState([])
  const [isloading, setisloading] = useState(true)
  const [error, seterror] = useState(null)
  const [city, setcity] = useState('');
  const encodedCity = encodeURIComponent(city);

  // Function start here
  // useEffect start here
  useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function (res){
          // console.log(res.coords.latitude);
          setlat(res.coords.latitude);
          setlong(res.coords.longitude);
        })
          
     let url = `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
         axios.get(url).
         then((response)=>{
           setisloading(false);
           setdata(response.data);
           console.log(response.data);
          console.log(data);

         })
           .catch((err)=>{
             setisloading(false);
             seterror(err.message);
             console.log(err.message);
           })
           console.log(data);
          //  console.log(data.main.temp);
           
        },[lat,long])
        // return {isloading,error};
        
        const getForecast = ((e)=>{
          e.preventDefault();
          
          if(city.length === 0){
            return seterror(true)
          }
        })

  return (
    <>
    <div className='container-fluid' id='bigDiv'>
    <form onSubmit={getForecast}>
      <input type="text" placeholder='Enter City' maxLength="50" value={city} 
      onChange={(e)=>setcity(e.target.value)} />
      <button type='submit'>Get Forecast</button>
    </form>
    {error && <small>Please enter a valid citty</small>}
           {(typeof data.main != 'undefined') ?
         (
         <div className='card mx-auto w-50 h-75'
          style={{margin:'100px',borderRadius:'20px',
          backgroundColor:''}}>
     <div className='card-body'>
       City Name : {data.name}
      <div className='card-text'>
       <p> Temperature :{data.main.temp} 
        &deg;c </p>
        <p>Sunrise : {new Date(data.sys.sunrise * 1000). toLocaleTimeString('en-IN')}</p>
        <p>Sunset : {new Date(data.sys.sunset * 1000). toLocaleTimeString('en-IN')}</p>
        <p>Description : {data.weather[0].main} </p>
        <p>humidity : {data.main.humidity}</p>
        {/* <p>Day : {moment().format('dddd')}</p>
        <p>Date : {moment().format('LL')}</p> */}
        </div>
        </div>
         </div>
      ) : 
         (
        <div>
          {isloading && <div>loading...</div>}
        </div>
         )}
      </div>

     
    
        

     </>
  )
}

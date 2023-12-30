import React, { useState } from 'react';
import './WeatherApp.css';

import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png';
import search_icon from '../assets/search.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.jpg';
import rain_sun_icon from '../assets/rain_sun.png';

 

const WeatherApp = () => {

    let api_key ="9bd969f314aa3fbeec4e0fac497ad903";

const [wicon , setWicon] = useState(cloud_icon);


const search = async () => {
 const element = document.getElementsByClassName("cityInput");
 if(element[0].value==="")
{
    return 0;
}
let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

let response = await fetch(url);
let data = await response.json();
const humidity =document.getElementsByClassName("humidity-percent")
const wind = document.getElementsByClassName("wind-rate")
const temprature = document.getElementsByClassName("weather-temp")
const location = document.getElementsByClassName("weather-location")

humidity[0].innerHTML =data.main.humidity+" %";
wind[0].innerHTML =data.wind.speed+" km/h";
temprature[0].innerHTML = data.main.temp+" ºC";
location[0].innerHTML= data.name;

if(data.Weather[0].icon==="01d" || data.Weather[0].icon==="01n"){
    setWicon(clear_icon);

}
else if (data.Weather[0].icon ==="02d" || data.Weather[0].icon ==="02n"){
    setWicon(cloud_icon);
}
else if (data.Weather[0].icon ==="03d" || data.Weather[0].icon ==="03n"){
    setWicon(rain_sun_icon);
}
else if (data.Weather[0].icon==="04d" || data.Weather[0].icon==="04n"){
    setWicon(rain_sun_icon);
}
else if (data.Weather[0].icon==="09d" || data.Weather[0].icon==="09n"){
    setWicon(rain_icon);
}
else if (data.Weather[0].icon==="10d" || data.Weather[0].icon==="10n"){
    setWicon(rain_icon);
}
else if (data.Weather[0].icon==="13d" || data.Weather[0].icon==="13n"){
    setWicon(snow_icon);
}
else {
    setWicon(clear_icon);
}



}

    return (

        <div className='container'>
            <div className='top-bar'>
                
            <input type="text" className="cityInput" placeholder='Enter city Name'/>
            <button className='mybtn' onClick={()=>{search()}} >search</button>
        </div>
<div className="weather-image">
<img src={wicon} width='300px'/> 
</div>
<div className="weather-temp">24c</div>
<div className='weather-location'>london</div>

<div className='data-containar'>



    <div className='element'/>
    <img src={humidity_icon} className='icon' width='40px' height='50px'/>
    <div className='data'>
        <div className='humidity-percent'>67%</div>
        <div className='text'>humidity</div>
 </div>
</div>

<div className='element'/>
    <img src={wind_icon  } className='icon' width='70px' height='60px'/>
    <div className='data'>
        <div className='wind-rate'>18 k/h</div>
        <div className='text'>wind speed</div>
 </div>
</div>





    );
}
export default WeatherApp
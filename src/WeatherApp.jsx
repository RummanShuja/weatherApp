import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import { useState } from 'react';
import './WeatherApp.css';

export default function WeatherBox() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Wonderland",
        feels_like: 24.84,
        temp: 25.05,
        tempMin :25.05,
        tempMax :25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className='weatherApp'>
            <h2>Weather App by Rumman</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br/><br/><br/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
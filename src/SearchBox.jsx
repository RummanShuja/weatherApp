import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
    const API_KEY = import.meta.env.VITE_SECRET;
    
    let [error, setError] = useState(false);
    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            // console.log(result);
            setError(false);
            return result;
            
        }
        catch(err){
            throw err;
        }
    }
    
    
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault;
            // console.log(city);
            setCity("");
            let newInfo  = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError("No such place exists");
        }
        
    }
    return (
        <div className='SearchBox'>
            <TextField onChange={handleChange} value={city} id="city" label="City Name" variant="standard" required/>
            <br/><br/>
            <Button onClick={handleSubmit} type='submit' variant="contained" >Search</Button>
            
            {{error} && <p style={{color:"red"}}>{error}</p>}
        </div>
    )
}
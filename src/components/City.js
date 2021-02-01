import React from 'react'
import { Link } from 'react-router-dom';

export const City = (props) => {

    if (!props.data.name) {
        return null
    }

    let sunrise = props.data.sys.sunrise;
    let sunset = props.data.sys.sunset;
    let dateSunrise = new Date(sunrise*1000);
    let dateSunset = new Date(sunset*1000);
    const sunriseTime = `${dateSunrise.getHours()}:${dateSunrise.getMinutes()}`;
    const sunsetTime = `${dateSunset.getHours()}:${dateSunset.getMinutes()}`;

    const addToFavourite = () => {

        const cityObj = { 
            city: props.data.name,
            minTemp: props.data.main.temp_min,
            maxTemp: props.data.main.temp_max,
            curTemp: props.data.main.temp,
            sunrise: sunriseTime,
            sunset: sunsetTime,
            wind: props.data.wind.speed
        }
        localStorage.setItem(`${cityObj.city}`, JSON.stringify(cityObj));  
    }
    return (
        <div>
            <Link to={`/${props.data.name}`.toLowerCase()}><h3>{props.data.name}</h3></Link>
            <p>Минимальная температура &nbsp;{props.data.main.temp_min}°</p>
            <p>Максимальная температура &nbsp;{props.data.main.temp_max}°</p>  
            <p>Текущая температура &nbsp;{props.data.main.temp}°</p>  
            <p>Время рассвета &nbsp;{sunriseTime}</p>
            <p>Время заката &nbsp;{sunsetTime}</p>
            <p>Скорость ветра &nbsp;{props.data.wind.speed} m/s</p>
            <button 
                className="btn btn-success"
                onClick = {addToFavourite}
            >
                Add to Favourite
            </button>
        </div>
    )

}
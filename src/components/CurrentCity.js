import React, { useEffect, useState, Fragment } from 'react'
import {useParams} from 'react-router-dom'
import { City } from './City'
import { Loader } from './Loader'
import { Error } from './Error'

export const CurrentCity = () => {

  let [cityWeather, setCityWeather] = useState('');
  let [loading, setLoading] = useState(false)
  let [error , setError] = useState(false)

  const curCity = useParams();  
  
  useEffect(() => {
    getCity(curCity.id)
  }, [curCity.id])

  const getCity = (city) => {

      setError(false);
      setCityWeather('');

      if (!city) {
        return setError(true) ;
      }
      
      setLoading(true)
      
      const uriEncodedCity = encodeURIComponent(city);
  
      fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=${uriEncodedCity}`, {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
              "x-rapidapi-key": "b954d568c1msh0ff9170e0c794f6p19b1c6jsn2a543f5d9c8e"
          }
      })
      .then(response => response.json())
      .then(response => {
          if (response.cod !== 200) {
              setError(true);
              throw new Error()
          }
          console.log('response=', response)
          setCityWeather(response)
          setLoading(false)
      })
      .catch(err => {
          setError(true);
          setLoading(false)
          console.log(err.message);
      });
  }    

  return (
    <Fragment>
        <h1>Current city page</h1>
        { error && <Error /> }
        { loading ? <Loader /> : <City data={cityWeather} /> }
        
    </Fragment>    
)



}
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

export const Favorite = () => {
    const initialState = () => {
        let keys = Object.keys(localStorage)
        const arr = []
        for (let key of keys) {
            arr.push(JSON.parse(localStorage.getItem(key)))   
        }
        return arr
    }
    const [items, setItems] = useState( initialState() );

    const removeFromFavourite = (key) => {
        localStorage.removeItem(key)
        setItems(initialState)
    }

    return (
        <Fragment>
            <h1>Favorite cities</h1>
            {items.map((item) => {
                return (
                    <Fragment key={item.city + Date.now()}>
                        <Link to={`/${item.city}`.toLowerCase()}><h3>{item.city}</h3></Link>
                        <p>Минимальная температура &nbsp;{item.minTemp}°</p>
                        <p>Максимальная температура &nbsp;{item.maxTemp}°</p>  
                        <p>Текущая температура &nbsp;{item.curTemp}°</p>  
                        <p>Время рассвета &nbsp;{item.sunrise}</p>
                        <p>Время заката &nbsp;{item.sunset}</p>
                        <p>Скорость ветра &nbsp;{item.wind} m/s</p>
                        <button 
                            className="btn btn-danger"
                            onClick = {() => removeFromFavourite(item.city)}
                        >
                            Remove from Favourite
                        </button>
                    </Fragment>
                )
            })}
        </Fragment>    
    )
}
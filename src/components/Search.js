import React, { useEffect, useState } from 'react'

export const Search = (props) => {
    const [city, setCity] = useState('')

    const sendCity = (e) => {
        e.preventDefault()
        props.handleCity(city)
        setCity('')
    }

    return (
        <form onSubmit={sendCity}>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
        </form>
    )
}
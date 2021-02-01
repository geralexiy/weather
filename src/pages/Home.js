import React, { Fragment } from 'react'
import { City } from '../components/City'
import { Loader } from '../components/Loader'
import { Error } from '../components/Error'

export const Home = (props) => {
   
    return (
        <Fragment>
            <h1>Home page</h1>
            { props.err && <Error /> }
            { props.loader ? <Loader /> : <City data={props} /> }
            
        </Fragment>    
    )
}
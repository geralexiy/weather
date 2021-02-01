import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Favorite } from './pages/Favorite'
import { Home } from './pages/Home'
import {Navbar} from './components/Navbar'
import { useState } from 'react'
import { CurrentCity } from './components/CurrentCity'


function App() {

  let [cityWeather, setCityWeather] = useState('');
  let [loading, setLoading] = useState(false)
  let [error , setError] = useState(false)

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
          setCityWeather(response)
          setLoading(false)
      })
      .catch(err => {
          setError(true);
          setLoading(false)
          console.log(err.message);
      });
  }    

const WrapHome = function(props) {
    return (<Home {...props} {...cityWeather} loader={loading} err = {error} />);
};

  return (
    <BrowserRouter>
      <Navbar enterCity = {getCity} />  
      <div className="container">
        <Switch>
          <Route path={'/'} exact component={WrapHome} />
          <Route path={'/favorite'} component={Favorite} />
          <Route path={'/:id'} exact render={(props) => 
          { 
              return(<CurrentCity {...props} />) 
          } 
      } />

        </Switch>
      </div>
     </BrowserRouter>
  );
}

export default App;

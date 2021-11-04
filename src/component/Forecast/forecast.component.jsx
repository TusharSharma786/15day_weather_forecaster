import React from "react";

import { SearchWeather } from '../../Api/weatherApi.utils';
import ForecastOverview from '../Forecast-Overview/forecast-overview.component';
import SearchBar from '../Search-Bar/searchBar.component';

import './forecast.styles.css';

const Forecast = () => {
    const [city,setCity] = React.useState('');
    const [list,setList] = React.useState(null);
    const [data,setData] = React.useState(null);
    const [city1,setCity1] = React.useState('');
    const isFirstRun = React.useRef(false);
    const search = (events) =>{
        events.preventDefault();
        SearchWeather(city).then(setList);
        // SearchWeather(props.city).then(setList);
    }
    React.useEffect(()=>{
        if (isFirstRun.current) {
            setData(list['data']);
            console.log(list);
            setCity1(city);
        }
        isFirstRun.current = true;
    },[list]);
    return (
        <div>
            <h1>Weather Forecast</h1>
            <SearchBar search={search} data={data} city={city} setCity={setCity}/>
            {
                list==='no data' ? (
                    <p>Unfortuntely!! we don't have info. about this city</p>
                ) : (
                    <ForecastOverview data = {data} city1={city1}/>
                )
            }
        </div>
    )
}

export default Forecast;
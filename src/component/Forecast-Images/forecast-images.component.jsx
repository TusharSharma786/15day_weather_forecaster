import React from 'react';

import image1 from '../../images/storm.png';
import image2 from '../../images/sunny.png';
import image3 from '../../images/snow.png';
import image4 from '../../images/clouds.png';
import ForecastImageDetail from '../Forecast-image-detail/forecast-image-detail.component';

import './forecast-images.styles.css';

const ForecastImages = ({data,city1}) => {
    return (
        <div>
            {
                data[0].weather.description.includes('cloud') ? (
                    <ForecastImageDetail image={image4} data={data} city1={city1}/>
                ):(
                    data[0].weather.description.includes('snow') ? (
                        <ForecastImageDetail image={image3} data={data} city1={city1}/>
                    ):(
                        data[0].weather.description.includes('Sky') ? (
                            <ForecastImageDetail image={image2} data={data} city1={city1}/>    
                        ):(
                            <ForecastImageDetail image={image1} data={data} city1={city1}/>
                        )
                    )
                )
            }
        </div>
    )
}

export default ForecastImages;
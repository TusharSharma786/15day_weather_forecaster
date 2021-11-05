import React from 'react';

import ForecastPreview from '../Forecast-Preview/forecast-preview.component';
import ForecastImages from '../Forecast-Images/forecast-images.component';

import './forecast-overview.styles.css';

const ForecastOverview = ({data,city1}) => {
    return (
        <div>
            {/* <h1 id="contents">{city1}</h1> */}
            {data &&
                (data.length === 0 ? (
                    <p></p>
                ) : (
                    <ForecastImages data = {data} city1={city1}/>
                )
                )
            }
            {data &&
                (data.length === 0
                ? <p></p>
                : (
                    <div>
                        <h4 id='heading'>Upcoming days weather Forecast</h4>
                        <div id='items'>
                            {data.map(data => (
                                <div id='body'><ForecastPreview key={data.datetime} data = {data}/></div>
                            ))}
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default ForecastOverview;
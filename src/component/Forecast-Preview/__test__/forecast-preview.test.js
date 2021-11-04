import React from 'react';
import {render,cleanup} from '@testing-library/react';
import ForecastPreview from '../forecast-preview.component';

afterEach(cleanup);

it('renders the ouput in UI',()=>{
    const responseData = {
            "moonrise_ts": 1635891641,
            "wind_cdir": "SSW",
            "rh": 53,
            "pres": 1012.02,
            "high_temp": 30.3,
            "sunset_ts": 1635939101,
            "ozone": 263,
            "moon_phase": 0.0315281,
            "wind_gust_spd": 4.71484,
            "snow_depth": 0,
            "clouds": 21,
            "ts": 1635877860,
            "sunrise_ts": 1635898476,
            "app_min_temp": 21.1,
            "wind_spd": 2.85677,
            "pop": 0,
            "wind_cdir_full": "south-southwest",
            "slp": 1012.77,
            "moon_phase_lunation": 0.94,
            "valid_date": "2021-11-03",
            "app_max_temp": 29.8,
            "vis": 24.128,
            "dewpt": 15,
            "snow": 0,
            "uv": 6.98402,
            "weather": {
                "icon": "c02d",
                "code": 802,
                "description": "Scattered clouds"
            },
            "wind_dir": 193,
            "max_dhi": null,
            "clouds_hi": 18,
            "precip": 0,
            "low_temp": 20.9,
            "max_temp": 30.3,
            "moonset_ts": 1635935577,
            "datetime": "2021-11-03",
            "temp": 25.5,
            "min_temp": 21.1,
            "clouds_mid": 13,
            "clouds_low": 0
        }
    const div = document.createElement('div');
    const { getByText } = render(<ForecastPreview data = {responseData}/>,div);
    expect(getByText("2021-11-03")).toBeTruthy();
    expect(getByText("Max. temp.- 30.3")).toBeTruthy();
    expect(getByText("Curr. temp.- 25.5")).toBeTruthy();
    expect(getByText("Low temp.- 20.9")).toBeTruthy();
    expect(getByText("Wind speed- 3mph")).toBeTruthy();
    expect(getByText("Direction- south-southwest")).toBeTruthy();
})

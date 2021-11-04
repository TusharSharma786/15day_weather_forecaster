import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen,cleanup} from '@testing-library/react';
import Forecast from '../component/Forecast/forecast.component';
import {datas} from '../Api/data_example';

beforeEach(() => {
    fetch.resetMocks();
  });
afterEach(cleanup);

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Forecast/>,div);
})

describe("fetch weather data", ()=>{
    describe("when API call is successfull",()=>{
        it("should return the infos", async () => {
            const responseData = {
                "results": [
                    {
                        "address": "Kolkata, West Bengal, India",
                        "country": "India",
                        "region": "West Bengal",
                        "locality": "Kolkata",
                        "location": {
                            "lat": 22.572658,
                            "lng": 88.363919
                        },
                        "location_type": "approximate",
                        "type": "locality"
                    }
                ]
            };
            fetch.mockResponseOnce(responseData);
            var response = await fetch(`https://trueway-geocoding.p.rapidapi.com/Geocode?address=kolkata&language=en`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "trueway-geocoding.p.rapidapi.com",
                    "x-rapidapi-key": "d046701087msh5248be5bff3116cp1e567bjsn4de2272643fa"
                }
            })
            const data = response.json()
            expect(data).resolves.toEqual(responseData);
        })
    })
})

describe("fetch weather data", ()=>{
    describe("when API call is successfull",()=>{
        it("should return the infos", async () => {
            const responseData = datas;
            fetch.mockResponseOnce(responseData);
            var response = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=22.572645&lon=88.363892`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
                    "x-rapidapi-key": "d046701087msh5248be5bff3116cp1e567bjsn4de2272643fa"
                }
            });
            const data = response.json();
            expect(data).resolves.toEqual(responseData);
        })
    })
})


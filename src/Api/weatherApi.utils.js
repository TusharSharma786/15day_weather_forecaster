import { SearchGeoLocation } from './geoLocationApi.utils';

export const SearchWeather = async (city) => {
    city = encodeURIComponent(city);
    var location = await SearchGeoLocation(city);
    if(location==='no data'){
        return 'no data';
    }
    var response = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${location['lat']}&lon=${location['lng']}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "d046701087msh5248be5bff3116cp1e567bjsn4de2272643fa"
	}
    });
    const data =  await response.json();
    return data;
}

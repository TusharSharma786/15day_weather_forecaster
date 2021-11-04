export const SearchGeoLocation = async (city) => {
    city = encodeURIComponent(city);
    try{
        var response = await fetch(`https://trueway-geocoding.p.rapidapi.com/Geocode?address=${city}&language=en`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "trueway-geocoding.p.rapidapi.com",
            "x-rapidapi-key": "d046701087msh5248be5bff3116cp1e567bjsn4de2272643fa"
        }
        })
        const data =  await response.json();
        var results = data.results[0];
        var location = results["location"];
        return location;
    }
    catch{
        return 'no data'
    }
}
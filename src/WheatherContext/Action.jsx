export const Fetchwheather = async (place)=>{
    const response = await fetch( `https://api.weatherapi.com/v1/current.json?key=91ef6b7fa3624b73bee201649240801&q=${place}&aqi=yes`);
    const data = await response.json()
    return data
} 
const key = 'LnyKUw4on8IyWVIodsApwac49ez3bgmN';

//get weather information
const getWeather = async (id)=>{

const base ='http://dataservice.accuweather.com/currentconditions/v1/';
const query = `${id}?apikey=${key}`;
const response = await fetch( base + query);
const data = await response.json();

// console.log(data);
return data[0];
}

'use strict';
// const keyForOpenWeatherMap="68a652342184416620f645edd5edb9db";
const apiKey="68a652342184416620f645edd5edb9db";
let lat=50.6187988;
let lon=26.2589095;
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&appid="+apiKey;
let urlGetByLatLon=`${url}&lat=${lat}&lon=${lon}`;


navigator.geolocation.getCurrentPosition((pos)=>{
    console.log(`My location: ${pos.coords.latitude} : ${pos.coords.longitude}`);
    lat=pos.coords.latitude;
    lon=pos.coords.longitude;
    urlGetByLatLon=`${url}&lat=${lat}&lon=${lon}`;
    getCurrentRequest(urlGetByLatLon);
    getWeatherByCity("Rivne");
    console.log(urlGetByLatLon);
}, ()=>{
    console.log('Cannot get your location');
    getCurrentRequest(urlGetByLatLon);
});


function getCurrentRequest(url){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data.weather[0].icon);

        addCurrentWeatherContent(data);
    });;
}


function addCurrentWeatherContent(data){
    let currentIcon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    let imgWeather=document.querySelector(".img-weather");
    let imgIcon=document.createElement("img");
    imgIcon.setAttribute("src",currentIcon);
    imgIcon.setAttribute("alt",data.weather[0].main);
    imgWeather.append(imgIcon);


}

   /*
   https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
   */
  
function getWeatherByCity(city){
    let urlByCity=url+"&q="+city;
    console.log(urlByCity);
    fetch(urlByCity)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>alert(error));
}




let country = document.querySelector("#search-country");
let btn = document.querySelector("#btn");
let degree = document.querySelector("#degree");
let cityName = document.querySelector("#country-name");

const apikey = "51275245fa1e87174c332325bbf3be35";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weatherCheck(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();

    console.log(data);
    cityName.innerHTML = data.name;
    degree.innerHTML = Math.round(data.main.temp) + "°C";

}

  btn.addEventListener("click" , ()=>{
    weatherCheck(country.value); 
})
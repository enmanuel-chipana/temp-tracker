const apiKey = "ac6155b9a64a4c73b1611054260804";
const lang = "es";
const initialCity = "Huancayo";

const getWeatherInfo = async (city) => {
  console.log("executing...");
  if(!city) return alert("Por favor, ingresa una ciudad");

  const url = `https://api.weatherapi.com/v1/current.json?q=${city}&lang=${lang}&key=${apiKey}`;

  setLoader(true);
  const response = await fetch(url);
  const data = await response.json();
  setTimeout(() => {
    setLoader(false);
  }, 500);

  console.log(data);
  setData(data);
}

const setData = (data) => {
  const current = data.current;
  const condition = current.condition;
  const location = data.location;

  document.querySelector(".weather-icon").src = condition.icon;
  document.querySelector(".weather-text").innerHTML = condition.text;
  document.querySelector(".temp").innerHTML = `${current.temp_c}° C`;
  document.querySelector(".city").innerHTML = `${location.name}, ${location.region}, ${location.country}`;
  document.getElementById("humidity").innerHTML = `${current.humidity}%`;
  document.getElementById("wind").innerHTML = `${current.wind_kph} km/h`; 
}

const setLoader = (isLoading) => {
  const loader = document.getElementById("loader");
  const weather = document.getElementById("weather");

  if(isLoading) {
    console.log(true);
    loader.classList.remove("display-none");
    weather.classList.add("display-none");
    return;
  }

  console.log(false);

  loader.classList.add("display-none");
  weather.classList.remove("display-none");
}

getWeatherInfo(initialCity);

// events

document.getElementById("search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherInfo(e.target.search.value);
});

document.getElementById("footer").addEventListener("click", (e) => {
  window.open("https://portfolio-blue-kappa-8kgmjgsc2e.vercel.app/", "_blank");
});

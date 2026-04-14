const apiKey = "";
const lang = "es";
const city = "Huancayo";

const url = `https://api.weatherapi.com/v1/current.json?q=${city}&lang=${lang}&key=${apiKey}`;

const response = await fetch(url);
const data = await response.json();

console.log(data);

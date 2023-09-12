let imageArr = document.querySelectorAll("img");
let degArr = document.querySelectorAll("b");
let city = document.querySelector("#city");
let codeToImage = {
  0: "sunny",
  1: "cloudy",
  2: "cloudy-2",
  3: "cloudy-3",
  45: "cloudy-3",
  48: "cloudy-3",
  51: "rainy",
  53: "rainy",
  55: "rainy-2",
  56: "rainy-2",
  57: "rainy-2",
  61: "rainy-2",
  63: "rainy-2",
  65: "rainy-2",
  66: "stormy",
  67: "stormy",
  71: "snowy",
  73: "snowy",
  75: "snowy",
  77: "snowy",
  80: "rainy-2",
  81: "rainy-2",
  82: "rainy-2",
  85: "snowy",
  86: "snowy",
  95: "stormy",
  96: "stormy",
  99: "stormy",
};

weatherData();

async function weatherData() {
  const locationResponse = await fetch("https://ipapi.co/json/");
  let locationData = await locationResponse.json();
  // console.log(locationData.city);
  let latitude = locationData.latitude;
  let longitude = locationData.longitude;
  city.innerHTML += locationData.city + " - " + locationData.country_name;
  // console.log(latitude, longitude);

  let weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Africa%2FCairo`
  );
  let weatherData = await weatherResponse.json();
  // console.log(weatherData);
  let maxArr = weatherData.daily.temperature_2m_max;
  let minArr = weatherData.daily.temperature_2m_min;
  let weatherCodeArr = weatherData.daily.weathercode;
  console.log(weatherCodeArr);

  for (let i = 0; i < imageArr.length; i++) {
    degArr[i].innerHTML = "min-" + minArr[i] + "° max-" + maxArr[i] + "°";
    let src = "./Images/Images/" + codeToImage[weatherCodeArr[i]] + ".svg";
    console.log(src);
    imageArr[i].setAttribute("src", src);
    console.log("Image Source: " + src);
  }
}

const key = "89115e6bf6f7d2e554ff0866e804be53";

const putData = (data) => {
    document.querySelector('.city').innerHTML = 'Tempo em ' + data.name;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector('.text-forecast').innerHTML = data.weather[0].description;
    document.querySelector('.humidity').innerHTML = "Umidade: " + data.main.humidity + "%";
    document.querySelector('.img-forecast').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
};

const searchCity = async (city) => {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    putData(data);
};

const btnClicked = () => {
    const city = document.querySelector(".city-input").value;
    searchCity(city);
};
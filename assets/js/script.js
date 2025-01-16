const key = "89115e6bf6f7d2e554ff0866e804be53";

const searchCity = async (city) => {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(response => response.json());
};

const btnClicked = () => {
    const city = document.querySelector(".city-input").value;
    searchCity(city);
};
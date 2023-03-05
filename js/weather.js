window.addEventListener("DOMContentLoaded",()=>{

    const API_KEY = "ff8a8352af7f2d983add1dd4c61135ef";
    function onGeoOk(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector(".weather");
            const city = document.querySelector(".city");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`
        });
    }
    function onGeoError(){
        alert("Can't find you. No weather for you.")
    }

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)


})
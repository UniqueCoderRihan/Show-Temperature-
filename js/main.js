const API_KEY = `6ddc91289fb13577333a2d76c019aadd`
const loadData =city=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}

const displayTemperature = data =>{
    console.log(data);
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp

    // conditon innerText set
    const conditonElement = document.getElementById('condition')
    conditonElement.innerText = data.weather[0].main

}
document.getElementById('btn-search').addEventListener('click',function(){
    const searchFiled = document.getElementById('search-filed')
    const city = searchFiled.value;
    searchFiled.value = ''
    document.getElementById('cityName').innerText = city;
    loadData(city)
})

loadData('dhaka')

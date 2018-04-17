//by cityname on the campus

//knop declareren
/*let button = document.getElementById("buttonWeather");
const weatherList = document.getElementById('weather');

button.addEventListener('click', function() {
    //waardes uit de elementen halen
    let city = document.getElementById("city").value;
    let countryCode = document.getElementById("countryCode").value;
*/

const urlCampus = 'http://openweathermap.org/data/2.5/weather?q=Mariakerke,be&appid=b6907d289e10d714a6e88b30761fae22#&units=metric';
const urlOwnCity = 'http://openweathermap.org/data/2.5/weather?q=Zulte,be&appid=b6907d289e10d714a6e88b30761fae22#&units=metric';
 
function setup(){
    createCanvas(200, 200);
    loadJSON(urlCampus, gotData);
}

function gotDATA(data){
    println(data);
}

//function draw(){
//    background(0);
//}


// news
// API key = ee5b07b0f30a416b863489771dc901db

/*
let url = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=KEY';
let req = new Request(url);
fetch(req)
    .then(function(response) {
    console.log(response.json());
})

*/
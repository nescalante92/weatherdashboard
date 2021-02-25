//8f220b5e670876424e7610149c0ca000
var appKey = '8f220b5e670876424e7610149c0ca000';
var unit = 'imperial';
//forcast display 
var cityInput = $('#cityInput').val();
var temp = $('#temp');
var hum = $('#hum');
var wind = $('#wind');
var uv = $('#uv');

//set time and Date
var currentDay = moment();

$("#currentDay").text(currentDay.format("[Today is ]dddd, MMMM Do, YYYY h:mm:ss a"));
/*toString() returns string object value*/
console.log(currentDay.toString());

$("#saveBtn").on("click", function (event) {
    // event.preventDefault();
    inputVal = cityInput.value;
    console.log($(this).text());
});
// saveBtn



//The geolocation.getCurrentPosition() method is used to get the current position of the device(latitude/longitude) = https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
// navigator object contains information about the browser like geolocation to locate user's position = https://www.w3schools.com/jsref/obj_navigator.asp
function weatherForcast() {
    navigator.geolocation.getCurrentPosition(function (position) {
        var cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&appid=' + appKey + '&units=' + unit;

        console.log(cityURL);


    })


    //link to weather forcast api 
    //fetch function grabs cityURL from web server
    fetch(cityUrl)
        //waits for responce from fetched URL
        .then(function (response) {
            return response.json();
        })
        //waits for responce from fetched json to store/transport data
        //responce stores retrieved data
        .then(function (data) {
            console.log(data);
            http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
            var uvURL = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=' + '8f220b5e670876424e7610149c0ca000';

            var lon = position.coords.longitude;
            var lat = position.coords.latitude;

            cityInput.text(data.name);
            temp.text(data.main.temp);
            hum.text(data.main.hum);
            wind.text(data.main.wind);
            uv.text(data.main.uv);

            var tempEl = $("#temp");
            var humEl = $("#hum");
            var windEl = $("#wind");
            var uvEl = $("#uv");
        });
};
('#thwuvCard')










//8f220b5e670876424e7610149c0ca000
var appKey = '8f220b5e670876424e7610149c0ca000';
var city = 'charlotte'
var unit = 'imperial';
//forcast display 
var cityInput = $('#cityInput');
var temp = $('#temp');
var hum = $('#hum');
var wind = $('#wind');
var uv = $('#uv');

//set time and Date
var currentDay = moment();

$("#currentDay").text(currentDay.format("[Today is ]dddd, MMMM Do, YYYY h:mm:ss a"));
/*toString() returns string object value*/
console.log(currentDay.toString());



//The geolocation.getCurrentPosition() method is used to get the current position of the device(latitude/longitude) = https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
// navigator object contains information about the browser like geolocation to locate user's position = https://www.w3schools.com/jsref/obj_navigator.asp
function weatherForcast() {
    navigator.geolocation.getCurrentPosition(function (position) {
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;

        //link to weather forcast api 
        var cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.valueOf() + latitude + '&appid=' + longitude + '&units=' + appKey + unit;

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

                cityInput.text(data.name + clock.format("MM/DD/YYYY"));
                temp.text(data.main.temp);
                hum.text(data.main.hum);
                wind.text(data.main.wind);
                uv.text(data.main.uv);

            });
    });

};


$('#saveBtn').on('click', function (event) {
    event.preventDefault();
    weatherForcast();
})


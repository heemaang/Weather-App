burger = document.querySelector('.burger');
navList = document.querySelector('.nav-list');
header = document.querySelector('.header');
responive = document.querySelector('.responive');



burger.addEventListener('click',()=>{
      navList.classList.toggle('v-class');
      responive.classList.toggle('v-class');
      header.classList.toggle('h-nav');

})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '47b4e21dedmsh133c1c87a16b85ap1eebe2jsn6f1322b9488a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) =>{ 
		
		
		
		
		console.log(response)

		cloud_pct.innerHTML   = response.cloud_pct  
		temp.innerHTML   = response.temp  
		feels_like.innerHTML  = response.feels_like   
		humidity.innerHTML   = response.humidity  
		min_temp.innerHTML   = response.min_temp  
		max_temp.innerHTML   = response.max_temp 
		wind_speed.innerHTML  = response.wind_speed  
		wind_degrees.innerHTML = response.wind_degrees 
		sunrise.innerHTML  = response.sunrise   
		sunset.innerHTML   = response.sunset
 
		
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e) =>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Gwalior")

// var current= new Date()
// var day_night=current.getHours()
// if (day_night<=12)
//     document.write("<img src='wind.png'>")
// else
//     document.write("<img src='night.gif'>")
// Step 1: Get the reference to the div container
const datetimeContainer = document.getElementById('datetime-container');

// Step 2: Create a new Date object
const currentDate = new Date();

// Step 3: Get the day, date, and time in the desired format
const option = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
//   second: 'numeric',
  hour12: true
};
const formattedDate = currentDate.toLocaleDateString('en-US', option);

// Step 4: Update the div container's innerHTML property
datetimeContainer.innerHTML = formattedDate;


			



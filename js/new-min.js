function weather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(o){geoAddress="api.openweathermap.org/data/2.5/weather?lat="+o.coords.latitude+"&lon="+o.coords.longitude+units+"&appid=1f3e30098d59daa0ee84d36dca533728",$.ajax({url:"http://api.wunderground.com/api/c9a588f6c2cd7cb7/geolookup/q/"+o.coords.latitude+"&lon="+o.coords.longitude+"/conditions.json",dataType:"jsonp",success:function(o){var i=o.city,n=o.country,c=o.temp_f;"01d"==icon&&(icon="<i class='ion-ios-sunny-outline large'></i>"),"01n"==icon&&(icon="<i class='ion-ios-moon-outline large'></i>"),"02d"==icon&&(icon="<i class='ion-ios-partlysunny-outline large'></i>"),"02n"==icon&&(icon="<i class='ion-ios-cloudy-night-outline large'></i>"),"03d"!=icon&&"03n"!=icon||(icon="<i class='ion-ios-cloud-outline large'></i>"),"04d"!=icon&&"04n"!=icon||(icon="<i class='ion-ios-cloud large'></i>"),"09d"!=icon&&"09n"!=icon||(icon="<i class='ion-ios-rainy-outline large'></i>"),"10d"!=icon&&"10n"!=icon||(icon="<i class='ion-ios-rainy-outline large'></i>"),"11d"!=icon&&"11n"!=icon||(icon="<i class='ion-ios-thunderstorm-outline large'></i>"),"13d"!=icon&&"13n"!=icon||(icon="<i class='ion-ios-snowy large'></i>"),"50d"!=icon&&"50n"!=icon||(icon="<i class='ion-ios-cloud-outline large'></i>"),$(".weather-place").html(icon+"<p>"+i+", "+n+"</p><p>"+c+"°"+endUnit+"</p><p>"+description).fadeIn(400)}})})}var geoAddress,units="&units=metric",endUnit="C";$(".celsius").on("click",function(){units="&units=metric",endUnit="C",$(this).css({color:"white"}),$(".farenheit").css("color","rgba(72, 72, 72, 1.0)"),weather()}),$(".farenheit").on("click",function(){units="&units=imperial",endUnit="F",$(this).css({color:"white"}),$(".celsius").css("color","rgba(72, 72, 72, 1.0)"),weather()}),$(document).ready(function(){$(".celsius").css({color:"white"}),$(".farenheit").css("color","rgba(72, 72, 72, 1.0)"),weather()});var currentTime=(new Date).getHours();7<=currentTime&&currentTime<20?document.body&&(document.body.background="https://static.pexels.com/photos/38989/pexels-photo-38989.jpeg"):document.body&&(document.body.background="https://static.pexels.com/photos/94363/pexels-photo-94363.jpeg");
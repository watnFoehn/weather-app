function weather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(i){geoAddress="http://api.openweathermap.org/data/2.5/weather?lat="+i.coords.latitude+"&lon="+i.coords.longitude+units+"&appid=1f3e30098d59daa0ee84d36dca533728",$.ajax({url:geoAddress,success:function(i){var o=i.name,e=i.sys.country,n=Math.round(i.main.temp),s=i.weather[0].description,t=i.weather[0].icon;"01d"==t&&(t="<i class='ion-ios-sunny-outline large'></i>"),"01n"==t&&(t="<i class='ion-ios-moon-outline large'></i>"),"02d"==t&&(t="<i class='ion-ios-partlysunny-outline large'></i>"),"02n"==t&&(t="<i class='ion-ios-cloudy-night-outline large'></i>"),"03d"!=t&&"03n"!=t||(t="<i class='ion-ios-cloud-outline large'></i>"),"04d"!=t&&"04n"!=t||(t="<i class='ion-ios-cloud large'></i>"),"09d"!=t&&"09n"!=t||(t="<i class='ion-ios-rainy-outline large'></i>"),"10d"!=t&&"10n"!=t||(t="<i class='ion-ios-rainy-outline large'></i>"),"11d"!=t&&"11n"!=t||(t="<i class='ion-ios-thunderstorm-outline large'></i>"),"13d"!=t&&"13n"!=t||(t="<i class='ion-ios-snowy large'></i>"),"50d"!=t&&"50n"!=t||(t="<i class='ion-ios-cloud-outline large'></i>"),$(".weather-place").html(t+"<p>"+o+", "+e+"</p><p>"+n+"°"+endUnit+"</p><p>"+s).fadeIn(400)}})})}var geoAddress,units="&units=metric",endUnit="C";$(".celsius").on("click",function(){units="&units=metric",endUnit="C",$(this).css({color:"white"}),$(".farenheit").css("color","rgba(72, 72, 72, 1.0)"),weather()}),$(".farenheit").on("click",function(){units="&units=imperial",endUnit="F",$(this).css({color:"white"}),$(".celsius").css("color","rgba(72, 72, 72, 1.0)"),weather()}),$(document).ready(function(){$(".celsius").css({color:"white"}),$(".farenheit").css("color","rgba(72, 72, 72, 1.0)"),weather()});var currentTime=(new Date).getHours();7<=currentTime&&currentTime<20?document.body&&(document.body.background="https://static.pexels.com/photos/38989/pexels-photo-38989.jpeg"):document.body&&(document.body.background="https://static.pexels.com/photos/94363/pexels-photo-94363.jpeg");
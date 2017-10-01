$(function () {
    $("#getWeather").click(function (e) {
        e.preventDefault();
        $("#forecastbox").empty();
        var city = $("#city").val();
        var d = new Date();
        var date = d.toDateString();
        var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ca44bdc8f531754566a509754e2b141c";
        $.get(urlApi, function (data) {
            var weatherC = data.weather[0].main;
            if (weatherC == "Clouds") {
                var weatherS = "2.png";
            }
            if (weatherC == "Rain") {
                var weatherS = "6.png";
            }
            if (weatherC == "Clear") {
                var weatherS = "3.png";
            }
            if (weatherC == "Thunderstorm") {
                var weatherS = "5.png";
            }
            if (weatherC == "Mist") {
                var weatherS = "14.png";
            }
            console.log(data);
            var row1 = "<h4 class = 'fontH'><img id = 'pic' src='' alt=''><b>" + city + "</td><td><h4><img id = 'pic' src='' alt=''><b>" + date + "</h4></td></tr></table>" +
                "<table align = 'center'><tr><td><img class = 'font' src='" + weatherS +
                "' alt=''></td></tr></table><table align = 'center'><tr><td width = '100%'><p id = 'text'><b>" + data.weather[0].description +
                "<b></p></td></tr></table>" + "<table>" + "<tr><td><img src='' alt=''></td><td>" + ((data.main.temp) / 10).toFixed(2) +
                " °C</td></tr>" + "<tr><td><img src='' alt=''></td><td>" + data.main.pressure +
                " hPa</td></tr>" + "<tr><td><img src='' alt=''></td><td>" + data.main.humidity + "%";
            $("#forecastbox").append(row1);
        });
    });
});
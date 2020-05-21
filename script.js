$(document).ready(function(){
    console.log('Document ready');
    
    $("#bigSearch").on("click", function(){
        var search = $("#search").val()
        console.log(search)
        
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&units=imperial" + "&appid=" + "ff6ed4c78d9e9aab57fe56a14fa6a431"; 
        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET"
        
        }).then(function(response) {
            console.log(response)
            console.log(response.city.name)
            console.log(response.list[0].dt_txt)
            console.log(response.list[0].main.temp)
            console.log(response.list[0].wind.speed)
            window.test = response
            var cityName = response.city.name
            var date = response.list[0].dt_txt
            var temp = response.list[0].main.temp
            var windSpeed = response.list[0].wind.speed
            var humidity = response.list[0].main.humidity

            for (let index = 0; index <= 5; index++){
                const element = array[index]
                date[element]
                temp[element]
                humidity[element]
            }
            


    
}


       })

    });





























});
(function () {
    "use strict";

    // updates weather
    function weather(latitude, longitude) {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: latitude,
            lon: longitude,
            units: "imperial"
        }).done(function (data) {
            console.log('5 day forecast', data);
            cards(data);
        });

    }

    //weather info
    function cards(data) {
        $('.weatherInfo').html("");
        for (var i = 0; i < data.list.length; i += 8) {
            var dateAndTime = data.list[i].dt_txt.split(" ");
            $('.weatherInfo').append('<div class="card" style="width: 18rem;">' +
                '<div class="card-header">Date: ' + dateAndTime[0] +
                '</div>' +
                '<ul class="list-group list-group-flush">' +
                '<li class="list-group-item"> Temperature: ' + data.list[i].main.temp_min + ' / ' + data.list[i].main.temp_max + '</li>' +
                '<li class="list-group-item"> Humidity: ' + data.list[i].main.humidity + '%</li>' +
                '<li class="list-group-item"> Wind: ' + data.list[i].wind.speed + ' MPH </li> ' +
                '<li class="list-group-item"> Pressure: ' + data.list[i].main.pressure + '</li>' +
                '</ul>' +
                '</div>')

        }
    }

    //map
    mapboxgl.accessToken = MAPBOX;
    const coordinates = document.getElementById('coordinates');
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [0,0], // starting position [lng, lat]
        zoom: 3 // starting zoom
    });



   //marker
    const marker = new mapboxgl.Marker({
        draggable: true
    })
    function onDragEnd() {
        const lngLat = marker.getLngLat();
        weather(lngLat.lat, lngLat.lng);
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        map.flyTo({
            center: lngLat,
            zoom: 15,
            essential: true
        })
    }

    marker.on('dragend', onDragEnd);

    function setMarker(cords) {
        marker.setLngLat(cords)
        marker.addTo(map);
        map.flyTo({
            center: cords,
            zoom: 15,
            essential: true
        })
    }

    map.on('click', function (event) {
        var clickInfo = {
            lng: event.lngLat.lng,
            lat: event.lngLat.lat
        }
        weather(clickInfo.lat, clickInfo.lng);
        setMarker(clickInfo);
    });

    // search bar
    var geocoder = new MapboxGeocoder({
        accessToken: MAPBOX,
        placeholder: "San Antonio, TX",
        mapboxgl: mapboxgl
    })
    geocoder.addTo('#geocoder');

    function searchSelect(result) {
        console.log(result);
        var cityInfo = {
            lng: result.result.center[0],
            lat: result.result.center[1]
        }
        weather(cityInfo.lat, cityInfo.lng);
        setMarker(cityInfo);
    }
    geocoder.on('result', searchSelect);

    map.addControl(new mapboxgl.NavigationControl());

    var sanAntonio = {
        lng: -98.4946,
        lat: 29.4252
    };

    weather(sanAntonio.lat, sanAntonio.lng);
    setMarker(sanAntonio);



})();
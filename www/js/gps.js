function iniciarGPS() {
    gpsId = setInterval(navigator.geolocation.getCurrentPosition, 5000, geolocationSuccess, function(){}, { maximumAge: 3000, timeout: 4000, enableHighAccuracy: true });
}


function geolocationSuccess(position) { 
    coletarDadosGPS(position);
    apresentarDadosGPS(position);
    if(busIntersectionList.lenght === 1){
        clearInterval(servicoId);
    }
}

function coletarDadosGPS(position){
    var time = new Date();
    var dadosGPS = {
        timestamp: time.getTime(),
        heading: position.coords.heading,
        altitude: position.coords.altitude,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
        altitude_accuracy: position.coords.altitudeAccuracy,
        speed: position.coords.speed
    };

    listaDadosGPS.push(dadosGPS);
    gpsBusList.push(dadosGPS);
}

function apresentarDadosGPS(position) {
    document.getElementById('direcao').value = (position.coords.heading == null) ? '' : Math.round(100*position.coords.heading)/100;
    document.getElementById('altitude').value = (position.coords.altitude == null) ? '' : Math.round(position.coords.altitude) + ' m';
    document.getElementById('latitude').value = (position.coords.latitude == null) ? '' : Math.round(100000*position.coords.latitude)/100000;
    document.getElementById('longitude').value = (position.coords.longitude == null) ? '' : Math.round(100000*position.coords.longitude)/100000;
}


function pararGPS(){
    clearInterval(gpsId);
    clearInterval(servicoId);
}
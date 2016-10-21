function iniciarAcelerometro(){
    acelerometroId = setInterval(navigator.accelerometer.getCurrentAcceleration, 5000, accelerometerSuccess);
}


function accelerometerSuccess(acceleration){   
    coletarDadosAcelerometro(acceleration);
    apresentarDadosAcelerometro(acceleration);
}


function coletarDadosAcelerometro(acceleration){
    var time = new Date();
    var dadosAcelerometro = {
        timestamp: time.getTime(),
        x: acceleration.x,
        y: acceleration.y,
        z: acceleration.z
    };

    listaDadosAcelerometro.push(dadosAcelerometro);      
}

function apresentarDadosAcelerometro(acceleration) {
    document.getElementById('eixo_x').value = (acceleration.x == null) ? '' : (Math.round(10*acceleration.x))/10;
    document.getElementById('eixo_y').value = (acceleration.y == null) ? '' : (Math.round(10*acceleration.y))/10;
    document.getElementById('eixo_z').value = (acceleration.z == null) ? '' : (Math.round(10*acceleration.z))/10;
}


function pararAcelerometro(){
    clearInterval(acelerometroId); 
}
var listaDadosGPS; //Lista com todos os dados de GPS da viagem
var gpsId; //Id do setInterval para o funcionando do GPS ao longo da viagem

var listaDadosAcelerometro; //Lista com todos os dados de Acelerômetro da viagem
var acelerometroId; //Id do setInterval para o funcionando do Acelerômetro ao longo da viagem

var num_onibus; //Número da linha do ônibus, digitada pelo usuário
var voto; //Voto dado pelo usuário sobre a qualidade da viagem

var busIntersectionList = []; //Lista com os possíveis ônibus em que o usuário está (Enviar e receber da Luana)
var gpsBusList = []; //Lista com as informações do GPS no intervalo de um recebimento e envio de dados para a Luana
var servicoId;


function iniciarCaptura() {
    listaDadosGPS = [];
    listaDadosAcelerometro = [];
    document.getElementById('btn-play').src = "img/play-off.svg";
    document.getElementById('btn-play').setAttribute('disabled', 'disabled');
    document.getElementById('btn-stop').src = "img/stop-on.svg";
    document.getElementById('btn-stop').setAttribute('onclick', 'pararCaptura()');
    setTimeout(receberNumOnibus, 1000);
}


function pararCaptura() {
    document.getElementById('btn-stop').src = "img/stop-off.svg";
    document.getElementById('btn-stop').setAttribute('disabled', 'disabled');
    iniciarVotacao();
    pararGPS();
    pararAcelerometro();
    receberVoto_pt1(); //enviarDados(voto)
}
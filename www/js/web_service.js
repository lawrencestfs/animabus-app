function enviarDados() { 
	/*
	/	Envia no final da viagem uma lista com dados GPS, uma lista com dados do acelerômetro e o voto
	/	do usuário sobre a qualidade da viagem.
	*/
	var ultimo = listaDadosGPS.length - 1;
	var url_webservice = "http://eic.cefet-rj.br:8104/animabusws/rest/track/store/";
	var data_webservice = {
		"imei" : device.uuid,
		"line_number": num_onibus,
		"start_time": listaDadosGPS[0].timestamp,
		"end_time" : listaDadosGPS[ultimo].timestamp,
		"vote" : voto,
		"gps" : listaDadosGPS,
		"accelerometer" : listaDadosAcelerometro
	};

	alert(JSON.stringify(data_webservice, null, 2));

	$.ajax({
		url : url_webservice,
		type : "POST",
		contentType : "application/json; charset=utf-8",
		mimeType : "application/json",
		dataType : "json",
		cache : false,
		data : JSON.stringify(data_webservice),
		success : function(data) {
			alert(JSON.stringify(data, null, 2));
		},
		failure : function(errMsg) {
			alert(JSON.stringify(errMsg, null, 2));
		}
	});
	
}

function executarServicoLuana(){
	var url_webservice = "http://10.1.29.48:8080/animabusws/rest/buses/" + num_onibus;
	var data_webservice = {
		"busIntersectionList" : busIntersectionList,
		"gpsBusList": gpsBusList
	};

	alert(JSON.stringify(data_webservice, null, 2));

	$.ajax({
		url : url_webservice,
		type : "GET",
		contentType : "application/json; charset=utf-8",
		mimeType : "application/json",
		dataType : "json",
		cache : false,
		data : JSON.stringify(data_webservice),
		success : function(data) {
			alert(JSON.stringify(data, null, 2));
			busIntersectionList = data;
			gpsBusList = [];
		},
		failure : function(errMsg) {
			alert(JSON.stringify(errMsg, null, 2));
		}
	});
}
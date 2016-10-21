function receberNumOnibus() {
    document.getElementById('prompt-background').className += " prompt-on"; 
}


function verificarNumero(){
    var numero = document.getElementById('n_onibus').value;
    if (numero){
        num_onibus = numero;
        document.getElementById('prompt-background').className += "prompt-background"; 
        iniciarGPS();
        iniciarAcelerometro(); 
        //servicoId = setInterval(executarServicoLuana, 15000);
    }
    else{  
        document.getElementById('mensagem-erro').style.color = "rgb(255, 0, 0)";
        document.getElementById('n_onibus').style.border = "1.8px solid rgb(255, 0, 0)";
    }
}


function definirMedia(voto_media){
    var inteiro = parseInt(voto_media);
    var decimal = voto_media - inteiro;

    for(var i = 1; i <= inteiro; i++){
        document.getElementById('estrela_media_' + i).src = 'img/media/estrela_voto_100%.svg';
    }      
    if(decimal > 0){
        document.getElementById('estrela_media_' + (++inteiro)).src = 'img/media/estrela_voto_' + parseInt(decimal*10) + '0%.svg';
    }
}


function receberVoto_pt1(){ 
    var voto_media = (parseInt((Math.random() * 50)))/10;
    definirMedia(voto_media);     
}


function receberVoto_pt2(vote){
    voto = vote;
    for (var i = 1; i <= 5; i++){
        if(i <= vote)
            document.getElementById('estrela_voto_' + i).src = 'img/avaliacao/estrela_voto.svg';
        else
            document.getElementById('estrela_voto_' + i).src = 'img/avaliacao/estrela_padrao.svg';       
    }
    document.getElementById('voto-btn').style.display = "inline"; 
}
function transition(transitionType, href){
	//Escolhe entre 4 tipos de transições possíveis: slide, flip, fade e drawer.
	//Todos esses 4 tipos funcionam no Android e iOs.

	switch(transitionType){
		case "slide":
					window.plugins.nativepagetransitions.slide({
			            "href" : href
			        });
			        break;
		case "flip":
					window.plugins.nativepagetransitions.flip({
			            "href" : href
			        });
			        break;
		case "fade":
					window.plugins.nativepagetransitions.fade({
			            "href" : href
			        });
			        break;
		case "drawer":
					window.plugins.nativepagetransitions.drawer({
			            "href" : href
			        });
			        break;
	}
}

function iniciarVotacao() {
	var x = document.getElementById('Voto');
	x.className += " Voto-Ativado";
}
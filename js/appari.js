/*
la routine carica una variabile testo leggendo un file js
con la seguente sintassi:
	testo="stringa"

	Stringa contiene elementi con la sintassi [primo elemento;secondo elemento] che diventano testi visualizzati alternativamente. All'avvio viene visualizzato testo1.js. 
	
*/
function elabora(titolo,alternative,testo) {

	testo_split=testo.split(/(\[.+?\])/);
	for (i=0; i<testo_split.length;i+=1) {
		if (testo_split[i].indexOf("[")==0) {
			t=testo_split[i]; // console.log(t);
			t=t.substr(1,t.length-2).split(";");
			t='<span class=alterna><span class="v0">$1</span><span class="v1">$2</span></span>'.replace("$1",t[0]).replace("$2",t[1]);
			testo_split[i]=t;
			testo=testo_split.join("");
		}
	}
	$("#titolo p").text(titolo);
	$("#alternative p").text(alternative);
	$("#testo p").html(testo); 
	
	$(".alterna").click(function() {$(this).children().toggle();});
}

// carica un js contenente un testo prova e lo sostituisce a testo


$(document).ready(function() {$("#vai").click(function() {
	var titolo="";
	var alternative="";
	var testo="";
	var nomeTesto=$("#input").val();
	$("body script").remove();
	var s=document.createElement("script");
	s.src="./js/"+nomeTesto+".js";
	document.body.append(s);
	});
});

/*
la routine carica una variabile testo leggendo un file js
con la seguente sintassi:
	testo="stringa"

	Stringa contiene elementi con la sintassi [primo elemento;secondo elemento] che diventano testi visualizzati alternativamente. All'avvio viene visualizzato testo1.js. 
	
*/
function elabora(testo) {
	var t;
	$("#body p").remove();
	$("body script").remove();
	testo_split=testo.split(/(\[.+?\])/);
	for (i=0; i<testo_split.length;i+=1) {
		if (testo_split[i].indexOf("[")==0) {
			t=testo_split[i]; // console.log(t);
			t=t.substr(1,t.length-2).split(";");
			t='<span class=alterna><span class="v0">$1</span><span class="v1">$2</span></span>'.replace("$1",t[0]).replace("$2",t[1]);
			testo_split[i]=t;
			testo=testo_split.join("");

			/* testo="<p>"+testo_split.join("\n")+"</p>"; */
			testo="<p>"+testo+"</p>";
			$testo=$(testo);
			$testo.attr("class","testo");
		}
	}
	$("#titolo p").remove();
	$("#titolo").append($("<p>"+titolo+"</p>"));
	$("#alternative p").remove();
	$("#alternative").append($("<p>"+alternative+"</p>"));
	$("#body").append($testo); 
	
	$(".alterna").click(function() {$(this).children().toggle();});
}

// carica un js contenente un testo prova e lo sostituisce a testo
function carica(nomeTesto) {
	var titolo="";
	var alternative="";
	var testo="";
	var s=document.createElement("script");
	s.src="./js/"+nomeTesto+".js";
	document.body.append(s);
	setTimeout(function(){
    elabora(testo);
	
}, 20);
}


$(document).ready(function() {$("#vai").click(function() {
	nomeTesto=$("#input").val();
	carica(nomeTesto);
	console.log(nomeTesto);
	});
	elabora(testo)});